"use client";

import { AlertCircle, CheckCircle2, Lightbulb } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { executiveSummaryData } from "./executive-summary-data";

export function ExecutiveSummary() {
  return (
    <section
      id="executive-summary"
      className="w-full py-20 bg-gradient-to-b from-white/80 to-white/60"
    >
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Project Summary
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategic decisions, architectural choices, and key outcomes
          </p>
        </div>

        {/* Project Overview */}
        <div className="grid md:grid-cols-[auto_300px] lg:grid-cols-[auto_350px] gap-6">
          <Card className="p-6 border-border/50 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold">
              Peak Blooms Project Overview
            </h3>
            <div className="grid lg:grid-cols-[200px_auto] gap-6 text-sm text-muted-foreground">
              <div>
                <Image
                  width={2084}
                  height={1250}
                  src="/peak-blooms-2.png"
                  alt="GitHub profile preview"
                  className="w-60 rounded-lg shadow-lg mb-2"
                />
                <p className="font-medium text-foreground">
                  Sceenshot of home page
                </p>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-foreground">Platform</p>
                  <p>{executiveSummaryData.scope.platform}</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Timeline</p>
                  <p>
                    {executiveSummaryData.timeline.startDate} —{" "}
                    {executiveSummaryData.timeline.endDate} (
                    {executiveSummaryData.timeline.durationDays} days)
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Key Metrics */}
          <Card className="p-6 border-border/50 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold mb-4">Key Metrics</h3>
            <div className="grid grid-cols-2 gap-2">
              {executiveSummaryData.keyMetrics.map((metric, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="text-sm font-medium text-primary">
                    {metric.value}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Architectural Decisions */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Lightbulb className="w-6 h-6 text-primary" />
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
              Architectural Decisions
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {executiveSummaryData.architecturalDecisions.map(
              (decision, idx) => (
                <Card
                  key={idx}
                  className="p-6 border-border/50 hover:shadow-lg transition-shadow"
                >
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <h4 className="font-semibold text-foreground">
                        {decision.title}
                      </h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {decision.description}
                    </p>
                    <div className="pt-2 border-t border-border/30">
                      <p className="text-xs font-medium text-primary">Impact</p>
                      <p className="text-xs text-muted-foreground pt-1">
                        {decision.impact}
                      </p>
                    </div>
                  </div>
                </Card>
              ),
            )}
          </div>
        </div>

        {/* Strategic Choices Not Implemented */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-6 h-6 text-amber-500" />
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
              Strategic Choices Decided Against
            </h3>
          </div>

          <p className="text-muted-foreground max-w-3xl">
            High-level editorial judgment means making deliberate trade-offs.
            The following features were evaluated but deprioritized based on ROI
            analysis and MVP scope:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {executiveSummaryData.nonFeatures.map((nonFeature, idx) => (
              <Card
                key={idx}
                className="p-6 border-amber-200/50 bg-white hover:shadow-lg transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="font-semibold text-foreground">
                      {nonFeature.title}
                    </h4>
                    {nonFeature.dayDecided && (
                      <Badge
                        variant="outline"
                        className="text-xs flex-shrink-0"
                      >
                        {nonFeature.dayDecided}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {nonFeature.rationale}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
