"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface WeekData {
  week: number;
  title: string;
  description: string;
  milestones: string[];
  dateRange: string;
}

const weeksData: WeekData[] = [
  {
    week: 1,
    title: "Foundation & Design System",
    description:
      "Setting up the project infrastructure, design systems, and core components",
    dateRange: "Nov 22 - 28",
    milestones: ["Project Setup", "Design System", "UI Components"],
  },
  {
    week: 2,
    title: "Core Features & Data Layer",
    description:
      "Building core features with validation, data architecture, and authentication",
    dateRange: "Nov 29 - Dec 5",
    milestones: ["Validation", "Data Access Layer", "Authentication"],
  },
  {
    week: 3,
    title: "Advanced Features & Optimization",
    description:
      "Implementing metrics, admin management, and performance improvements",
    dateRange: "Dec 8 - 14",
    milestones: ["Metrics System", "Admin Features", "Optimization"],
  },
  {
    week: 4,
    title: "Polish & Launch",
    description:
      "Final refinements, build fixes, type unification, and deployment preparation",
    dateRange: "Dec 15 - 18",
    milestones: ["Build Fixes", "Type Unification", "Documentation"],
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="w-full py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            The Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of the entire project timeline, broken down
            by week
          </p>
        </div>

        {/* Weeks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {weeksData.map((week) => (
            <Card
              key={week.week}
              className="relative p-6 border border-border/50 hover:border-border transition-colors hover:shadow-lg"
            >
              {/* Content */}
              <div className="mt-2 space-y-4">
                <div>
                  <p className="flex flex-col gap-2 text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                    <Badge variant="default">Week {week.week}</Badge>
                    {week.dateRange}
                  </p>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {week.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {week.description}
                  </p>
                </div>

                {/* Milestones */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Key Milestones
                  </p>
                  <ul className="space-y-2">
                    {week.milestones.map((milestone, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                        <span className="text-xs text-foreground/70">
                          {milestone}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <Button
            onClick={() => {
              const element = document.getElementById("dates");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            variant="default"
            size="lg"
            className="text-base"
          >
            View the Timeline
          </Button>
        </div>
      </div>
    </section>
  );
}
