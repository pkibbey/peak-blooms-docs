import { DateCard } from "@/components/date-card";

export default function Day20251205() {
  return (
    <DateCard
      date="2025-12-05"
      title="Cart Features & Order Management"
      summary="Added quantity selectors, cart reset, reorder from history, and local database setup for development."
      tasks={[
        "Add local database to improve development speed",
        "Add quantity selector to product card",
        "Add ability to reset cart",
        "Allow users to Reorder from previous orders",
      ]}
      skillsUsed={["React", "TypeScript", "Prisma", "Validation"]}
      lessonsLearned={[
        "Quantity selectors improve shopping experience",
        "Reorder from history increases convenience",
        "Local databases accelerate development",
      ]}
    />
  );
}
