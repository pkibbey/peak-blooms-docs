import { DayCard } from '@/components/day-card';

export function Day4() {
  return (
    <DayCard
      day={4}
      week={1}
      title="Typography & Global Styling"
      summary="Finalized typography system, set up global styles, and created CSS variables for theming."
      tasks={[
        'Define font hierarchy',
        'Create CSS custom properties',
        'Set up dark mode support',
        'Build responsive spacing system',
        'Create utility classes',
        'Test theme consistency',
        'Document styling guidelines'
      ]}
      skillsUsed={['CSS Variables', 'Typography', 'Responsive Design', 'Dark Mode', 'CSS Grid & Flexbox']}
      lessonsLearned={[
        'CSS variables are powerful for dynamic theming without JavaScript',
        'A clear type scale prevents design inconsistencies',
        'Documenting styling decisions saves time for future maintenance'
      ]}
    />
  );
}
