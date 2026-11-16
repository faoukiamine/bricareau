# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Bricareau's marketing website: a French-language (Québec) water-treatment company covering residential, commercial/office, industrial and hotel/restaurant segments, plus a blog. It is a client-side React SPA (Vite + TypeScript + Tailwind + shadcn/ui). It was scaffolded with Lovable, so edits made in Lovable are committed straight to this repo. All user-facing copy, URLs, and most identifiers in page names are in French.

`DOCUMENTATION.md` (in French) is the longer project reference. Its route tables are **out of date**: `src/App.tsx` is the source of truth.

## Commands

```sh
npm i                 # install (package-lock.json is canonical; a bun.lockb also exists)
npm run dev           # dev server on http://localhost:8080
npm run build         # production build -> dist/
npm run build:dev     # build in development mode (enables lovable-tagger)
npm run lint          # eslint
npm run preview       # serve the built dist/
npx tsc -p tsconfig.app.json --noEmit   # type-check (vite build does not type-check)
```

There is no test suite.

Deployment: production is built on Vercel. A multi-stage `Dockerfile` also exists (it serves `dist/` with `serve -s` on port 3000). The `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` env vars are compiled into the bundle, so they must be set **at build time**.

## Architecture

- **Routing**: every route is declared by hand in `src/App.tsx`, and each page is imported eagerly there (no lazy loading). URLs are long French SEO slugs, e.g. `/solutions-d-adoucissement-de-filtration-et-de-purification-d-eau-residentielles`, and often differ from the page file names. Some page components are imported under one-letter aliases (`A`, `B`, `C`). Blog articles live in `src/pages/Blog pages/` (the folder name contains a space, and some file names contain spaces, accents or trailing spaces). Each article gets its own top-level route.
- **Renaming or adding a route** means updating several places that hold hard-coded paths: `src/App.tsx`, `src/data/navigation.ts` (header mega-menu), `src/components/Footer.tsx`, `src/utils/breadcrumbLabels.ts` (labels and parents for the slug segments that `GlobalBreadcrumbs` uses), `src/data/blogCategories.ts` (blog articles), `src/data/searchData.ts` / `productIndex.ts` (site search), `public/sitemap.xml`, and any in-page links. The root `update-route-*.cjs` / `update-links*.cjs` scripts are one-off find-and-replace scripts written for past renames. They are not part of the build.
- **Pages are self-contained**: each page renders its own `<Header />`, `<Footer />` and `GlobalBreadcrumbs`, and sets `document.title` in a `useEffect`. There is no shared layout route. Blog articles wrap their content in `components/BlogLayout.tsx`, which takes a title, a header image and a TOC, and builds related-article carousels from `data/blogCategories.ts`.
- **Content is static TypeScript data** in `src/data/` (blog categories/articles, FAQs, testimonials, contaminants, navigation, search index). `faqs.json` and `generate-faqs-ts.cjs` / `extract-faqs.cjs` were used to generate `data/faqs.ts`.
- **Backend**: Supabase, called directly from components through `src/lib/supabase.ts`. Forms insert into the `consultations` table (contact, services, water-test and consultation forms) and the `diagnostics_leads` table (`WaterDiagnosticQuiz`). `supabase_schema.sql` only defines `water_test_requests`, so it does not match what the code uses. TanStack Query is installed, but the inserts are plain `supabase.from(...).insert(...)` calls. Bookings use the Cal.com embed.
- **Images** are mostly imported from `src/assets/` (hundreds of files with arbitrary names, some with spaces or accents). Imports must match the file name's case exactly: Vercel builds on a case-sensitive filesystem, and a wrong-case import already broke a deploy (see commit d84263e). `vite.config.ts` adds `**/*.JPG` to `assetsInclude`.
- **Styling**: Tailwind with shadcn HSL CSS variables in `src/index.css`. The brand navy `#18448F` is defined as `brand-navy`, and the Tailwind `blue-500/600/700` shades are overridden in `tailwind.config.ts`, so `blue-*` classes render the brand palette. Design-system notes are in `design-system/*/MASTER.md` and `design_system_hotels.md`. shadcn primitives are in `src/components/ui/` (`components.json` config, `@/` alias = `src/`).
- **TypeScript is non-strict** (`strict: false`, `noImplicitAny: false`), so loose typing is common.

