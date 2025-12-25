import { AlertCircle } from "tabler-icons-react";
import { DateCard } from "@/components/date-card";
import { Trigger } from "../trigger";
import { HoverCard } from "../ui/hover-card";

export default function Day20251124() {
  const taskNode = (
    <div>
      <p className="text-base text-foreground-muted leading-relaxed">
        Setup full site{" "}
        <HoverCard>
          <Trigger>authentication</Trigger>
        </HoverCard>{" "}
        (sign up, login, gated access, and admin user mananagment), and added{" "}
        <HoverCard>
          <Trigger>product filters</Trigger>
        </HoverCard>{" "}
        to the shop page.
      </p>
    </div>
  );

  return (
    <DateCard
      date="2025-11-24"
      title="Authentication & Product filtering"
      taskNode={taskNode}
      skillsUsed={["Prisma", "TypeScript", "Authentication", "Next.js"]}
    />
  );
}
