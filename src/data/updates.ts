export type SiteUpdate = {
  date: string;
  kind: 'Publication' | 'News';
  title: string;
  href: string;
};

// Use this only for publication or news items that should appear on the homepage.
// Notes are included there automatically from their Markdown metadata.
// Dates indicate when an update is announced on this website.
export const updates: SiteUpdate[] = [
  {
    date: '2026-10-06',
    kind: 'Publication',
    title: 'New paper in Psychometrika: within-person variation in response processes',
    href: 'https://doi.org/10.1017/psy.2026.10146',
  },
  {
    date: '2026-10-06',
    kind: 'Publication',
    title: 'New paper in Teaching and Teacher Education: teachers’ epistemic agency in AI-supported design',
    href: 'https://doi.org/10.1016/j.tate.2026.105826',
  },
];
