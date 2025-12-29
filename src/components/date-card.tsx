"use client";

import { differenceInDays } from "date-fns";
import Image from "next/image";
import { useEffect, useRef } from "react";
import TaskRenderer from "@/components/dates/task-renderer";
import { daysMetadata } from "@/components/dates-metadata";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "./ui/badge";

export interface DateCardProps {
  dateKey: string;
}

export function DateCard({ dateKey }: DateCardProps) {
  const dayData = daysMetadata.find((d) => d.date === dateKey);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);

  const date = dayData?.date;
  const title = dayData?.title;
  const screenshot = dayData?.screenshot;
  const skillsUsed = dayData?.skillsUsed;

  useEffect(() => {
    // Listen for accordion open event on the item
    const handleOpenChange = () => {
      // Use a small delay to allow the accordion to expand
      setTimeout(() => {
        if (itemRef.current) {
          itemRef.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        }
      }, 150);
    };

    const item = itemRef.current;
    if (item) {
      item.addEventListener("click", handleOpenChange);
      return () => item.removeEventListener("click", handleOpenChange);
    }
  }, []);

  return (
    <div
      ref={itemRef}
      className="scroll-my-12 hover:shadow-xl transition-shadow"
    >
      <AccordionItem
        value={date}
        className="rounded-lg data-open:bg-white border-0 overflow-hidden"
      >
        <AccordionTrigger
          ref={triggerRef}
          className="p-4 relative overflow-hidden flex flex-1 justify-between items-center w-full hover:bg-white group-open:bg-white transition-colors text-lg font-bold [&[data-panel-open]]:rounded-lg "
        >
          <div className="flex flex-col md:flex-row flex-1 md:justify-between md:items-center gap-2">
            {date && title && (
              <h3 className="text-lg md:text-xl font-semibold text-foreground relative z-10">
                Day {differenceInDays(date, new Date("2025-11-21"))}: {title}
              </h3>
            )}
            <div className="flex gap-1">
              {skillsUsed?.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="text-xs font-semibold px-3 py-3"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </AccordionTrigger>

        {/* Accordion Content */}
        <AccordionContent className="bg-white px-4 pb-5 grid md:grid-cols-[auto_300px] gap-8">
          <div className="text-lg text-foreground-muted leading-relaxed">
            {/* Tasks */}
            <TaskRenderer tasks={dayData?.tasks} />
          </div>

          {/* Screenshot */}
          {screenshot && (
            <Dialog>
              <DialogTrigger className="py-6 group relative block aspect-video w-full overflow-hidden rounded-lg border border-border/70 shadow-2xs transition-all cursor-zoom-in outline-none">
                <Image
                  src={screenshot}
                  alt={`Date ${date} screenshot`}
                  fill
                  className="object-cover bg-muted transition-transform duration-300 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5" />
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] max-h-[95vh] p-4 overflow-hidden border-none bg-transparent shadow-none">
                <DialogClose className="relative w-full h-full flex items-center justify-center cursor-zoom-out outline-none">
                  <Image
                    src={screenshot}
                    alt={`Date ${date} screenshot full`}
                    width={1800}
                    height={1200}
                    className="max-w-full max-h-[90vh] h-auto w-auto object-contain rounded-lg shadow-md transition-all duration-300"
                    priority
                  />
                </DialogClose>
              </DialogContent>
            </Dialog>
          )}
        </AccordionContent>
      </AccordionItem>
    </div>
  );
}
