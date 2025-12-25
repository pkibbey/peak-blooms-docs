import { Bulb, Stack } from "tabler-icons-react";
import { DateCard } from "@/components/date-card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardPositioner,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Day20251203() {
  const taskNode = (
    <div>
      <p className="text-base text-foreground-muted leading-relaxed">
        Added{" "}
        <HoverCard>
          <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
            search
          </HoverCardTrigger>
          <HoverCardPositioner side="right" align="start">
            <HoverCardContent className="md:w-96">
              <div className="flex items-start gap-3">
                <Bulb size={16} className="flex-shrink-0 mt-0.5" />
                <p className="text-sm text-popover-foreground">
                  Search functionality enhances product discovery. A prominent
                  search feature helps users find products faster, reducing
                  friction in the shopping journey.
                </p>
              </div>
            </HoverCardContent>
          </HoverCardPositioner>
        </HoverCard>
        , implemented{" "}
        <HoverCard>
          <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
            sortable tables
          </HoverCardTrigger>
          <HoverCardPositioner side="right" align="start">
            <HoverCardContent className="md:w-96">
              <div className="flex items-start gap-3">
                <Bulb size={16} className="flex-shrink-0 mt-0.5" />
                <p className="text-sm text-popover-foreground">
                  Sortable tables enable data exploration. Allowing users to
                  sort by different columns makes it easier to find and analyze
                  data.
                </p>
              </div>
            </HoverCardContent>
          </HoverCardPositioner>
        </HoverCard>
        , and enabled{" "}
        <HoverCard>
          <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
            many-to-many collections
          </HoverCardTrigger>
          <HoverCardPositioner side="right" align="start">
            <HoverCardContent className="md:w-96">
              <div className="flex items-start gap-3">
                <Stack size={16} className="flex-shrink-0 mt-0.5" />
                <p className="text-sm text-popover-foreground">
                  Many-to-many relationships provide flexibility. Supporting
                  multiple collections per product enables richer product
                  categorization without data duplication.
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
      date="2025-12-03"
      title="Admin Enhancements & Data Management"
      taskNode={taskNode}
      skillsUsed={["React", "Prisma", "Admin UI", "Search"]}
    />
  );
}
