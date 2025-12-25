import { AlertCircle, Bulb } from "tabler-icons-react";
import { DateCard } from "@/components/date-card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardPositioner,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Day20251128() {
  const taskNode = (
    <div>
      <p className="text-base text-foreground-muted leading-relaxed">
        Implemented{" "}
        <HoverCard>
          <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
            image uploads with validation
          </HoverCardTrigger>
          <HoverCardPositioner side="right" align="start">
            <HoverCardContent className="md:w-96">
              <div className="flex items-start gap-3">
                <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                <p className="text-sm text-popover-foreground">
                  Image validation prevents errors. Validating image dimensions,
                  file sizes, and formats ensures data quality and prevents
                  loading broken or oversized images.
                </p>
              </div>
            </HoverCardContent>
          </HoverCardPositioner>
        </HoverCard>
        . Added{" "}
        <HoverCard>
          <HoverCardTrigger className="text-primary cursor-help underline decoration-dotted hover:text-primary/80">
            product filters
          </HoverCardTrigger>
          <HoverCardPositioner side="right" align="start">
            <HoverCardContent className="md:w-96">
              <div className="flex items-start gap-3">
                <Bulb size={16} className="flex-shrink-0 mt-0.5" />
                <p className="text-sm text-popover-foreground">
                  Consistent headers improve navigation. Standardized page
                  headers provide visual anchors and help users understand their
                  current location in the application.
                </p>
              </div>
            </HoverCardContent>
          </HoverCardPositioner>
        </HoverCard>
        , quantity selectors, and standardized page headers.
      </p>
    </div>
  );

  return (
    <DateCard
      date="2025-11-28"
      title="Media Management & Admin Features"
      taskNode={taskNode}
      skillsUsed={["React", "File Handling", "Validation", "TypeScript"]}
    />
  );
}
