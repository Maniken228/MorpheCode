import { Check, Play } from "lucide-react";
import ActionButton from "../ui/ActionButton";
import HeroIllustration from "./HeroIllustration";
import type { StartDemo } from "../../data/content";
export default function Hero({ onStart }: { onStart: StartDemo }) {
  return (
    <section aria-labelledby="hero-heading" className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="pill">
            <span />
            LESS NOISE. MORE YOU.
          </div>
          <h1 id="hero-heading">
            Find your
            <br />
            focus.
            <br />
            <span className="highlight">
              Feel the flow.
              <svg
                viewBox="0 0 540 24"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M3 18 Q210 -5 530 12" />
              </svg>
            </span>
          </h1>
          <p>
            Your best ideas deserve your full attention. Find your focus, build
            mindful habits, and make a little more room for life with FocusFlow.
          </p>
          <div className="hero-actions">
            <ActionButton onClick={() => onStart()} />
            <a href="#how-it-works" className="watch-link">
              <span>
                <Play size={13} fill="currentColor" />
              </span>
              How it works
            </a>
          </div>
          <div className="hero-note">
            <Check size={15} />
            No credit card. No pressure.
          </div>
          <div className="social-proof">
            <div className="avatar-stack">
              <span>O</span>
              <span>A</span>
              <span>S</span>
              <span>M</span>
            </div>
            <div>
              <div className="stars" aria-label="5 out of 5">
                ★★★★★
              </div>
              <p>Small steps. Meaningful change.</p>
            </div>
          </div>
        </div>
        <HeroIllustration />
      </div>
    </section>
  );
}
