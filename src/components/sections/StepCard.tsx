import type { ReactNode } from "react";

type Step = {
  number: string;
  title: string;
  text: string;
  content: ReactNode;
};

export default function StepCard({ step }: { step: Step }) {
  return (
    <li className="step" data-reveal>
      <div className="step-visual" aria-hidden="true">
        {step.content}
      </div>
      <div className="step-title">
        <span aria-hidden="true">{step.number}</span>
        <h3>{step.title}</h3>
      </div>
      <p>{step.text}</p>
    </li>
  );
}
