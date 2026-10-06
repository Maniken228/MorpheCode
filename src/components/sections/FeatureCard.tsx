import type { features } from "../../data/content";
type Feature = (typeof features)[number];
export default function FeatureCard({ feature }: { feature: Feature }) {
  const { icon: Icon, title, text, tone } = feature;
  return (
    <article className="feature" data-reveal>
      <span className={`feature-icon ${tone}`}>
        <Icon size={24} strokeWidth={1.6} />
      </span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
