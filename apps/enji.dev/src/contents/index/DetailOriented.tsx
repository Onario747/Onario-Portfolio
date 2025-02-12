import clsx from 'clsx';
import Image from 'next/image';

import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';

const features = [
  {
    title: 'Responsive Design',
    description:
      'Pixel-perfect layouts that adapt seamlessly across all devices and screen sizes.',
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'Cross-Platform Consistency',
    description:
      'Maintaining uniform user experience across iOS, Android, and web platforms.',
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'Accessibility',
    description: 'WCAG compliant interfaces ensuring usability for all users.',
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
  },
  {
    title: 'Performance Optimization',
    description:
      'Optimized load times, smooth animations, and efficient resource management.',
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
];

function DetailOriented() {
  return (
    <>
      <header className={clsx('mb-8')}>
        <SectionTitle
          title="Keen Eye for Spotting Small Details."
          caption="Detail Oriented"
          description="Awareness to ease of access, User Interface consistency, and improved User Experience."
        />
      </header>
      <SectionContent>
        <div className={clsx('grid gap-6', 'lg:grid-cols-2')}>
          {features.map((feature) => (
            <div
              key={feature.title}
              className={clsx(
                'flex items-start gap-4 rounded-xl border p-6',
                'border-slate-200 dark:border-slate-800'
              )}
            >
              <div
                className={clsx(
                  'rounded-lg bg-slate-100 p-2 dark:bg-slate-800'
                )}
              >
                {feature.icon}
              </div>
              <div>
                <h3 className={clsx('font-bold')}>{feature.title}</h3>
                <p
                  className={clsx(
                    'mt-1 text-sm text-slate-600 dark:text-slate-400'
                  )}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionContent>
    </>
  );
}

export default DetailOriented;
