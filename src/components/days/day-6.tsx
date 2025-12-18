import { DayCard } from '@/components/day-card';

export function Day6() {
  return (
    <DayCard
      day={6}
      week={1}
      title="Hero & Landing Sections"
      summary="Created the hero section and landing page components with animations and visual hierarchy."
      tasks={[
        'Design hero section',
        'Build gradient backgrounds',
        'Implement animations',
        'Create call-to-action buttons',
        'Add social proof section',
        'Optimize images',
        'Test on multiple devices'
      ]}
      skillsUsed={['CSS Animations', 'Image Optimization', 'Visual Design', 'Performance', 'Tailwind CSS']}
      lessonsLearned={[
        'First impressions matter - hero sections need careful visual design',
        'Animation should enhance, not distract, from content',
        'Image optimization is crucial for performance on all devices'
      ]}
    />
  );
}
