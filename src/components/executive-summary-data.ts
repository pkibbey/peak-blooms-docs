import type { ReactNode } from "react";

/**
 * Architectural decision entry.
 *
 * baselineTimeMinutes?: Estimated time (minutes) to implement without AI.
 * aiTimeMinutes?: Estimated time (minutes) to implement with AI assistance.
 * Times are optional and used to render a compact comparison chart.
 */
interface ArchitecturalDecision {
  title: string;
  description: ReactNode;
  baselineTimeMinutes?: number;
  aiTimeMinutes?: number;
}

interface ArchitecturalDecisionAgainst {
  title: string;
  description: string;
  baselineTimeMinutes?: number;
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
  architecturalDecisionsAgainst: ArchitecturalDecisionAgainst[];
  sabbaticalInsights: string[];
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
      "An indepedant wholesale flower startup needed a custom e-commerce platform to get their new business up and running. I promised them that in 30 days, they would have a durable web app based on old-school architectural choices built with modern AI-assisted development practices.",
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
  architecturalDecisionsAgainst: [
    {
      title: "Theme Toggle",
      description:
        "A single light theme was prioritized to ensure visual consistency and reduce the maintenance and testing burden for the MVP.",
      baselineTimeMinutes: 16 * 60,
    },
    {
      title: "Product Variants",
      description:
        "The data model was simplified to core attributes instead of full multi-SKU variants to reduce schema complexity and admin overhead.",
      baselineTimeMinutes: 8 * 60,
    },
    {
      title: "Payment Processing",
      description:
        "Full payment gateway integration was postponed to avoid introducing significant complexity into the initial checkout workflow.",
      baselineTimeMinutes: 16 * 60,
    },
    {
      title: "Inventory Syncing",
      description:
        "Real-time, webhook-based inventory syncing was deferred, as manual and batch updates were sufficient for initial operational needs.",
      baselineTimeMinutes: 60 * 5 * 8,
    },
    {
      title: "Multi-user Sign-in",
      description:
        "Single-account, role-based access was deemed sufficient for the MVP, avoiding the complexity of company-level permissions.",
      baselineTimeMinutes: 24 * 60,
    },
  ],
  architecturalDecisions: [
    {
      title: "Next.js 16 + Server Actions",
      description:
        "Significantly streamlined the development workflow by integrating data mutations and UI updates into a more efficient, single roundtrip mechanism, reducing the manual effort and number of code-level calls required by the developer.",
    },
    {
      title: "BaseUI + TailwindCSS",
      description:
        "Used BaseUI for accessible primitives and Tailwind for consistent, testable styling—making AI-generated scaffolds easier to validate and integrate.",
    },
    {
      title: "100% Typescript",
      description:
        "Prefer schema-first, type-safe models so AI-generated data and tests surface contract issues early, not at runtime.",
    },
    {
      title: "Use AI to bootstrap work",
      description:
        "Used project-scoped MCP servers to let AI scaffold deterministic mocks and tests, with humans curating changes; limited AI to scaffolding to avoid unreviewed autonomous changes.",
      baselineTimeMinutes: 60 * 24,
      aiTimeMinutes: 60 * 2,
    },
    {
      title: "GitHub Actions + Vercel",
      description:
        "Leveraged GitHub Actions and Vercel builds so tests and Lighthouse checks run on every PR before human approval.",
    },
    {
      title: "Design for observability and validation",
      description:
        "Paired readable Jest patterns with Vitest's fast iteration to quickly verify AI-suggested tests while preserving maintainability.",
      baselineTimeMinutes: 60 * 40,
      aiTimeMinutes: 60 * 6,
    },
    {
      title: "Automatic Clean Up",
      description:
        "Integrated Biome and Knip for automated formatting and dead-code detection, reducing review burden while avoiding aggressive auto-removal for experiments.",
      baselineTimeMinutes: 60 * 8,
    },
  ],
  // Key insights distilled from my generative AI sabbatical. These directly informed the architectural choices above.
  sabbaticalInsights: [
    "Use AI to bootstrap work—boilerplate, tests, and mock datasets—but keep humans in the loop for correctness and long-term design.",
    "Design for observability and validation: CI, test harnesses, and performance checks are essential to verify AI-suggested changes quickly.",
    "Centralize LLM orchestration server-side (Server Functions/Server Components) to simplify context, security, and latency management.",
    "Prefer schema-first, type-safe models so AI-generated data and tests surface contract issues early, not at runtime.",
    "Isolate model experiments in reproducible MCP environments to make AI-assisted work auditable and repeatable.",
  ],
  keyMetrics: [
    { label: "Pages/Routes", value: "50+" },
    { label: "Type-Safe APIs", value: "100%" },
    { label: "Test Coverage", value: "90%" },
    { label: "Development Time", value: "27 days" },
  ],
};
