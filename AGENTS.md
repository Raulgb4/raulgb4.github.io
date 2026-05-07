# AGENTS.md

## Scope

- This is a single-package Astro site (no monorepo/workspaces).
- Main source lives in `src/`; static assets in `public/`.
- Build output is `dist/` (generated; do not edit manually).
- `.astro/` is generated cache/types (do not edit manually).

## Dev Commands (exact)

- Install: `npm ci`
- Dev server: `npm run dev`
- Production build: `npm run build`
- Preview built site: `npm run preview`
- Astro CLI passthrough: `npm run astro -- <args>`

## Verification Expectations

- There are no `test`, `lint`, or dedicated `typecheck` scripts in `package.json`.
- Default verification is: `npm run build` (this is what CI runs).
- If you need formatting checks, use Prettier manually (Astro plugin is configured in `.prettierrc`).

## Routing + i18n Wiring (easy to break)

- Root route `src/pages/index.astro` hard-redirects to `/en/` with `Astro.redirect("/en/", 302)`.
- Localized pages are under `src/pages/[lang]/...`.
- Each localized page must export `getStaticPaths()` from `LANGS` in `src/i18n/index.ts`.
- Supported languages are defined centrally in `src/i18n/index.ts` (`LANGS = ["es", "en"]`).
- UI strings come from `src/i18n/en.json` and `src/i18n/es.json` via `t(lang, key)`.

## Layout / SEO Source of Truth

- Shared page shell + SEO tags are centralized in `src/layouts/Layout.astro`.
- `astro.config.mjs` sets:
  - `site: "https://raulgb4.github.io"`
  - `trailingSlash: "always"`
  - sitemap integration enabled
- CI deploys `dist/` to GitHub Pages on pushes to `main` via `.github/workflows/deploy.yml` (Node 22, `npm ci`, `npm run build`).

## Known Repo Quirk

- `src/layouts/Layout.astro` currently uses `site.baseUrl = "https://raulgb4.github.io/curriculum-vitae"` for canonical/alternate/OG URLs, which differs from `astro.config.mjs` `site`.
- If touching SEO/URL logic, reconcile both locations intentionally instead of updating only one.
