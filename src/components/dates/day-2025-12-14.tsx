import { DateCard } from "@/components/date-card";

export default function Day20251214() {
  return (
    <DateCard
      date="2025-12-14"
      title="Search & Data Model Refinement"
      summary="Implemented site search in navigation, moved phone to Address model, and added price visibility controls."
      tasks={[
        "Added site search to navigation header",
        "Hide prices for unapproved users",
        "Move phone from user model to address model",
      ]}
      skillsUsed={["Prisma", "TypeScript", "Search", "React"]}
      lessonsLearned={[
        "Site search improves product discovery",
        "Per-address phone is more accurate",
        "Hidden prices incentivize user signup",
      ]}
    />
  );
}
