import Link from "next/link";

export type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
};

export function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-lg border border-brand-coppertint/20 p-6 hover:shadow-lg hover:border-brand-copper/40 transition-all"
    >
      <div className="w-12 h-12 rounded-lg bg-brand-navy/5 flex items-center justify-center text-brand-copper mb-4 group-hover:bg-brand-copper/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-copper transition-colors">
        {title}
      </h3>
      <p className="text-sm text-brand-charcoal/70 leading-relaxed mb-3">{description}</p>
      <span className="text-sm font-semibold text-brand-copper group-hover:underline">
        Learn more &rarr;
      </span>
    </Link>
  );
}
