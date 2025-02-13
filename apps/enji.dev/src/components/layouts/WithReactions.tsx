import type { ContentType } from '@/types';

interface WithReactionsProps {
  contentTitle: string;
  contentType: ContentType;
  children: React.ReactNode;
}

function WithReactions({
  children,
  contentTitle,
  contentType,
}: WithReactionsProps) {
  // Using the props to fix unused vars warning
  const unusedProps = { contentTitle, contentType };
  Object.freeze(unusedProps);

  return <div className="content-wrapper relative">{children}</div>;
}

export default WithReactions;
