"use client";

import { AlertCircle, Lightbulb } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
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
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Project Summary
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {executiveSummaryData.scope.platform}
            </p>
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

            <Image
              width={2084}
              height={1250}
              src="/peak-blooms.png"
              alt="GitHub profile preview"
              className="w-60 rounded-lg shadow-lg"
            />

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
              View the Architecture
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {executiveSummaryData.architecturalDecisions.map(
              (decision, idx) => (
                <Card
                  key={idx}
                  className="p-6 border-border/50 hover:shadow-lg transition-shadow"
                >
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      {/* <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" /> */}
                      <h4 className="font-semibold text-foreground">
                        {decision.title}
                      </h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {decision.description}
                    </p>
                  </div>
                </Card>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Strategic Choices Not Implemented */}
      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-6 h-6 text-amber-500" />
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
              Architectural Decisions Decided Against
            </h3>
          </div>

          <p className="text-muted-foreground max-w-3xl">
            The following features were evaluated but deprioritized based on ROI
            analysis and MVP scope:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {executiveSummaryData.nonFeatures.map((nonFeature, idx) => (
              <Card
                key={idx}
                className="p-6 border-amber-200/50 bg-white hover:shadow-lg transition-shadow overflow-visible"
              >
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <h4 className="font-semibold text-foreground">
                      {nonFeature.title}
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {nonFeature.details}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
