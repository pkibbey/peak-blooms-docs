"use client";

import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardPositioner,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { CTA } from "./cta";

export function Hero() {
  return (
    <section className="flex-col relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-background/40 to-background/40 px-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-16">
        {/* Main heading */}
        <div className="flex flex-col justify-center items-center space-y-8">
          <h1 className="justify-center items-center flex flex-col text-5xl md:text-6xl lg:text-5xl font-bold tracking-tight">
            <span className="leading-16 md:leading-24 text-6xl md:text-8xl text-primary/40">
              AI Workflows
            </span>
            <span className="text-gray-800 text-3xl md:text-5xl font-bold">
              Architectural Case Study
            </span>
          </h1>

          <p className="text-xl md:text-2xl leading-normal text-muted-foreground font-light max-w-2xl mx-auto">
            Achieved enterprise-grade delivery speed by integrating AI
            workflows, resulting in a 90% test coverage, and 100% type-safe
            system, delivered within 27 days.
            <a
              href="/dev-notes"
              className="text-sm ml-2 underline text-primary hover:text-primary/80"
            >
              Learn more
            </a>
          </p>
        </div>
        {/* CTA Section */}
        <CTA />
      </div>
    </section>
  );
}
