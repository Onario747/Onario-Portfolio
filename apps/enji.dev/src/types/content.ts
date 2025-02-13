export enum ContentType {
  PAGE = 'PAGE',
  POST = 'POST',
  PROJECT = 'PROJECT',
}

export enum ReactionType {
  CLAPPING = 'CLAPPING',
  THINKING = 'THINKING',
  AMAZED = 'AMAZED',
}

export enum ShareType {
  TWITTER = 'TWITTER',
  CLIPBOARD = 'CLIPBOARD',
  OTHERS = 'OTHERS',
}

export type TContentMetaDetail = {
  meta: {
    views: number;
    shares: number;
    reactions: number;
    reactionsDetail: Record<ReactionType, number>;
  };
  metaUser: {
    reactionsDetail: Record<ReactionType, number>;
  };
  metaSection: Record<string, unknown>;
};

export type TApiResponse = {
  message: string;
};
