import { Bulb, Flame } from "tabler-icons-react";
import { DateCard } from "@/components/date-card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardPositioner,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Day20251209() {
  const taskNode = (
    <div>
      Replaced magic link with{" "}
      <HoverCard>
        <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
          Google authentication
        </HoverCardTrigger>
        <HoverCardPositioner side="right" align="start">
          <HoverCardContent className="md:w-96">
            <div className="flex items-start gap-3">
              <Bulb size={16} className="flex-shrink-0 mt-0.5" />
              <p className="text-sm text-popover-foreground">
                Google auth simplifies user experience. OAuth providers
                eliminate password management friction and leverage existing
                user accounts.
              </p>
            </div>
          </HoverCardContent>
        </HoverCardPositioner>
      </HoverCard>
      . Simplified{" "}
      <HoverCard>
        <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
          checkout
        </HoverCardTrigger>
        <HoverCardPositioner side="right" align="start">
          <HoverCardContent className="md:w-96">
            <div className="flex items-start gap-3">
              <Flame size={16} className="flex-shrink-0 mt-0.5" />
              <p className="text-sm text-popover-foreground">
                Simplified checkout experience. Streamlined the checkout process
                to focus on essential steps.
              </p>
            </div>
          </HoverCardContent>
        </HoverCardPositioner>
      </HoverCard>
      , optimized seed scripts, and implemented{" "}
      <HoverCard>
        <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
          ISR
        </HoverCardTrigger>
        <HoverCardPositioner side="right" align="start">
          <HoverCardContent className="md:w-96">
            <div className="flex items-start gap-3">
              <Flame size={16} className="flex-shrink-0 mt-0.5" />
              <p className="text-sm text-popover-foreground">
                Static rendering improves performance. Pre-rendering static
                pages at build time eliminates runtime rendering overhead.
              </p>
            </div>
          </HoverCardContent>
        </HoverCardPositioner>
      </HoverCard>
      .
    </div>
  );

  return <DateCard dateKey="2025-12-09" taskNode={taskNode} />;
}
