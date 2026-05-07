# DESIGN.md

## Principles

1. **Clarity beats richness.** Every decorative treatment must earn its place by helping the user understand value. If an effect competes with content, remove it.
2. **Hierarchy is explicit.** Primary actions, key sections, and conversion targets should be visually dominant; secondary information should recede. Avoid treating everything as "important."
3. **Consistent behavior > clever behavior.** Shared patterns for navigation, cards, buttons, and links. When users learn a pattern on one page, it should work everywhere.
4. **Respect the user's time.** Scannability > readability. Use spacing, grouping, and clear labels so users can find value fast.
5. **Dual-mode parity.** Dark and light modes should feel equally intentional, not a transliteration of each other.

---

## Typography

- **Headings**: Use the gradient treatment only for top-level page titles (h1). Subheadings (h2) use solid `text-emerald-500` or `text-emerald-600` on light mode / `text-emerald-400` on dark mode.
- **Body text**: Never use pure black (`#000`) on light mode — use `text-gray-700` or `text-gray-600`. Large paragraphs use `leading-relaxed` (1.625–1.75); UI labels use tighter leading (1.25–1.5).
- **Font sizes**:
  - Page titles: `text-4xl` / `md:text-5xl`
  - Section titles: `text-2xl` / `md:text-3xl`
  - Card titles: `text-lg` / `md:text-xl`
  - Body: `text-base` / `md:text-lg`
  - Small labels/captions: `text-sm`
- **Limits**: Never exceed 65–75 characters per line for body text. Use `max-w-2xl` on paragraphs.

---

## Spacing & Layout

- **Container widths**:
  - Page sections: `max-w-7xl` (full-width sections), `max-w-5xl` (narrow content), `max-w-4xl` (text-focused)
  - Cards: `max-w-md` → `max-w-xl` depending on content density.
- **Vertical rhythm**: Section spacing uses standard increments: `space-y-8`, `py-16` / `py-20`. Never stack sections without breathing room — empty space communicates structure.
- **Card padding**: Consistent `p-5` to `p-7` on cards. Avoid tight cards (less than `p-4`) or very loose ones (more than `p-8`).
- **Grid gaps**:
  - 2-column: `gap-8 md:gap-10`
  - 3-column+: `gap-6`
  - Card grids: `gap-6 md:grid-cols-2 lg:grid-cols-4` (adjust columns to content).

---

## Component Consistency

### Buttons & CTAs

- **Primary**: Emerald solid background, white text, rounded-full (`rounded-full`), subtle shadow. Hover: slight lift (`hover:-translate-y-0.5`) + shadow increase.
- **Secondary**: Emerald outline / translucent background. Same hover lift.
- **Tertiary**: Plain text link with underline on hover + color change.
- **Rule**: One primary CTA per page section. Never use a primary button inside a secondary card.

### Cards

- **Structure**: Wrapper with translucent background (`bg-white/60 dark:bg-white/5`) + subtle border + soft shadow. Hover: lift + shadow increase.
- **Types**:
  - _Info cards_: Title + short description (1–2 lines). No hover interaction beyond lift.
  - _Interactive cards_: Title + description + link/button. Hover shows clickable affordance (border color change + lift).
  - _Stat cards_: Number prominent + label below.
- **Rule**: If you have more than 4 cards in a row, enable filtering or grouping; don't stack 10+ identical cards.

### Navigation

- **Navbar**:
  - Desktop: horizontal links, active state indicated by underline (not background).
  - Mobile: full-screen overlay / drawer. ESC closes. Backdrop click closes.
  - Language switcher: visually distinct from main navigation, always visible.
- **Footer links**: Simple list, no hover effects beyond color change. Avoid social icons in the middle — they belong in the footer bottom/right.

### Forms & Inputs (if applicable)

- Labels above inputs, never placeholder text. `text-sm` labels, `text-base` inputs. Focus ring uses emerald. Error states use red.

### Language Switcher

- Two-mode: pill-style in navbar (current language highlighted), URL-based routing.
- Clicking language always navigates (no SPA re-render needed for this portfolio).
- Redirects: from `/` → `/en/` by default.

---

## UX Improvements

