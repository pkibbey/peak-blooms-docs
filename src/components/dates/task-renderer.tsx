"use client";

import { Trigger } from "../trigger";
import {
  HoverCard,
  HoverCardContent,
  HoverCardPositioner,
} from "../ui/hover-card";
import { iconMap } from "./icon-map";
import type { InlineSegment, Task } from "./task";

export default function TaskRenderer({ tasks }: { tasks?: Task[] }) {
  if (!tasks || tasks.length === 0) return null;

  return (
    <>
      {tasks.map((task, idx) => {
        if (task.type === "paragraph") {
          return (
            <p
              key={idx}
              className="text-sm text-foreground-muted leading-relaxed"
            >
              {renderSegments(task.segments)}
            </p>
          );
        }

        if (task.type === "list") {
          return (
            <ul key={idx} className="list-disc ml-5 space-y-2">
              {task.items.map((item, i) => (
                <li key={i}>
                  <TaskRenderer tasks={[item]} />
                </li>
              ))}
            </ul>
          );
        }

        return null;
      })}
    </>
  );
}

function renderSegments(segments: InlineSegment[]) {
  return segments.map((seg, i) => {
    if (seg.kind === "text") {
      return <span key={i}>{seg.text}</span>;
    }

    if (seg.kind === "link") {
      return (
        <a
          key={i}
          href={seg.href}
          target={seg.blank ? "_blank" : undefined}
          className="text-primary underline focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:ring-offset-2 rounded-sm outline-none"
          tabIndex={0}
        >
          {seg.text}
        </a>
      );
    }

    if (seg.kind === "em" || seg.kind === "strong") {
      const children = renderSegments(seg.segments);
      return seg.kind === "em" ? (
        <em key={i}>{children}</em>
      ) : (
        <strong key={i}>{children}</strong>
      );
    }

    if (seg.kind === "hover") {
      const Icon = seg.icon ? iconMap[seg.icon] : null;
      return (
        <HoverCard key={i}>
          <Trigger>{seg.trigger}</Trigger>
          <HoverCardPositioner side={seg.side}>
            <HoverCardContent className="md:w-96">
              <div className="flex items-start gap-3">
                {Icon ? (
                  <Icon size={16} className="flex-shrink-0 mt-0.5" />
                ) : null}
                <p className="text-sm text-popover-foreground">{seg.body}</p>
              </div>
            </HoverCardContent>
          </HoverCardPositioner>
        </HoverCard>
      );
    }

    return null;
  });
}
