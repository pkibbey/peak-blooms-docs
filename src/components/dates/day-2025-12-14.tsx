import { Bulb, Flame } from "tabler-icons-react";
import { DateCard } from "@/components/date-card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardPositioner,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Day20251214() {
  const taskNode = (
    <div>
      Added{" "}
      <HoverCard>
        <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
          site search
        </HoverCardTrigger>
        <HoverCardPositioner side="right" align="start">
          <HoverCardContent className="md:w-96">
            <div className="flex items-start gap-3">
              <Flame size={16} className="flex-shrink-0 mt-0.5" />
              <p className="text-sm text-popover-foreground">
                Site search improves product discovery. A prominent search
                feature helps users find products faster, reducing friction in
                the shopping journey.
              </p>
            </div>
          </HoverCardContent>
        </HoverCardPositioner>
      </HoverCard>{" "}
      to navigation and implemented{" "}
      <HoverCard>
        <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
          price visibility controls
        </HoverCardTrigger>
        <HoverCardPositioner side="right" align="start">
          <HoverCardContent className="md:w-96">
            <div className="flex items-start gap-3">
              <Bulb size={16} className="flex-shrink-0 mt-0.5" />
              <p className="text-sm text-popover-foreground">
                Hidden prices incentivize user signup. Restricting price
                visibility encourages account creation and user engagement.
              </p>
            </div>
          </HoverCardContent>
        </HoverCardPositioner>
      </HoverCard>
      .
    </div>
  );

  return <DateCard dateKey="2025-12-14" taskNode={taskNode} />;
}
