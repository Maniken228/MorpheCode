import { ArrowUpRight, Star, Zap, Leaf, Check } from "lucide-react";
import type { plans, StartDemo } from "../../data/content";
type Plan = (typeof plans)[number];
export default function PricingCard({
  plan,
  yearly,
  onStart,
}: {
  plan: Plan;
  yearly: boolean;
  onStart: StartDemo;
}) {
  return (
    <article
      data-reveal
      className={`plan ${plan.name === "Pro" ? "plan-featured" : ""}`}
    >
      {plan.name === "Pro" && (
        <span className="popular">
          FIND YOUR BEST RHYTHM <Star size={12} fill="currentColor" />
        </span>
      )}
      <span className="plan-tag">{plan.tag}</span>
      <h3>
        {plan.name}
        <span>
          {plan.name === "Pro" ? (
            <Zap size={24} />
          ) : plan.name === "Team" ? (
            <span>✳</span>
          ) : (
            <Leaf size={24} />
          )}
        </span>
      </h3>
      <p>{plan.text}</p>
      <div className="plan-price">
        <strong>
          <span>$</span>
          {yearly ? plan.annual : plan.price}
        </strong>
        <span>/ {plan.name === "Team" ? "person / mo" : "month"}</span>
      </div>
      <div className="billing-note">
        {plan.price === 0
          ? "Free, forever"
          : yearly
            ? `${(plan.annual * 12).toLocaleString("en-US", { style: "currency", currency: "USD" })} per year${plan.name === "Team" ? " per person" : ""}`
            : "Billed monthly"}
      </div>
      <button
        className={`button ${plan.name === "Pro" ? "button-lime" : "button-outline"}`}
        onClick={() => onStart(plan.name)}
      >
        {plan.name === "Free" ? "Start for free" : `Choose ${plan.name}`}
        <ArrowUpRight size={18} />
      </button>
      <ul>
        {plan.items.map((text) => (
          <li key={text}>
            <Check size={16} />
            {text}
          </li>
        ))}
      </ul>
    </article>
  );
}
