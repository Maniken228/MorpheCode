import StepCard from "./StepCard";
import { Plus, Check, Timer, Play, ChartNoAxesCombined } from "lucide-react";
export default function HowItWorks() {
  return (
    <section
      aria-labelledby="howitworks-heading"
      className="how-section section"
      id="how-it-works"
    >
      <div className="container">
        <div className="section-heading" data-reveal>
          <div>
            <span className="eyebrow">02 / HOW IT WORKS</span>
            <h2 id="howitworks-heading">
              Getting into your flow
              <br />
              is simpler than you think.
            </h2>
          </div>
          <div className="how-doodle" aria-hidden="true">
            ↝
          </div>
        </div>
        <ol className="steps-grid">
          {[
            {
              number: "01",
              title: "Pick your one thing",
              text: "Add your tasks and choose the one thing that deserves your attention right now.",
              content: (
                <div className="step-task">
                  <span className="feature-icon lime">
                    <Plus size={20} />
                  </span>
                  <div>
                    <strong>My next small step</strong>
                    <span>Finish that creative idea</span>
                  </div>
                  <Check size={18} />
                </div>
              ),
            },
            {
              number: "02",
              title: "Make a little space",
              text: "Start your timer, find your favorite atmosphere, and ease into deep work.",
              content: (
                <div className="step-timer">
                  <Timer size={24} />
                  <strong>25:00</strong>
                  <span>
                    <Play size={15} fill="currentColor" />
                  </span>
                </div>
              ),
            },
            {
              number: "03",
              title: "See how far you’ve come",
              text: "Finish a session, take a breath, and celebrate what you have already accomplished.",
              content: (
                <div className="step-progress">
                  <span className="feature-icon lime">
                    <ChartNoAxesCombined size={23} />
                  </span>
                  <div>
                    <strong>Another little win</strong>
                    <span>Focus session complete ✓</span>
                  </div>
                </div>
              ),
            },
          ].map((step) => (
            <StepCard key={step.number} step={step} />
          ))}
        </ol>
      </div>
    </section>
  );
}
