"use client";

import { differenceInDays } from "date-fns";
import Image from "next/image";
import type { ReactNode } from "react";
import { ChevronDown } from "tabler-icons-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardPositioner,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface Task {
  name: string;
  lesson?: {
    icon: ReactNode;
    description: string;
  };
}

interface DateComponentProps {
  date: string;
  title: string;
  summary: string;
  tasks: Task[];
  skillsUsed: string[];
  codeSnippet?: {
    language: string;
    code: string;
  };
  screenshot?: string;
}

export function DateCard({
  date,
  title,
  summary,
  tasks,
  screenshot,
}: DateComponentProps) {
  return (
    <div className="bg-white border rounded-lg border-border/50 shadow-xl hover:border-border transition-colors ring-none">
      <div className="flex flex-col justify-start p-6 w-full group">
        {/* Header - Always visible */}
        <div className="flex-col space-y-1">
          <h3 className="flex items-center gap-2 text-left text-xl font-bold text-foreground">
            Day {differenceInDays(date, new Date("2025-11-21"))}: {title}
          </h3>

          <p className="text-left text-sm text-muted-foreground leading-relaxed">
            {summary}
          </p>
        </div>
      </div>
      <div className="p-6 grid grid-cols-2 gap-6 border-t border-border/30 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:collapse">
        {/* Tasks */}
        <div>
          <h4 className="font-semibold text-foreground mb-3">
            Tasks Completed
          </h4>
          <ul className="space-y-2">
            {tasks.map((task, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                {task.lesson ? (
                  <HoverCard>
                    <HoverCardTrigger className="text-base text-primary/80 cursor-help underline decoration-dotted hover:text-primary">
                      {task.name}
                    </HoverCardTrigger>
                    <HoverCardPositioner
                      side="right"
                      align="start"
                      sideOffset={16}
                      alignOffset={-16}
                    >
                      <HoverCardContent className="md:w-128">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-0.5">
                            {task.lesson.icon}
                          </div>
                          <p className="text-sm text-popover-foreground">
                            {task.lesson.description}
                          </p>
                        </div>
                      </HoverCardContent>
                    </HoverCardPositioner>
                  </HoverCard>
                ) : (
                  <span className="text-base text-foreground-muted">
                    {task.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {screenshot && (
          <div className="space-y-6">
            {/* Screenshot */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">Screenshot</h4>
              <div className="rounded-lg overflow-hidden border border-border/50">
                <Image
                  src={screenshot}
                  alt={`Date ${date} screenshot`}
                  width={800}
                  height={600}
                  className="w-full h-auto bg-muted"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
