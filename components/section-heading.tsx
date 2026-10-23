import type { ReactNode } from "react";
import Reveal from "@/components/reveal";

export default function SectionHeading({ number, eyebrow, title, description }: { number: string; eyebrow: string; title: ReactNode; description?: string }) {
  return <Reveal className="section-heading"><div className="eyebrow"><span>{number}</span><i />{eyebrow}</div><h2>{title}</h2>{description && <p>{description}</p>}</Reveal>;
}
