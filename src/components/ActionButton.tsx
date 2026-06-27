import { ArrowUpRight } from "lucide-react";

interface ActionButtonProps {
  href: string;
  children: string;
  variant?: "primary" | "light";
}

export function ActionButton({ href, children, variant = "primary" }: ActionButtonProps) {
  return (
    <a className={`roll-button ${variant}`} href={href}>
      <span className="roll-text">
        <span>{children}</span>
        <span>{children}</span>
      </span>
      <span className="roll-icon" aria-hidden="true">
        <ArrowUpRight size={18} />
      </span>
    </a>
  );
}
