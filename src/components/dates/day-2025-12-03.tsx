import { DateCard } from "@/components/date-card";

export default function Day20251203() {
  return (
    <DateCard
      date="2025-12-03"
      title="Admin Enhancements & Data Management"
      summary="Added shop search, pagination and sortable tables, product-collection relationships, user profile editing, and mock images."
      tasks={[
        "Add search to shop",
        "Update colors to use a color ID as opposed to a HEX value",
        "Add pagination to admin table views",
        "Add sortable columns to all tables",
        "Allow products to be in many collections",
        "Add UI to allow users to change edit their profile details",
        "Use pixabay to add mock product images",
        "Replace NextJS v15 with v16 to improve build speed",
      ]}
      skillsUsed={["React", "Prisma", "Admin UI", "Search"]}
      lessonsLearned={[
        "Image fallbacks improve robustness",
        "Sortable tables enable data exploration",
        "Many-to-many relationships provide flexibility",
      ]}
    />
  );
}
