import { ArrowUpRight } from "lucide-react";
import ActionButton from "../ui/ActionButton";
import type { StartDemo } from "../../data/content";
export default function CallToAction({ onStart }: { onStart: StartDemo }) {
  return (
    <section aria-labelledby="calltoaction-heading" className="cta-section">
      <div className="container cta-inner" data-reveal>
        <div>
          <span className="eyebrow">YOUR NEXT SMALL STEP</span>
          <h2 id="calltoaction-heading">
            Less “I should.”
            <br />
            More <span>“I did.”</span>
          </h2>
          <p>Start with one thing. Start with one calmer day.</p>
          <ActionButton onClick={() => onStart()}>Find my focus</ActionButton>
        </div>
        <div className="cta-art" aria-hidden="true">
          <span>✳</span>
          <div>
            one thing
            <br />
            <em>at a time.</em>
            <ArrowUpRight size={45} strokeWidth={1.2} />
          </div>
        </div>
      </div>
    </section>
  );
}
