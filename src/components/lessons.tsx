"use client";

import { Code, Database, Users } from "tabler-icons-react";
import { Card } from "@/components/ui/card";
import { Badge } from "./ui/badge";

interface Lesson {
  title: string;
  description: string;
  icon: React.ReactNode;
  tag: string;
}

const lessons: Lesson[] = [
  {
    title: "Database Fidelity",
    description:
      "Use local database for development and maintain a script that can seed the data to go along with the commits, so that the schema can always be recreated to match the git history.",
    icon: <Database size={20} />,
    tag: "Infrastructure",
  },
  {
    title: "The 'Good Enough' Trap",
    description:
      "Don't let 'perfect' be the enemy of 'shipped', but don't let 'shipped' be an excuse for messy code. If a component feels like it needs a rewrite, it probably does.",
    icon: <Code size={20} />,
    tag: "Productivity",
  },
  {
    title: "Strategic Sabbatical",
    description:
      "After 15 years in enterprise architecture, a sabbatical to explore Generative AI informed this project. Peak Blooms is the first production result of that research.",
    icon: <Users size={20} />,
    tag: "Context",
  },
];

export function Lessons() {
  return (
    <section id="lessons" className="w-full py-24 bg-muted">
      <div className="max-w-4xl mx-auto px-4 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <Badge
            variant="outline"
            className="px-4 py-1 border-secondary/20 bg-secondary/5 text-secondary"
          >
            Reflections
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Lessons Learned
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A look into the vulnerable side of development, and what I've
            learned from the mistakes and the wins.
          </p>
        </div>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson, idx) => (
            <Card
              key={idx}
              className="p-6 border border-border/40 bg-card/50 backdrop-blur-sm hover:border-secondary/20 transition-all hover:shadow-md group"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-secondary/80 text-secondary-foreground/80 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                    {lesson.icon}
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-muted text-sm font-medium"
                  >
                    {lesson.tag}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-xl tracking-tight">
                    {lesson.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {lesson.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
