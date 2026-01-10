# Peak Blooms Architectural Case Study

A compact, browsable case study of building a modern Next.js app. It documents daily progress, design decisions, and the small automation used to generate timeline metadata.

[Live Site](https://workflow-case-study.vercel.app/)

## Features

- **Interactive timeline** — Browse daily cards with tasks and metadata.
- **Executive summary** — High-level metrics and architectural notes.
- **Design system** — Reusable UI built with Tailwind and shadcn/ui.
- **Data tooling** — Scripts to fetch commits and generate day metadata.
- **Type-safe** — TypeScript-first codebase with linting and formatting.

## Getting Started

**Prerequisites**

- Node.js 18+
- npm (or pnpm/yarn)

**Install & run**

```bash
git clone https://github.com/pkibbey/workflow-case-study.git
cd workflow-case-study

npm install
npm run dev
```

**Useful commands**

- `npm run dev` — Start development server
- `npm run build` — Build production bundle
- `npm start` — Start production server
- `npm run lint` — Run Biome checks
- `npm run format` — Format code
- `npm run fetch-commits` — Fetch commits
- `npm run generate:ai-days` — Generate day metadata

## Project Structure

- `src/app/page.tsx` — Landing page composition
- `src/components/hero.tsx` — Hero and CTAs
- `src/components/date-card-dense.tsx` — Daily card renderer
- `src/components/executive-summary.tsx` — Metrics & notes
- `src/components/dates-metadata.ts` — Day metadata source
- `scripts/fetch-commits.js` — Fetches commits
- `scripts/generate-day-metadata.mjs` — AI generation of day metadata
- `package.json` — Scripts & dependencies

## Tech Stack

- **Next.js 16** — App Router
- **React 19** — UI library
- **TypeScript 5.9** — Type safety
- **Tailwind CSS 4** — Styling
- **Biome** — Lint & format
- **shadcn/ui** — Component primitives
