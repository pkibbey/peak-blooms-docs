import { Bulb } from "tabler-icons-react";
import { DateCard } from "@/components/date-card";
import { Trigger } from "../trigger";
import {
  HoverCard,
  HoverCardContent,
  HoverCardPositioner,
} from "../ui/hover-card";

export default function Day20251123() {
  const taskNode = (
    <div>
      Created{" "}
      <HoverCard>
        <Trigger>UI components</Trigger>
        <HoverCardPositioner>
          <HoverCardContent className="md:w-96">
            <div className="flex items-start gap-3">
              <Bulb size={16} className="flex-shrink-0 mt-0.5" />
              <p className="text-sm text-popover-foreground">
                Design systems maintain consistency. Clear documentation and
                design patterns ensure all team members build features
                cohesively.
              </p>
            </div>
          </HoverCardContent>
        </HoverCardPositioner>
      </HoverCard>
      , generated{" "}
      <HoverCard>
        <Trigger>placeholder images</Trigger>
      </HoverCard>
      , added site{" "}
      <HoverCard>
        <Trigger>metadata</Trigger>
      </HoverCard>
      , and created a schema-defined{" "}
      <HoverCard>
        <Trigger>database</Trigger>
      </HoverCard>
      .
    </div>
  );

  return <DateCard dateKey="2025-11-23" taskNode={taskNode} />;
}
