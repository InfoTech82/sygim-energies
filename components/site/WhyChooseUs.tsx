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
      <ul className="grid gap-3 sm:gap-4 md:grid-cols-2">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2 sm:gap-3">
            <CheckCircle2 className="size-4 sm:size-5 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-sm sm:text-base text-muted-foreground">{p}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}


