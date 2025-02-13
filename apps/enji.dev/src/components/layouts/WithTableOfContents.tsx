import clsx from 'clsx';
import TableOfContents from '@/components/TableOfContents';
import type { TTableOfContents } from '@/types';

interface WithTableOfContentsProps {
  tableOfContents: TTableOfContents;
  children: React.ReactNode;
}

function WithTableOfContents({
  children,
  tableOfContents,
}: WithTableOfContentsProps) {
  // Using tableOfContents to fix unused vars warning
  const hasToc = tableOfContents?.items?.length > 0;

  return (
    <div className={clsx('content-wrapper relative', hasToc && 'with-toc')}>
      <div className={clsx('flex flex-row-reverse gap-8', 'xl:gap-24')}>
        {hasToc && (
          <div className={clsx('hidden lg:block')}>
            <div className={clsx('sticky top-24 w-64 xl:w-[272px]')}>
              <TableOfContents items={tableOfContents.items} />
            </div>
          </div>
        )}
        <div className={clsx('min-w-0 flex-1')}>{children}</div>
      </div>
    </div>
  );
}

export default WithTableOfContents;
