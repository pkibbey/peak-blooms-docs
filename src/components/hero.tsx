"use client";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-background px-4 py-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Main heading */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Building Peak Blooms
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto">
            A comprehensive journey documenting the design, development, and
            deployment of a modern web platform.
          </p>
        </div>

        {/* Subheading */}
        <div className="space-y-2 pt-4">
          <p className="text-lg text-foreground/70">
            Explore progress milestones, key learnings, technical decisions, and
            the challenges that shaped this project.
          </p>
        </div>

        {/* CTA */}
        <div className="pt-8">
          <Button
            onClick={() => {
              const element = document.getElementById("roadmap");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            variant="default"
            size="lg"
            className="text-base"
          >
            View the Journey
          </Button>
        </div>
      </div>
    </section>
  );
}
