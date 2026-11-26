import Link from "next/link";
import { serviceAreaTowns } from "@/lib/siteConfig";

/**
 * Shown at the bottom of every blog post. Blog posts are the pages Google
 * crawls most, so linking from them to the service and town pages helps those
 * money pages get discovered, crawled and ranked.
 */

const services = [
  { label: "Roof Replacement", href: "/services/roof-replacement", match: /replac|new roof|shingle|metal|architectural|underlayment|install|cost|financ/i },
  { label: "Roof Repair", href: "/services/roof-repair", match: /repair|leak|flashing|chimney|vent/i },
  { label: "Storm Damage & Insurance Claims", href: "/services/storm-damage", match: /storm|wind|hail|insurance|claim|tree/i },
  { label: "Ice Dam Removal", href: "/services/ice-dam-removal", match: /ice dam|winter|snow|ice/i },
  { label: "Gutters", href: "/services/gutters", match: /gutter|downspout|fascia|soffit/i },
];

export function BlogServiceLinks({ title }: { title: string }) {
  // Put the services that match the post's topic first; keep the rest after.
  const ordered = [...services].sort(
    (a, b) => Number(b.match.test(title)) - Number(a.match.test(title)),
  );
  const towns = serviceAreaTowns.filter((t) => t.tier === "full");

  return (
    <aside className="mt-12 rounded-lg border border-brand-coppertint/40 bg-white p-6 md:p-8">
      <h2 className="text-xl font-extrabold text-brand-navy mb-4">Roofing Services From Prescott Roofing</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
        {ordered.map((s) => (
          <li key={s.href}>
            <Link href={s.href} className="text-brand-copper font-semibold hover:underline">
              {s.label}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/free-inspection" className="text-brand-copper font-semibold hover:underline">
            Free Roof Inspection
          </Link>
        </li>
      </ul>
      <p className="text-sm text-brand-charcoal/80 leading-relaxed">
        Serving homeowners in{" "}
        {towns.map((t, i) => (
          <span key={t.slug}>
            <Link href={`/roofing/${t.slug}`} className="font-semibold text-brand-navy hover:text-brand-copper hover:underline">
              {t.name}
            </Link>
            {i < towns.length - 1 ? ", " : ""}
          </span>
        ))}{" "}
        and across Southern New Hampshire and Northern Massachusetts.
      </p>
    </aside>
  );
}
