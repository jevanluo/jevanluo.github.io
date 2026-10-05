export type SiteUpdate = {
  date: string;
  kind: 'Publication' | 'News';
  title: string;
  href: string;
};

// Use this only for publication or news items that should appear on the homepage.
// Notes are included there automatically from their Markdown metadata.
export const updates: SiteUpdate[] = [];
