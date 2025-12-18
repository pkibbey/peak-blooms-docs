import { DayCard } from '@/components/day-card';

export function Day17() {
  return (
    <DayCard
      day={17}
      week={3}
      title="Error Handling & Logging"
      summary="Implemented comprehensive error handling and logging for debugging and monitoring."
      tasks={[
        'Create error boundary components',
        'Set up error logging service',
        'Implement custom error pages',
        'Add user-friendly error messages',
        'Create logging utilities',
        'Set up error alerts',
        'Build error dashboard'
      ]}
      skillsUsed={['Error Handling', 'Logging', 'Monitoring', 'Error Analytics', 'Debugging']}
      lessonsLearned={[
        'Error boundaries prevent entire app crashes from component errors',
        'Collecting error data helps identify patterns in user issues',
        'User-friendly error messages reduce support tickets'
      ]}
    />
  );
}
