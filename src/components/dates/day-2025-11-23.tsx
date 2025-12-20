import { DateCard } from "@/components/date-card";

export default function Day20251123() {
  return (
    <DateCard
      date="2025-11-23"
      title="Database Schema & Content Features"
      summary="Set up Prisma database with product, collection, and inspiration models, created seed scripts, and built dynamic content pages."
      tasks={[
        "Add Hero component",
        "Add Featured Categories component",
        "Add Featured Products component ",
        "Generated placeholder images using AI for features",
        "Add Footer component",
        "Created Inspiration page",
        "Added Metadata for site branding",
        "Tweaked style to align with brand guidelines",
        "Setup Prisma database",
        "Create database seed script",
        "Created brand logo for header and footer",
        "Create database models for products, collections, and inspirations",
        "Add product shop page",
      ]}
      skillsUsed={["Prisma", "PostgreSQL", "Next.js", "TypeScript", "React"]}
      lessonsLearned={[
        "Database-driven content enables scalability",
        "Seed scripts critical for development",
        "Models guide feature development",
      ]}
    />
  );
}
