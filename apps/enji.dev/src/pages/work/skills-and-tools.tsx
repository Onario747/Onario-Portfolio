import clsx from 'clsx';

import Head from '@/components/meta/Head';
import SkipNavigation from '@/components/navigations/SkipNavigation';
import PageHeader from '@/components/PageHeader';

interface SkillLabelProps {
  name: string;
  proficiency: number;
}

function SkillLabel({ name, proficiency }: SkillLabelProps) {
  return (
    <div className={clsx('flex items-center gap-2')}>
      <div className={clsx('relative h-8 min-w-[180px] flex-1')}>
        <div
          className={clsx(
            'absolute inset-0 rounded-full bg-slate-100',
            'dark:bg-slate-800'
          )}
        />
        <div
          className={clsx(
            'bg-accent-500/20 absolute inset-0 rounded-full',
            'dark:bg-accent-400/20'
          )}
          style={{ width: `${proficiency}%` }}
        />
        <div
          className={clsx(
            'absolute inset-y-0 left-3 flex items-center text-sm font-medium text-slate-700',
            'dark:text-slate-300'
          )}
        >
          {name}
        </div>
      </div>
      <div
        className={clsx(
          'w-12 text-right text-sm font-medium text-slate-600',
          'dark:text-slate-400'
        )}
      >
        {proficiency}%
      </div>
    </div>
  );
}

interface SkillSectionProps {
  title: string;
  children: React.ReactNode;
}

function SkillSection({ title, children }: SkillSectionProps) {
  return (
    <div className={clsx('flex flex-col gap-6')}>
      <h2
        className={clsx(
          'text-xl font-bold text-slate-700',
          'dark:text-slate-300'
        )}
      >
        {title}
      </h2>
      <div className={clsx('flex flex-col gap-4')}>{children}</div>
    </div>
  );
}

export default function SkillsAndTools() {
  return (
    <>
      <Head
      ogImage=''
        title="Skills and Tools"
        description="A comprehensive look at my technical skills, tools, and expertise in web development."
      />
      <SkipNavigation />
      <PageHeader
        title="Skills and Tools"
        description="A comprehensive look at my technical skills, tools, and expertise in web development."
        caption="Work"
      />
      <div className={clsx('content-wrapper')}>
        <div className={clsx('flex flex-col gap-16', 'md:gap-24')}>
          <div className={clsx('flex flex-col gap-8')}>
            <h2
              className={clsx(
                'text-2xl font-bold text-slate-700',
                'dark:text-slate-300'
              )}
            >
              Overview
            </h2>
            <p
              className={clsx(
                'max-w-2xl text-lg text-slate-600',
                'dark:text-slate-400'
              )}
            >
              I started my career as a web developer in 2021. I&apos;ve explored
              various programming languages and tech stacks across Back-End,
              Mobile, and Front-End development, with a strong focus on
              Front-End and Mobile Development.
            </p>
          </div>

          <div className={clsx('flex flex-col gap-12')}>
            <SkillSection title="Programming Languages">
              <SkillLabel name="TypeScript" proficiency={100} />
              <SkillLabel name="JavaScript" proficiency={100} />
              <SkillLabel name="HTML/CSS" proficiency={100} />
              <SkillLabel name="PHP" proficiency={50} />
            </SkillSection>

            <SkillSection title="Frontend Development">
              <SkillLabel name="React" proficiency={100} />
              <SkillLabel name="Next.js" proficiency={90} />
              <SkillLabel name="Tailwind CSS" proficiency={100} />
              <SkillLabel name="Material UI" proficiency={90} />
              <SkillLabel name="Chakra UI" proficiency={75} />
              <SkillLabel name="Shadcn UI" proficiency={75} />
              <SkillLabel name="Framer Motion" proficiency={75} />
            </SkillSection>

            <SkillSection title="Mobile Development">
              <SkillLabel name="React Native" proficiency={75} />
              <SkillLabel name="Nativewind" proficiency={75} />
            </SkillSection>

            <SkillSection title="Backend & State Management">
              <SkillLabel name="Prisma" proficiency={50} />
              <SkillLabel name="PostgreSQL" proficiency={50} />
              <SkillLabel name="Redis" proficiency={50} />
              <SkillLabel name="Redux" proficiency={50} />
              <SkillLabel name="Zustand" proficiency={50} />
            </SkillSection>

            <SkillSection title="Tools & Software">
              <SkillLabel name="VS Code" proficiency={100} />
              <SkillLabel name="Git" proficiency={100} />
              <SkillLabel name="Node.js" proficiency={100} />
              <SkillLabel name="Figma" proficiency={100} />
              <SkillLabel name="Photoshop" proficiency={75} />
            </SkillSection>
          </div>

          <div className={clsx('flex flex-col gap-8')}>
            <h2
              className={clsx(
                'text-2xl font-bold text-slate-700',
                'dark:text-slate-300'
              )}
            >
              Areas of Expertise
            </h2>
            <div
              className={clsx(
                'grid grid-cols-1 gap-4 text-slate-600',
                'sm:grid-cols-2',
                'dark:text-slate-400'
              )}
            >
              <div
                className={clsx(
                  'rounded-xl border border-slate-200 p-6',
                  'dark:border-slate-800'
                )}
              >
                <h3
                  className={clsx(
                    'mb-3 font-bold text-slate-700',
                    'dark:text-slate-300'
                  )}
                >
                  Web Applications
                </h3>
                <p>
                  Building rich interactive features and intuitive interfaces
                </p>
              </div>
              <div
                className={clsx(
                  'rounded-xl border border-slate-200 p-6',
                  'dark:border-slate-800'
                )}
              >
                <h3
                  className={clsx(
                    'mb-3 font-bold text-slate-700',
                    'dark:text-slate-300'
                  )}
                >
                  Documentation
                </h3>
                <p>
                  Creating easy-to-navigate and well-structured documentation
                </p>
              </div>
              <div
                className={clsx(
                  'rounded-xl border border-slate-200 p-6',
                  'dark:border-slate-800'
                )}
              >
                <h3
                  className={clsx(
                    'mb-3 font-bold text-slate-700',
                    'dark:text-slate-300'
                  )}
                >
                  UI Components
                </h3>
                <p>Developing clean, reusable, and maintainable components</p>
              </div>
              <div
                className={clsx(
                  'rounded-xl border border-slate-200 p-6',
                  'dark:border-slate-800'
                )}
              >
                <h3
                  className={clsx(
                    'mb-3 font-bold text-slate-700',
                    'dark:text-slate-300'
                  )}
                >
                  Mobile Development
                </h3>
                <p>
                  Creating cross-platform mobile apps with native-like
                  experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
