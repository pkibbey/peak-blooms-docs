import { Database, Flame, InfoCircle } from "tabler-icons-react";
import { DateCard } from "@/components/date-card";

export default function Day20251123() {
  return (
    <DateCard
      date="2025-11-23"
      title="Database Schema & Content Features"
      summary="Set up Prisma database with product, collection, and inspiration models, created seed scripts, and built dynamic content pages."
      tasks={[
        { name: "Add Hero component" },
        { name: "Add Featured Categories component" },
        { name: "Add Featured Products component" },
        { name: "Generated placeholder images using AI for features" },
        { name: "Add Footer component" },
        { name: "Created Inspiration page" },
        { name: "Added Metadata for site branding" },
        { name: "Tweaked style to align with brand guidelines" },
        {
          name: "Setup Prisma database",
          lesson: {
            icon: <Database size={16} />,
            description:
              "Database-driven content enables scalability. A well-structured database schema allows the application to grow without major refactoring.",
          },
        },
        {
          name: "Create database seed script",
          lesson: {
            icon: <Flame size={16} />,
            description:
              "Seed scripts critical for development. Automated seed scripts accelerate onboarding and provide consistent test data for developers.",
          },
        },
        { name: "Created brand logo for header and footer" },
        {
          name: "Create database models for products, collections, and inspirations",
          lesson: {
            icon: <InfoCircle size={16} />,
            description:
              "Models guide feature development. Clear, well-designed data models serve as a blueprint for how features should be built.",
          },
        },
        { name: "Add product shop page" },
      ]}
      skillsUsed={["Prisma", "PostgreSQL", "Next.js", "TypeScript", "React"]}
      screenshot="/screenshots/day-2.png"
    />
  );
}
