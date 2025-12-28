import { Flame, Stack } from "tabler-icons-react";
import { DateCard } from "@/components/date-card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardPositioner,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Day20251213() {
  const taskNode = (
    <div>
      Consolidated{" "}
      <HoverCard>
        <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
          Cart and Order concepts
        </HoverCardTrigger>
        <HoverCardPositioner side="right" align="start">
          <HoverCardContent className="md:w-96">
            <div className="flex items-start gap-3">
              <Flame size={16} className="flex-shrink-0 mt-0.5" />
              <p className="text-sm text-popover-foreground">
                Simpler systems are easier to maintain. Consolidating redundant
                concepts reduces mental overhead and makes features easier to
                understand.
              </p>
            </div>
          </HoverCardContent>
        </HoverCardPositioner>
      </HoverCard>
      . Migrated UI from Radix to{" "}
      <HoverCard>
        <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
          BaseUI
        </HoverCardTrigger>
        <HoverCardPositioner side="right" align="start">
          <HoverCardContent className="md:w-96">
            <div className="flex items-start gap-3">
              <Stack size={16} className="flex-shrink-0 mt-0.5" />
              <p className="text-sm text-popover-foreground">
                UI framework migration improves design consistency. BaseUI
                provides better alignment with our design system and improved
                component APIs.
              </p>
            </div>
          </HoverCardContent>
        </HoverCardPositioner>
      </HoverCard>
      .
    </div>
  );

  return <DateCard dateKey="2025-12-13" taskNode={taskNode} />;
}
