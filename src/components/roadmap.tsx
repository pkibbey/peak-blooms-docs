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
    dateRange: "Dec 6 - 12",
    milestones: ["Metrics System", "Admin Features", "Optimization"],
  },
  {
    week: 4,
    title: "Performance, Testing & Polish",
    description:
      "Final refinements, build fixes, type unification, and deployment preparation",
    dateRange: "Dec 13 - 19",
    milestones: ["Build Fixes", "Type Unification", "Documentation"],
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="w-full py-20 bg-muted/60">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {weeksData.map((week) => (
            <Card
              key={week.week}
              className="relative p-6 border border-border/50 hover:border-border transition-all hover:shadow-lg cursor-pointer hover:bg-muted/40 group"
              onClick={() => {
                const element = document.getElementById(`week-${week.week}`);
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {/* Content */}
              <div className="mt-2">
                <p className="flex flex-col gap-2 text-sm font-semibold text-muted-foreground mb-2 tracking-wide">
                  <Badge
                    variant="default"
                    className="w-fit group-hover:bg-primary transition-colors"
                  >
                    Week {week.week}
                  </Badge>
                  <span className="text-xs">{week.dateRange}</span>
                </p>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {week.title}
                </h3>
                <p className="text-base text-muted-foreground">
                  {week.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <Button
            onClick={() => {
              const element = document.getElementById("week-1");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            variant="default"
            size="lg"
          >
            View the Timeline
          </Button>
        </div>
      </div>
    </section>
  );
}
