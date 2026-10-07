# Jinwen Luo personal site

This Astro site is published from the [jevanluo.github.io repository](https://github.com/jevanluo/jevanluo.github.io) through GitHub Pages at [jevanluo.com](https://jevanluo.com/). Cloudflare DNS points to GitHub, and HTTPS is enforced.

## Run locally

Use Node 22.19+ or 24, then:

```sh
npm install
npm run dev
```

Open the local URL printed by Astro. Before publishing, run `npm run check` and `npm run build`.

## Add content

- **Homepage text:** edit `src/pages/index.astro`. The current copy is a draft from the approved design.
- **Public email:** `src/data/site.ts` sets the collaboration link to `jevanluo@ucla.edu`; change that value if your preferred public address changes.
- **Cover, portrait, and appearance:** The homepage uses `public/images/portrait-tighter.png`, the selected A crop of the AI-assisted portrait based on Jinwen's supplied photograph. It keeps the full hair and ends just below the collar, displayed at 144 px wide on desktop and 126 px on mobile. The introduction spacing follows the shorter crop. The fixed header on Publications and Notes uses the same selected portrait, scaled to keep its face framing and position consistent across pages. From 6 a.m. to 8 p.m. in the visitor's local time, the site defaults to Light mode with a detailed Chinese watercolor skyline; from 8 p.m. to 6 a.m., it defaults to Dark mode with a neon cyberpunk skyline. The footer's Appearance menu offers manual mode, daytime palettes, and drawing overrides; choices persist in that browser's local storage. Earlier portrait, cover, and color studies remain in a local `design-options/` folder outside the published repository.
- **Publications:** the `publications` array in `src/data/publications.ts` currently contains 18 published journal articles and book chapters, including 16 transcribed from the September 2026 CV source at `~/Documents/ChatGPT/Job preparation/CV_Overleaf/publications.tex`. Its `publication_checks.md` records selective verification and limits. The MIX-R paper in Psychometrika and the teachers’ epistemic agency paper in Teaching and Teacher Education were added on 6 October 2026 after verification against publisher records and Crossref; both appear in the homepage updates. The latter uses the published journal, volume 183, and article 105826, correcting the older CV’s in-press journal name. Its assigned issue is December 2026; no exact online publication date is asserted. Under-review manuscripts remain out of the site pending a current status check. Each entry can have `title`, `authors`, `venue`, `year`, `topics`, `doi`, `pdf`, optional `resources` (label and URL), and an `image` with `src`, `alt`, `figure`, `sourceUrl`, and an optional verified `license`. Add an APA and BibTeX pair to `src/data/citations.ts` under the same DOI when adding a new publication. Citations are static, so the published site makes no live citation API requests. A Cite button beside DOI and PDF opens an APA and BibTeX dialog, where visitors can review either format before copying it. They began with DOI-registry exports; known discrepancies were corrected against the CV and publisher pages, including the printed 2025 year for the STEM teachers article, the printed 2023 year for the rating-scale article, and the publisher's spelling of Jeon in the critical-thinking article. Seven open PDF links have been added where a publisher or institutional repository provided a matching copy. Other publications retain their DOI link; absence of a PDF link does not mean no open version exists. Topic and year filters are built from these entries automatically. The list borrows the year-grouped citation hierarchy of Yaoyao Liu's Minimal Light site while retaining this site's quieter colors and titleless page. Fifteen entries now use figures or screenshots from the cited papers: seven verified CC BY 4.0 figures and eight supplied by Jinwen Luo without a CC license being asserted. The MIX-R thumbnail is the author-supplied crop of Figure 4, used without modification. The teachers’ epistemic agency thumbnail is the author-supplied comparison of high- and low-group conversational-function networks, also used without modification. Figure provenance is recorded in the project documentation, without a source panel on the public page; three entries remain text-only until suitable figures and reuse terms are confirmed. The selected figures and their provenance are documented in `docs/figure-sources.md`. Earlier conceptual illustrations remain in the local, unpublished `design-options/` folder. The old `/research/` address redirects to `/publications/`.
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

## Hosting and jevanluo.com

The public repository is [`jevanluo/jevanluo.github.io`](https://github.com/jevanluo/jevanluo.github.io). A push to `main` runs `.github/workflows/deploy.yml`. GitHub Pages has `jevanluo.com` set as the custom domain, and HTTPS is enforced. Both the apex and `www` domains use GitHub's approved certificate; `www` redirects to the apex.

The DNS configuration is:

All five website records are **DNS only** in Cloudflare. Keep unrelated MX/TXT records, including email and GitHub's verification TXT record.

   | Type | Name | Content |
   | --- | --- | --- |
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | CNAME | `www` | `jevanluo.github.io` |

In personal GitHub **Settings → Pages**, verify ownership of `jevanluo.com` using GitHub's TXT record for added protection.

See [GitHub's custom-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site), [domain verification](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages), and [Astro's GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/).

GitHub Pages is static hosting, so account-free public comments with moderation require a separate service or workflow. Comments are not implemented here yet.
