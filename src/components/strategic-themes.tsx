"use client";

import { Clock } from "tabler-icons-react";
import { Badge } from "@/components/ui/badge";
import { DateCardDense } from "./date-card-dense";
import { daysMetadata, themeConfigs } from "./dates-metadata";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function StrategicThemes() {
  return (
    <section id="strategic-themes" className="w-full py-20 bg-white/80">
      <div className="max-w-6xl mx-auto px-4 space-y-24">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Implementation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A detailed breakdown of work organized by architectural themes
          </p>
        </div>

        {/* Themes as Tabs */}
        <Tabs
          defaultValue={themeConfigs[0]?.id}
          className="flex items-center gap-0"
        >
          <TabsList className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  md:flex-row h-auto m:h-9 w-full md:w-auto rounded-b-none rounded-t-lg border-0">
            {themeConfigs.map((themeConfig) => (
              <TabsTrigger
                key={themeConfig.id}
                value={themeConfig.id}
                className={`px-4 py-4`}
              >
                <themeConfig.icon className={`w-4 h-4 text-primary`} />
                <span className="text-sm font-medium">{themeConfig.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {themeConfigs.map((themeConfig) => {
            const themeDays = daysMetadata.filter(
              (day) => day.theme === themeConfig.key,
            );

            return (
              <TabsContent key={themeConfig.id} value={themeConfig.id}>
                <div
                  id={themeConfig.id}
                  className={`space-y-8 scroll-mt-20 bg-muted rounded-lg p-6 md:p-10 border-0`}
                >
                  {/* Theme Header */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <themeConfig.icon className="w-6 h-6 text-primary" />
                      <Badge variant="outline" className="text-xs">
                        {themeConfig.key
                          .split("-")
                          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                          .join(" ")}
                      </Badge>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                      {themeConfig.title}
                    </h3>
                    <p className="text-muted-foreground max-w-3xl">
                      {themeConfig.description}
                    </p>
                    <div className="text-sm text-muted-foreground font-medium pt-2 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>
                        {themeDays.length} day
                        {themeDays.length !== 1 ? "s" : ""}
                      </span>
                    </div>
                  </div>

                  {/* Dense day cards grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {themeDays.map((day) => (
                      <DateCardDense key={day.date} dateKey={day.date} />
                    ))}
                  </div>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
