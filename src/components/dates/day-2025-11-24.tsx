import { DateCard } from "@/components/date-card";

export default function Day20251124() {
  return (
    <DateCard
      date="2025-11-24"
      title="Admin, Auth & Product Variants"
      summary="Added admin dashboard with user management, implemented product variants, route authentication, and refined data model."
      tasks={[
        "Introduce product variants",
        "Add Admin dashboard with user management",
        "Add route authentication",
        "Add account signup",
        "Refactor user status handling",
        "Remove product stock tracking from the database",
        "Refactor admin to use server rendering",
        "Add product filtering in the shop",
      ]}
      skillsUsed={["Prisma", "TypeScript", "Authentication", "Next.js"]}
      lessonsLearned={[
        "Removing complexity improves usability",
        "Authentication secures admin access",
        "Variants provide product flexibility",
      ]}
    />
  );
}
