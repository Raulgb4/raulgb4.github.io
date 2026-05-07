# Personal Portfolio (v2)

This repository contains the second and current version of my personal portfolio website.

The project has been fully redesigned and rebuilt from scratch using a modern, performant, and maintainable web stack, with a strong focus on data-oriented thinking, software engineering practices, and clarity of communication.

The portfolio serves both as a professional presentation and as a demonstration of how I approach frontend architecture, performance, accessibility, and internationalization.

## Tech Stack

- **Astro** — Static site framework optimized for performance, SEO, and clean architecture
- **TypeScript** — Strong typing for reliability and scalable development
- **Tailwind CSS v4** — Utility-first styling for a consistent and maintainable design system
- **React** — Used only for isolated interactive components (counters, animated elements)

## Quick Start

```bash
npm ci
npm run dev
```

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |

## Project Structure

```
src/
├── components/     # Reusable UI components (Navbar, Footer, Reveal, BackToTop)
├── i18n/         # Internationalization (en.json, es.json, index.ts)
├── layouts/       # Page layouts (Layout.astro)
├── pages/         # Routes ([lang]/*.astro)
└── styles/       # Global CSS and animations
```

## Routing

- Root (`/`) redirects to `/en/`
- Language-prefixed routes: `/en/` and `/es/`
- All localized pages must export `getStaticPaths()` from `LANGS` in `src/i18n/index.ts`

## SEO & Metadata

- Centralized in `src/layouts/Layout.astro`
- Includes canonical URLs, hreflang, Open Graph, Twitter Cards, sitemap

## Project Goals

- Deliver a fast, accessible, and professional personal portfolio
- Clearly communicate my technical profile and career focus
- Apply solid software engineering and frontend best practices
- Maintain a clean, readable, and easy-to-evolve codebase

## Content Overview

- Professional profile and background
- Work experience and academic background
- Technologies, tools, and technical stack
- Certifications and continuous learning
- Selected projects (including Final Degree Project)
- Contact information and external profiles
- Multilingual support (English / Spanish)

## Deployment

The portfolio is deployed using **GitHub Pages** and built as a fully static site via Astro.

It uses a language-prefixed routing structure (`/en`, `/es`) and includes SEO best practices:

- Canonical URLs
- Language alternates (`hreflang`)
- Open Graph and Twitter metadata
- Sitemap generation

---

Built with Astro + Tailwind CSS + React
