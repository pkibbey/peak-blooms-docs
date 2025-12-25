import { Bulb, Flame } from "tabler-icons-react";
import { DateCard } from "@/components/date-card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardPositioner,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Day20251202() {
  const taskNode = (
    <div>
      <p className="text-base text-foreground-muted leading-relaxed">
        Created a{" "}
        <HoverCard>
          <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
            CSV seeding script
          </HoverCardTrigger>
          <HoverCardPositioner side="right" align="start">
            <HoverCardContent className="md:w-96">
              <div className="flex items-start gap-3">
                <Flame size={16} className="flex-shrink-0 mt-0.5" />
                <p className="text-sm text-popover-foreground">
                  CSV enables bulk product imports. Parsing CSV files automates
                  bulk data imports, reducing manual entry and improving data
                  consistency.
                </p>
              </div>
            </HoverCardContent>
          </HoverCardPositioner>
        </HoverCard>{" "}
        with{" "}
        <HoverCard>
          <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
            upsert logic
          </HoverCardTrigger>
          <HoverCardPositioner side="right" align="start">
            <HoverCardContent className="md:w-96">
              <div className="flex items-start gap-3">
                <Bulb size={16} className="flex-shrink-0 mt-0.5" />
                <p className="text-sm text-popover-foreground">
                  Upsert logic handles data updates safely. Upsert (update or
                  insert) operations prevent data loss and are safer for seeding
                  existing data.
                </p>
              </div>
            </HoverCardContent>
          </HoverCardPositioner>
        </HoverCard>
        . Added{" "}
        <HoverCard>
          <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
            pagination
          </HoverCardTrigger>
          <HoverCardPositioner side="right" align="start">
            <HoverCardContent className="md:w-96">
              <div className="flex items-start gap-3">
                <Flame size={16} className="flex-shrink-0 mt-0.5" />
                <p className="text-sm text-popover-foreground">
                  Pagination improves performance and UX. Breaking large
                  datasets into pages reduces initial load time and makes
                  browsing more intuitive.
                </p>
              </div>
            </HoverCardContent>
          </HoverCardPositioner>
        </HoverCard>{" "}
        to shop and improved inspiration page design.
      </p>
    </div>
  );

  return (
    <DateCard
      date="2025-12-02"
      title="Pagination, CSV & Data Management"
      taskNode={taskNode}
      skillsUsed={["CSV", "Prisma", "Next.js", "Node.js"]}
    />
  );
}
