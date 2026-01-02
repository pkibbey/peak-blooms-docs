import type { ReactNode } from "react";

interface ArchitecturalDecision {
  title: string;
  description: ReactNode;
}

interface NonFeature {
  title: string;
  details: string;
}

interface ExecutiveSummaryData {
  projectName: string;
  tagline: string;
  timeline: {
    startDate: string;
    endDate: string;
    durationDays: number;
  };
  scope: {
    platform: string;
    features: string[];
  };
  architecturalDecisions: ArchitecturalDecision[];
  nonFeatures: NonFeature[];
  keyMetrics: {
    label: string;
    value: string;
  }[];
}

export const executiveSummaryData: ExecutiveSummaryData = {
  projectName: "Peak Blooms",
  tagline: "A modern e-commerce platform built with Next.js 16",
  timeline: {
    startDate: "November 22, 2025",
    endDate: "December 18, 2025",
    durationDays: 27,
  },
  scope: {
    platform:
      "Full-stack e-commerce application with admin dashboard, product catalog, shopping cart, and order management",
    features: [
      "Product catalog with filtering, pagination, and global search",
      "Shopping cart and checkout workflow",
      "Order history and management",
      "User authentication with magic links",
      "Admin panel for product and collection management",
      "Metrics system for tracking performance",
      "Database indexing and optimization",
    ],
  },
  nonFeatures: [
    {
      title: "Theme Toggle",
      details:
        "Deferred in favor of a single light theme to provide visual consistency and reduce maintenance and testing burden. Dark mode can be added later via CSS variables if user demand increases.",
    },
    {
      title: "Product Variants",
      details:
        "Simplified to core product attributes rather than full multi-SKU variants to reduce schema complexity and admin overhead. This meets MVP needs while keeping the system easier to manage and iterate on.",
    },
    {
      title: "Payment Processing",
      details:
        "Postponed full payment gateway integration to avoid adding complexity to the checkout workflow. Market-priced products will use an admin approval and pricing workflow until a more robust payments flow is required.",
    },
    {
      title: "Inventory Syncing",
      details:
        "Deferred webhook-based real-time inventory syncing because manual and batch updates satisfy current operational needs. Avoiding streaming infrastructure reduces launch complexity and can be revisited as scale demands it.",
    },
    {
      title: "Company Management",
      details:
        "To reduce launch complexity, each company's orders are managed by a single user account. Company-level, multi-user sign-in and role-based access will be introduced later if customer demand requires shared or delegated access.",
    },
  ],
  architecturalDecisions: [
    {
      title: "Next.js 16 + Server Functions",
      description:
        "Next.js gives us routing and performance at a modest cost. Server Functions reduce network round trips making the application feel more responsive.",
    },
    {
      title: "BaseUI + TailwindCSS",
      description:
        "Standardized on BaseUI for consistent, accessible components. TailwindCSS provides a utility-driven system for rapid, consistent styling.",
    },
    {
      title: "Prisma ORM + TypeScript",
      description:
        "Prisma simplified database access and migrations. Its generated types provide robust compile-time safety across the stack. Local database runs with Docker with automatic seed scripts, so that dev work is fast and deterministic.",
    },
    {
      title: "AI + MCP",
      description:
        "Used AI (with project scoped MCP servers) to generate test scaffolds and boilerplate code while applying human architectural judgment to ensure correctness and maintainability.",
    },
    {
      title: "GitHub Actions + Vercel",
      description:
        "Combining Vercel with GitHub Actions makes it easy to run fully tested builds on every push and validate production-like builds early.",
    },
    {
      title: "Vitest + Jest",
      description:
        "Jest provides readable test patterns and Vitest's fast mocks speed test runs, enabling rapid iteration and high coverage.",
    },
    {
      title: "Automatic Clean Code",
      description:
        "Enforced consistent code style and removed dead code using Biome (linting/formatting) and Knip (unused-export detection), reducing diffs, editor friction, and long-term maintenance overhead.",
    },
  ],
  keyMetrics: [
    { label: "Development Time", value: "27 days" },
    { label: "Test Coverage", value: "80%" },
    { label: "Pages / Routes", value: "15+" },
    { label: "Type-Safe APIs", value: "100%" },
  ],
};
