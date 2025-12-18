import { DayCard } from '@/components/day-card';

export function Day1() {
  return (
    <DayCard
      day={1}
      week={1}
      title="Project Setup & Architecture Planning"
      summary="Initialized the Next.js project, set up the design system foundation, and planned the overall architecture for the website."
      tasks={[
        'Initialize Next.js 16 with TypeScript',
        'Configure Tailwind CSS and shadcn/ui',
        'Set up Git repository and version control',
        'Create initial project documentation',
        'Design the color palette and typography system',
        'Set up development environment',
        'Create project roadmap',
      ]}
      skillsUsed={['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Git']}
      lessonsLearned={[
        'Early project planning saves significant time during development',
        'A solid design system foundation is crucial for consistency',
        'Setting up proper tooling and configuration at the start prevents technical debt',
      ]}
      codeSnippet={{
        language: 'typescript',
        code: `// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    optimizePackageImports: ["@tabler/icons-react"],
  },
};

export default nextConfig;`,
      }}
    />
  );
}
