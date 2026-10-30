# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev     # dev server at http://localhost:3000
npm run build   # production build (also the type-check gate)
npm run lint    # ESLint 9 flat config (next core-web-vitals + typescript)
```

There is no test framework configured. Verify changes with `npm run lint` and `npm run build`.

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4 (via `@tailwindcss/postcss`), Framer Motion. Path alias `@/*` maps to the repo root.

## Architecture

Personal portfolio. `/` is a single-page layout of anchor-nav sections (`components/HomePage.tsx`); sub-pages `/about`, `/projects`, `/experiences`, `/certificates`, `/contact` show full content.

### Persona system (dual portfolio)

The site serves two personas: `"developer"` and `"va"` (Shopify virtual assistant). The whole UI switches on this.

- `lib/persona.ts` — type, `localStorage` key `portfolio-persona`, `applyPersona` sets `data-persona` on `<html>`.
- `components/common/PersonaScript.tsx` — inline script in `app/layout.tsx` that sets `data-persona` before hydration (avoids flash).
- `components/common/PersonaProvider.tsx` — React context; `usePersona()` exposes `persona`, `setPersona`, `isDeveloper`, `isVa`. Initial state is read from the `data-persona` attribute.
- `HomePage.tsx` renders shared sections (Hero, About, Experience, Contact) plus persona-specific ones: developer gets TechStack/Education/Certificates/Projects/DevServices; VA gets VaToolkit/VaServices/VaWork. Sections are `Card`s in a 3-column bento grid; `HomePage` assigns each card's `lg:col-span`/`lg:row-span` via its `className` prop.
- `app/globals.css` overrides tokens under `[data-persona="va"]` and `[data-theme="dark"][data-persona="va"]`.

### Theme system

Same pattern as persona: `lib/theme.ts` + `ThemeScript` (pre-hydration) + `ThemeProvider`, toggling `data-theme="light" | "dark"` on `<html>` (key `portfolio-theme`, falls back to system preference). Design tokens (`--background`, `--surface`, `--accent`, `--border`, ...) live in `app/globals.css` per theme/persona; style with these variables rather than hard-coded colors.

### Content

All copy and data live in `lib/data/`: `profile.ts` (developer persona), `vaProfile.ts` (VA persona), plus `project`, `experience`, `education`, `certificate`, `socialLink`. Section components read from these; don't scatter copy into components. Developer-side content is kept in sync with the owner's résumé, so don't add claims that aren't on it. In `project.tsx`, the first paragraph of `description` (up to the first blank line) is the list summary; the full text shows in the modal.

### Components

- `components/layout/` — Header, Footer.
- `components/sections/` — home-page sections (default exports).
- `components/common/` — providers, scripts, and reusable UI. `Card` is the section shell; `icons.tsx` holds the inline SVG icons. List components (`ExperienceAccordion` for home, `ExperienceList` for `/experiences`, `ProjectList` with `layout="grid" | "list"`, `ChipGroups`, `ServiceList`, `CertificateList`) are shared by home and sub-pages. `RoamingCursor` (rendered by `HomePage`) is a Figma-style cursor that glides to whichever section crosses 40% of the viewport (the hero near the top of the page) and types that section's note; cards sharing a row are visited in turn. Notes come from `cursorNotes` in `profile.ts` / `vaProfile.ts`, keyed by section id, and it anchors to each `Card`'s `${id}-title` heading.
- `components/layout/Header.tsx` renders nothing on `/` (the hero has its own switchers) and a slim bar on sub-pages.

## Design

Bento-card layout (light by default via system preference, with a dark theme): a profile header (school, name, with the roaming cursor starting above it, role, location, availability badge, tagline, contact chips) above a `max-w-4xl` grid of bordered `Card`s with icon headings. Geist is the only typeface. `.chip` (in `globals.css`) is the pill style for links and tags; `.link` is the underlined inline link. The accent (emerald, amber on the VA side) is for hover, active states and the roaming cursor; `--accent-contrast` is the text colour on accent backgrounds.

Framer Motion is used by `RoamingCursor`, the project modal and `StackForgePromo` (the owner wants that popup kept as is; `.card`/`.btn-*` in `globals.css` exist for it). Keep other motion out: no gradient blobs, glows or scroll-triggered fade-ins. `styles/Galaxy.tsx` and `GalaxyBackground.tsx` are legacy and unused.

`npm run lint` currently reports pre-existing `react-hooks/set-state-in-effect` errors in `PersonaProvider`, `ThemeProvider` and `StackForgePromo`, and a `prefer-const` error in `styles/Galaxy.tsx`.
