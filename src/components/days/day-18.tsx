import { DayCard } from '@/components/day-card';

export function Day18() {
  return (
    <DayCard
      day={18}
      week={3}
      title="Analytics & User Insights"
      summary="Integrated analytics to track user behavior and gather insights for improvements."
      tasks={[
        'Set up analytics provider',
        'Implement event tracking',
        'Create custom dimensions',
        'Build dashboards',
        'Set up funnels',
        'Analyze user flows',
        'Create reports'
      ]}
      skillsUsed={['Analytics', 'Event Tracking', 'Data Analysis', 'Dashboards', 'User Research']}
      lessonsLearned={[
        'Data-driven decisions outperform intuition-based ones',
        'Track meaningful events, not just page views',
        'User behavior often surprises - let data guide decisions'
      ]}
    />
  );
}
