import { DayCard } from '@/components/day-card';

export function Day10() {
  return (
    <DayCard
      day={10}
      week={2}
      title="State Management Implementation"
      summary="Set up state management solution for complex application state and data flows."
      tasks={[
        'Evaluate state management options',
        'Implement context API patterns',
        'Create custom hooks for state',
        'Set up Redux or similar if needed',
        'Implement state persistence',
        'Create selectors',
        'Add debugging tools'
      ]}
      skillsUsed={['State Management', 'React Context', 'Custom Hooks', 'Data Flow', 'Testing']}
      lessonsLearned={[
        'Choosing the right state management tool prevents over-engineering',
        'Derived state should be computed, not stored separately',
        'Proper state structure makes debugging and testing easier'
      ]}
    />
  );
}