## WordPress migration (`wordpress/`)

The whole site (every route in `src/App.tsx`) now also exists as a WordPress block theme in `wordpress/themes/bricareau/` (see `wordpress/README.md` for setup: Docker on :8888, `wp bricareau seed`, and what it imports). Forms (contact, consultation, water test, quiz) are rebuilt with the Fluent Forms plugin, not ported as React: definitions are in `inc/seed/forms.php`, shown through the `bricareau/form-section` block. Multi-step forms require Fluent Forms Pro, so the free version uses one page with section headings. Submissions stay in WordPress (not Supabase).

- Each section is a dynamic block in `src/blocks/<name>/`: `block.json` attributes, `render.php` renders the HTML (Tailwind classes ported from the React JSX), `index.js` is only sidebar controls + `ServerSideRender` (shared helpers in `src/shared/controls.js`), `view.js` is vanilla front-end JS. Blocks save `null`, so content lives in attributes.
- Tailwind scans the PHP/JS files, so classes must appear as complete literal strings; rebuild with `npm run build` (in the theme folder) after changing them. `build/` is gitignored.
- Editor title fields use a mini syntax handled by `bricareau_format_title()`: each line is a title line, `*text*` gets the accent, `**text**` is bold and `_text_` is italic light.
- Header/footer links are WordPress menus (Appearance > Menus, locations in `inc/menus.php`): a header tab whose items have sub-items renders as image cards, an item ticked "Encadré promo" is the dropdown's image box. `wp bricareau seed` creates them from the defaults in `inc/navigation.php`, which also show while no menu is assigned. Testimonials are the `bricareau_temoignage` post type, seeded from `data/testimonials.json`.
- Each migrated page is a PHP array in `inc/seed/pages/<name>.php` (block names + attributes, copied from the matching `src/pages/*.tsx`); `$img('file.jpg', 'alt')` imports `src/assets/file.jpg` (mounted in the container) into the media library. Keep the React URLs as page slugs. Prefer adding a variant/option to an existing block over creating a page-specific block.
- Forms are Fluent Forms defined in `inc/seed/forms.php` and shown by `bricareau/form-section` (footer signup: `infolettre`). No Supabase: entries stay in Fluent Forms, and notifications go to the `{bricareau_requests_email}` smartcode, set in Settings > Demandes du site (`inc/requests.php`).
- `bin/package.sh` builds `dist/bricareau-theme.zip` (theme + seed images) for a fresh install; steps are in `wordpress/README.md`. A new asset folder or dynamic image name must still appear literally in the seed files, or it won't be bundled.
- SEO is handled by Yoast SEO (needs WordPress 7.0+; local Docker is 7.1). The seed's `seo_title` / `seo_description` go to the theme's `bricareau_seo_*` meta and are copied into Yoast's fields (`wp bricareau seo-yoast`, also run by the seed when Yoast is active); `inc/seo.php` only prints its own tags when no SEO plugin is active.
- Blog articles are posts and FAQs are the `bricareau_faq` post type; `bin/extract-content.mjs` renders the React sources into `data/*` (native block markup for articles and legal text). Long text can be a raw markup string in a page's `blocks` array.
- Breadcrumb parents and labels live in `bricareau_breadcrumb_parents()` (`inc/navigation.php`), ported from `src/utils/breadcrumbLabels.ts`. Server-rendered blocks must use `bricareau_block_wrapper( $attributes, … )` so the HTML anchor becomes the section id.

## Repo notes

- The root-level `*.cjs` and `*.py` scripts (`fix_*`, `update-*`, `reorder*`, `replace_badges`, `remove_bg`/`run_rembg`, `seo-audit-script`) are one-off content-maintenance tools that were run by hand. `tmp_old_uv.tsx` and `stitch_design.html` are scratch files.
- `.agent/skills/` holds skills for another agent tool (`seo-geo-aeo` audit, `ui-ux-pro-max` design database with Python search scripts). They are reference material only.
