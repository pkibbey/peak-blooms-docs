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
        <div className="max-w-6xl mx-auto px-4 space-y-16">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Project Overview for Peak Blooms
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
            <div className="flex gap-8 text-base text-muted-foreground">
              {executiveSummaryData.keyMetrics.map((metric, idx) => (
                <div key={idx} className="flex gap-1.5 space-y-0.5">
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
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex items-center gap-3">
            <Lightbulb className="w-6 h-6 text-primary" />
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
              Architectural Decisions
            </h3>
          </div>

          <p className="text-xl text-muted-foreground">
            The following features were evaluated and chosen for their ROI and
            MVP scope:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {executiveSummaryData.architecturalDecisions.map(
              (decision, idx) => (
                <Card
                  key={idx}
                  className="p-6 border-border/50 hover:shadow-lg transition-shadow space-y-1"
                >
                  <div className="flex flex-col items-start gap-3">
                    {/* <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" /> */}
                    <h4 className="font-semibold text-foreground">
                      {decision.title}
                    </h4>
                    <p className="text-base text-muted-foreground">
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

          <p className="text-xl text-muted-foreground">
            A total of{" "}
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
            hours were saved whilst still maintaining the target MVP goals.
          </p>
        </div>
      </section>
      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-6 h-6 text-amber-500" />
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
              Architectural Decisions Decided Against
            </h3>
          </div>
          <p className="text-xl text-muted-foreground">
            Secured initial product viabilty by making high ROI trade offs.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {executiveSummaryData.architecturalDecisionsAgainst.map(
              (decision, idx) => (
                <Card
                  key={idx}
                  className="p-6 border-amber-200/50 bg-white hover:shadow-lg transition-shadow overflow-visible gap-3"
                >
                  <div className="flex flex-col items-start gap-3">
                    <h4 className="font-semibold text-foreground">
                      {decision.title}
                    </h4>
                    <p className="text-base text-muted-foreground">
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
            Proactively deferring{" "}
            {executiveSummaryData.architecturalDecisionsAgainst.length}{" "}
            complexities saving a total of{" "}
            {executiveSummaryData.architecturalDecisionsAgainst.reduce(
              (prev, item) => {
                return item.baselineTimeMinutes
                  ? prev + Math.ceil(item.baselineTimeMinutes / 60)
                  : prev;
              },
              0,
            )}{" "}
            hours to guarantee a stable MVP.
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
