import { CheckCircle, Database, GitBranch, Zap } from "lucide-react";
import { v4 as uuid } from "uuid";
import type { Task } from "./dates/task";

export interface DayMetadata {
  id: string;
  date: string;
  title: string;
  screenshot: string;
  tasks?: Task[];
  impact?: string;
  theme?:
    | "foundation"
    | "core-features"
    | "data-architecture"
    | "performance-quality";
}

export const daysMetadata: DayMetadata[] = [
  {
    id: "365c237a-102b-4f4f-a7c2-c18f450a9bb7",
    date: "2025-11-22",
    title: "Client Interview",
    screenshot: "/screenshots/2025-11-22.png",
    theme: "foundation",
    tasks: [
      {
        text: "Gathered client requirements and aligned on priorities to reduce rework.",
      },
    ],
  },
  {
    id: "a7c9c2df-5f34-4b9c-9f12-3b6d2f9b8a1e",
    date: "2025-11-22",
    title: "Project Setup",
    screenshot: "/screenshots/2025-11-22.png",
    theme: "foundation",
    tasks: [
      {
        text: "Scaffolded a Next.js+TypeScript app and created a style guide to speed development and ensure consistency.",
      },
    ],
  },
  {
    id: "d72ee031-d2fa-42e5-8bbb-8dc6afc077fd",
    date: "2025-11-23",
    title: "Database Schema",
    screenshot: "/screenshots/2025-11-23.png",
    theme: "data-architecture",
    tasks: [
      {
        text: "Defined a Prisma schema and added database models to ensure type-safe data access.",
      },
    ],
  },
  {
    id: "c3b8f1a0-8f9a-4d12-9a7a-1f2e6a5b4c8d",
    date: "2025-11-23",
    title: "Design System",
    screenshot: "/screenshots/2025-11-23.png",
    theme: "foundation",
    tasks: [
      {
        text: "Scaffolded base UI components and a style guide to ensure consistent UI and reduce rework.",
      },
    ],
  },
  {
    id: "0722fd54-cc08-4d53-9c2c-eb8a0b196c6d",
    date: "2025-11-24",
    title: "Authentication",
    screenshot: "/screenshots/2025-11-24.png",
    theme: "foundation",
    tasks: [
      {
        text: "Setup an OAuth JWT solution to streamline the sign-in process.",
      },
    ],
  },
  {
    id: "9e3ec5bd-c856-4c79-835c-0603116adb46",
    date: "2025-11-25",
    title: "Shopping Cart",
    screenshot: "/screenshots/2025-11-25.png",
    theme: "core-features",
    tasks: [
      {
        text: "Implemented the shopping cart flow, added SSR pages, and built basic admin content management to validate purchases.",
      },
    ],
  },
  {
    id: uuid(),
    date: "2025-11-25",
    title: "E-Commerce Store",
    screenshot: "/screenshots/2025-11-25.png",
    theme: "core-features",
    tasks: [
      {
        text: "Provided an accessible store front that allowed users to search and browse products to add to a shopping cart.",
      },
    ],
  },
  {
    id: "4adfcfca-649f-46fa-ad7a-312ce8329b1a",
    date: "2025-11-27",
    title: "Order History",
    screenshot: "/screenshots/2025-11-27.png",
    theme: "core-features",
    tasks: [
      {
        text: "Added order-history pages and refactored large files into reusable components to improve UX and maintainability.",
      },
    ],
  },
  {
    id: "b9189ab7-93ee-4d1c-90e0-32f0b4dcb39e",
    date: "2025-11-28",
    title: "Image Upload",
    screenshot: "/screenshots/2025-11-28.png",
    theme: "core-features",
    tasks: [
      {
        text: "Added image-upload validation and handling to reduce bad data and improve admin UX.",
      },
    ],
  },
  {
    id: "e4d1f2a3-7c4b-4b55-8a1f-2be4d5f6c7a8",
    date: "2025-11-28",
    title: "Consistent Product UI",
    screenshot: "/screenshots/2025-11-28.png",
    theme: "core-features",
    tasks: [
      {
        text: "Implemented product filters and quantity selectors to streamline admin workflows and improve product discovery.",
      },
    ],
  },
  {
    id: "59575590-018b-4150-9de6-a6b160532bf4",
    date: "2025-11-29",
    title: "Form Validation",
    screenshot: "/screenshots/2025-11-29.png",
    theme: "core-features",
    tasks: [
      {
        text: "Conducted client review and added Zod form validation to align expectations and reduce runtime errors.",
      },
    ],
  },
  {
    id: "496d2294-ae28-44b2-b3f3-d5fc670b276c",
    date: "2025-11-30",
    title: "DB Indexing",
    screenshot: "/screenshots/2025-11-30.png",
    theme: "performance-quality",
    tasks: [
      {
        text: "Added targeted DB indexes to improve query performance and reduce load on critical paths.",
      },
    ],
  },
  {
    id: "b2a4c9d3-6e7f-4a1b-9c2d-0f1e2d3c4b5a",
    date: "2025-11-30",
    title: "Auth Migration",
    screenshot: "/screenshots/2025-11-30.png",
    theme: "performance-quality",
    tasks: [
      {
        text: "Migrated to JWT-based authentication to simplify scaling and reduce server-side session overhead.",
      },
    ],
  },
  {
    id: "c9f8e7d6-5b4a-4f3e-9d1c-2a3b4c5d6e7f",
    date: "2025-11-30",
    title: "Typography",
    screenshot: "/screenshots/2025-11-30.png",
    theme: "foundation",
    tasks: [
      {
        text: "Defined typography utilities and optimized font loading to reduce layout shift and improve rendering.",
      },
    ],
  },
  {
    id: "dc6551f7-3b74-43b1-a74d-bd7ce1a87e17",
    date: "2025-12-02",
    title: "Data Import",
    screenshot: "/screenshots/2025-12-02.png",
    theme: "data-architecture",
    tasks: [
      {
        text: "Added CSV seed scripts to automatically populate the database with real data.",
      },
    ],
  },
  {
    id: "4619aa9f-4565-496e-8100-e70f1a2c2f80",
    date: "2025-12-05",
    title: "Local docker database",
    screenshot: "/screenshots/2025-12-05.png",
    theme: "performance-quality",
    tasks: [
      {
        text: "Switched to a local development database to reduce latency and speed iteration, catching environment-specific issues earlier.",
      },
    ],
  },
  {
    id: "d348367f-7398-4380-8776-44fbe34fcc97",
    date: "2025-12-06",
    title: "Accessibile UI Components",
    screenshot: "/screenshots/2025-12-06.png",
    theme: "foundation",
    tasks: [
      {
        text: "Built primitive components with BaseUI to create consistent and accessible UI.",
      },
    ],
  },
  {
    id: "2e9bd315-d55a-48be-8b36-e5416332de6d",
    date: "2025-12-08",
    title: "Metrics",
    screenshot: "/screenshots/2025-12-08.png",
    theme: "data-architecture",
    tasks: [
      {
        text: "Implemented metrics to identify bottlenecks and surface performance issues for targeted optimizations.",
      },
    ],
  },
  {
    id: "8f7a6b5c-1234-4d3e-9f0a-1b2c3d4e5f6a",
    date: "2025-12-08",
    title: "Admin Management",
    screenshot: "/screenshots/2025-12-08.png",
    theme: "core-features",
    tasks: [
      {
        text: "Added admin content management features to streamline content updates and support operational workflows.",
      },
    ],
  },
  {
    id: "01f7d002-d9ae-4afe-acc4-29036636bc10",
    date: "2025-12-10",
    title: "Prefetching Optimization",
    screenshot: "/screenshots/2025-12-10.png",
    theme: "performance-quality",
    tasks: [
      {
        text: "Disabled unnecessary link prefetching to reduce redundant network requests and improve perceived performance.",
      },
    ],
  },
  {
    id: "e7f6d5c4-b3a2-4c1d-9e0f-2a1b3c4d5e6f",
    date: "2025-12-10",
    title: "Type Safety",
    screenshot: "/screenshots/2025-12-10.png",
    theme: "data-architecture",
    tasks: [
      {
        text: "Adopted Prisma-generated types to cut redundant requests and strengthen type safety across data flows.",
      },
    ],
  },
  {
    id: "7d415499-722a-4242-8697-c401237a1ca1",
    date: "2025-12-14",
    title: "Add Global Search",
    screenshot: "/screenshots/2025-12-14.png",
    theme: "core-features",
    tasks: [
      {
        text: "Added global search and price-visibility controls to improve product discovery and reduce user friction.",
      },
    ],
  },
  {
    id: "f90d4135-40a1-43b9-bc12-14ee17877f71",
    date: "2025-12-16",
    title: "Server Actions",
    screenshot: "/screenshots/2025-12-16.png",
    theme: "performance-quality",
    tasks: [
      {
        text: "Migrated mutations to server actions and added soft-delete plus order snapshots to reduce network overhead and strengthen type safety.",
      },
    ],
  },
  {
    id: "7c091b36-529c-4d7f-a259-991c08d2ae82",
    date: "2025-12-17",
    title: "Test Framework",
    screenshot: "/screenshots/2025-12-17.png",
    theme: "foundation",
    tasks: [
      {
        text: "Integrated Vitest and added unit tests to catch regressions early and increase refactor confidence.",
      },
    ],
  },
  {
    id: "446c909d-8df7-431d-9eb9-5ea8427956ab",
    date: "2025-12-18",
    title: "Achieved 80% Test Coverage",
    screenshot: "/screenshots/2025-12-18.png",
    theme: "performance-quality",
    tasks: [
      {
        text: "Wrote unit tests to reach 80% coverage, simplified order-number logic, and cleaned docs to reduce bugs.",
      },
    ],
  },
];

