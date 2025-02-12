import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import { BrowserIcon, ExternalLink, MobileIcon } from '@/components/Icons';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  type: 'web' | 'mobile' | 'both';
  technologies: Array<string>;
}

function ProjectCard({
  title,
  description,
  image,
  link,
  type,
  technologies,
}: ProjectCardProps) {
  return (
    <div
      className={clsx(
        'block overflow-hidden rounded-xl border bg-white',
        'border-slate-200 dark:border-slate-800 dark:bg-slate-900',
        'transition duration-300',
        'hover:border-slate-300 dark:hover:border-slate-700'
      )}
    >
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx('group block')}
      >
        <div
          className={clsx(
            'relative aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-slate-800'
          )}
        >
          <Image
            src={image}
            alt={title}
            fill
            className={clsx(
              'object-cover transition duration-500',
              'group-hover:scale-105'
            )}
          />
          <div
            className={clsx(
              'absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0',
              'transition duration-300',
              'group-hover:opacity-100'
            )}
          />
          <div
            className={clsx(
              'absolute bottom-0 left-0 right-0',
              'p-4 transition duration-300',
              'translate-y-full group-hover:translate-y-0'
            )}
          >
            <div className={clsx('flex items-center gap-2', 'text-white')}>
              {(type === 'web' || type === 'both') && (
                <div
                  className={clsx(
                    'rounded-full bg-slate-900/80 p-2',
                    'backdrop-blur-sm'
                  )}
                >
                  <BrowserIcon className="h-4 w-4" />
                </div>
              )}
              {(type === 'mobile' || type === 'both') && (
                <div
                  className={clsx(
                    'rounded-full bg-slate-900/80 p-2',
                    'backdrop-blur-sm'
                  )}
                >
                  <MobileIcon className="h-4 w-4" />
                </div>
              )}
              <ExternalLink className={clsx('h-4 w-4')} />
            </div>
          </div>
        </div>
        <div className={clsx('p-4', 'sm:p-6')}>
          <h3
            className={clsx(
              'font-bold',
              'group-hover:text-accent-600',
              'dark:group-hover:text-accent-400'
            )}
          >
            {title}
          </h3>
          <p
            className={clsx(
              'mt-2 text-sm text-slate-600',
              'dark:text-slate-400'
            )}
          >
            {description}
          </p>
        </div>
      </Link>
      <div className={clsx('px-4 pb-4', 'sm:px-6 sm:pb-6')}>
        <div className={clsx('flex flex-wrap gap-2')}>
          {technologies.map((tech) => (
            <span
              key={tech}
              className={clsx(
                'inline-block rounded-full bg-slate-100 px-3 py-1 text-xs',
                'dark:bg-slate-800',
                'transition-colors duration-300',
                'hover:bg-slate-200 dark:hover:bg-slate-700'
              )}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
