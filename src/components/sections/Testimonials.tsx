import { quotes } from "../../data/content";
import TestimonialCard from "./TestimonialCard";
export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="section testimonials-section"
    >
      <div className="container">
        <div className="section-heading" data-reveal>
          <div>
            <span className="eyebrow">04 / PEOPLE IN THE FLOW</span>
            <h2 id="testimonials-heading">
              Real routines.
              <br />
              <span className="muted">Real feelings.</span>
            </h2>
          </div>
          <div className="testimonial-note">
            <span className="stars">★★★★★</span>
            <p>
              Focus looks different for everyone.
              <br />
              That’s the beauty of it.
            </p>
          </div>
        </div>
        <ul className="testimonials-grid">
          {quotes.map((quote) => (
            <li key={quote.name}>
              <TestimonialCard testimonial={quote} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
