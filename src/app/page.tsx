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
import { Roadmap } from "@/components/roadmap";

export default function DatesPage() {
  const dates = [
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
  ];

  return (
    <main className="w-full bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Roadmap Section */}
      <Roadmap />

      {/* Daily Cards Section */}
      <section id="dates" className="w-full py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              The Timeline
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive breakdown of work completed each day
            </p>
          </div>

          {/* Dates Grid */}
          <div className="grid grid-cols-1 gap-6">
            {dates.map((DateComponent, index) => (
              <DateComponent key={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 bg-muted/30 border-t border-border/50">
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
