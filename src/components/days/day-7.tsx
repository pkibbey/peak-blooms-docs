import { DayCard } from '@/components/day-card';

export function Day7() {
  return (
    <DayCard
      day={7}
      week={1}
      title="Documentation & Component Storybook Setup"
      summary="Set up comprehensive documentation and created component stories for visual testing."
      tasks={[
        'Write component documentation',
        'Create usage examples',
        'Set up component testing',
        'Document API props',
        'Create design tokens documentation',
        'Build style guide',
        'Add accessibility notes'
      ]}
      skillsUsed={['Technical Writing', 'Documentation', 'Testing', 'Component Testing', 'Markdown']}
      lessonsLearned={[
        'Good documentation saves countless hours of debugging and support',
        'Live examples in documentation are better than written descriptions',
        'Documenting accessibility features encourages their usage'
      ]}
    />
  );
}
