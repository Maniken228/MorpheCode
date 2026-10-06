import { features } from "../../data/content";
import FeatureCard from "./FeatureCard";
export default function Features() {
  return (
    <section
      aria-labelledby="features-heading"
      className="section features-section"
      id="features"
    >
      <div className="container">
        <div className="section-heading" data-reveal>
          <div>
            <span className="eyebrow">01 / FEATURES</span>
            <h2 id="features-heading">
              Everything you need.
              <br />
              <span className="muted">Nothing you don’t.</span>
            </h2>
          </div>
          <p>
            Simple tools that clear your mind
            <br className="desktop-break" /> for the things that really matter.
          </p>
        </div>
        <ul className="features-grid">
          {features.map((feature) => (
            <li key={feature.title}>
              <FeatureCard feature={feature} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
