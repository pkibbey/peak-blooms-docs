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
      . Reduce database overhead by{" "}
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
                speculation can waste bandwidth, so disabling it saves data for
                users.
              </p>
            </div>
          </HoverCardContent>
        </HoverCardPositioner>
      </HoverCard>
      . Removed product variants for being{" "}
      <HoverCard>
        <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
          overly complicated
        </HoverCardTrigger>
        <HoverCardPositioner side="right" align="start">
          <HoverCardContent className="md:w-96">
            <div className="flex items-start gap-3">
              <Bulb size={16} className="flex-shrink-0 mt-0.5" />
              <p className="text-sm text-popover-foreground">
                I opted for a simpler solution, where I forced one variant per
                product, and added in a multiple products to describe the
                variants. This could be done because the products will be known
                ahead of time, and won't change much.
              </p>
            </div>
          </HoverCardContent>
        </HoverCardPositioner>
      </HoverCard>
      , and used{" "}
      <HoverCard>
        <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
          generated Prisma types
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
      </HoverCard>{" "}
      instead of static ones.
    </div>
  );

  return <DateCard dateKey="2025-12-10" taskNode={taskNode} />;
}
