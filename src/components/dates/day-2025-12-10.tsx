import { DateCard } from "@/components/date-card";

export default function Day20251210() {
  return (
    <DateCard
      date="2025-12-10"
      title="Performance & Type System Updates"
      summary="Optimized performance by disabling prefetch and removing logs, improved UI with toast notifications, and used generated types."
      tasks={[
        "Restrict metrics to development environment",
        "User rich colours in toast notifications",
        "Remove static params from dynamic pages",
        "Disable link prefetching for all instances",
        "Replace static defined types with prisma generated types",
        "Remove dead code using knip",
        "Add phone number support to user profiles",
        "Trash the product variants concept for being too complicated",
      ]}
      skillsUsed={["Next.js", "TypeScript", "Optimization"]}
      lessonsLearned={[
        "Disabling prefetch prevents unnecessary requests",
        "Generated types stay in sync with schema",
        "Rich UI feedback improves experience",
      ]}
    />
  );
}
