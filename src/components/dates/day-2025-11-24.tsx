import { DateCard } from "@/components/date-card";
import { Trigger } from "../trigger";
import { HoverCard } from "../ui/hover-card";

export default function Day20251124() {
  const taskNode = (
    <div>
      Setup full site{" "}
      <HoverCard>
        <Trigger>authentication</Trigger>
      </HoverCard>{" "}
      (sign up, login, gated access, and admin user mananagment), and added{" "}
      <HoverCard>
        <Trigger>product filters</Trigger>
      </HoverCard>{" "}
      to the shop page.
    </div>
  );

  return <DateCard dateKey="2025-11-24" taskNode={taskNode} />;
}
