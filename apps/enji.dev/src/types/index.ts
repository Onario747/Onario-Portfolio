export type ContentType = 'POST' | 'DOCS' | 'PROJECT';
export type ReactionType = 'AMAZED' | 'CLAPPING' | 'THINKING';
export type ShareType = 'TWITTER' | 'CLIPBOARD';

export type TContentActivityBase = {
  activityType: 'REACTION' | 'SHARE';
  type: ReactionType | ShareType;
  slug: string;
  contentTitle: string;
  contentType: ContentType;
  createdAt: string;
};

export type TContentActivityReaction = TContentActivityBase & {
  activityType: 'REACTION';
  type: ReactionType;
  count: number;
};

export type TContentActivityShare = TContentActivityBase & {
  activityType: 'SHARE';
  type: ShareType;
};

export type TContentActivity = TContentActivityReaction | TContentActivityShare;

export type TPostOgImage = {
  category?: string;
  title?: string;
  tags?: string[];
  date?: string;
  lang: 'id' | 'en';
  aspectRatio?: '16/9' | '4/3' | '1/1';
};

export type TTableOfContents = {
  items: Array<{
    title: string;
    url: string;
    items?: Array<{
      title: string;
      url: string;
    }>;
  }>;
};

export type TTableOfContentsItem = {
  title: string;
  url: string;
};

export type TPageOgImage = {
  caption?: string;
  title?: string;
  description?: string;
};

export type TPageFrontMatter = {
  title: string;
  description: string;
  caption?: string;
};

export type TProjectFrontMatter = {
  title: string;
  description: string;
  caption?: string;
  githubUrl?: string;
  npmUrl?: string;
};

export type TPostFrontMatter = {
  title: string;
  description: string;
  caption?: string;
  date: string;
  lang: 'id' | 'en';
  tags: string[];
  category: string;
};
