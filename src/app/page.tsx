import {
  Day20251122,
  Day20251123,
  Day20251124,
  Day20251125,
  Day20251126,
  Day20251127,
  Day20251128,
  Day20251129,
  Day20251130,
  Day20251201,
  Day20251202,
  Day20251203,
  Day20251204,
  Day20251205,
  Day20251208,
  Day20251209,
  Day20251210,
  Day20251211,
  Day20251212,
  Day20251213,
  Day20251214,
  Day20251215,
  Day20251216,
  Day20251217,
  Day20251218,
} from "@/components/dates";
import { Hero } from "@/components/hero";
import { Lessons } from "@/components/lessons";
import { Roadmap } from "@/components/roadmap";
import { Badge } from "@/components/ui/badge";

export default function DatesPage() {
  const week1 = [
    Day20251122,
    Day20251123,
    Day20251124,
    Day20251125,
    Day20251126,
    Day20251127,
    Day20251128,
  ];

  const week2 = [
    Day20251129,
    Day20251130,
    Day20251201,
    Day20251202,
    Day20251203,
    Day20251204,
    Day20251205,
  ];

  const week3 = [
    Day20251208,
    Day20251209,
    Day20251210,
    Day20251211,
    Day20251212,
  ];

  const week4 = [
    Day20251213,
    Day20251214,
    Day20251215,
    Day20251216,
    Day20251217,
    Day20251218,
  ];

  const weeks = [
    {
      id: "week-1",
      title: "Foundation & Design System",
      description: "Setting up project infrastructure and core components",
      dates: week1,
    },
    {
      id: "week-2",
      title: "Core Features & Data Layer",
      description: "Building validation and data architecture",
      dates: week2,
    },
    {
      id: "week-3",
      title: "Advanced Features & Optimization",
      description: "Metrics system and performance improvements",
      dates: week3,
    },
    {
      id: "week-4",
      title: "Performance, Testing & Polish",
      description: "Final refinements and deployment preparation",
      dates: week4,
    },
  ];

  return (
    <main className="w-full bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Roadmap Section */}
      <Roadmap />

      {/* Daily Cards Section */}
      <section id="dates" className="w-full py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 space-y-24">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              The Timeline
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive breakdown of work completed each day
            </p>
          </div>

          {/* Weeks sections */}
          {weeks.map((week, index) => (
            <div key={week.id} id={week.id} className="space-y-12 scroll-mt-20">
              <div className="grid items-center space-y-2">
                <Badge variant="default" className="justify-self-center">
                  Week {index + 1}
                </Badge>
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-border/50" />
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-center px-4">
                    {week.title}
                  </h3>
                  <div className="h-px flex-1 bg-border/50" />
                </div>
                <p className="text-center text-muted-foreground">
                  {week.description}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {week.dates.map((DateComponent, index) => (
                  <DateComponent key={index} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lessons Section */}
      <Lessons />

      {/* Footer */}
      <footer className="w-full py-12 bg-muted">
        <div className="grid gap-3 max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            A comprehensive journey of building and launching a modern web
            platform
          </p>
          <small className="text-sm text-muted-foreground">
            Phineas Kibbey &copy; 2025
          </small>
        </div>
      </footer>
    </main>
  );
}
