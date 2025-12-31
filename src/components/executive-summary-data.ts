export interface ArchitecturalDecision {
  title: string;
  description: string;
  impact: string;
}

export interface NonFeature {
  title: string;
  rationale: string;
  dayDecided?: string;
}

export interface ExecutiveSummaryData {
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
  architecturalDecisions: [
    {
      title: "Next.js 16 & React Server Actions",
      description:
        "Adopted Next.js 16 and React 19; migrated mutations to React Server Actions to simplify data flow and remove API request overhead.",
      impact:
        "Reduced client JS and network overhead, improved type safety, and a simpler, more maintainable codebase.",
    },
    {
      title: "Prisma ORM with Schema-Driven Type Generation",
      description:
        "Centralized database schema in Prisma for type-safe database access and automatic TypeScript client generation.",
      impact:
        "Eliminates manual type definitions, reduces runtime errors, and accelerates development velocity",
    },

    {
      title: "CI/CD + Preview Deploys",
      description:
        "Configured CI to run production-like builds and enabled preview deployments for every pull request to catch build/regression issues early.",
      impact:
        "Faster feedback for PRs, fewer production surprises, and smoother collaboration between design and engineering.",
    },

    {
      title: "BaseUI + TailwindCSS 4 for Component Library",
      description:
        "Transitioned from RadixUI to BaseUI for improved design consistency and built on TailwindCSS 4 for styling.",
      impact:
        "Faster component development, consistent design language across 40+ components",
    },
    {
      title: "Comprehensive Testing with Vitest (80% Coverage)",
      description:
        "Implemented Vitest testing framework late in development with push to 80% code coverage.",
      impact:
        "Improved code reliability, caught edge cases, documented critical paths through test cases",
    },
  ],
  nonFeatures: [
    {
      title: "Theme Toggle / Dark Mode",
      rationale:
        "Evaluated but deprioritized due to limited user value. Single light theme provides better visual consistency and reduces maintenance burden. Can be added later with CSS variables if demand emerges.",
      dayDecided: "November 27",
    },
    {
      title: "Complex Product Variants System",
      rationale:
        "Initially scoped for multiple SKUs per product (size, color, etc.), but simplified to core product attributes. Users can define products with basic properties, reducing schema complexity and admin overhead while meeting MVP requirements.",
      dayDecided: "December 2",
    },
    {
      title: "Payment Gateway Integration",
      rationale:
        "Designed architecture to support future payment providers, but implemented single Stripe integration for launch. Sufficient for MVP; payment method expansion can be added without rearchitecting.",
      dayDecided: "December 8",
    },
    {
      title: "Real-time Inventory Syncing",
      rationale:
        "Determined that webhook-based inventory updates (for external sources) weren't required for initial launch. Manual inventory management and batch updates sufficient for current scale.",
      dayDecided: "December 10",
    },
    {
      title: "Multi-tenant Admin Capabilities",
      rationale:
        "Single-tenant admin panel sufficient for initial deployment. Multi-tenant support deferred to future iteration if needed for scaling to multiple store operators.",
      dayDecided: "December 12",
    },
  ],
  keyMetrics: [
    { label: "Total Development Time", value: "27 days" },
    { label: "Test Coverage", value: "80%" },
    { label: "Components Built", value: "40+" },
    { label: "Pages / Routes", value: "15+" },
    { label: "Database Tables", value: "9" },
    { label: "Type-Safe APIs", value: "100%" },
    { label: "Build Time", value: "< 5 seconds" },
  ],
};
