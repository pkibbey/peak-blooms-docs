import {
  Day1,
  Day2,
  Day3,
  Day4,
  Day5,
  Day6,
  Day7,
  Day8,
  Day9,
  Day10,
  Day11,
  Day12,
  Day13,
  Day14,
  Day15,
  Day16,
  Day17,
  Day18,
  Day19,
  Day20,
  Day21,
} from "@/components/days";
import { Hero } from "@/components/hero";
import { Roadmap } from "@/components/roadmap";

export default function Page() {
  const days = [
    Day1,
    Day2,
    Day3,
    Day4,
    Day5,
    Day6,
    Day7,
    Day8,
    Day9,
    Day10,
    Day11,
    Day12,
    Day13,
    Day14,
    Day15,
    Day16,
    Day17,
    Day18,
    Day19,
    Day20,
    Day21,
  ];

  return (
    <main className="w-full bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Roadmap Section */}
      <Roadmap />

      {/* Daily Cards Section */}
      <section id="days" className="w-full py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Daily Progress
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Detailed breakdown of each day's work, learnings, and progress
            </p>
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-1 gap-6">
            {days.map((DayComponent, index) => (
              <DayComponent key={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 bg-muted/30 border-t border-border/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            A comprehensive 3-week journey of building and launching a modern
            web platform
          </p>
        </div>
      </footer>
    </main>
  );
}
