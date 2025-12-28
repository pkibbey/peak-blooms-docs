import { Bulb, Flame } from "tabler-icons-react";
import { DateCard } from "@/components/date-card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardPositioner,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Day20251217() {
  const taskNode = (
    <div>
      Completed server action migrations and refactored types to use{" "}
      <HoverCard>
        <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
          generated Prisma types
        </HoverCardTrigger>
        <HoverCardPositioner side="right" align="start">
          <HoverCardContent className="md:w-96">
            <div className="flex items-start gap-3">
              <Bulb size={16} className="flex-shrink-0 mt-0.5" />
              <p className="text-sm text-popover-foreground">
                Generated types stay synchronized with schema. Auto-generating
                types from Prisma ensures schemas and types never drift apart.
              </p>
            </div>
          </HoverCardContent>
        </HoverCardPositioner>
      </HoverCard>
      . Added{" "}
      <HoverCard>
        <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
          vitest framework
        </HoverCardTrigger>
        <HoverCardPositioner side="right" align="start">
          <HoverCardContent className="md:w-96">
            <div className="flex items-start gap-3">
              <Flame size={16} className="flex-shrink-0 mt-0.5" />
              <p className="text-sm text-popover-foreground">
                Testing frameworks automate quality assurance. Integrated
                testing frameworks enable developers to catch regressions
                automatically.
              </p>
            </div>
          </HoverCardContent>
        </HoverCardPositioner>
      </HoverCard>{" "}
      for unit testing.
    </div>
  );

  return <DateCard dateKey="2025-12-17" taskNode={taskNode} />;
}
