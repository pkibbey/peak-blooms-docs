import { DateCard } from "@/components/date-card";

export default function Day20251127() {
  return (
    <DateCard
      date="2025-11-27"
      title="Code Quality & Account Features"
      summary="Added linting and formatting, extracted reusable components, reorganized admin, and built account management pages."
      tasks={[
        "Add biome.js for linting and code formatting",
        "Convert admin tab layout to page views",
        "Add shared card layout components",
        "Refactor large components into smaller files",
        "Create order history pages",
      ]}
      skillsUsed={["React", "TypeScript", "Refactoring", "Code Quality"]}
      lessonsLearned={[
        "Component extraction reduces duplication",
        "Account features improve user retention",
        "Code formatting maintains consistency",
      ]}
    />
  );
}
