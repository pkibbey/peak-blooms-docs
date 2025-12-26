import { Bulb, InfoCircle, Stack } from "tabler-icons-react";
import { DateCard } from "@/components/date-card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardPositioner,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Day20251204() {
  const taskNode = (
    <div>
      <p className="text-base text-foreground-muted leading-relaxed">
        Added{" "}
        <HoverCard>
          <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
            featured collections
          </HoverCardTrigger>
          <HoverCardPositioner side="right" align="start">
            <HoverCardContent className="md:w-96">
              <div className="flex items-start gap-3">
                <Bulb size={16} className="flex-shrink-0 mt-0.5" />
                <p className="text-sm text-popover-foreground">
                  Featured content highlights key offerings. Showcasing featured
                  collections draws attention to important products and improves
                  discoverability.
                </p>
              </div>
            </HoverCardContent>
          </HoverCardPositioner>
        </HoverCard>
        . Created a{" "}
        <HoverCard>
          <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
            shipping banner component
          </HoverCardTrigger>
          <HoverCardPositioner side="right" align="start">
            <HoverCardContent className="md:w-96">
              <div className="flex items-start gap-3">
                <InfoCircle size={16} className="flex-shrink-0 mt-0.5" />
                <p className="text-sm text-popover-foreground">
                  Shipping messaging builds customer confidence. Clear shipping
                  information reassures customers and reduces purchase anxiety.
                </p>
              </div>
            </HoverCardContent>
          </HoverCardPositioner>
        </HoverCard>{" "}
        and a{" "}
        <HoverCard>
          <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
            product card component
          </HoverCardTrigger>
          <HoverCardPositioner side="right" align="start">
            <HoverCardContent className="md:w-96">
              <div className="flex items-start gap-3">
                <Stack size={16} className="flex-shrink-0 mt-0.5" />
                <p className="text-sm text-popover-foreground">
                  Reusable components reduce code duplication. A centralized
                  product card component ensures consistent presentation across
                  browse, search, and collection pages.
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
      date="2025-12-04"
      title="UI Components & Featured Collections"
      taskNode={taskNode}
      skillsUsed={["React", "Tailwind CSS", "Components"]}
      screenshot="/screenshots/2025-12-04.png"
    />
  );
}
