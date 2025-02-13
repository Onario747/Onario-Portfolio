import type { TContentActivity } from '@/types';

export default function useContentActivity() {
  // Return static data since we removed the backend
  const staticData: TContentActivity[] = [
    {
      activityType: 'REACTION',
      type: 'CLAPPING',
      slug: 'projects',
      contentTitle: 'Projects',
      contentType: 'DOCS',
      createdAt: new Date().toISOString(),
      count: 1,
    },
  ];

  return {
    isLoading: false,
    isError: false,
    data: staticData,
  };
}
