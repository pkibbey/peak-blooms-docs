import { Bulb, Flame, InfoCircle } from "tabler-icons-react";
import { DateCard } from "@/components/date-card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardPositioner,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Day20251127() {
  const taskNode = (
    <div>
      <p className="text-base text-foreground-muted leading-relaxed">
        Added{" "}
        <HoverCard>
          <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
            BiomeJS for linting and formatting
          </HoverCardTrigger>
          <HoverCardPositioner side="right" align="start">
            <HoverCardContent className="md:w-96">
              <div className="flex items-start gap-3">
                <Bulb size={16} className="flex-shrink-0 mt-0.5" />
                <p className="text-sm text-popover-foreground">
                  Code formatting maintains consistency. Automated linting and
                  formatting tools enforce coding standards, reduce code review
                  friction, and improve readability.
                </p>
              </div>
            </HoverCardContent>
          </HoverCardPositioner>
        </HoverCard>
        . Refactored large{" "}
        <HoverCard>
          <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
            components into smaller files
          </HoverCardTrigger>
          <HoverCardPositioner side="right" align="start">
            <HoverCardContent className="md:w-96">
              <div className="flex items-start gap-3">
                <Flame size={16} className="flex-shrink-0 mt-0.5" />
                <p className="text-sm text-popover-foreground">
                  Component extraction reduces duplication. Breaking large
                  components into smaller, focused pieces makes them reusable
                  and easier to test and maintain.
                </p>
              </div>
            </HoverCardContent>
          </HoverCardPositioner>
        </HoverCard>{" "}
        and built{" "}
        <HoverCard>
          <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
            order history pages
          </HoverCardTrigger>
          <HoverCardPositioner side="right" align="start">
            <HoverCardContent className="md:w-96">
              <div className="flex items-start gap-3">
                <InfoCircle size={16} className="flex-shrink-0 mt-0.5" />
                <p className="text-sm text-popover-foreground">
                  Account features improve user retention. Providing users with
                  access to their order history and account settings increases
                  engagement and reduces support burden.
                </p>
              </div>
            </HoverCardContent>
          </HoverCardPositioner>
        </HoverCard>
        .
      </p>
    </div>
  );

  return (
    <DateCard
      date="2025-11-27"
      title="Code Quality & Account Features"
      taskNode={taskNode}
      skillsUsed={["React", "TypeScript", "Refactoring", "Code Quality"]}
      screenshot="/screenshots/2025-11-27.png"
    />
  );
}
