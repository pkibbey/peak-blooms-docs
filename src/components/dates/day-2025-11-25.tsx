import { Flame, InfoCircle, Stack } from "tabler-icons-react";
import { DateCard } from "@/components/date-card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardPositioner,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Day20251125() {
  const taskNode = (
    <div>
      <p className="text-base text-foreground-muted leading-relaxed">
        Refactored shop and auth to use{" "}
        <HoverCard>
          <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
            server-side rendering
          </HoverCardTrigger>
          <HoverCardPositioner side="right" align="start">
            <HoverCardContent className="md:w-96">
              <div className="flex items-start gap-3">
                <Flame size={16} className="flex-shrink-0 mt-0.5" />
                <p className="text-sm text-popover-foreground">
                  Server components improve performance. Moving rendering to the
                  server reduces client-side JavaScript and enables faster
                  initial page loads.
                </p>
              </div>
            </HoverCardContent>
          </HoverCardPositioner>
        </HoverCard>
        . Created a{" "}
        <HoverCard>
          <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
            shopping cart
          </HoverCardTrigger>
          <HoverCardPositioner side="right" align="start">
            <HoverCardContent className="md:w-96">
              <div className="flex items-start gap-3">
                <InfoCircle size={16} className="flex-shrink-0 mt-0.5" />
                <p className="text-sm text-popover-foreground">
                  Cart functionality is essential for e-commerce. A smooth
                  shopping cart experience reduces friction and increases
                  conversion rates.
                </p>
              </div>
            </HoverCardContent>
          </HoverCardPositioner>
        </HoverCard>{" "}
        workflow and replaced HTML elements with{" "}
        <HoverCard>
          <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
            UI components
          </HoverCardTrigger>
          <HoverCardPositioner side="right" align="start">
            <HoverCardContent className="md:w-96">
              <div className="flex items-start gap-3">
                <Stack size={16} className="flex-shrink-0 mt-0.5" />
                <p className="text-sm text-popover-foreground">
                  UI components standardize interfaces. Replacing raw HTML with
                  components ensures consistent styling, accessibility, and
                  behavior across the application.
                </p>
              </div>
            </HoverCardContent>
          </HoverCardPositioner>
        </HoverCard>
        . Also added content management for admin users.
      </p>
    </div>
  );

  return (
    <DateCard
      date="2025-11-25"
      title="Server Components & UI Refactoring"
      taskNode={taskNode}
      skillsUsed={["Next.js", "Server Components", "Radix UI", "TypeScript"]}
      screenshot="/screenshots/2025-11-25.png"
    />
  );
}