### High priority (apply first)

1. **Consistent trailing slashes** — Fix footer links to include trailing slashes matching navbar (`href=\`/${lang}/\``). Update `src/layouts/Layout.astro` if path logic varies.
2. **Language switcher stays on page** — When switching language on `/about/`, navigate to `/es/about/`, not just `/es/`. Current regex-based JS logic handles this; verify it works for all pages. See `src/components/Navbar.astro:337`.
3. **Remove map from primary flow** — Move the embedded map to a collapsible section below the email/contact core actions on the Contact page. See `src/pages/[lang]/contact.astro:218`.
4. **Focus trap in mobile menu** — Add focus-return after closing (or at least prevent Tab from escaping to background). A simple fix is adding `aria-hidden="true"` and `inert` to backdrop when closed.
5. **Primary CTA visibility** — Reduce Home page section count above the fold. Consolidate "Where I'm heading next" with "What I'm looking for" into single block.

### Medium priority

6. **FAQ grouping** — Divide 10+ items into 2–3 categories (Availability, Skills, Contact, etc.) with collapsible headers, or add a simple filter. Keep current 1:1 details but add grouping container.
7. **Certifications filter** — Group by "featured" vs "supporting," or add a simple category filter (Data, Cloud, Development). Visual hierarchy: first 3 certifications are visually distinct, rest are compact list.
8. **Card density** — Reduce paragraph length in certifications: aim for 2–3 sentences max per certification description. Move long descriptions to expanded views or tooltip.
9. **Reduce animation clutter** — Remove reveal delays for all but h1 and section titles. On Home, don't animate every sub-section; static + hover is cleaner.

### Low priority (nice-to-have)

10. **Persistent "Contact me" CTA** — Add a floating CTA button (bottom-right, similar to BackToTop) that appears after scrolling past hero. Links to Contact page.
11. **Dark mode refinements** — Review light mode contrast; add dedicated dark-mode typography overrides rather than relying on opacity.
12. **Skip links** — Add a "Skip to main content" link for keyboard users at the top of Layout.

---

## What to Fix / Avoid

- **Avoid**: Every section having a gradient heading — use solid emerald `h2` for subsections.
- **Avoid**: Stacking 10+ cards in a single row — always wrap or paginate.
- **Avoid**: Paragraphs longer than 3–4 sentences on cards — use bullet points or truncated text.
- **Avoid**: Decorative gradients/glows that don't indicate interactive state — they become visual noise.
- **Avoid**: Dual-brand URLs (`site.baseUrl` vs `astro.config.mjs site`) — pick one source of truth for all SEO/URL logic and reconcile.
- **Avoid**: Excessive `h1` duplicates — each page should have one, but no page should repeat top-level headings multiple times.
- **Fix**: Footer URL consistency (add `/` to all links) — aligns with `/` always in route config.
- **Fix**: Overlapping i18n key reuse — About should use its own keys, not `home.*` keys, to allow independent evolution.
- **Fix**: Mobile menu focus leak — keyboard users should not Tab outside the open mobile menu.
- **Fix**: Contrast on gray text — verify `text-gray-600` meets WCAG AA on all backgrounds.

---

## Accessibility Checklist

- [ ] Color contrast passes WCAG AA (verify gray-600 on white backgrounds).
- [ ] All interactive elements have visible focus states (`focus:ring-*`).
- [ ] Images include meaningful `alt` (decorative icons can be empty `alt=""` with `aria-hidden`).
- [ ] `<details>` elements are keyboard-accessible in FAQ.
- [ ] Reduced-motion respected in CSS (already in place via `prefers-reduced-motion`).
- [ ] Form inputs have associated labels (if forms are added later).
- [ ] Tab order is logical across all pages.
- [ ] ARIA labels present on icon-only buttons / links (LinkedIn, GitHub, email icons).

---

## Implementation Order

1. Fix footer link trailing slashes + URL source of truth.
2. Group/filter certifications and FAQ.
3. Consolidate Home page above-fold content.
4. Simplify reveal animations.
5. Add focus trap to mobile menu.
6. Adjust card paragraph density.
7. Add persistent CTA option.

---

_Last reviewed: May 2026_
