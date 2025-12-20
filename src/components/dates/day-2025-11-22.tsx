import { DateCard } from "@/components/date-card";

export default function Day20251122() {
  return (
    <DateCard
      date="2025-11-22"
      title="Project Setup & Design System"
      summary="Initialized Next.js with TypeScript, established design system foundation, and created reusable UI components."
      tasks={[
        "Initialize Next.js project with TypeScript",
        "Set up Tailwind CSS",
        "Add ShadCN to streamline workflow",
        "Create functional requirements and style guide",
        "Add Navigation component",
        "Add centralized icon system",
      ]}
      skillsUsed={[
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "React",
        "Radix UI",
      ]}
      lessonsLearned={[
        "Foundation reduces rework",
        "Component composition enables flexibility",
        "Design systems maintain consistency",
      ]}
    />
  );
}
