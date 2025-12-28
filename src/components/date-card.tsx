"use client";

import { differenceInDays } from "date-fns";
import Image from "next/image";
import type { ReactNode } from "react";
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
  taskNode: ReactNode;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
}

export function DateCard({ dateKey, taskNode }: DateCardProps) {
  const dayData = daysMetadata.find((d) => d.date === dateKey);

  const date = dayData?.date;
  const title = dayData?.title;
  const screenshot = dayData?.screenshot;
  const skillsUsed = dayData?.skillsUsed;
  return (
    <AccordionItem value={date} className="border-0">
      <AccordionTrigger className="p-4 relative overflow-hidden flex flex-1 justify-between items-center w-full hover:bg-gray-100 rounded-sm transition-colors text-lg font-bold [&[data-panel-open]]:bg-white [&[data-panel-open]]:shadow-xl [&[data-panel-open]]:rounded-lg">
        {date && title && (
          <h3 className="text-xl font-bold text-foreground relative z-10">
            Day {differenceInDays(date, new Date("2025-11-21"))}: {title}
          </h3>
        )}
      </AccordionTrigger>

      {/* Accordion Content */}
      <AccordionContent className="items-center px-4 pb-5 grid md:grid-cols-[auto_300px] gap-8 mt-2">
        <div className="grid my-4 pt-2 text-lg text-foreground-muted leading-relaxed space-y-6">
          {/* Tasks */}
          {taskNode}

          <div className="flex gap-1">
            {skillsUsed?.map((skill) => (
              <Badge key={skill} variant="outline">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Screenshot */}
        {screenshot && (
          <Dialog>
            <DialogTrigger className="my-6 group relative block aspect-video w-full overflow-hidden rounded-lg border border-border/70 shadow-2xs transition-all cursor-zoom-in outline-none">
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
  );
}
