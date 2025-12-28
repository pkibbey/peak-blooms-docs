import { InfoCircle } from "tabler-icons-react";
import { DateCard } from "@/components/date-card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardPositioner,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Day20251212() {
  const taskNode = (
    <div>
      Unified{" "}
      <HoverCard>
        <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
          shipping and delivery terminology
        </HoverCardTrigger>
        <HoverCardPositioner side="right" align="start">
          <HoverCardContent className="md:w-96">
            <div className="flex items-start gap-3">
              <InfoCircle size={16} className="flex-shrink-0 mt-0.5" />
              <p className="text-sm text-popover-foreground">
                Consistent terminology prevents confusion. Using the same terms
                consistently across documentation, UI, and code reduces
                cognitive load and improves clarity.
              </p>
            </div>
          </HoverCardContent>
        </HoverCardPositioner>
      </HoverCard>{" "}
      across the application.
    </div>
  );

  return <DateCard dateKey="2025-12-12" taskNode={taskNode} />;
}
