import { Bulb } from "tabler-icons-react";
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
      Discussed{" "}
      <HoverCard>
        <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
          client requirements
        </HoverCardTrigger>
        <HoverCardPositioner>
          <HoverCardContent className="md:w-96">
            <div className="flex items-start gap-3">
              <Bulb size={16} className="flex-shrink-0 mt-0.5" />
              <p className="text-sm text-popover-foreground">
                Understanding client needs upfront ensures the project aligns
                with business goals and reduces rework during development.
              </p>
            </div>
          </HoverCardContent>
        </HoverCardPositioner>
      </HoverCard>{" "}
      resulting in work items and a schedule of delivery. Initialized Next.js
      project with TypeScript, BiomeJS, and ShadCN. Wrote{" "}
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
      . Added navigation header with site links.
    </div>
  );

  return <DateCard dateKey="2025-11-22" taskNode={taskNode} />;
}
