import clsx from 'clsx';

import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';

const practices = [
  {
    title: 'Clean Architecture',
    description:
      'Following SOLID principles and clean code practices for maintainable applications.',
    languages: ['TypeScript', 'React', 'React Native'],
  },
  {
    title: 'Performance First',
    description:
      'Implementing lazy loading, code splitting, and efficient state management.',
    languages: ['Next.js', 'Redux', 'React Query'],
  },
  {
    title: 'Modern Development',
    description:
      'Using latest features while maintaining backwards compatibility.',
    languages: ['ES6+', 'Hooks', 'Tailwind CSS'],
  },
  {
    title: 'Testing & Quality',
    description:
      'Comprehensive testing and continuous integration for reliable code.',
    languages: ['Jest', 'React Testing Library', 'Cypress'],
  },
];

function PrettyOptimized() {
  return (
    <>
      <header className={clsx('mb-8')}>
        <SectionTitle
          title="Comprehensible and Optimized Code."
          caption="Pretty & Optimized"
          description="Writing clean code is a top priority while keeping it as optimized as possible."
        />
      </header>
      <SectionContent>
        <div className={clsx('grid gap-6', 'lg:grid-cols-2')}>
          {practices.map((practice) => (
            <div
              key={practice.title}
              className={clsx(
                'rounded-xl border p-6',
                'border-slate-200 dark:border-slate-800'
              )}
            >
              <h3 className={clsx('font-bold')}>{practice.title}</h3>
              <p
                className={clsx(
                  'mt-1 text-sm text-slate-600 dark:text-slate-400'
                )}
              >
                {practice.description}
              </p>
              <div className={clsx('mt-4 flex flex-wrap gap-2')}>
                {practice.languages.map((lang) => (
                  <span
                    key={lang}
                    className={clsx(
                      'rounded-full bg-slate-100 px-3 py-1 text-sm',
                      'dark:bg-slate-800'
                    )}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionContent>
    </>
  );
}

export default PrettyOptimized;
