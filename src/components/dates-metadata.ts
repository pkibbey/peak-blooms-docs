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

interface WeekMetadata {
  id: string;
  week: number;
  title: string;
  description: string;
  dateRange: string;
  milestones: string[];
}

export const weeksMetadata: WeekMetadata[] = [
  {
    id: "week-1",
    week: 1,
    title: "Foundation & Design System",
    description:
      "Setting up the project infrastructure, design systems, and core components",
    dateRange: "Nov 22 - 28",
    milestones: ["Project Setup", "Design System", "UI Components"],
  },
  {
    id: "week-2",
    week: 2,
    title: "Core Feature & Data Layer",
    description:
      "Building core features with validation, data architecture, and authentication",
    dateRange: "Nov 29 - Dec 5",
    milestones: ["Validation", "Data Access Layer", "Authentication"],
  },
  {
    id: "week-3",
    week: 3,
    title: "Advanced Features & Optimization",
    description:
      "Implementing metrics, admin management, and performance improvements",
    dateRange: "Dec 6 - 12",
    milestones: ["Metrics System", "Admin Features", "Optimization"],
  },
  {
    id: "week-4",
    week: 4,
    title: "Performance & Testing",
    description:
      "Final refinements, build fixes, type unification, and deployment preparation",
    dateRange: "Dec 13 - 19",
    milestones: ["Build Fixes", "Type Unification", "Documentation"],
  },
];

