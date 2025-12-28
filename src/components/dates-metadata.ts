export interface DateMetadata {
  date: string;
  title: string;
  week: number;
  screenshot?: string;
  skillsUsed: string[];
}

export interface DayMetadata {
  date: string;
  title: string;
  screenshot: string;
  skillsUsed: string[];
}

export interface WeekMetadata {
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
    title: "Performance, Testing & Polish",
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
    skillsUsed: ["Next.js", "TypeScript", "BiomeJS", "ShadCN"],
  },
  {
    date: "2025-11-23",
    title: "Database Schema & Design System",
    screenshot: "/screenshots/2025-11-23.png",
    skillsUsed: ["Prisma", "PostgreSQL", "Next.js", "TypeScript", "React"],
  },
  {
    date: "2025-11-24",
    title: "Authentication & Product Filtering",
    screenshot: "/screenshots/2025-11-24.png",
    skillsUsed: ["Prisma", "TypeScript", "Authentication", "Next.js"],
  },
  {
    date: "2025-11-25",
    title: "Server-Side Rendering & Shopping Cart",
    screenshot: "/screenshots/2025-11-25.png",
    skillsUsed: ["Next.js", "React", "Server Components", "TypeScript"],
  },
  {
    date: "2025-11-26",
    title: "Navigation & Table Layouts",
    screenshot: "/screenshots/2025-11-26.png",
    skillsUsed: ["React", "TypeScript", "Next.js", "UI Design"],
  },
  {
    date: "2025-11-27",
    title: "Code Quality & Component Refactoring",
    screenshot: "/screenshots/2025-11-27.png",
    skillsUsed: ["BiomeJS", "React", "TypeScript", "Code Quality"],
  },
  {
    date: "2025-11-28",
    title: "Image Management & Product Features",
    screenshot: "/screenshots/2025-11-28.png",
    skillsUsed: ["Next.js", "TypeScript", "File Upload", "Validation"],
  },
  {
    date: "2025-11-29",
    title: "Data Access Layer & Form Validation",
    screenshot: "/screenshots/2025-11-29.png",
    skillsUsed: ["Prisma", "Zod", "TypeScript", "Data Architecture"],
  },
  {
    date: "2025-11-30",
    title: "Authentication & Performance Improvements",
    screenshot: "/screenshots/2025-11-30.png",
    skillsUsed: ["JWT", "Database Design", "Typography", "Next.js"],
  },
  {
    date: "2025-12-01",
    title: "Auth Migration & Code Cleanup",
    screenshot: "/screenshots/2025-12-01.png",
    skillsUsed: ["better-auth", "Next.js", "TypeScript", "OAuth"],
  },
  {
    date: "2025-12-02",
    title: "Pagination, CSV & Data Management",
    screenshot: "/screenshots/2025-12-02.png",
    skillsUsed: ["CSV", "Prisma", "Next.js", "Node.js"],
  },
  {
    date: "2025-12-03",
    title: "Admin Enhancements & Data Management",
    screenshot: "/screenshots/2025-12-03.png",
    skillsUsed: ["React", "Prisma", "Admin UI", "Search"],
  },
  {
    date: "2025-12-04",
    title: "UI Components & Featured Collections",
    screenshot: "/screenshots/2025-12-04.png",
    skillsUsed: ["React", "Tailwind CSS", "Components"],
  },
  {
    date: "2025-12-05",
    title: "Cart Features & Order Management",
    screenshot: "/screenshots/2025-12-05.png",
    skillsUsed: ["React", "TypeScript", "Prisma", "Validation"],
  },
  {
    date: "2025-12-08",
    title: "Metrics System & Admin Management",
    screenshot: "/screenshots/2025-12-08.png",
    skillsUsed: ["Prisma", "Next.js", "Metrics", "TypeScript"],
  },
  {
    date: "2025-12-09",
    title: "Auth & Production Optimization",
    screenshot: "/screenshots/2025-12-09.png",
    skillsUsed: ["Prisma", "TypeScript", "OAuth"],
  },
  {
    date: "2025-12-10",
    title: "Performance & Type System Updates",
    screenshot: "/screenshots/2025-12-10.png",
    skillsUsed: ["Next.js", "TypeScript", "Optimization"],
  },
  {
    date: "2025-12-11",
    title: "Dark/Light Theme Implementation",
    screenshot: "/screenshots/2025-12-11.png",
    skillsUsed: ["CSS", "Context", "TypeScript", "React"],
  },
  {
    date: "2025-12-12",
    title: "Terminology & Route Consolidation",
    screenshot: "/screenshots/2025-12-12.png",
    skillsUsed: ["Next.js", "TypeScript", "Routing"],
  },
  {
    date: "2025-12-13",
    title: "UI Framework & Concept Consolidation",
    screenshot: "/screenshots/2025-12-13.png",
    skillsUsed: ["React", "Tailwind", "BaseUI", "TypeScript"],
  },
  {
    date: "2025-12-14",
    title: "Search & Data Model Refinement",
    screenshot: "/screenshots/2025-12-14.png",
    skillsUsed: ["Prisma", "TypeScript", "Search", "React"],
  },
  {
    date: "2025-12-15",
    title: "Build Fixes & Type Unification",
    screenshot: "/screenshots/2025-12-15.png",
    skillsUsed: ["Build Tools", "Next.js", "TypeScript"],
  },
  {
    date: "2025-12-16",
    title: "Server Actions & Performance Refactoring",
    screenshot: "/screenshots/2025-12-16.png",
    skillsUsed: ["Next.js", "TypeScript", "Server Actions", "React"],
  },
  {
    date: "2025-12-17",
    title: "Testing & Type System Unification",
    screenshot: "/screenshots/2025-12-17.png",
    skillsUsed: ["Testing", "TypeScript", "Prisma", "Server Actions"],
  },
  {
    date: "2025-12-18",
    title: "Test Coverage & Order Refinement",
    screenshot: "/screenshots/2025-12-18.png",
    skillsUsed: ["Testing", "TypeScript", "Prisma", "Documentation"],
  },
];
