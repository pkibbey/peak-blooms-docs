"use client";

import TaskRenderer from "@/components/dates/task-renderer";
import type { DayMetadata } from "@/components/dates-metadata";
import { Card } from "@/components/ui/card";

interface DateCardDenseProps {
  day: DayMetadata;
}

export function DateCardDense({ day }: DateCardDenseProps) {
  const title = day.title;

  return (
    <Card size="sm" className="p-4 border-border/30" aria-label={title}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          {title && (
            <h4 className="text-base font-semibold text-foreground">{title}</h4>
          )}

          <div className="text-sm text-muted-foreground mt-2 leading-snug">
            <TaskRenderer tasks={day.tasks} />
          </div>
        </div>
      </div>
    </Card>
  );
}
