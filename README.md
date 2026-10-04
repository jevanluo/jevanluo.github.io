# Jevan Luo personal site

This is a local Astro implementation of the approved homepage, Research, and Notes design. It is prepared for GitHub Pages and `jevanluo.com`, but it has not been uploaded or deployed.

## Run locally

Use Node 22.19+ or 24, then:

```sh
npm install
npm run dev
```

Open the local URL printed by Astro. Before publishing, run `npm run check` and `npm run build`.

## Add content

- **Homepage text:** edit `src/pages/index.astro`. The current copy is a draft from the approved design.
- **Public email:** set `email` in `src/data/site.ts`. The email link stays hidden until an address is supplied.
- **Cover and portrait:** replace `public/images/cover.jpg` and `public/images/portrait.png`. Both are temporary generated placeholders; the portrait is not a likeness of Jevan Luo. Keep those filenames or update their references in the layout and CSS.
- **Research:** the `publications` array in `src/data/publications.ts` currently contains 16 published journal articles and book chapters transcribed from the September 2026 CV source at `~/Documents/ChatGPT/Job preparation/CV_Overleaf/publications.tex`. Its `publication_checks.md` records selective verification and limits. Two in-press papers and two under-review manuscripts remain out of the site pending a current status check. Review the list and topic tags before publishing. Each entry can have `title`, `authors`, `venue`, `year`, `topics`, `doi`, `pdf`, and `citationUrl`. Topic and year filters are built from these entries automatically.
- **Notes:** add one `.md` file per note in `src/content/notes/`. Use `example-math-and-figure.md` as a syntax reference. Its `draft: true` setting keeps it off the published site. Change to `draft: false` only for content you want public.
- **Other updates:** add items to `src/data/updates.ts` if you want research or news on the homepage. Published notes appear there automatically.

Example publication entry:

```ts
{
  title: 'Verified publication title',
  authors: 'Authors as printed in the publication',
  venue: 'Journal or venue',
  year: 2026,
  topics: ['Psychometrics'],
  doi: '10.xxxx/example',
  pdf: 'https://example.com/paper.pdf',
}
```

Notes support `$inline math$`, `$$display math$$`, and local figures with `![alt text](./assets/figure.svg)`. Put a caption in the following Markdown paragraph. Math is rendered at build time with `remark-math` and `rehype-katex`; local Markdown images are handled by Astro.

## Publishing later

The included GitHub Actions workflow builds and deploys a static site when `main` is pushed to a GitHub repository with Pages configured for **GitHub Actions**. `public/CNAME` and `astro.config.mjs` are prepared for `jevanluo.com`. Create a repository and review all content, links, and image placeholders before connecting the domain. DNS changes and Blogger deletion should happen only after the replacement site is ready and verified.

GitHub Pages is static hosting, so account-free public comments with moderation require a separate service or workflow. Comments are not implemented here yet.
