import { useState } from "react";
import { plans } from "../../data/content";
import PricingCard from "./PricingCard";
import BillingSwitch from "./BillingSwitch";
import type { StartDemo } from "../../data/content";
export default function Pricing({ onStart }: { onStart: StartDemo }) {
  const [yearly, setYearly] = useState(false);
  return (
    <section
      aria-labelledby="pricing-heading"
      className="section pricing-section"
      id="pricing"
    >
      <div className="container">
        <div className="center-heading" data-reveal>
          <span className="eyebrow">03 / PRICING</span>
          <h2 id="pricing-heading">
            Big focus.
            <br />A small investment.
          </h2>
          <p>Find the right space for your productivity.</p>
          <BillingSwitch yearly={yearly} onChange={setYearly} />
        </div>
        <ul className="pricing-grid">
          {plans.map((plan) => (
            <li key={plan.name}>
              <PricingCard plan={plan} yearly={yearly} onStart={onStart} />
            </li>
          ))}
        </ul>
        <p className="pricing-footnote">
          No hidden surprises. Change your plan as your needs change.
        </p>
      </div>
    </section>
  );
}
