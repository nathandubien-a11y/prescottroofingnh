import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const OUT_DIR = join(process.cwd(), "out");

async function findHtmlFiles(dir, files = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith("_")) {
      await findHtmlFiles(full, files);
    } else if (entry.name.endsWith(".html") && entry.name !== "404.html" && entry.name !== "_not-found.html") {
      files.push(full);
    }
  }
  return files;
}

function decodeEntities(str) {
  return str.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#x27;/g, "'").replace(/&apos;/g, "'");
}

function extractMeta(html) {
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]+)"/i)
    || html.match(/<meta\s+content="([^"]+)"\s+name="description"/i);
  const noindex = /<meta\s+name="robots"\s+content="[^"]*noindex/i.test(html);
  return {
    title: titleMatch ? decodeEntities(titleMatch[1].trim()) : "",
    description: descMatch ? decodeEntities(descMatch[1].trim()) : "",
    noindex,
  };
}

async function main() {
  let errors = 0;

  const files = await findHtmlFiles(OUT_DIR);
  const pages = [];

  for (const file of files) {
    const html = await readFile(file, "utf-8");
    const route = "/" + file.slice(OUT_DIR.length + 1).replace(/\\/g, "/").replace(/\.html$/, "").replace(/\/index$/, "");
    const meta = extractMeta(html);
    if (!meta.noindex) {
      pages.push({ route, ...meta });
    }
  }

  // Check duplicate titles
  const titles = new Map();
  for (const p of pages) {
    if (!p.title) continue;
    if (titles.has(p.title)) {
      console.error(`FAIL: Duplicate title "${p.title}" on ${titles.get(p.title)} and ${p.route}`);
      errors++;
    } else {
      titles.set(p.title, p.route);
    }
  }

  // Check duplicate descriptions
  const descs = new Map();
  for (const p of pages) {
    if (!p.description) continue;
    if (descs.has(p.description)) {
      console.error(`FAIL: Duplicate description on ${descs.get(p.description)} and ${p.route}`);
      errors++;
    } else {
      descs.set(p.description, p.route);
    }
  }

  // Check title length
  for (const p of pages) {
    if (p.title && p.title.length > 60) {
      console.error(`FAIL: Title too long (${p.title.length} chars) on ${p.route}: "${p.title}"`);
      errors++;
    }
  }

  // Check description length
  for (const p of pages) {
    if (p.description && p.description.length > 160) {
      console.error(`FAIL: Description too long (${p.description.length} chars) on ${p.route}`);
      errors++;
    }
  }

  if (errors === 0) {
    console.log(`PASS: ${pages.length} indexable pages checked — no duplicate titles/descriptions, all within length limits.`);
  } else {
    console.error(`\n${errors} error(s) found.`);
    process.exit(1);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
