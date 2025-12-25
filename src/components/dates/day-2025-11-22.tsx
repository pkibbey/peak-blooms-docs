import { Bulb, Stack } from "tabler-icons-react";
import { DateCard } from "@/components/date-card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardPositioner,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Day20251122() {
  const taskNode = (
    <div>
      <p className="text-base text-foreground-muted leading-relaxed">
        Initialized{" "}
        <HoverCard>
          <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
            Next.js
          </HoverCardTrigger>
          <HoverCardPositioner>
            <HoverCardContent className="md:w-96">
              <div className="flex items-start gap-3">
                <Bulb size={16} className="flex-shrink-0 mt-0.5" />
                <p className="text-sm text-popover-foreground">
                  Next.js provides a robust framework with built-in
                  optimization, file-based routing, and server-side rendering
                  capabilities that accelerate development and improve
                  performance.
                </p>
              </div>
            </HoverCardContent>
          </HoverCardPositioner>
        </HoverCard>{" "}
        project with{" "}
        <HoverCard>
          <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
            TypeScript
          </HoverCardTrigger>
          <HoverCardPositioner>
            <HoverCardContent className="md:w-96">
              <div className="flex items-start gap-3">
                <Bulb size={16} className="flex-shrink-0 mt-0.5" />
                <p className="text-sm text-popover-foreground">
                  Setting up a strong foundation with TypeScript from the start
                  prevents type-related bugs and improves code maintainability
                  as the project grows.
                </p>
              </div>
            </HoverCardContent>
          </HoverCardPositioner>
        </HoverCard>
        ,{" "}
        <HoverCard>
          <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
            BiomeJS
          </HoverCardTrigger>
          <HoverCardPositioner>
            <HoverCardContent className="md:w-96">
              <div className="flex items-start gap-3">
                <Stack size={16} className="flex-shrink-0 mt-0.5" />
                <p className="text-sm text-popover-foreground">
                  BiomeJS provides unified linting and formatting, ensuring code
                  quality and consistency across the project without managing
                  multiple tools.
                </p>
              </div>
            </HoverCardContent>
          </HoverCardPositioner>
        </HoverCard>
        , and{" "}
        <HoverCard>
          <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
            ShadCN
          </HoverCardTrigger>
          <HoverCardPositioner>
            <HoverCardContent className="md:w-96">
              <div className="flex items-start gap-3">
                <Stack size={16} className="flex-shrink-0 mt-0.5" />
                <p className="text-sm text-popover-foreground">
                  Component composition enables flexibility. Using pre-built,
                  composable UI components from ShadCN accelerates development
                  without sacrificing customization.
                </p>
              </div>
            </HoverCardContent>
          </HoverCardPositioner>
        </HoverCard>
        . Wrote{" "}
        <HoverCard>
          <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
            functional requirements docs
          </HoverCardTrigger>
          <HoverCardPositioner>
            <HoverCardContent className="md:w-96">
              <div className="flex items-start gap-3">
                <Bulb size={16} className="flex-shrink-0 mt-0.5" />
                <p className="text-sm text-popover-foreground">
                  Design systems maintain consistency. Clear documentation and
                  design patterns ensure all team members build features
                  cohesively.
                </p>
              </div>
            </HoverCardContent>
          </HoverCardPositioner>
        </HoverCard>{" "}
        and a{" "}
        <HoverCard>
          <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
            style guide
          </HoverCardTrigger>
          <HoverCardPositioner>
            <HoverCardContent className="md:w-96">
              <div className="flex items-start gap-3">
                <Bulb size={16} className="flex-shrink-0 mt-0.5" />
                <p className="text-sm text-popover-foreground">
                  A style guide establishes visual consistency and reusable
                  patterns, providing a single source of truth for design
                  decisions across the entire project.
                </p>
              </div>
            </HoverCardContent>
          </HoverCardPositioner>
        </HoverCard>
        . Also added a navigation header with page links.
      </p>
    </div>
  );

  return (
    <DateCard
      date="2025-11-22"
      title="Project Setup & Design System"
      taskNode={taskNode}
      screenshot="/screenshots/day-1.png"
      skillsUsed={[
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "React",
        "Radix UI",
        "BiomeJS",
      ]}
    />
  );
}
