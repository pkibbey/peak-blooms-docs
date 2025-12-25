"use client";

import { differenceInDays } from "date-fns";
import Image from "next/image";
import type { ReactNode } from "react";

interface DateComponentProps {
  date: string;
  title: string;
  skillsUsed: string[];
  screenshot?: string;
  taskNode?: ReactNode;
}

export function DateCard({
  date,
  title,
  screenshot,
  taskNode,
}: DateComponentProps) {
  return (
    <div className="bg-white border rounded-lg border-border/50 shadow-xl hover:border-border transition-colors ring-none">
      <div className="p-6 grid grid-cols-[auto_300px] gap-8">
        <div className="space-y-3">
          {/* Header */}
          <h3 className="flex items-center gap-2 text-left text-xl font-bold text-foreground">
            Day {differenceInDays(date, new Date("2025-11-21"))}: {title}
          </h3>

          {/* Tasks */}
          {taskNode}
        </div>

        {screenshot && (
          <div className="space-y-6">
            {/* Screenshot */}
            <div>
              <div className="rounded-lg overflow-hidden border border-border/70 shadow-2xs">
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