export const daysMetadata: DayMetadata[] = [
  {
    date: "2025-11-22",
    title: "Client Interview & Project Setup",
    screenshot: "/screenshots/2025-11-22.png",
    skillsUsed: ["Site Architecture", "Type Safety", "Code Quality"],
    theme: "foundation",
    impact:
      "Aligned scope and established scaffold to reduce rework and accelerate development.",
    tasks: [
      {
        type: "paragraph",
        text: "Gather client requirements; scaffold Next.js+TypeScript app; create style guide.",
      },
    ],
  },
  {
    date: "2025-11-23",
    title: "Database Schema & Design System",
    screenshot: "/screenshots/2025-11-23.png",
    skillsUsed: ["Database Design", "UI Components"],
    theme: "foundation",
    impact:
      "Defined schema and components to enable type-safe data access and consistent UI patterns.",
    tasks: [
      {
        type: "paragraph",
        text: "Define Prisma schema for type-safe DB client; scaffold base UI components.",
      },
    ],
  },
  {
    date: "2025-11-24",
    title: "Authentication",
    screenshot: "/screenshots/2025-11-24.png",
    skillsUsed: ["Authentication", "React"],
    theme: "foundation",
    impact:
      "Implemented robust auth to secure early flows and reduce support overhead.",
    tasks: [
      {
        type: "paragraph",
        text: "Implement session auth (magic-link); add auth UI and gating.",
      },
    ],
  },
  {
    date: "2025-11-25",
    title: "Shopping Cart",
    screenshot: "/screenshots/2025-11-25.png",
    skillsUsed: ["Server-side Rendering", "E-commerce"],
    theme: "core-features",
    impact:
      "Delivered core commerce flow enabling end-to-end purchase scenarios for MVP.",
    tasks: [
      {
        type: "paragraph",
        text: "Implement shopping cart flow; add SSR pages and basic admin content management.",
      },
    ],
  },
  {
    date: "2025-11-27",
    title: "Order History",
    screenshot: "/screenshots/2025-11-27.png",
    skillsUsed: ["Code Quality", "Refactoring"],
    theme: "core-features",
    impact:
      "Improved customer UX and maintainability by introducing historical views and smaller components.",
    tasks: [
      {
        type: "paragraph",
        text: "Add order history pages; refactor large files into reusable components.",
      },
    ],
  },
  {
    date: "2025-11-28",
    title: "Image Upload & Product Features",
    screenshot: "/screenshots/2025-11-28.png",
    skillsUsed: ["File Upload", "Data Validation", "UI Design"],
    theme: "core-features",
    impact:
      "Added validation and product controls to reduce bad data and improve admin workflows.",
    tasks: [
      {
        type: "paragraph",
        text: "Add image upload validation; implement product filters and quantity selectors.",
      },
    ],
  },
  {
    date: "2025-11-29",
    title: "Client Review & Form Validation",
    screenshot: "/screenshots/2025-11-29.png",
    skillsUsed: ["Client Facing", "Schema Validation", "Data Architecture"],
    theme: "core-features",
    impact:
      "Aligned with client expectations and reduced runtime errors with schema validation.",
    tasks: [
      {
        type: "paragraph",
        text: "Client review; add Zod form validation for better UX and contracts.",
      },
    ],
  },
  {
    date: "2025-11-30",
    title: "Performance Improvements",
    screenshot: "/screenshots/2025-11-30.png",
    skillsUsed: ["Authentication", "Database Design", "Typography"],
    theme: "performance-quality",
    impact:
      "Improved query performance and scalability through targeted indexing and auth changes.",
    tasks: [
      {
        type: "paragraph",
        text: "Add targeted DB indexes; switch to JWT auth; define typography utilities.",
      },
    ],
  },
  {
    date: "2025-12-01",
    title: "Auth Migration",
    screenshot: "/screenshots/2025-12-01.png",
    skillsUsed: ["OAuth", "Code Quality", "Admin UI"],
    theme: "core-features",
    impact:
      "Simplified auth stack and reduced technical debt, improving developer productivity.",
    tasks: [
      {
        type: "paragraph",
        text: "Migrate to TypeScript-first auth; remove dead code; consolidate admin layout.",
      },
    ],
  },
  {
    date: "2025-12-02",
    title: "Pagination & Data Import",
    screenshot: "/screenshots/2025-12-02.png",
    skillsUsed: ["Data Import", "Pagination", "UI Design"],
    theme: "core-features",
    impact:
      "Seed scripts and pagination improved reproducibility and UX for large data sets.",
    tasks: [
      {
        type: "paragraph",
        text: "Add CSV seed scripts for reproducible data; implement pagination; improve layouts.",
      },
    ],
  },
  {
    date: "2025-12-03",
    title: "Admin Enhancements",
    screenshot: "/screenshots/2025-12-03.png",
    skillsUsed: ["Search Functionality", "Database Design"],
    theme: "core-features",
    impact:
      "Search and sortable tables increased admin efficiency and data discoverability.",
    tasks: [
      {
        type: "paragraph",
        text: "Implement product search; add sortable admin tables; model many-to-many relationships.",
      },
    ],
  },
  {
    date: "2025-12-05",
    title: "Ordering System Tweaks",
    screenshot: "/screenshots/2025-12-05.png",
    skillsUsed: ["UI Components", "Database Design", "Marketing"],
    theme: "performance-quality",
    impact:
      "Local dev DB reduced iteration time and surfaced environment-specific issues earlier.",
    tasks: [
      {
        type: "paragraph",
        text: "Switch to local development DB to reduce latency and speed iteration.",
      },
    ],
  },
  {
    date: "2025-12-06",
    title: "Accessibile UI Components",
    screenshot: "/screenshots/2025-12-06.png",
    skillsUsed: ["Component Library", "Accessibility", "Developer Experience"],
    theme: "core-features",
    impact:
      "Accessible primitives improved inclusivity and reduced rework on UI components.",
    tasks: [
      {
        type: "paragraph",
        text: "Build accessible primitives with ARIA and keyboard support; improve DX.",
      },
    ],
  },
  {
    date: "2025-12-08",
    title: "Metrics & Admin Management",
    screenshot: "/screenshots/2025-12-08.png",
    skillsUsed: ["Site Architecture", "Performance Monitoring"],
    theme: "data-architecture",
    impact:
      "Metrics identified bottlenecks and enabled targeted optimizations for stability.",
    tasks: [
      {
        type: "paragraph",
        text: "Implement metrics to identify bottlenecks; enable admin product management.",
      },
    ],
  },
  {
    date: "2025-12-09",
    title: "Production Optimization",
    screenshot: "/screenshots/2025-12-09.png",
    skillsUsed: ["Database Design", "Authentication", "Server Actions"],
    theme: "data-architecture",
    impact:
      "Optimizations and server actions reduced client JS and simplified data flows.",
    tasks: [
      {
        type: "paragraph",
        text: "Replace magic-link with Google OAuth; simplify checkout; convert endpoints to server actions.",
      },
    ],
  },
  {
    date: "2025-12-10",
    title: "Performance Improvements",
    screenshot: "/screenshots/2025-12-10.png",
    skillsUsed: ["Performance Optimization", "User Feedback"],
    theme: "data-architecture",
    impact:
      "Small UX and performance tweaks reduced unnecessary requests and simplified flows.",
    tasks: [
      {
        type: "paragraph",
        text: "Disable unnecessary link prefetching; add consistent toasts; adopt Prisma-generated types.",
      },
    ],
  },
  {
    date: "2025-12-11",
    title: "Theme Implementation",
    screenshot: "/screenshots/2025-12-11.png",
    skillsUsed: ["Styling", "Complexity Analysis"],
    theme: "data-architecture",
    impact:
      "Decided against theme toggle to protect visual hierarchy and reduce maintenance.",
    tasks: [
      {
        type: "paragraph",
        text: "Evaluate theme toggle and decide against it to protect visual hierarchy.",
      },
    ],
  },
  {
    date: "2025-12-12",
    title: "Client review",
    screenshot: "/screenshots/2025-12-12.png",
    skillsUsed: ["Site Architecture", "Documentation"],
    theme: "data-architecture",
    impact:
      "Standardized terminology to reduce confusion and improve documentation quality.",
    tasks: [
      {
        type: "paragraph",
        text: "Standardize shipping terminology with client to reduce confusion.",
      },
    ],
  },
  {
    date: "2025-12-13",
    title: "Replace UI Framework",
    screenshot: "/screenshots/2025-12-13.png",
    skillsUsed: ["Component Library", "Type Safety"],
    theme: "performance-quality",
    impact:
      "Switched frameworks to reduce custom styling and improve default theming.",
    tasks: [
      {
        type: "paragraph",
        text: "Migrate component library from RadixUI to BaseUI for better theming.",
      },
    ],
  },
  {
    date: "2025-12-14",
    title: "Add Global Search",
    screenshot: "/screenshots/2025-12-14.png",
    skillsUsed: ["Search Functionality", "UI Components"],
    theme: "performance-quality",
    impact:
      "Global search improved product discovery and reduced user friction.",
    tasks: [
      {
        type: "paragraph",
        text: "Add global search for product discovery; implement price visibility controls.",
      },
    ],
  },
  {
    date: "2025-12-15",
    title: "Build Fixes & Type Consistency",
    screenshot: "/screenshots/2025-12-15.png",
    skillsUsed: ["CI/CD", "Type Safety", "Documentation"],
    theme: "performance-quality",
    impact:
      "Resolved build and type issues to increase reliability and CI confidence.",
    tasks: [
      {
        type: "paragraph",
        text: "Fix production build issues; add CI scripts and production-like tests; update docs.",
      },
    ],
  },
  {
    date: "2025-12-16",
    title: "Performance Gains using Server Actions",
    screenshot: "/screenshots/2025-12-16.png",
    skillsUsed: ["Site Architecture", "Server Actions"],
    theme: "performance-quality",
    impact:
      "Server actions reduced network overhead and tightened end-to-end type safety.",
    tasks: [
      {
        type: "paragraph",
        text: "Migrate mutations to server actions; add soft-delete and order snapshots.",
      },
    ],
  },
  {
    date: "2025-12-17",
    title: "Setup Test Framework",
    screenshot: "/screenshots/2025-12-17.png",
    skillsUsed: ["Server Actions", "Testing Framework"],
    theme: "performance-quality",
    impact:
      "Integrated Vitest to catch regressions early and improve confidence for refactors.",
    tasks: [
      {
        type: "paragraph",
        text: "Integrate Vitest and add unit tests to catch regressions early.",
      },
    ],
  },
  {
    date: "2025-12-18",
    title: "Achieved 80% Test Coverage",
    screenshot: "/screenshots/2025-12-18.png",
    skillsUsed: ["Code Coverage", "Database Design", "Documentation"],
    theme: "performance-quality",
    impact:
      "High test coverage reduced bug surface area and increased refactor safety.",
    tasks: [
      {
        type: "paragraph",
        text: "Write unit tests to reach 80% coverage; simplify order-number logic; clean up docs.",
      },
    ],
  },
];
