import { DayCard } from '@/components/day-card';

export function Day14() {
  return (
    <DayCard
      day={14}
      week={2}
      title="SEO & Meta Tags Optimization"
      summary="Implemented SEO best practices including meta tags, structured data, and dynamic titles."
      tasks={[
        'Set up meta tags management',
        'Implement dynamic page titles',
        'Add meta descriptions',
        'Create Open Graph tags',
        'Implement structured data (Schema.org)',
        'Build XML sitemap',
        'Test with SEO tools'
      ]}
      skillsUsed={['SEO', 'Metadata Management', 'Structured Data', 'Next.js Head', 'Web Standards']}
      lessonsLearned={[
        'Meta tags are crucial for social sharing and search visibility',
        'Structured data helps search engines understand content better',
        'Dynamic metadata requires server-side rendering or static generation'
      ]}
    />
  );
}
