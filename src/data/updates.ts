export type SiteUpdate = {
  date: string;
  kind: 'Research' | 'News';
  title: string;
  href: string;
};

// Use this only for research or news items that should appear on the homepage.
// Notes are included there automatically from their Markdown metadata.
export const updates: SiteUpdate[] = [];
