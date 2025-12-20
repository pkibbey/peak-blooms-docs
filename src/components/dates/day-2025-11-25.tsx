import { DateCard } from "@/components/date-card";

export default function Day20251125() {
  return (
    <DateCard
      date="2025-11-25"
      title="Server Components & UI Refactoring"
      summary="Refactored shop and auth to use server-side rendering, added cart page, managed content, and unified UI components."
      tasks={[
        "Refactor shop to use server rendering",
        "Refactor auth for server-side logic",
        "Add shopping cart page",
        "Add content management for admin users",
        "Add more AI generated images",
        "Refactor for consistent terminology for all variables",
        "Replace all basic html elements with ShadCN components",
      ]}
      skillsUsed={["Next.js", "Server Components", "Radix UI", "TypeScript"]}
      lessonsLearned={[
        "Server components improve performance",
        "Consistent terminology reduces confusion",
        "UI components standardize interfaces",
      ]}
    />
  );
}
