import { DayCard } from '@/components/day-card';

export function Day11() {
  return (
    <DayCard
      day={11}
      week={2}
      title="Performance Optimization - Part 1"
      summary="Began optimizing application performance through code splitting and lazy loading."
      tasks={[
        'Implement code splitting',
        'Set up lazy loading for components',
        'Optimize images with Next.js Image',
        'Remove unused dependencies',
        'Implement virtualization for large lists',
        'Add performance monitoring',
        'Profile bundle size'
      ]}
      skillsUsed={['Performance Optimization', 'Code Splitting', 'Bundle Analysis', 'Next.js Features', 'Lazy Loading']}
      lessonsLearned={[
        'Code splitting can reduce initial bundle size by 50% or more',
        'Images are often the largest assets - optimization should be a priority',
        'Performance monitoring helps catch regressions before production'
      ]}
    />
  );
}
