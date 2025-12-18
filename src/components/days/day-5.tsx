import { DayCard } from '@/components/day-card';

export function Day5() {
  return (
    <DayCard
      day={5}
      week={1}
      title="Page Layout & Navigation Structure"
      summary="Built the main page layout structure and created the navigation framework for the site."
      tasks={[
        'Create main layout component',
        'Build navigation header',
        'Set up page routing',
        'Implement breadcrumb navigation',
        'Create footer component',
        'Set up responsive menu',
        'Add skip-to-content link'
      ]}
      skillsUsed={['Next.js App Router', 'Responsive Design', 'Semantic HTML', 'Navigation Patterns', 'Mobile-first']}
      lessonsLearned={[
        'Building semantic HTML first makes styling and accessibility easier',
        'Mobile-first approach prevents layout issues on larger screens',
        'Proper navigation structure improves both usability and SEO'
      ]}
    />
  );
}
