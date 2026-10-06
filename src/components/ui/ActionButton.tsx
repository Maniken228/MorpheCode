import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
export default function ActionButton({
  children = "Get started for free",
  onClick,
  className = "",
}: {
  children?: ReactNode;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={`button button-lime ${className}`}
      onClick={onClick}
    >
      {children}
      <ArrowUpRight size={19} />
    </button>
  );
}
