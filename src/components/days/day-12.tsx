import { DayCard } from '@/components/day-card';

export function Day12() {
  return (
    <DayCard
      day={12}
      week={2}
      title="Performance Optimization - Part 2"
      summary="Continued optimization focusing on runtime performance and rendering efficiency."
      tasks={[
        'Implement React.memo for expensive components',
        'Optimize re-renders with useMemo and useCallback',
        'Fix performance bottlenecks',
        'Implement pagination',
        'Add infinite scroll patterns',
        'Optimize database queries',
        'Test with Lighthouse'
      ]}
      skillsUsed={['React Optimization', 'Memoization', 'Query Optimization', 'Lighthouse', 'DevTools']}
      lessonsLearned={[
        'Premature optimization is the root of all evil - profile first',
        'Memoization is powerful but can hide architectural issues',
        'Server-side solutions often outperform client-side optimizations'
      ]}
    />
  );
}
