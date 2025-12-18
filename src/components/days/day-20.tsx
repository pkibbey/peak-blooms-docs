import { DayCard } from '@/components/day-card';

export function Day20() {
  return (
    <DayCard
      day={20}
      week={3}
      title="Final Testing & Bug Fixes"
      summary="Conducted final comprehensive testing and fixed remaining bugs before launch."
      tasks={[
        'Cross-browser testing',
        'Mobile device testing',
        'Test all user flows',
        'Fix critical bugs',
        'Verify all features work',
        'Test edge cases',
        'Create deployment checklist'
      ]}
      skillsUsed={['QA', 'Testing', 'Debugging', 'Problem Solving', 'Cross-browser Testing']}
      lessonsLearned={[
        'Testing on real devices catches issues simulators miss',
        'Edge cases cause most production issues',
        'Thorough testing reduces launch stress'
      ]}
    />
  );
}
