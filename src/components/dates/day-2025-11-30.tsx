import { Bulb, Flame, InfoCircle } from "tabler-icons-react";
import { DateCard } from "@/components/date-card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardPositioner,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Day20251130() {
  const taskNode = (
    <div>
      <p className="text-base text-foreground-muted leading-relaxed">
        Created{" "}
        <HoverCard>
          <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
            typography utilities
          </HoverCardTrigger>
          <HoverCardPositioner side="right" align="start">
            <HoverCardContent className="md:w-96">
              <div className="flex items-start gap-3">
                <Bulb size={16} className="flex-shrink-0 mt-0.5" />
                <p className="text-sm text-popover-foreground">
                  Typography systems maintain consistency. Creating reusable
                  typography utilities ensures uniform text styling across the
                  application and reduces duplication.
                </p>
              </div>
            </HoverCardContent>
          </HoverCardPositioner>
        </HoverCard>
        . Added{" "}
        <HoverCard>
          <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
            JWT authentication
          </HoverCardTrigger>
          <HoverCardPositioner side="right" align="start">
            <HoverCardContent className="md:w-96">
              <div className="flex items-start gap-3">
                <Flame size={16} className="flex-shrink-0 mt-0.5" />
                <p className="text-sm text-popover-foreground">
                  JWT tokens reduce database load. Stateless JWT authentication
                  eliminates expensive database lookups on every request and
                  improves performance.
                </p>
              </div>
            </HoverCardContent>
          </HoverCardPositioner>
        </HoverCard>
        ,{" "}
        <HoverCard>
          <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
            database indexes
          </HoverCardTrigger>
          <HoverCardPositioner side="right" align="start">
            <HoverCardContent className="md:w-96">
              <div className="flex items-start gap-3">
                <Flame size={16} className="flex-shrink-0 mt-0.5" />
                <p className="text-sm text-popover-foreground">
                  Database indexes significantly improve performance. Proper
                  indexing on frequently queried columns dramatically speeds up
                  database queries.
                </p>
              </div>
            </HoverCardContent>
          </HoverCardPositioner>
        </HoverCard>
        , and{" "}
        <HoverCard>
          <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
            legal pages
          </HoverCardTrigger>
          <HoverCardPositioner side="right" align="start">
            <HoverCardContent className="md:w-96">
              <div className="flex items-start gap-3">
                <InfoCircle size={16} className="flex-shrink-0 mt-0.5" />
                <p className="text-sm text-popover-foreground">
                  Legal pages build trust. Providing privacy policies, terms of
                  service, and company information establishes credibility with
                  users.
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
      date="2025-11-30"
      title="Typography, Performance & Site Pages"
      taskNode={taskNode}
      skillsUsed={["Tailwind CSS", "TypeScript", "JWT", "Optimization"]}
    />
  );
}
