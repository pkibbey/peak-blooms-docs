import type { Task } from "./dates/task";

interface DayMetadata {
  date: string;
  title: string;
  screenshot: string;
  skillsUsed: string[];
  tasks?: Task[];
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
    skillsUsed: ["Database Design", "UI Components"],
    theme: "foundation",
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
    skillsUsed: ["Authentication", "React"],
    theme: "foundation",
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
    skillsUsed: ["Server-side Rendering", "E-commerce"],
    theme: "core-features",
    tasks: [
      {
        type: "paragraph",
        segments: [
          { kind: "text", text: "Configured dynamic pages to use " },
          {
            kind: "hover",
            trigger: "ISR",
            body: "ISR was chosen early for the product catalog's unique needs. Fully static pages couldn't handle product updates, while fully dynamic rendering would bottleneck on database queries. ISR provided the sweet spot: pages are pre-rendered and cached for performance, but regenerated on-demand when products change, giving us fresh content without sacrificing speed.",
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
    date: "2025-11-27",
    title: "Order History",
    screenshot: "/screenshots/2025-11-27.png",
    skillsUsed: ["Code Quality", "Refactoring"],
    theme: "core-features",
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
    skillsUsed: ["File Upload", "Data Validation", "UI Design"],
    theme: "core-features",
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
    skillsUsed: ["Client Facing", "Schema Validation", "Data Architecture"],
    theme: "core-features",
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
            body: "I prioritized Zod form validation early because catching errors at the edge of the system—right in the browser—prevents bad data from ever reaching the backend. This not only improves user experience with instant feedback, but also shapes the entire data flow: the backend can assume data is well-formed, reducing defensive code and making the API surface cleaner. It also let me iterate on form UX quickly, since validation logic was colocated with the UI.",
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
    skillsUsed: ["Authentication", "Database Design", "Typography"],
    theme: "performance-quality",
    tasks: [
      {
        type: "paragraph",
        segments: [
          { kind: "text", text: "Added " },
          {
            kind: "hover",
            trigger: "database indexes",
            body: "Adding database indexes was a turning point for performance. Early on, some queries were slow enough to be noticeable in the UI. By profiling and adding the right indexes, I was able to cut query times from seconds to milliseconds, which made the app feel instantly responsive. This reinforced the value of measuring before optimizing and treating the database as a first-class part of the user experience.",
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
            body: "Switching to JWT authentication was about scalability and simplicity. Stateless tokens meant I could eliminate session lookups on every request, which not only improved performance but also made the system easier to reason about. It was a conscious tradeoff: a bit more up-front complexity for a much simpler and more scalable authentication flow in the long run.",
            icon: "Flame",
            side: "right",
          },
          { kind: "text", text: ", defined " },
          {
            kind: "hover",
            trigger: "typography utilities",
            body: "Investing in typography utilities early paid off throughout the project. By abstracting font sizes, weights, and spacing into a utility system, I avoided a lot of one-off CSS and design drift. This made it easy to update the look and feel globally, and ensured that the visual hierarchy stayed consistent as the app grew.",
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
    skillsUsed: ["OAuth", "Code Quality", "Admin UI"],
    theme: "core-features",
    tasks: [
      {
        type: "paragraph",
        segments: [
          { kind: "text", text: "Migrated from next-auth to " },
          {
            kind: "hover",
            trigger: "better-auth",
            body: "Next-auth felt overengineered for our needs—too many abstraction layers and unclear future direction. Better-auth offered a cleaner, more TypeScript-first approach with better plugin architecture. The migration simplified the auth layer significantly and aligned better with Next.js server actions.",
            icon: "AlertCircle",
            side: "right",
          },
          { kind: "text", text: ",  removed dead code using " },
          {
            kind: "hover",
            trigger: "Knip",
            body: "Knip finds and eliminates unused code. Rather than manually hunting for dead code, this specialized tool automatically identifies unused exports and files, making it easy to keep the codebase clean and maintainable.",
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
    skillsUsed: ["Data Import", "Pagination", "UI Design"],
    theme: "core-features",
    tasks: [
      {
        type: "paragraph",
        segments: [
          { kind: "text", text: "Created a " },
          {
            kind: "hover",
            trigger: "database seed script",
            body: "Seed scripts automate data setup. Using a CSV parser to seed the database with initial product data eliminates manual entry, provides a reproducible setup process, and ensures consistency across development environments.",
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
    skillsUsed: ["Search Functionality", "Database Design"],
    theme: "core-features",
    tasks: [
      {
        type: "paragraph",
        segments: [
          { kind: "text", text: "Added " },
          {
            kind: "hover",
            trigger: "product search",
            body: "Adding product search was a direct response to user feedback—people struggled to find specific items as the catalog grew. Rather than just a filter, I wanted a true search experience that felt instant and forgiving. This required rethinking data access patterns and optimizing queries for partial matches, which paid off in user satisfaction and engagement.",
            icon: "Bulb",
            side: "right",
          },
          { kind: "text", text: ", implemented " },
          {
            kind: "hover",
            trigger: "sortable tables",
            body: "Sortable tables were about empowering admins. As the data set grew, static tables became a bottleneck for management. By making tables sortable, I gave admins the tools to quickly find, compare, and act on data—turning a static list into a dynamic workspace. This also set the stage for future enhancements like filtering and bulk actions.",
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
            body: "Supporting many-to-many relationships was a foundational architectural decision. Early on, I realized that products and collections would need to evolve independently, and hard-coding relationships would create technical debt. By modeling this properly in the database, I enabled flexible categorization and future-proofed the data model for new features like cross-collection promotions.",
            icon: "Stack",
            side: "right",
          },
          { kind: "text", text: "." },
        ],
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
        segments: [
          { kind: "text", text: "Switched to a " },
          {
            kind: "hover",
            trigger: "local database instead of remote",
            body: "Local database eliminated the feedback loop friction that remote databases create. No network latency meant faster iteration, instant test resets, and no waiting on remote infrastructure. This decision had outsized impact on development velocity—I could test database changes instantly and reset the database state without any overhead.",
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
    date: "2025-12-06",
    title: "Accessibile UI Components",
    screenshot: "/screenshots/2025-12-06.png",
    skillsUsed: ["Component Library", "Accessibility", "Developer Experience"],
    theme: "core-features",
    tasks: [
      {
        type: "paragraph",
        segments: [
          {
            kind: "text",
            text: "Built a lightweight component library of accessible primitives to speed up UI work and keep consistency across the site. ",
          },
          {
            kind: "hover",
            trigger: "accessible UI primitives",
            body: "Components were built with keyboard navigation, semantic markup, proper ARIA attributes, and sensible focus styles so new screens could be assembled quickly without sacrificing accessibility.",
            icon: "Bulb",
          },
          { kind: "text", text: " " },
          {
            kind: "hover",
            trigger: "developer DX",
            body: "A small, composable set of primitives reduced repetition and enabled rapid iteration — developers could assemble pages from tested building blocks instead of rewriting UI for each screen.",
            icon: "Stack",
            side: "right",
          },
          { kind: "text", text: "." },
        ],
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
        segments: [
          { kind: "text", text: "Implemented a " },
          {
            kind: "hover",
            trigger: "database metrics system",
            body: "Implementing a database metrics system was a proactive move. Rather than waiting for users to report slowness, I wanted real data on where bottlenecks were forming. This let me optimize the most expensive queries first and gave me confidence that performance would scale as the app grew. It also provided a feedback loop for future architectural decisions.",
            icon: "Flame",
            side: "right",
          },
          { kind: "text", text: ", replaced dynamic heros with " },
          {
            kind: "hover",
            trigger: "static components",
            body: "Switching from dynamic to static components was a lesson in simplicity. The original dynamic hero components were flexible but introduced unnecessary complexity and performance costs. By making them static, I reduced rendering overhead and made the codebase easier to maintain, with no loss in user experience.",
            icon: "Bulb",
            side: "right",
          },
          { kind: "text", text: ", and enabled admins to manage " },
          {
            kind: "hover",
            trigger: "collection products",
            body: "Enabling admins to manage collection products was about putting power in the hands of the people closest to the business. Rather than hard-coding relationships or requiring developer intervention, I built tools that let admins curate collections directly. This not only sped up content updates but also made the platform more adaptable to changing business needs.",
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
    skillsUsed: ["Database Design", "Authentication", "Server Actions"],
    theme: "data-architecture",
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
            body: "Server actions simplify mutations and improve performance. Moving operations to the server eliminates API boilerplate, reduces client-side JavaScript, and provides direct database access without network overhead.",
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
    skillsUsed: ["Performance Optimization", "User Feedback"],
    theme: "data-architecture",
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
            body: "Schema-driven types prevent drift. Initially, static types seemed practical, but auto-generating types directly from the Prisma schema is more effective—it ensures types stay perfectly in sync and prevents the inevitable mismatches that occur with manually maintained types.",
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
    skillsUsed: ["Styling", "Complexity Analysis"],
    theme: "data-architecture",
    tasks: [
      {
        type: "paragraph",
        segments: [
          { kind: "text", text: "I toyed with adding in a " },
          {
            kind: "hover",
            trigger: "theme toggle",
            body: "Theme toggle seemed like a good idea—supporting dark mode and user preference was technically straightforward. But after prototyping, I realized the actual value was near zero. The e-commerce brand relied on specific color psychology and visual hierarchy that dark mode disrupted. Adding the feature would have increased complexity (CSS, context, persistence) for marginal benefit. Sometimes the best architecture decision is knowing what not to build.",
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
    skillsUsed: ["Site Architecture", "Documentation"],
    theme: "data-architecture",
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
    skillsUsed: ["Component Library", "Type Safety"],
    theme: "performance-quality",
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
            body: "Radix UI's headless approach required too much custom styling to match our design system. BaseUI offered better default theming, more design-system-friendly APIs, and less boilerplate. The migration consolidated scattered styling logic and made components feel more cohesive with fewer one-off customizations.",
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
    skillsUsed: ["Search Functionality", "UI Components"],
    theme: "performance-quality",
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
    skillsUsed: ["CI/CD", "Type Safety", "Documentation"],
    theme: "performance-quality",
    tasks: [
      {
        type: "paragraph",
        segments: [
          { kind: "text", text: "Fixed " },
          {
            kind: "hover",
            trigger: "production build issues",
            body: "Fixing production build issues was a reality check—what works in development doesn't always work in production. By setting up CI/CD pipelines and testing in production-like environments, I caught subtle bugs and configuration mismatches early. This investment in build reliability paid off by making deployments stress-free.",
            icon: "AlertCircle",
            side: "right",
          },
          { kind: "text", text: ", unified " },
          {
            kind: "hover",
            trigger: "session types",
            body: "Unifying session types was about reducing cognitive load. Early on, different parts of the app used slightly different type definitions, which led to subtle bugs and confusion. By standardizing on a single source of truth for session types, I made the codebase easier to navigate and reduced the risk of type mismatches.",
            icon: "Bulb",
            side: "right",
          },
          { kind: "text", text: ", and updated " },
          {
            kind: "hover",
            trigger: "documentation",
            body: "Updating documentation wasn't just about onboarding—it was about capturing the architectural decisions and tradeoffs made along the way. Good docs serve as a living record of why things are the way they are, making future changes safer and helping new contributors ramp up quickly.",
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
    skillsUsed: ["Site Architecture", "Server Actions"],
    theme: "performance-quality",
    tasks: [
      {
        type: "paragraph",
        segments: [
          { kind: "text", text: "Migrated to " },
          {
            kind: "hover",
            trigger: "server actions",
            body: "Server actions represented a fundamental architectural shift away from traditional REST APIs. Instead of separate endpoints, mutations lived alongside queries in the same file. This co-location enabled type safety across the server-client boundary, eliminated API boilerplate, and reduced client-side JavaScript. It aligned perfectly with Next.js 13+ and made form submission far simpler.",
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
    skillsUsed: ["Server Actions", "Testing Framework"],
    theme: "performance-quality",
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
    skillsUsed: ["Code Coverage", "Database Design", "Documentation"],
    theme: "performance-quality",
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
