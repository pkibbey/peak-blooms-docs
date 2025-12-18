import { DayCard } from '@/components/day-card';

export function Day19() {
  return (
    <DayCard
      day={19}
      week={3}
      title="Accessibility Audit & Improvements"
      summary="Conducted comprehensive accessibility audit and implemented improvements."
      tasks={[
        'Run accessibility audit tools',
        'Fix color contrast issues',
        'Implement keyboard navigation',
        'Add ARIA labels',
        'Test with screen readers',
        'Test with keyboard only',
        'Fix form accessibility'
      ]}
      skillsUsed={['Web Accessibility', 'ARIA', 'Keyboard Navigation', 'Screen Readers', 'WCAG Standards']}
      lessonsLearned={[
        'Accessibility benefits everyone, not just disabled users',
        'Keyboard navigation is often forgotten but crucial',
        'Automated tools catch many issues, but manual testing is essential'
      ]}
    />
  );
}
