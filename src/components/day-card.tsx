"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "tabler-icons-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface DayComponentProps {
  day: number;
  week: number;
  title: string;
  summary: string;
  tasks: string[];
  skillsUsed: string[];
  lessonsLearned: string[];
  codeSnippet?: {
    language: string;
    code: string;
  };
  screenshot?: string;
}

export function DayCard({
  day,
  week,
  title,
  summary,
  tasks,
  skillsUsed,
  lessonsLearned,
  codeSnippet,
  screenshot,
}: DayComponentProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="p-6 border border-border/50 hover:border-border transition-colors">
      {/* Header - Always visible */}
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/20 text-accent font-bold text-sm">
                D{day}
              </span>
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Week {week}
              </span>
            </div>
            <h3 className="text-xl font-bold text-foreground">{title}</h3>
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {summary}
        </p>

        {/* Expand Button */}
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          variant="outline"
          size="sm"
          className="gap-2"
        >
          <span>{isExpanded ? "Show Less" : "Show More"}</span>
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </Button>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="mt-6 space-y-6 border-t border-border/30 pt-6">
          {/* Tasks */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">
              Tasks Completed
            </h4>
            <ul className="space-y-2">
              {tasks.map((task, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-sm text-foreground/70">{task}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills Used */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Skills Used</h4>
            <div className="flex flex-wrap gap-2">
              {skillsUsed.map((skill, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Code Snippet */}
          {codeSnippet && (
            <div>
              <h4 className="font-semibold text-foreground mb-3">
                Code Snippet
              </h4>
              <pre className="bg-muted border border-border/50 rounded-lg p-4 overflow-x-auto text-xs text-foreground/80">
                <code>{codeSnippet.code}</code>
              </pre>
            </div>
          )}

          {/* Screenshot */}
          {screenshot && (
            <div>
              <h4 className="font-semibold text-foreground mb-3">Screenshot</h4>
              <div className="rounded-lg overflow-hidden border border-border/50">
                <Image
                  src={screenshot}
                  alt={`Day ${day} screenshot`}
                  width={800}
                  height={600}
                  className="w-full h-auto bg-muted"
                />
              </div>
            </div>
          )}

          {/* Lessons Learned */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">
              Lessons Learned
            </h4>
            <ul className="space-y-2">
              {lessonsLearned.map((lesson, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-sm text-foreground/70">{lesson}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Card>
  );
}
