import { DayCard } from '@/components/day-card';

export function Day15() {
  return (
    <DayCard
      day={15}
      week={3}
      title="Security & Authentication"
      summary="Implemented security measures and authentication mechanisms for the application."
      tasks={[
        'Set up authentication provider',
        'Implement login/logout flows',
        'Add password reset functionality',
        'Implement token management',
        'Add CSRF protection',
        'Set up secure headers',
        'Audit security vulnerabilities'
      ]}
      skillsUsed={['Authentication', 'Authorization', 'Security Best Practices', 'JWT', 'HTTPS']}
      lessonsLearned={[
        'Never store sensitive data in localStorage without encryption',
        'Token refresh strategies need careful implementation to be secure',
        'Security should be considered from day one, not added later'
      ]}
    />
  );
}
