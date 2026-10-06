# Jevan Luo personal site

This is a local Astro implementation of the approved homepage, Publications, and Notes design. It is prepared for GitHub Pages and `jevanluo.com`, but it has not been uploaded or deployed.

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
- **Cover, portrait, and appearance:** The homepage uses `public/images/portrait-illustrated.png`, an AI-assisted portrait based on Jevan's supplied photograph. The full portrait appears at the banner edge; the fixed header on Publications and Notes uses the same face-focused crop and position. From 6 a.m. to 8 p.m. in the visitor's local time, the site defaults to Light mode with a detailed Chinese watercolor skyline; from 8 p.m. to 6 a.m., it defaults to Dark mode with a neon cyberpunk skyline. The footer's Appearance menu offers manual mode, daytime palettes, and drawing overrides; choices persist in that browser's local storage. Earlier portrait, cover, and color studies remain in a local `design-options/` folder outside the published repository.
- **Publications:** the `publications` array in `src/data/publications.ts` currently contains 16 published journal articles and book chapters transcribed from the September 2026 CV source at `~/Documents/ChatGPT/Job preparation/CV_Overleaf/publications.tex`. Its `publication_checks.md` records selective verification and limits. Two in-press papers and two under-review manuscripts remain out of the site pending a current status check. Review the list and topic tags before publishing. Each entry can have `title`, `authors`, `venue`, `year`, `topics`, `doi`, `pdf`, optional `resources` (label and URL), and an `image` with `src`, `alt`, `figure`, `sourceUrl`, and an optional verified `license`. Add an APA and BibTeX pair to `src/data/citations.ts` under the same DOI when adding a new publication. Citations are static, so the published site makes no live citation API requests. A Cite button beside DOI and PDF opens an APA and BibTeX dialog, where visitors can review either format before copying it. They began with DOI-registry exports; known discrepancies were corrected against the CV and publisher pages, including the printed 2025 year for the STEM teachers article, the printed 2023 year for the rating-scale article, and the publisher's spelling of Jeon in the critical-thinking article. Six open PDF links have been added where a publisher or institutional repository provided a matching copy. Other publications retain their DOI link; absence of a PDF link does not mean no open version exists. Topic and year filters are built from these entries automatically. The list borrows the year-grouped citation hierarchy of Yaoyao Liu's Minimal Light site while retaining this site's quieter colors and titleless page. Thirteen entries now use figures or screenshots from the cited papers: six verified CC BY 4.0 figures and seven supplied by Jevan Luo. Figure provenance is recorded in the project documentation, without a source panel on the public page; three entries remain text-only until suitable figures and reuse terms are confirmed. The selected figures and their provenance are documented in `docs/figure-sources.md`. Earlier conceptual illustrations remain in the local, unpublished `design-options/` folder. The old `/research/` address redirects to `/publications/`.
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

## Publish with GitHub Pages and jevanluo.com

This project is still local: it has no GitHub remote or deployment. Before making it public, review the draft homepage text, publications, illustrated likeness, and public email address.

1. Create a **public**, empty GitHub repository named `<USERNAME>.github.io`, replacing `<USERNAME>` with your exact GitHub username. This user-site name lets the existing root-relative links work at the preview URL without changing Astro's `base` setting. Do not initialize the repository with a README.
2. From this directory, push the existing `main` branch:

   ```sh
   git remote add origin https://github.com/<USERNAME>/<USERNAME>.github.io.git
   git push -u origin main
   ```

3. In the repository, open **Settings → Pages → Build and deployment** and choose **GitHub Actions** as the source. The included `.github/workflows/deploy.yml` builds and deploys on pushes to `main`. Confirm that `https://<USERNAME>.github.io/` looks right before changing DNS.
4. In your personal GitHub **Settings → Pages**, verify ownership of `jevanluo.com` using the TXT record GitHub gives you. Then set `jevanluo.com` under the repository's **Settings → Pages → Custom domain**. For Actions deployments, GitHub ignores the repository's `public/CNAME`; the repository setting is required.
5. In Cloudflare DNS, remove conflicting website A/AAAA records for `@` and `www`. Add these four A records for `@` and a CNAME for `www`. Set these web records to **DNS only** during setup so GitHub sees their targets. Keep unrelated MX/TXT records, including email and GitHub's verification TXT record.

   | Type | Name | Content |
   | --- | --- | --- |
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | CNAME | `www` | `<USERNAME>.github.io` |

6. After DNS resolves and GitHub provisions the certificate, enable **Enforce HTTPS** in repository Pages settings. Check both `https://jevanluo.com/` and `https://www.jevanluo.com/`. Retire the old site only after the new domain works.

See [GitHub's custom-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site), [domain verification](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages), and [Astro's GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/).

GitHub Pages is static hosting, so account-free public comments with moderation require a separate service or workflow. Comments are not implemented here yet.
