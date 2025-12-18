import { DayCard } from '@/components/day-card';

export function Day3() {
  return (
    <DayCard
      day={3}
      week={1}
      title="Component Library Build - Part 2"
      summary="Continued building advanced components including forms, dialogs, and interactive elements."
      tasks={[
        'Create Dialog component',
        'Build Form components',
        'Implement Dropdown Menu',
        'Create Tabs component',
        'Build Accordion component',
        'Implement Collapsible',
        'Add animation support'
      ]}
      skillsUsed={['React Hooks', 'State Management', 'Event Handling', 'CSS Animations', 'TypeScript Generics']}
      lessonsLearned={[
        'Separating concerns between controlled and uncontrolled components is important',
        'Animation timing functions can significantly improve UX perception',
        'Building composable components gives more flexibility to consumers'
      ]}
    />
  );
}
