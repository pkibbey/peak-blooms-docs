import type { Task } from "./dates/task";

interface DayMetadata {
  date: string;
  title: string;
  screenshot: string;
  skillsUsed: string[];
  tasks?: Task[];
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
    skillsUsed: ["Next.js", "TypeScript", "BiomeJS", "ShadCN"],
    tasks: [
      {
        type: "paragraph",
        segments: [
          { kind: "text", text: "Gathered " },
          {
            kind: "hover",
            trigger: "client requirements",
            body: "Understanding client needs upfront ensures the project aligns with business goals and reduces rework during development.",
            icon: "Bulb",
          },
          { kind: "text", text: ". Wrote " },
          {
            kind: "hover",
            trigger: "functional requirements docs",
            body: "Design systems maintain consistency. Clear documentation and design patterns ensure all team members build features cohesively.",
            icon: "Bulb",
          },
          { kind: "text", text: " and a " },
          {
            kind: "hover",
            trigger: "style guide",
            body: "A style guide establishes visual consistency and reusable patterns, providing a single source of truth for design decisions across the entire project.",
            icon: "Bulb",
          },
          { kind: "text", text: ". Scaffolded a Next.js app with " },
          {
            kind: "hover",
            trigger: "TypeScript",
            body: "Type safety is important for reliable software, and it also speeds up development by providing code completion in IDEs.",
            icon: "Bulb",
          },
          { kind: "text", text: ", " },
          {
            kind: "hover",
            trigger: "BiomeJS",
            body: "An unopinionated linter and formatter — works almost effortlessly.",
            icon: "Bulb",
          },
          { kind: "text", text: ", and " },
          {
            kind: "hover",
            trigger: "ShadCN",
            body: "Accessibility is key — using these Radix UI–based components helps us achieve that in a clean, composable fashion.",
            icon: "Bulb",
          },
          { kind: "text", text: "." },
        ],
      },
    ],
  },
  {
    date: "2025-11-23",
    title: "Database Schema & Design System",
    screenshot: "/screenshots/2025-11-23.png",
    skillsUsed: ["Prisma", "PostgreSQL", "Next.js", "TypeScript", "React"],
    tasks: [
      {
        type: "paragraph",
        segments: [
          {
            kind: "text",
            text: "Created foundational UI components, and a ",
          },
          {
            kind: "hover",
            trigger: "schema-defined database",
            body: "I opted for Prisma for a type-safe schema, generated TypeScript client, and serverless-friendly workflow.",
            icon: "Bulb",
          },
          { kind: "text", text: "." },
        ],
      },
    ],
  },
  {
    date: "2025-11-24",
    title: "Authentication",
    screenshot: "/screenshots/2025-11-24.png",
    skillsUsed: ["Prisma", "TypeScript", "Authentication", "Next.js"],
    tasks: [
      {
        type: "paragraph",
        segments: [
          {
            kind: "text",
            text: "Implemented session-based authentication using ",
          },
          {
            kind: "hover",
            trigger: "Auth.js",
            body: "Used Auth.js to setup authentication. Including sign up, magic-link login, gated access, and user mananagment.",
            icon: "Bulb",
          },
          {
            kind: "text",
            text: ", and added more UI components.",
          },
        ],
      },
    ],
  },
  {
    date: "2025-11-25",
    title: "Shopping Cart",
    screenshot: "/screenshots/2025-11-25.png",
    skillsUsed: ["Next.js", "React", "Server Components", "TypeScript"],
    tasks: [
      {
        type: "paragraph",
        segments: [
          { kind: "text", text: "Configured dynamic pages to use " },
          {
            kind: "hover",
            trigger: "ISR",
            body: "Server components improve performance. Moving rendering to the server reduces client-side JavaScript and enables faster initial page loads.",
            icon: "Flame",
          },
          { kind: "text", text: ", created a " },
          {
            kind: "hover",
            trigger: "shopping cart",
            body: "Cart functionality is essential for e-commerce. A smooth shopping cart experience reduces friction and increases conversion rates.",
            icon: "InfoCircle",
          },
          { kind: "text", text: " workflow using SSR" },
          {
            kind: "text",
            text: ", and added content management for admin users.",
          },
        ],
      },
    ],
  },
  {
    date: "2025-11-26",
    title: "Navigation & Layouts",
    screenshot: "/screenshots/2025-11-26.png",
    skillsUsed: ["React", "TypeScript", "Next.js", "UI Design"],
    tasks: [
      {
        type: "paragraph",
        segments: [
          {
            kind: "text",
            text: "Created a consistent navigation, standardized ",
          },
          {
            kind: "hover",
            trigger: "table layouts",
            body: "Table layouts reduce code duplication. Creating shared table layouts and styles eliminates repetitive code and makes maintenance easier.",
            icon: "Stack",
            side: "right",
          },
          {
            kind: "text",
            text: ", and implemented cart checkout functionality.",
          },
        ],
      },
    ],
  },
  {
    date: "2025-11-27",
    title: "Order History & Code Quality",
    screenshot: "/screenshots/2025-11-27.png",
    skillsUsed: ["BiomeJS", "React", "TypeScript", "Code Quality"],
    tasks: [
      {
        type: "paragraph",
        segments: [
          { kind: "text", text: "Built the " },
          {
            kind: "hover",
            trigger: "order history pages",
            body: "Account features improve user retention. Providing users with access to their order history and account settings increases engagement and reduces support burden.",
            icon: "InfoCircle",
            side: "right",
          },
          { kind: "text", text: ", and " },
          {
            kind: "hover",
            trigger: "refactored the largest",
            body: "Component extraction reduces duplication. Breaking large components into smaller, focused pieces makes them reusable and easier to test and maintain.",
            icon: "Flame",
            side: "right",
          },
          { kind: "text", text: " files into smaller components." },
        ],
      },
    ],
  },
  {
    date: "2025-11-28",
    title: "Image Upload & Product Features",
    screenshot: "/screenshots/2025-11-28.png",
    skillsUsed: ["Next.js", "TypeScript", "File Upload", "Validation"],
    tasks: [
      {
        type: "paragraph",
        segments: [
          { kind: "text", text: "Implemented " },
          {
            kind: "hover",
            trigger: "image uploads",
            body: "Image validation prevents errors. Validating image dimensions, file sizes, and formats ensures data quality and prevents loading broken or oversized images.",
            icon: "AlertCircle",
            side: "right",
          },
          {
            kind: "text",
            text: ", added product filters, quantity selectors, and ",
          },
          {
            kind: "hover",
            trigger: "consisitent page headers",
            body: "Consistent headers improve navigation. Standardized page headers provide visual anchors and help users understand their current location in the application.",
            icon: "Bulb",
            side: "right",
          },
          {
            kind: "text",
            text: ".",
          },
        ],
      },
    ],
  },
  {
    date: "2025-11-29",
    title: "Client Review & Form Validation",
    screenshot: "/screenshots/2025-11-29.png",
    skillsUsed: ["Prisma", "Zod", "TypeScript", "Data Architecture"],
    tasks: [
      {
        type: "paragraph",
        segments: [
          {
            kind: "text",
            text: "Reviewed site progress with the client, and implemented ",
          },
          {
            kind: "hover",
            trigger: "Zod form validation",
            body: "Early validation enhances user experience. Validating form input on the client side before submission reduces server load and provides immediate feedback to users.",
            icon: "Bulb",
            side: "right",
          },
          { kind: "text", text: "." },
        ],
      },
    ],
  },
  {
    date: "2025-11-30",
    title: "Performance Improvements",
    screenshot: "/screenshots/2025-11-30.png",
    skillsUsed: ["JWT", "Database Design", "Typography", "Next.js"],
    tasks: [
      {
        type: "paragraph",
        segments: [
          { kind: "text", text: "Added " },
          {
            kind: "hover",
            trigger: "database indexes",
            body: "Database indexes significantly improve performance. Proper indexing on frequently queried columns dramatically speeds up database queries.",
            icon: "Flame",
            side: "right",
          },
          {
            kind: "text",
            text: ", configured auth with ",
          },
          {
            kind: "hover",
            trigger: "JWT authentication",
            body: "JWT tokens reduce database load. Stateless JWT authentication eliminates expensive database lookups on every request and improves performance.",
            icon: "Flame",
            side: "right",
          },
          { kind: "text", text: ", defined " },
          {
            kind: "hover",
            trigger: "typography utilities",
            body: "Typography systems maintain consistency. Creating reusable typography utilities ensures uniform text styling across the application and reduces duplication.",
            icon: "Bulb",
            side: "right",
          },
          { kind: "text", text: ", and crafted " },
          {
            kind: "hover",
            trigger: "legal pages",
            body: "Legal pages build trust. Providing privacy policies, terms of service, and company information establishes credibility with users.",
            icon: "InfoCircle",
            side: "right",
          },
          { kind: "text", text: "." },
        ],
      },
    ],
  },
  {
    date: "2025-12-01",
    title: "Auth Migration",
    screenshot: "/screenshots/2025-12-01.png",
    skillsUsed: ["better-auth", "Next.js", "TypeScript", "OAuth"],
    tasks: [
      {
        type: "paragraph",
        segments: [
          { kind: "text", text: "Migrated from next-auth to " },
          {
            kind: "hover",
            trigger: "better-auth",
            body: "Authentication library evaluation improves fit. Evaluating alternatives ensures the chosen library aligns with project requirements and architecture.",
            icon: "AlertCircle",
            side: "right",
          },
          { kind: "text", text: ",  removed dead code using " },
          {
            kind: "hover",
            trigger: "Knip",
            body: "Dead code removal improves maintainability. Unused code increases cognitive load and makes refactoring harder, so removing it keeps the codebase clean.",
            icon: "Flame",
            side: "right",
          },
          { kind: "text", text: ", and consolidated " },
          {
            kind: "hover",
            trigger: "admin dashboard",
            body: "Simplified admin dashboard layout. A clean, intuitive layout enhances user experience and makes navigation easier.",
            icon: "Flame",
            side: "right",
          },
          { kind: "text", text: " layouts." },
        ],
      },
    ],
  },
  {
    date: "2025-12-02",
    title: "Pagination & Data Import",
    screenshot: "/screenshots/2025-12-02.png",
    skillsUsed: ["CSV", "Prisma", "Next.js", "Node.js"],
    tasks: [
      {
        type: "paragraph",
        segments: [
          { kind: "text", text: "Created a " },
          {
            kind: "hover",
            trigger: "database seed script",
            body: "CSV enables bulk product imports. Parsing CSV files automates bulk data imports, reducing manual entry and improving data consistency.",
            icon: "Flame",
            side: "right",
          },
          { kind: "text", text: ", added shop " },
          {
            kind: "hover",
            trigger: "pagination",
            body: "Pagination improves performance and UX. Breaking large datasets into pages reduces initial load time and makes browsing more intuitive.",
            icon: "Flame",
            side: "right",
          },
          {
            kind: "text",
            text: ", and improved page layouts.",
          },
        ],
      },
    ],
  },
  {
    date: "2025-12-03",
    title: "Admin Enhancements",
    screenshot: "/screenshots/2025-12-03.png",
    skillsUsed: ["React", "Prisma", "Admin UI", "Search"],
    tasks: [
      {
        type: "paragraph",
        segments: [
          { kind: "text", text: "Added " },
          {
            kind: "hover",
            trigger: "product search",
            body: "Search functionality enhances product discovery. A prominent search feature helps users find products faster, reducing friction in the shopping journey.",
            icon: "Bulb",
            side: "right",
          },
          { kind: "text", text: ", implemented " },
          {
            kind: "hover",
            trigger: "sortable tables",
            body: "Sortable tables enable data exploration. Allowing users to sort by different columns makes it easier to find and analyze data.",
            icon: "Bulb",
            side: "right",
          },
          {
            kind: "text",
            text: ", and enabled collections and products to have ",
          },
          {
            kind: "hover",
            trigger: "many-to-many relationships",
            body: "Many-to-many relationships provide flexibility. Supporting multiple collections per product enables richer product categorization without data duplication.",
            icon: "Stack",
            side: "right",
          },
          { kind: "text", text: "." },
        ],
      },
    ],
  },
  {
    date: "2025-12-04",
    title: "UI clean up",
    screenshot: "/screenshots/2025-12-04.png",
    skillsUsed: ["React", "Tailwind CSS", "Components"],
    tasks: [
      {
        type: "paragraph",
        segments: [
          { kind: "text", text: "Added featured collections, " },
          {
            kind: "hover",
            trigger: "shipping banner",
            body: "Shipping messaging builds customer confidence. Clear shipping information reassures customers and reduces purchase anxiety.",
            icon: "InfoCircle",
            side: "right",
          },
          { kind: "text", text: " and " },
          {
            kind: "hover",
            trigger: "product card",
            body: "Reusable components reduce code duplication. A centralized product card component ensures consistent presentation across browse, search, and collection pages.",
            icon: "Stack",
            side: "right",
          },
          { kind: "text", text: " components." },
        ],
      },
    ],
  },
  {
    date: "2025-12-05",
    title: "Ordering System Tweaks",
    screenshot: "/screenshots/2025-12-05.png",
    skillsUsed: ["React", "TypeScript", "Prisma", "Validation"],
    tasks: [
      {
        type: "paragraph",
        segments: [
          { kind: "text", text: "Switched to a " },
          {
            kind: "hover",
            trigger: "local database instead of remote",
            body: "Local databases accelerate development. Using a local database eliminates network latency and allows developers to work offline.",
            icon: "Flame",
            side: "right",
          },
          { kind: "text", text: ", added product " },
          {
            kind: "hover",
            trigger: "quantity selectors",
            body: "Quantity selectors improve shopping experience. Inline quantity selection streamlines the shopping process and reduces clicks.",
            icon: "Bulb",
            side: "right",
          },
          { kind: "text", text: ", and " },
          {
            kind: "hover",
            trigger: "reorder from history",
            body: "Reorder from history increases convenience. Allowing repeat purchases from previous orders improves customer experience for frequent buyers.",
            icon: "Bulb",
            side: "right",
          },
          { kind: "text", text: " functionality." },
        ],
      },
    ],
  },
  {
    date: "2025-12-08",
    title: "Metrics & Admin Management",
    screenshot: "/screenshots/2025-12-08.png",
    skillsUsed: ["Prisma", "Next.js", "Metrics", "TypeScript"],
    tasks: [
      {
        type: "paragraph",
        segments: [
          { kind: "text", text: "Implemented a " },
          {
            kind: "hover",
            trigger: "database metrics system",
            body: "Metrics reveal performance bottlenecks. Tracking database queries helps identify slow operations and optimize hot paths.",
            icon: "Flame",
            side: "right",
          },
          { kind: "text", text: ", replaced dynamic heros with " },
          {
            kind: "hover",
            trigger: "static components",
            body: "Static components improve performance. Dynamic components added too much complexity, so using static components reduced complexity and improved performance.",
            icon: "Bulb",
            side: "right",
          },
          { kind: "text", text: ", and enabled admins to manage " },
          {
            kind: "hover",
            trigger: "collection products",
            body: "Collection management increases flexibility. Giving admins fine-grained control over product collections enables better content curation.",
            icon: "Stack",
            side: "right",
          },
          { kind: "text", text: "." },
        ],
      },
    ],
  },
  {
    date: "2025-12-09",
    title: "Production Optimization",
    screenshot: "/screenshots/2025-12-09.png",
    skillsUsed: ["Prisma", "TypeScript", "OAuth"],
    tasks: [
      {
        type: "paragraph",
        segments: [
          { kind: "text", text: "Replaced magic link with " },
          {
            kind: "hover",
            trigger: "Google authentication",
            body: "Google auth simplifies user experience. OAuth providers eliminate password management friction and leverage existing user accounts.",
            icon: "Bulb",
            side: "right",
          },
          { kind: "text", text: ", simplified " },
          {
            kind: "hover",
            trigger: "checkout",
            body: "Simplified checkout experience. Streamlined the checkout process to focus on essential steps.",
            icon: "Flame",
            side: "right",
          },
          {
            kind: "text",
            text: ", optimized seed scripts, and converted API endpoints into ",
          },
          {
            kind: "hover",
            trigger: "server actions",
            body: "Static rendering improves performance. Pre-rendering static pages at build time eliminates runtime rendering overhead.",
            icon: "Flame",
            side: "right",
          },
          { kind: "text", text: "." },
        ],
      },
    ],
  },
  {
    date: "2025-12-10",
    title: "Performance Improvements",
    screenshot: "/screenshots/2025-12-10.png",
    skillsUsed: ["Next.js", "TypeScript", "Optimization"],
    tasks: [
      {
        type: "paragraph",
        segments: [
          {
            kind: "text",
            text: "Disabled link prefetching",
          },
          { kind: "text", text: ", added consisitent " },
          {
            kind: "hover",
            trigger: "toast notifications",
            body: "Rich UI feedback improves experience. Colorful, well-designed notifications make feedback more noticeable and easier to understand.",
            icon: "Bulb",
            side: "right",
          },
          { kind: "text", text: ", removed complicated product variants " },
          { kind: "text", text: ", and replaced static types with " },
          {
            kind: "hover",
            trigger: "Prisma generated types",
            body: "Generated types stay in sync with schema. Auto-generated types from Prisma ensure type safety and prevent schema drift.",
            icon: "Bulb",
            side: "right",
          },
          { kind: "text", text: "." },
        ],
      },
    ],
  },
  {
    date: "2025-12-11",
    title: "Theme Implementation",
    screenshot: "/screenshots/2025-12-11.png",
    skillsUsed: ["CSS", "Context", "TypeScript", "React"],
    tasks: [
      {
        type: "paragraph",
        segments: [
          { kind: "text", text: "I toyed with adding in a " },
          {
            kind: "hover",
            trigger: "theme toggle",
            body: "CSS variables enable flexible theming. CSS custom properties allow dynamic theme switching without duplicating styles. Context provides theme state management across the app.",
            icon: "Bulb",
            side: "right",
          },
          {
            kind: "text",
            text: ", which defaulted to the user's browser preferences, but after exploring this idea, I realized that it would not provide enough value, so opted to remove it.",
          },
        ],
      },
    ],
  },
  {
    date: "2025-12-12",
    title: "Client review",
    screenshot: "/screenshots/2025-12-12.png",
    skillsUsed: ["Next.js", "TypeScript", "Routing"],
    tasks: [
      {
        type: "paragraph",
        segments: [
          {
            kind: "text",
            text: "Reviewed the app with the client, and we agreed on a new approach for shipping. The ",
          },
          {
            kind: "hover",
            trigger: "shipping and delivery terminology",
            body: "Consistent terminology prevents confusion. Using the same terms consistently across documentation, UI, and code reduces cognitive load and improves clarity.",
            icon: "InfoCircle",
            side: "right",
          },
          { kind: "text", text: " was then updated across the application." },
        ],
      },
    ],
  },
  {
    date: "2025-12-13",
    title: "Replace UI Framework",
    screenshot: "/screenshots/2025-12-13.png",
    skillsUsed: ["React", "Tailwind", "BaseUI", "TypeScript"],
    tasks: [
      {
        type: "paragraph",
        segments: [
          { kind: "text", text: "Consolidated " },
          {
            kind: "hover",
            trigger: "Cart and Order concepts",
            body: "Simpler systems are easier to maintain. Consolidating redundant concepts reduces mental overhead and makes features easier to understand.",
            icon: "Flame",
            side: "right",
          },
          { kind: "text", text: ", and migrated UI from RadixUI to " },
          {
            kind: "hover",
            trigger: "BaseUI",
            body: "UI framework migration improves design consistency. BaseUI provides better alignment with our design system and improved component APIs.",
            icon: "Stack",
            side: "right",
          },
          { kind: "text", text: "." },
        ],
      },
    ],
  },
  {
    date: "2025-12-14",
    title: "Add Global Search",
    screenshot: "/screenshots/2025-12-14.png",
    skillsUsed: ["Prisma", "TypeScript", "Search", "React"],
    tasks: [
      {
        type: "paragraph",
        segments: [
          { kind: "text", text: "Added " },
          {
            kind: "hover",
            trigger: "site search",
            body: "Site search improves product discovery. A prominent search feature helps users find products faster, reducing friction in the shopping journey.",
            icon: "Flame",
            side: "right",
          },
          { kind: "text", text: " to navigation, and implemented " },
          {
            kind: "hover",
            trigger: "price visibility controls",
            body: "Hidden prices incentivize user signup. Restricting price visibility encourages account creation and user engagement.",
            icon: "Bulb",
            side: "right",
          },
          { kind: "text", text: "." },
        ],
      },
    ],
  },
  {
    date: "2025-12-15",
    title: "Build Fixes & Type Consistency",
    screenshot: "/screenshots/2025-12-15.png",
    skillsUsed: ["Build Tools", "Next.js", "TypeScript"],
    tasks: [
      {
        type: "paragraph",
        segments: [
          { kind: "text", text: "Fixed " },
          {
            kind: "hover",
            trigger: "production build issues",
            body: "Build verification prevents deployment issues. Testing builds in production-like environments catches environment-specific issues before they affect users.",
            icon: "AlertCircle",
            side: "right",
          },
          { kind: "text", text: ", unified " },
          {
            kind: "hover",
            trigger: "session types",
            body: "Type unification prevents errors. Consistent type definitions across the codebase prevent bugs and improve IDE autocomplete.",
            icon: "Bulb",
            side: "right",
          },
          { kind: "text", text: ", and updated " },
          {
            kind: "hover",
            trigger: "documentation",
            body: "Clear documentation improves team productivity. Well-documented processes and guidelines help new team members onboard faster.",
            icon: "InfoCircle",
            side: "right",
          },
          { kind: "text", text: "." },
        ],
      },
    ],
  },
  {
    date: "2025-12-16",
    title: "Performance Gains using Server Actions",
    screenshot: "/screenshots/2025-12-16.png",
    skillsUsed: ["Next.js", "TypeScript", "Server Actions", "React"],
    tasks: [
      {
        type: "paragraph",
        segments: [
          { kind: "text", text: "Migrated to " },
          {
            kind: "hover",
            trigger: "server actions",
            body: "Server actions reduce latency and improve performance. Running critical operations on the server eliminates round-trip network calls.",
            icon: "Flame",
            side: "right",
          },
          { kind: "text", text: " for all operations, added " },
          {
            kind: "hover",
            trigger: "soft-delete",
            body: "Soft-delete preserves data integrity. Marking records as deleted rather than removing them preserves historical data and enables undo functionality.",
            icon: "Bulb",
            side: "right",
          },
          { kind: "text", text: ", and " },
          {
            kind: "hover",
            trigger: "order snapshots",
            body: "Order snapshots maintain price history accuracy. Storing product prices at order time prevents price changes from affecting historical records.",
            icon: "Bulb",
            side: "right",
          },
          { kind: "text", text: "." },
        ],
      },
    ],
  },
  {
    date: "2025-12-17",
    title: "Setup Test Framework",
    screenshot: "/screenshots/2025-12-17.png",
    skillsUsed: ["Testing", "TypeScript", "Prisma", "Server Actions"],
    tasks: [
      {
        type: "paragraph",
        segments: [
          {
            kind: "text",
            text: "Completed server action migrations, and added ",
          },
          {
            kind: "hover",
            trigger: "vitest framework",
            body: "Testing frameworks automate quality assurance. Integrated testing frameworks enable developers to catch regressions automatically.",
            icon: "Flame",
            side: "right",
          },
          { kind: "text", text: " for unit testing." },
        ],
      },
    ],
  },
  {
    date: "2025-12-18",
    title: "Achieved 80% Test Coverage",
    screenshot: "/screenshots/2025-12-18.png",
    skillsUsed: ["Testing", "TypeScript", "Prisma", "Documentation"],
    tasks: [
      {
        type: "paragraph",
        segments: [
          { kind: "text", text: "Added " },
          {
            kind: "hover",
            trigger: "unit tests to achieve 80% coverage",
            body: "Comprehensive tests ensure reliability. High test coverage reduces the surface area for bugs and increases confidence in refactoring.",
            icon: "Flame",
            side: "right",
          },
          { kind: "text", text: ", simplified " },
          {
            kind: "hover",
            trigger: "order number logic",
            body: "Optional fields provide flexibility. Simplifying order numbering makes the system more maintainable and easier to reason about.",
            icon: "Bulb",
            side: "right",
          },
          { kind: "text", text: " and cleaned up documentation." },
        ],
      },
    ],
  },
];
