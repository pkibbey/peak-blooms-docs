import { DateCard } from "@/components/date-card";

export default function Day20251212() {
  return (
    <DateCard
      date="2025-12-12"
      title="Terminology & Route Consolidation"
      summary="Unified shipping and delivery terminology across the application with consistent routing."
      tasks={["Replace all shipping concepts with delivery terminology"]}
      skillsUsed={["Next.js", "TypeScript", "Routing"]}
      lessonsLearned={[
        "Consistent terminology prevents confusion",
        "Route consolidation simplifies navigation",
        "Refactoring maintains backward compatibility",
      ]}
    />
  );
}
