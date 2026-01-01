"use client";

import TaskRenderer from "@/components/dates/task-renderer";
import { daysMetadata } from "@/components/dates-metadata";
import { Card } from "@/components/ui/card";

interface DateCardDenseProps {
  dateKey: string;
}

export function DateCardDense({ dateKey }: DateCardDenseProps) {
  const dayData = daysMetadata.find((d) => d.date === dateKey);
  if (!dayData) return null;

  const title = dayData.title;

  return (
    <Card size="sm" className="p-4 border-border/30" aria-label={title}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          {title && (
            <h4 className="text-base font-semibold text-foreground">{title}</h4>
          )}

          <div className="text-sm text-muted-foreground mt-2 leading-snug">
            <TaskRenderer tasks={dayData.tasks} />
          </div>
          {dayData.impact && (
            <div className="pt-2 border-t border-border/30 mt-3">
              <p className="text-xs font-medium text-primary">Impact</p>
              <p className="text-xs text-muted-foreground pt-1">
                {dayData.impact}
              </p>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
