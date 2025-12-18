import { DayCard } from '@/components/day-card';

export function Day16() {
  return (
    <DayCard
      day={16}
      week={3}
      title="Deployment & Infrastructure Setup"
      summary="Set up deployment pipeline and configured infrastructure for production deployment."
      tasks={[
        'Choose hosting platform',
        'Configure deployment pipeline',
        'Set up environment variables',
        'Configure CDN',
        'Set up SSL/TLS certificates',
        'Create database backups',
        'Configure monitoring'
      ]}
      skillsUsed={['DevOps', 'CI/CD', 'Docker', 'Cloud Platforms', 'Infrastructure']}
      lessonsLearned={[
        'Automated deployments reduce human error',
        'Environment variable management is crucial for security',
        'Monitoring and alerting catch issues before users notice'
      ]}
    />
  );
}
