import type { quotes } from "../../data/content";
type Testimonial = (typeof quotes)[number];
export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <figure className="testimonial" data-reveal>
      <span className="quote-mark">“</span>
      <blockquote>{testimonial.quote}</blockquote>
      <figcaption>
        <span className={`person-avatar ${testimonial.color}`}>
          {testimonial.initials}
        </span>
        <div>
          <strong>{testimonial.name}</strong>
          <span>{testimonial.role}</span>
        </div>
        <span className="quote-star">✳</span>
      </figcaption>
    </figure>
  );
}
