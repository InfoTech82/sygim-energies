import Section from "./Section";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Expertise locale et connaissance du terrain",
  "Flotte moderne et maintenance rigoureuse",
  "Réactivité et service client dédié",
  "Transparence tarifaire et respect des délais",
];

export default function WhyChooseUs() {
  return (
    <Section title="Pourquoi nous choisir ?" subtitle="Des atouts concrets pour vos opérations">
      <ul className="grid gap-3 md:grid-cols-2">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-3">
            <CheckCircle2 className="size-5 text-primary mt-0.5" />
            <span className="text-muted-foreground">{p}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}


