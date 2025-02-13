import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';

type Content = {
  state: 'frontend' | 'mobile' | 'ui' | 'integration';
  title: string;
  description: string;
  illustration: string;
};

const content: Array<Content> = [
  {
    state: 'frontend',
    title: 'Frontend Development',
    description:
      'Creating beautiful, responsive web apps with React, Next.js, and modern UI libraries.',
    illustration: '/assets/images/illustrations/frontend-dev.svg',
  },
  {
    state: 'mobile',
    title: 'Mobile App Development',
    description:
      'Building cross-platform mobile applications with React Native and native features.',
    illustration: '/assets/images/illustrations/mobile-dev.svg',
  },
  {
    state: 'ui',
    title: 'UI/UX Design',
    description:
      'Designing intuitive user interfaces with Tailwind CSS and modern design patterns.',
    illustration: '/assets/images/illustrations/ui-design.svg',
  },
  {
    state: 'integration',
    title: 'API Integration',
    description:
      'Connecting apps to REST APIs, GraphQL, and third-party services.',
    illustration: '/assets/images/illustrations/api-integration.svg',
  },
];

function CleanIntuitive() {
  const [currentState, setCurrentState] = useState<Content>(content[0]);

  return (
    <>
      <header className={clsx('mb-8')}>
        <SectionTitle
          title="Frontend & Mobile Development Focus"
          caption="Modern Development"
          description="Specializing in creating exceptional user experiences across web and mobile platforms."
        />
      </header>
      <SectionContent>
        <div className={clsx('flex flex-col lg:flex-row', 'lg:gap-12')}>
          <div className={clsx('flex-1 flex-col gap-3', 'lg:flex')}>
            {content.map((item, i) => (
              <SectionButton
                key={item.state}
                title={item.title}
                description={item.description}
                icon={i + 1}
                active={currentState?.state === item.state}
                onClick={() => setCurrentState(item)}
              />
            ))}
          </div>
          <div className={clsx('mt-8 flex-1 lg:mt-0')}>
            <div
              className={clsx(
                'relative aspect-[4/3] w-full overflow-hidden rounded-xl'
              )}
            >
              <Image
                src={currentState.illustration}
                alt={currentState.title}
                fill
                className={clsx(
                  'object-contain transition-transform duration-500 hover:scale-105'
                )}
              />
            </div>
          </div>
        </div>
      </SectionContent>
    </>
  );
}

export default CleanIntuitive;
