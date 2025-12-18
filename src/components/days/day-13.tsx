import { DayCard } from '@/components/day-card';

export function Day13() {
  return (
    <DayCard
      day={13}
      week={2}
      title="Testing & Quality Assurance"
      summary="Implemented comprehensive testing strategy including unit, integration, and end-to-end tests."
      tasks={[
        'Set up testing framework',
        'Write unit tests for utilities',
        'Create component tests',
        'Implement integration tests',
        'Set up E2E testing',
        'Create test fixtures',
        'Achieve 80% code coverage'
      ]}
      skillsUsed={['Jest', 'React Testing Library', 'Cypress', 'Test-Driven Development', 'Mock/Stub']}
      lessonsLearned={[
        'Testing gives confidence when refactoring',
        'Testing user behavior is more valuable than testing implementation',
        'Good test names serve as living documentation'
      ]}
    />
  );
}
