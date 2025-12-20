import { DateCard } from "@/components/date-card";

export default function Day20251208() {
  return (
    <DateCard
      date="2025-12-08"
      title="Metrics System & Admin Management"
      summary="Implemented database query metrics, replaced dynamic hero with static components, and added admin product management."
      tasks={[
        "Create database query metrics system",
        "Replace dynamic Hero with static components",
        "Allow admins to manage collection and inspiration products",
        "Add market price support for products",
      ]}
      skillsUsed={["Prisma", "Next.js", "Metrics", "TypeScript"]}
      lessonsLearned={[
        "Metrics reveal performance bottlenecks",
        "Collection management increases flexibility",
        "Static components improve performance",
      ]}
    />
  );
}
