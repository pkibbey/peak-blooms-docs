"use client";

import type { Task } from "./task";

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
              {task.text}
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
