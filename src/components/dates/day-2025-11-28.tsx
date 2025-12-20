import { DateCard } from "@/components/date-card";

export default function Day20251128() {
  return (
    <DateCard
      date="2025-11-28"
      title="Media Management & Admin Features"
      summary="Implemented image uploads with validation, added bulk product filters, quantity selectors, and standardized page headers."
      tasks={[
        "Add boxlot filter for bulk products",
        "Introduce Image upload to admin forms",
        "Add consisent page headers",
        "Image validation",
        "Add quantity selector to inspirations",
      ]}
      skillsUsed={["React", "File Handling", "Validation", "TypeScript"]}
      lessonsLearned={[
        "Image validation prevents errors",
        "Consistent headers improve navigation",
        "Required fields ensure data integrity",
      ]}
    />
  );
}
