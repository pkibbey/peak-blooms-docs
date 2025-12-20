import { DateCard } from "@/components/date-card";

export default function Day20251216() {
  return (
    <DateCard
      date="2025-12-16"
      title="Server Actions & Performance Refactoring"
      summary="Migrated to server actions for all operations, added soft-delete and order snapshots, and moved user fetching to Nav."
      tasks={[
        "Move user fetching out of layout and into Nav component",
        "Refactor API calls to use server actions for performance improvements",
        "Add product soft-delete functionality",
        "Save order snapshots to preserve price history",
        "Refactor cart retreival to fix cart bug",
      ]}
      skillsUsed={["Next.js", "TypeScript", "Server Actions", "React"]}
      lessonsLearned={[
        "Server actions reduce latency and improve performance",
        "Soft-delete preserves data integrity",
        "Order snapshots maintain price history accuracy",
      ]}
    />
  );
}
