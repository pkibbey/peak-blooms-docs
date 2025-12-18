import { DayCard } from '@/components/day-card';

export function Day21() {
  return (
    <DayCard
      day={21}
      week={3}
      title="Launch & Monitoring"
      summary="Deployed the application to production and set up comprehensive monitoring."
      tasks={[
        'Deploy to production',
        'Verify deployment success',
        'Monitor error rates',
        'Check performance metrics',
        'Support initial users',
        'Document known issues',
        'Plan post-launch improvements'
      ]}
      skillsUsed={['Deployment', 'Monitoring', 'Incident Response', 'DevOps', 'Production Support']}
      lessonsLearned={[
        'Launch is not the end - ongoing monitoring is essential',
        'Real user data often differs from test data',
        'Having a rollback plan provides peace of mind during launch'
      ]}
    />
  );
}
