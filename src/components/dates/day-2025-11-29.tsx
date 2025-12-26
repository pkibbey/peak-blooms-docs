import { Bulb, Stack } from "tabler-icons-react";
import { DateCard } from "@/components/date-card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardPositioner,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Day20251129() {
  const taskNode = (
    <div>
      <p className="text-base text-foreground-muted leading-relaxed">
        Created a{" "}
        <HoverCard>
          <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
            unified Data Access Layer
          </HoverCardTrigger>
          <HoverCardPositioner side="right" align="start">
            <HoverCardContent className="md:w-96">
              <div className="flex items-start gap-3">
                <Stack size={16} className="flex-shrink-0 mt-0.5" />
                <p className="text-sm text-popover-foreground">
                  DAL improves code maintainability. A centralized data access
                  layer abstracts database queries, making it easier to modify
                  data logic without changing business logic.
                </p>
              </div>
            </HoverCardContent>
          </HoverCardPositioner>
        </HoverCard>
        . Implemented{" "}
        <HoverCard>
          <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
            form validation with Zod
          </HoverCardTrigger>
          <HoverCardPositioner side="right" align="start">
            <HoverCardContent className="md:w-96">
              <div className="flex items-start gap-3">
                <Bulb size={16} className="flex-shrink-0 mt-0.5" />
                <p className="text-sm text-popover-foreground">
                  Early validation enhances user experience. Validating form
                  input on the client side before submission reduces server load
                  and provides immediate feedback to users.
                </p>
              </div>
            </HoverCardContent>
          </HoverCardPositioner>
        </HoverCard>{" "}
        and added price multiplier logic.
      </p>
    </div>
  );

  return (
    <DateCard
      date="2025-11-29"
      title="Validation & Data Architecture"
      taskNode={taskNode}
      skillsUsed={["Zod", "TypeScript", "Data Access", "React"]}
      screenshot="/screenshots/2025-11-29.png"
    />
  );
}
