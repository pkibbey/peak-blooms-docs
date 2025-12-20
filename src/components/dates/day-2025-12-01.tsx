import { DateCard } from "@/components/date-card";

export default function Day20251201() {
  return (
    <DateCard
      date="2025-12-01"
      title="Auth Migration & Code Cleanup"
      summary="Migrated from next-auth to better-auth, simplified admin layout, and removed dead code with knip."
      tasks={[
        "Update admin sidebar and simplify admin layout",
        "Add knip and remove all dead code",
        "Replace next-auth with better-auth",
      ]}
      skillsUsed={["better-auth", "Next.js", "TypeScript", "OAuth"]}
      lessonsLearned={[
        "Authentication library evaluation improves fit",
        "Phased migrations reduce risk",
        "Dead code removal improves maintainability",
      ]}
    />
  );
}
