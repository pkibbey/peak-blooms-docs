'use client';

import { Card } from '@/components/ui/card';

interface WeekData {
  week: number;
  title: string;
  description: string;
  taskCount: number;
  milestones: string[];
}

const weeksData: WeekData[] = [
  {
    week: 1,
    title: 'Foundation & Planning',
    description: 'Setting up the project infrastructure, design systems, and core architecture',
    taskCount: 7,
    milestones: ['Project Setup', 'Design System', 'Component Foundation'],
  },
  {
    week: 2,
    title: 'Feature Development',
    description: 'Building core features, integrating APIs, and implementing key functionality',
    taskCount: 7,
    milestones: ['Feature Build', 'Integration', 'Testing'],
  },
  {
    week: 3,
    title: 'Polish & Launch',
    description: 'Refinement, optimization, deployment, and post-launch monitoring',
    taskCount: 7,
    milestones: ['Optimization', 'Deployment', 'Monitoring'],
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="w-full py-20 bg-muted/30 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Three-Week Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of the entire project timeline, broken down by week
          </p>
        </div>

        {/* Weeks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {weeksData.map((week) => (
            <Card
              key={week.week}
              className="relative p-6 border border-border/50 hover:border-border transition-colors hover:shadow-lg"
            >
              {/* Week Badge */}
              <div className="absolute -top-4 -left-4">
                <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  W{week.week}
                </div>
              </div>

              {/* Content */}
              <div className="mt-2 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{week.title}</h3>
                  <p className="text-sm text-muted-foreground">{week.description}</p>
                </div>

                {/* Task Count */}
                <div className="flex items-center gap-2 py-3 border-t border-b border-border/30">
                  <span className="text-sm font-medium text-muted-foreground">Tasks:</span>
                  <span className="text-lg font-bold text-accent">{week.taskCount}</span>
                </div>

                {/* Milestones */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Key Milestones
                  </p>
                  <ul className="space-y-2">
                    {week.milestones.map((milestone, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">{milestone}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Timeline connector */}
        <div className="hidden md:flex items-center justify-between px-4">
          {[1, 2].map((i) => (
            <div key={i} className="flex-1 h-1 bg-gradient-to-r from-accent/50 to-transparent mx-2" />
          ))}
        </div>
      </div>
    </section>
  );
}
