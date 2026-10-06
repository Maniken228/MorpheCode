export default function BillingSwitch({
  yearly,
  onChange,
}: {
  yearly: boolean;
  onChange: (yearly: boolean) => void;
}) {
  return (
    <div className="billing-switch" role="group" aria-label="Billing period">
      <button
        type="button"
        className={!yearly ? "active" : ""}
        aria-pressed={!yearly}
        onClick={() => onChange(false)}
      >
        Monthly
      </button>
      <button
        type="button"
        className={yearly ? "active" : ""}
        aria-pressed={yearly}
        onClick={() => onChange(true)}
      >
        Yearly <span>−20%</span>
      </button>
    </div>
  );
}
