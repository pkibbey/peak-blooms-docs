import { CheckCircle, Database, GitBranch, Zap } from "lucide-react";
import type { Task } from "./dates/task";

interface DayMetadata {
  date: string;
  title: string;
  screenshot: string;
  skillsUsed: string[];
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
    date: "2025-11-22",
    title: "Client Interview & Project Setup",
    screenshot: "/screenshots/2025-11-22.png",
    skillsUsed: ["Site Architecture", "Type Safety", "Code Quality"],
    theme: "foundation",
    tasks: [
      {
        type: "paragraph",
        text: "Gathered client requirements, scaffolded a Next.js+TypeScript app, and created a style guide to reduce rework.",
      },
    ],
  },
  {
    date: "2025-11-23",
    title: "Database Schema & Design System",
    screenshot: "/screenshots/2025-11-23.png",
    skillsUsed: ["Database Design", "UI Components"],
    theme: "foundation",
    tasks: [
      {
        type: "paragraph",
        text: "Defined a Prisma schema and scaffolded base UI components to ensure type-safe data access and consistent UI.",
      },
    ],
  },
  {
    date: "2025-11-24",
    title: "Authentication",
    screenshot: "/screenshots/2025-11-24.png",
    skillsUsed: ["Authentication", "React"],
    theme: "foundation",
    tasks: [
      {
        type: "paragraph",
        text: "Implemented session-based magic-link authentication and gated UI to secure user flows and reduce support burden.",
      },
    ],
  },
  {
    date: "2025-11-25",
    title: "Shopping Cart",
    screenshot: "/screenshots/2025-11-25.png",
    skillsUsed: ["Server-side Rendering", "E-commerce"],
    theme: "core-features",
    tasks: [
      {
        type: "paragraph",
        text: "Implemented the shopping cart flow, added SSR pages, and built basic admin content management to validate purchases.",
      },
    ],
  },
  {
    date: "2025-11-27",
    title: "Order History",
    screenshot: "/screenshots/2025-11-27.png",
    skillsUsed: ["Code Quality", "Refactoring"],
    theme: "core-features",
    tasks: [
      {
        type: "paragraph",
        text: "Added order-history pages and refactored large files into reusable components to improve UX and maintainability.",
      },
    ],
  },
  {
    date: "2025-11-28",
    title: "Image Upload & Product Features",
    screenshot: "/screenshots/2025-11-28.png",
    skillsUsed: ["File Upload", "Data Validation", "UI Design"],
    theme: "core-features",
    tasks: [
      {
        type: "paragraph",
        text: "Added image-upload validation, product filters, and quantity selectors to reduce bad data and streamline admin workflows.",
      },
    ],
  },
  {
    date: "2025-11-29",
    title: "Client Review & Form Validation",
    screenshot: "/screenshots/2025-11-29.png",
    skillsUsed: ["Client Facing", "Schema Validation", "Data Architecture"],
    theme: "data-architecture",
    tasks: [
      {
        type: "paragraph",
        text: "Conducted client review and added Zod form validation to align expectations and reduce runtime errors.",
      },
    ],
  },
  {
    date: "2025-11-30",
    title: "Performance Improvements",
    screenshot: "/screenshots/2025-11-30.png",
    skillsUsed: ["Authentication", "Database Design", "Typography"],
    theme: "performance-quality",
    tasks: [
      {
        type: "paragraph",
        text: "Added targeted DB indexes, switched to JWT auth, and defined typography utilities to improve performance and scalability.",
      },
    ],
  },
  {
    date: "2025-12-01",
    title: "Auth Migration",
    screenshot: "/screenshots/2025-12-01.png",
    skillsUsed: ["OAuth", "Code Quality", "Admin UI"],
    theme: "foundation",
    tasks: [
      {
        type: "paragraph",
        text: "Migrated to TypeScript-first auth, removed dead code, and consolidated admin layout to reduce technical debt.",
      },
    ],
  },
  {
    date: "2025-12-02",
    title: "Pagination & Data Import",
    screenshot: "/screenshots/2025-12-02.png",
    skillsUsed: ["Data Import", "Pagination", "UI Design"],
    theme: "core-features",
    tasks: [
      {
        type: "paragraph",
        text: "Added CSV seed scripts, implemented pagination, and improved layouts to make large datasets reproducible and navigable.",
      },
    ],
  },
  {
    date: "2025-12-03",
    title: "Admin Enhancements",
    screenshot: "/screenshots/2025-12-03.png",
    skillsUsed: ["Search Functionality", "Database Design"],
    theme: "core-features",
    tasks: [
      {
        type: "paragraph",
        text: "Implemented product search, added sortable admin tables, and modeled many-to-many relationships to boost admin efficiency.",
      },
    ],
  },
  {
    date: "2025-12-05",
    title: "Ordering System Tweaks",
    screenshot: "/screenshots/2025-12-05.png",
    skillsUsed: ["UI Components", "Database Design", "Marketing"],
    theme: "performance-quality",
    tasks: [
      {
        type: "paragraph",
        text: "Switched to a local development database to reduce latency and speed iteration, catching environment-specific issues earlier.",
      },
    ],
  },
  {
    date: "2025-12-06",
    title: "Accessibile UI Components",
    screenshot: "/screenshots/2025-12-06.png",
    skillsUsed: ["Component Library", "Accessibility", "Developer Experience"],
    theme: "core-features",
    tasks: [
      {
        type: "paragraph",
        text: "Built accessible primitives with ARIA and keyboard support to improve inclusivity and reduce future UI rework.",
      },
    ],
  },
  {
    date: "2025-12-08",
    title: "Metrics & Admin Management",
    screenshot: "/screenshots/2025-12-08.png",
    skillsUsed: ["Site Architecture", "Performance Monitoring"],
    theme: "data-architecture",
    tasks: [
      {
        type: "paragraph",
        text: "Implemented metrics to identify bottlenecks and enable admin product management, guiding targeted stability optimizations.",
      },
    ],
  },
  {
    date: "2025-12-09",
    title: "Production Optimization",
    screenshot: "/screenshots/2025-12-09.png",
    skillsUsed: ["Database Design", "Authentication", "Server Actions"],
    theme: "data-architecture",
    tasks: [
      {
        type: "paragraph",
        text: "Replaced magic-link with Google OAuth, simplified checkout, and converted endpoints to server actions to reduce client-side JS.",
      },
    ],
  },
  {
    date: "2025-12-10",
    title: "Performance Improvements",
    screenshot: "/screenshots/2025-12-10.png",
    skillsUsed: ["Performance Optimization", "User Feedback"],
    theme: "foundation",
    tasks: [
      {
        type: "paragraph",
        text: "Disabled unnecessary link prefetching, added consistent toasts, and adopted Prisma-generated types to cut redundant requests.",
      },
    ],
  },
  {
    date: "2025-12-11",
    title: "Theme Implementation",
    screenshot: "/screenshots/2025-12-11.png",
    skillsUsed: ["Styling", "Complexity Analysis"],
    theme: "foundation",
    tasks: [
      {
        type: "paragraph",
        text: "Evaluated a theme toggle and decided against it to preserve visual hierarchy and avoid extra maintenance.",
      },
    ],
  },
  {
    date: "2025-12-12",
    title: "Client review",
    screenshot: "/screenshots/2025-12-12.png",
    skillsUsed: ["Site Architecture", "Documentation"],
    theme: "data-architecture",
    tasks: [
      {
        type: "paragraph",
        text: "Standardized shipping terminology with the client to reduce confusion and clarify documentation.",
      },
    ],
  },
  {
    date: "2025-12-13",
    title: "Replace UI Framework",
    screenshot: "/screenshots/2025-12-13.png",
    skillsUsed: ["Component Library", "Type Safety"],
    theme: "performance-quality",
    tasks: [
      {
        type: "paragraph",
        text: "Migrated the component library from RadixUI to BaseUI to improve theming and reduce custom styles.",
      },
    ],
  },
  {
    date: "2025-12-14",
    title: "Add Global Search",
    screenshot: "/screenshots/2025-12-14.png",
    skillsUsed: ["Search Functionality", "UI Components"],
    theme: "core-features",
    tasks: [
      {
        type: "paragraph",
        text: "Added global search and price-visibility controls to improve product discovery and reduce user friction.",
      },
    ],
  },
  {
    date: "2025-12-15",
    title: "Build Fixes & Type Consistency",
    screenshot: "/screenshots/2025-12-15.png",
    skillsUsed: ["CI/CD", "Type Safety", "Documentation"],
    theme: "performance-quality",
    tasks: [
      {
        type: "paragraph",
        text: "Fixed production build issues, added CI scripts and production-like tests, and updated docs to raise reliability.",
      },
    ],
  },
  {
    date: "2025-12-16",
    title: "Performance Gains using Server Actions",
    screenshot: "/screenshots/2025-12-16.png",
    skillsUsed: ["Site Architecture", "Server Actions"],
    theme: "performance-quality",
    tasks: [
      {
        type: "paragraph",
        text: "Migrated mutations to server actions and added soft-delete plus order snapshots to reduce network overhead and strengthen type safety.",
      },
    ],
  },
  {
    date: "2025-12-17",
    title: "Setup Test Framework",
    screenshot: "/screenshots/2025-12-17.png",
    skillsUsed: ["Server Actions", "Testing Framework"],
    theme: "performance-quality",
    tasks: [
      {
        type: "paragraph",
        text: "Integrated Vitest and added unit tests to catch regressions early and increase refactor confidence.",
      },
    ],
  },
  {
    date: "2025-12-18",
    title: "Achieved 80% Test Coverage",
    screenshot: "/screenshots/2025-12-18.png",
    skillsUsed: ["Code Coverage", "Database Design", "Documentation"],
    theme: "performance-quality",
    tasks: [
      {
        type: "paragraph",
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
