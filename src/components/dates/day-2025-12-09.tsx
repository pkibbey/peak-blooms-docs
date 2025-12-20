import { DateCard } from "@/components/date-card";

export default function Day20251209() {
  return (
    <DateCard
      date="2025-12-09"
      title="Auth & Production Optimization"
      summary="Replaced magic link with Google auth, simplified checkout, optimized seed scripts, and added static rendering."
      tasks={[
        "Remove billing address from cart checkout",
        "Replace magic link authentication with google auth",
        "Fix seed script timeouts for production databases",
        "Fix login url for production environment",
        "Add static rendering for pages with static content",
      ]}
      skillsUsed={["Prisma", "TypeScript", "OAuth"]}
      lessonsLearned={[
        "Google auth simplifies user experience",
        "Static rendering improves performance",
        "Production optimization prevents issues",
      ]}
    />
  );
}
