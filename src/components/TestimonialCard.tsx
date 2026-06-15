export type Testimonial = {
  name: string;
  town: string;
  rating: number;
  text: string;
};

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white rounded-lg border border-brand-coppertint/20 p-6 flex flex-col">
      <div className="flex items-center gap-0.5 mb-3">
        {Array.from({ length: 5 }, (_, i) => (
          <svg
            key={i}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill={i < testimonial.rating ? "#C45A28" : "#e5e7eb"}
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <blockquote className="flex-1 text-sm text-brand-charcoal/80 leading-relaxed italic mb-4">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>
      <div>
        <p className="text-sm font-semibold text-brand-navy">{testimonial.name}</p>
        <p className="text-xs text-brand-charcoal/60">{testimonial.town}, NH</p>
      </div>
    </div>
  );
}
