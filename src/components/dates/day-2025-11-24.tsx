import { AlertCircle, Flame, Lock } from "tabler-icons-react";
import { DateCard } from "@/components/date-card";

export default function Day20251124() {
  return (
    <DateCard
      date="2025-11-24"
      title="Admin, Auth & Product Variants"
      summary="Added admin dashboard with user management, implemented product variants, route authentication, and refined data model."
      tasks={[
        {
          name: "Introduce product variants",
          lesson: {
            icon: <Flame size={16} />,
            description:
              "Variants provide product flexibility. Supporting multiple variants (size, color, etc.) enables richer product catalogs without duplicating base product records.",
          },
        },
        { name: "Add Admin dashboard with user management" },
        {
          name: "Add route authentication",
          lesson: {
            icon: <Lock size={16} />,
            description:
              "Authentication secures admin access. Restricting admin routes to authenticated users protects sensitive operations and maintains data integrity.",
          },
        },
        { name: "Add account signup" },
        { name: "Refactor user status handling" },
        {
          name: "Remove product stock tracking from the database",
          lesson: {
            icon: <AlertCircle size={16} />,
            description:
              "Removing complexity improves usability. Stock tracking added complexity without proportional benefit, so removing it simplified the data model and UI.",
          },
        },
        { name: "Refactor admin to use server rendering" },
        { name: "Add product filtering in the shop" },
      ]}
      skillsUsed={["Prisma", "TypeScript", "Authentication", "Next.js"]}
    />
  );
}
