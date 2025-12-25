import { Bulb, Flame } from "tabler-icons-react";
import { DateCard } from "@/components/date-card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardPositioner,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Day20251210() {
  const taskNode = (
    <div>
      <p className="text-base text-foreground-muted leading-relaxed">
        Improved UI with{" "}
        <HoverCard>
          <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
            rich toast notifications
          </HoverCardTrigger>
          <HoverCardPositioner side="right" align="start">
            <HoverCardContent className="md:w-96">
              <div className="flex items-start gap-3">
                <Bulb size={16} className="flex-shrink-0 mt-0.5" />
                <p className="text-sm text-popover-foreground">
                  Rich UI feedback improves experience. Colorful, well-designed
                  notifications make feedback more noticeable and easier to
                  understand.
                </p>
              </div>
            </HoverCardContent>
          </HoverCardPositioner>
        </HoverCard>
        . Optimized performance by{" "}
        <HoverCard>
          <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
            disabling prefetch
          </HoverCardTrigger>
          <HoverCardPositioner side="right" align="start">
            <HoverCardContent className="md:w-96">
              <div className="flex items-start gap-3">
                <Flame size={16} className="flex-shrink-0 mt-0.5" />
                <p className="text-sm text-popover-foreground">
                  Disabling prefetch prevents unnecessary requests. Prefetching
                  speculation can waste bandwidth, so disabling it saves data
                  for users.
                </p>
              </div>
            </HoverCardContent>
          </HoverCardPositioner>
        </HoverCard>{" "}
        and used{" "}
        <HoverCard>
          <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
            generated types
          </HoverCardTrigger>
          <HoverCardPositioner side="right" align="start">
            <HoverCardContent className="md:w-96">
              <div className="flex items-start gap-3">
                <Bulb size={16} className="flex-shrink-0 mt-0.5" />
                <p className="text-sm text-popover-foreground">
                  Generated types stay in sync with schema. Auto-generated types
                  from Prisma ensure type safety and prevent schema drift.
                </p>
              </div>
            </HoverCardContent>
          </HoverCardPositioner>
        </HoverCard>
        . Also removed product variants for being overly complicated.
      </p>
    </div>
  );

  return (
    <DateCard
      date="2025-12-10"
      title="Performance & Type System Updates"
      taskNode={taskNode}
      skillsUsed={["Next.js", "TypeScript", "Optimization"]}
    />
  );
}