interface ThemeConfig {
  id: string;
  key:
    | "foundation"
    | "core-features"
    | "data-architecture"
    | "performance-quality";
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
}

export const themeConfigs: ThemeConfig[] = [
  {
    id: "theme-foundation",
    key: "foundation",
    title: "Foundation",
    description:
      "Setting up the project infrastructure, design systems, database schema, and core authentication",
    icon: GitBranch,
    accentColor: "from-blue-50 to-blue-50/30",
  },
  {
    id: "theme-core-features",
    key: "core-features",
    title: "Core Features",
    description:
      "Building shopping cart, checkout, product catalog, pagination, admin management, and user-facing features",
    icon: CheckCircle,
    accentColor: "from-emerald-50 to-emerald-50/30",
  },
  {
    id: "theme-data-architecture",
    key: "data-architecture",
    title: "Data Architecture",
    description:
      "Implementing metrics system, database indexes, admin enhancements, and performance optimizations",
    icon: Database,
    accentColor: "from-purple-50 to-purple-50/30",
  },
  {
    id: "theme-performance-quality",
    key: "performance-quality",
    title: "Performance Quality",
    description:
      "Server actions migration, build optimization, type unification, and comprehensive testing (80% coverage)",
    icon: Zap,
    accentColor: "from-orange-50 to-orange-50/30",
  },
];
