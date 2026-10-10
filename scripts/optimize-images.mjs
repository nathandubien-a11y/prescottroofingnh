import sharp from "sharp";
import { readdirSync, mkdirSync, existsSync, statSync } from "fs";
import { join, basename, extname } from "path";

const PUBLIC = join(import.meta.dirname, "..", "public");
const OUT_DIR = join(PUBLIC, "img");
const MAX_WIDTH = 1600;
const MAX_BYTES = 120_000;

const PHOTO_FILES = readdirSync(PUBLIC)
  .filter((f) => /\.(jpg|jpeg|png)$/i.test(f))
  .filter((f) => !f.startsWith("og-"))
  .filter((f) => !f.startsWith("logo-"));

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

for (const file of PHOTO_FILES) {
  const src = join(PUBLIC, file);
  const name = basename(file, extname(file));
  const out = join(OUT_DIR, `${name}.webp`);
  const origBytes = statSync(src).size;
  const meta = await sharp(src).metadata();

  let width = Math.min(meta.width ?? MAX_WIDTH, MAX_WIDTH);
  let quality = 80;
  let buf = await sharp(src).resize(width).webp({ quality }).toBuffer();

  while (buf.length > MAX_BYTES && quality > 30) {
    quality -= 5;
    buf = await sharp(src).resize(width).webp({ quality }).toBuffer();
  }

  while (buf.length > MAX_BYTES && width > 640) {
    width = Math.round(width * 0.85);
    buf = await sharp(src).resize(width).webp({ quality }).toBuffer();
  }

  await sharp(buf).toFile(out);

  const pct = ((1 - buf.length / origBytes) * 100).toFixed(0);
  console.log(
    `${file} → ${name}.webp  ${(origBytes / 1024).toFixed(0)}KB → ${(buf.length / 1024).toFixed(0)}KB  (−${pct}%)  q=${quality}  ${width}w`
  );
}

console.log(`\nDone. ${PHOTO_FILES.length} images written to public/img/`);
