import { AlertCircle, Flame } from "tabler-icons-react";
import { DateCard } from "@/components/date-card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardPositioner,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Day20251201() {
  const taskNode = (
    <div>
      Migrated from next-auth to{" "}
      <HoverCard>
        <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
          better-auth
        </HoverCardTrigger>
        <HoverCardPositioner side="right" align="start">
          <HoverCardContent className="md:w-96">
            <div className="flex items-start gap-3">
              <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
              <p className="text-sm text-popover-foreground">
                Authentication library evaluation improves fit. Evaluating
                alternatives ensures the chosen library aligns with project
                requirements and architecture.
              </p>
            </div>
          </HoverCardContent>
        </HoverCardPositioner>
      </HoverCard>
      . Removed{" "}
      <HoverCard>
        <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
          dead code
        </HoverCardTrigger>
        <HoverCardPositioner side="right" align="start">
          <HoverCardContent className="md:w-96">
            <div className="flex items-start gap-3">
              <Flame size={16} className="flex-shrink-0 mt-0.5" />
              <p className="text-sm text-popover-foreground">
                Dead code removal improves maintainability. Unused code
                increases cognitive load and makes refactoring harder, so
                removing it keeps the codebase clean.
              </p>
            </div>
          </HoverCardContent>
        </HoverCardPositioner>
      </HoverCard>{" "}
      and simplified{" "}
      <HoverCard>
        <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
          admin dashboard
        </HoverCardTrigger>
        <HoverCardPositioner side="right" align="start">
          <HoverCardContent className="md:w-96">
            <div className="flex items-start gap-3">
              <Flame size={16} className="flex-shrink-0 mt-0.5" />
              <p className="text-sm text-popover-foreground">
                Simplified admin dashboard layout. A clean, intuitive layout
                enhances user experience and makes navigation easier.
              </p>
            </div>
          </HoverCardContent>
        </HoverCardPositioner>
      </HoverCard>
      .
    </div>
  );

  return <DateCard dateKey="2025-12-01" taskNode={taskNode} />;
}
