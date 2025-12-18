import { DayCard } from '@/components/day-card';

export function Day2() {
  return (
    <DayCard
      day={2}
      week={1}
      title="Component Library Build - Part 1"
      summary="Began building reusable UI components for the design system, focusing on base elements."
      tasks={[
        'Create Button component',
        'Build Card component',
        'Implement Badge component',
        'Set up Input component',
        'Create Label component',
        'Build Select component',
        'Test component accessibility'
      ]}
      skillsUsed={['React', 'TypeScript', 'Accessibility (A11y)', 'Component Design', 'Testing']}
      lessonsLearned={[
        'Building accessible components from the start prevents refactoring later',
        'Creating a clear component API makes them easier to use across the project',
        'Naming conventions matter for component maintainability'
      ]}
    />
  );
}
