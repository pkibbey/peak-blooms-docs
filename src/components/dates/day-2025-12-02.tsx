import { DateCard } from "@/components/date-card";

export default function Day20251202() {
  return (
    <DateCard
      date="2025-12-02"
      title="Pagination, CSV & Data Management"
      summary="Implemented pagination and filtering, created CSV seeding with upsert logic, and improved shop and inspiration pages."
      tasks={[
        "Change seed script to upsert instead of delete & create",
        "Create script to parse a CSV file and seed all products",
        "Add pagination to shop view",
        "Improve inspiration page design",
        "Re-add shop filters",
        "Prevent filter navigation from causing page scroll",
      ]}
      skillsUsed={["CSV", "Prisma", "Next.js", "Node.js"]}
      lessonsLearned={[
        "Pagination improves performance and UX",
        "Upsert logic handles data updates safely",
        "CSV enables bulk product imports",
      ]}
    />
  );
}
