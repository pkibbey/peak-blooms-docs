import { DayCard } from '@/components/day-card';

export function Day8() {
  return (
    <DayCard
      day={8}
      week={2}
      title="API Integration & Data Fetching"
      summary="Integrated with backend APIs and implemented data fetching patterns for dynamic content."
      tasks={[
        'Set up API client',
        'Implement fetch utilities',
        'Create custom hooks for data fetching',
        'Handle loading states',
        'Implement error boundaries',
        'Add retry logic',
        'Set up caching strategy'
      ]}
      skillsUsed={['React Hooks', 'API Integration', 'Error Handling', 'Async/Await', 'HTTP Requests']}
      lessonsLearned={[
        'Custom hooks make data fetching logic reusable and testable',
        'Handling loading and error states improves user experience',
        'Caching strategies can significantly improve performance'
      ]}
    />
  );
}
