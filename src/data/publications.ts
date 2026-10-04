export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  topics: string[];
  doi?: string;
  pdf?: string;
  citationUrl?: string;
};

// Add verified publications here. See README.md for an example.
export const publications: Publication[] = [];
