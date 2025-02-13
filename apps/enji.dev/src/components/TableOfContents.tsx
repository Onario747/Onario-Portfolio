import clsx from 'clsx';
import { m } from 'framer-motion';

import useOnScroll from '@/hooks/useOnScroll';
import useScrollSpy from '@/hooks/useScrollSpy';

import type { TTableOfContents } from '@/types';

interface TableOfContentsLinkProps {
  title: string;
  url: string;
  active?: boolean;
  isNested?: boolean;
}

function TableOfContentsLink({
  title,
  url,
  active = false,
  isNested = false,
}: TableOfContentsLinkProps) {
  return (
    <a
      className={clsx('toc-link', {
        'toc-link--depth-2': isNested,
        'toc-link--active': active,
      })}
      href={url}
    >
      {title}
    </a>
  );
}

interface TableOfContentsProps {
  items?: TTableOfContents['items'];
}

function TableOfContents({ items = [] }: TableOfContentsProps) {
  const isScrolled = useOnScroll(200);
  const { currentVisibles } = useScrollSpy();

  const handleScrollToTopClick = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <nav
      aria-label="Page table of contents"
      className={clsx(
        'border-divider-light rounded-xl border bg-white',
        'dark:border-divider-dark dark:bg-[#161e31]'
      )}
    >
      <div
        className={clsx(
          'border-divider-light flex items-center justify-between border-b px-5 py-3 text-sm font-bold',
          'dark:border-divider-dark'
        )}
      >
        <h2
          className={clsx('text-slate-700', 'dark:text-slate-300')}
          id="table-of-contents"
        >
          <span className={clsx('lg:hidden', 'xl:inline')}>Table of </span>
          Contents
        </h2>
        <m.div
          initial={{ x: 16, opacity: 0 }}
          animate={isScrolled ? { x: 0, opacity: 1 } : { x: 16, opacity: 0 }}
        >
          <a
            href="#skip-navigation"
            className={clsx(
              'border-divider-light text-accent-700 flex h-6 cursor-pointer items-center rounded-full border px-2 text-xs font-normal',
              'dark:border-divider-dark dark:text-accent-400'
            )}
            tabIndex={isScrolled ? 0 : -1}
            onClick={handleScrollToTopClick}
          >
            scroll to top
          </a>
        </m.div>
      </div>
      <div className={clsx('toc')}>
        <ol className={clsx('flex flex-col gap-2')}>
          {items.map(({ title, url, items: subItems }) => {
            const isActive = currentVisibles && currentVisibles[url.slice(1)];

            return (
              <li key={url}>
                <TableOfContentsLink
                  title={title}
                  url={url}
                  active={isActive}
                />
                {isActive && <div className={clsx('toc-visible')} />}
                {subItems && subItems.length > 0 && (
                  <ol className={clsx('mt-1 flex flex-col gap-1')}>
                    {subItems.map((subItem) => {
                      const isSubActive =
                        currentVisibles &&
                        currentVisibles[subItem.url.slice(1)];

                      return (
                        <li key={subItem.url}>
                          <TableOfContentsLink
                            title={subItem.title}
                            url={subItem.url}
                            active={isSubActive}
                            isNested
                          />
                          {isSubActive && (
                            <div className={clsx('toc-visible')} />
                          )}
                        </li>
                      );
                    })}
                  </ol>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

export default TableOfContents;
