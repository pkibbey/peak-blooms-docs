import { DateCard } from "@/components/date-card";

export default function Day20251204() {
  return (
    <DateCard
      date="2025-12-04"
      title="UI Components & Featured Collections"
      summary="Created reusable shipping banner and product card components, added featured collections, and fixed admin bugs."
      tasks={[
        "Add featured properties to collections pages",
        "Fix admin logout bug when editing own profile",
        "Add shipping banner component",
        "Create product card component",
      ]}
      skillsUsed={["React", "Tailwind CSS", "Components"]}
      lessonsLearned={[
        "Shipping messaging builds customer confidence",
        "Featured content highlights key offerings",
        "Reusable components reduce code duplication",
      ]}
    />
  );
}
