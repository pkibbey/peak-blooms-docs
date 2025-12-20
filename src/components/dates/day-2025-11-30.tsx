import { DateCard } from "@/components/date-card";

export default function Day20251130() {
  return (
    <DateCard
      date="2025-11-30"
      title="Typography, Performance & Site Pages"
      summary="Created typography utilities, added JWT auth, implemented database indexes, color properties, and generated company/legal pages."
      tasks={[
        "Use JWT for auth to prevent database hits",
        "Add type safety to queries",
        "Add dynamic hero components",
        "Redirect unathenticated users",
        "Add product color properties with color picker UI for admins",
        "Introduce cart empty state",
        "Create typography utility classes in tailwind",
        "Add database indexes to improve performance",
        "Generate company, support, legal pages, and sitemap",
      ]}
      skillsUsed={["Tailwind CSS", "TypeScript", "JWT", "Optimization"]}
      lessonsLearned={[
        "Typography systems maintain consistency",
        "Database indexes significantly improve performance",
        "Legal pages build trust",
      ]}
    />
  );
}
