"use client";

import { AlertCircle, Lightbulb } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import ArchitecturalDecisionChart from "./architectural-decision-chart";
import { executiveSummaryData } from "./executive-summary-data";
import { Button, buttonVariants } from "./ui/button";

export function ExecutiveSummary() {
  const buttonClass = cn(buttonVariants({ variant: "default", size: "lg" }));

  return (
    <>
      {/* Project Summary */}
      <section
        id="executive-summary"
        className="w-full flex flex-col items-center justify-center min-h-screen py-20 bg-gradient-to-b from-white/80 to-white/60"
      >
        <div className="max-w-6xl mx-auto px-4 space-y-12">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center space-y-4 overflow-hidden">
            <h2 className="flex flex-col text-3xl md:text-4xl font-bold tracking-tight">
              Project Overview
              <span className="text-xl md:text-3xl font-semibold text-muted-foreground">
                Peak Blooms
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-normal">
              {executiveSummaryData.scope.platform}
            </p>
            <div className="relative mt-6">
              <Image
                width={2144}
                height={1298}
                src="/peak-blooms.png"
                alt="Peak Blooms homepage preview"
                className="relative z-10 w-60 rounded-sm shadow-xl"
              />
              <Image
                width={2144}
                height={1298}
                src="/admin.png"
                alt="Admin dashboard preview"
                className="absolute -right-40 top-4 w-50 rounded-sm shadow-xl"
              />
              <Image
                width={2144}
                height={1298}
                src="/inspirations.png"
                alt="Inspirations page preview"
                className="absolute -left-40 top-4 w-50 rounded-sm shadow-xl"
              />
            </div>
          </div>

          {/* Project Overview */}
          <div className="flex flex-col items-center gap-16 text-sm text-muted-foreground">
            <div className="flex flex-col md:flex-row gap-1 md:gap-8 text-base text-muted-foreground">
              {executiveSummaryData.keyMetrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="flex justify-center gap-1.5 space-y-0.5"
                >
                  <p className="font-medium text-primary">{metric.value}</p>
                  <p className="text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>

            <Button
              onClick={() => {
                const element = document.getElementById(
                  "architectural-decisions",
                );
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              variant="default"
              size="lg"
              className={cn(
                buttonClass,
                "outline-white outline-[0.5px] outline-solid group-hover:outline-1",
              )}
            >
              See the Architectural Decisions
            </Button>
          </div>
        </div>
      </section>
      {/* Architectural Decisions */}
      <section
        id="architectural-decisions"
        className="w-full bg-muted px-8 py-16"
      >
        <div className="text-center max-w-6xl mx-auto space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
            Architectural Decisions
          </h3>

          <p className="text-lg text-muted-foreground max-w-5xl mx-auto">
            Each decision balances functionality, development velocity, and
            long-term maintainability to deliver core value
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {executiveSummaryData.architecturalDecisions.map(
              (decision, idx) => (
                <Card
                  key={idx}
                  className="text-left p-5 border-border/50 hover:shadow-lg transition-shadow space-y-1"
                >
                  <div className="flex flex-col items-start gap-2">
                    {/* <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" /> */}
                    <h4 className="text-lg font-semibold text-foreground">
                      {decision.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-normal">
                      {decision.description}
                    </p>
                  </div>
                  {(decision.baselineTimeMinutes !== undefined ||
                    decision.aiTimeMinutes !== undefined) && (
                    <ArchitecturalDecisionChart
                      baselineTimeMinutes={decision.baselineTimeMinutes}
                      aiTimeMinutes={decision.aiTimeMinutes}
                      title={decision.title}
                    />
                  )}
                </Card>
              ),
            )}
          </div>

          <p className="text-lg text-center mt-12 text-muted-foreground">
            *a total of{" "}
            {executiveSummaryData.architecturalDecisions.reduce(
              (prev, item) => {
                return item.baselineTimeMinutes
                  ? prev +
                      Math.ceil(
                        (item.baselineTimeMinutes - (item.aiTimeMinutes || 0)) /
                          60,
                      )
                  : prev;
              },
              0,
            )}{" "}
            hours were saved whilst still maintaining the target MVP goals
          </p>
        </div>
      </section>
      <section className="px-8 py-16">
        <div className="max-w-6xl text-center mx-auto space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
            Architectural Decisions Decided{" "}
            <span className="text-destructive">Against</span>
          </h3>

          <p className="text-xl text-muted-foreground max-w-5xl mx-auto">
            Strategic deferral of lower-priority features ensured laser focus on
            core product stability and time to market
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {executiveSummaryData.architecturalDecisionsAgainst.map(
              (decision, idx) => (
                <Card
                  key={idx}
                  className="text-left p-5 border-border/50 hover:shadow-lg transition-shadow space-y-1"
                >
                  <div className="flex flex-col items-start gap-3">
                    <h4 className="text-lg font-semibold text-foreground">
                      {decision.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-normal">
                      {decision.description}
                    </p>
                  </div>
                  {decision.baselineTimeMinutes !== undefined && (
                    <ArchitecturalDecisionChart
                      baselineTimeMinutes={decision.baselineTimeMinutes}
                      title={decision.title}
                    />
                  )}
                </Card>
              ),
            )}
          </div>

          <p className="text-xl text-muted-foreground">
            *Proactively deferring complexities to save a total of{" "}
            {executiveSummaryData.architecturalDecisionsAgainst.reduce(
              (prev, item) => {
                return item.baselineTimeMinutes
                  ? prev + Math.ceil(item.baselineTimeMinutes / 60)
                  : prev;
              },
              0,
            )}{" "}
            hours to guarantee a stable MVP
          </p>
        </div>
      </section>
      <Button
        onClick={() => {
          const element = document.getElementById("implementation");
          element?.scrollIntoView({ behavior: "smooth" });
        }}
        variant="default"
        size="lg"
        className={cn(
          buttonClass,
          "outline-white outline-[0.5px] outline-solid group-hover:outline-1 mb-16",
        )}
      >
        See the Implementation Breakdown
      </Button>
    </>
  );
}
