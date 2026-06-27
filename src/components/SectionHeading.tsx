import { SectionLabel } from "./SectionLabel";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ label, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`section-heading ${align === "center" ? "mx-auto text-center" : ""}`}>
      <SectionLabel>{label}</SectionLabel>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
