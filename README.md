# Art portfolio (`portfolio-art`)

Next.js app for **art.leosiu.dev** — photography & ceramics, foyer-style layout. Styling and design tokens are aligned with the main site in [`portfolio-dev`](../portfolio-dev/) (Space Grotesk, Playfair Display, Cascadia Code, shared CSS variables).

## Scripts

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build
pnpm start
pnpm lint
```

## Project layout

| Path | Purpose |
|------|---------|
| `src/app/page.tsx` | Home / Foyer |
| `src/app/globals.css` | Theme tokens, Tailwind v4 `@theme`, base styles |
| `src/app/layout.tsx` | Fonts & root layout |
| `src/components/` | `ArtHeader`, `ArtSidebar`, `ArtFooter`, frames, foyer, floor plan |
| `src/lib/constants.ts` | Room routes, preview flag |

## Preview mode (home only)

Internal links (sidebar rooms, floor-plan cells, “Opening notes”) are gated by **`HOME_PREVIEW_ONLY`** in `src/lib/constants.ts`. Set it to `false` when those routes exist and you want full navigation.

## Stack

- **Next.js** (App Router) · **React** · **TypeScript**
- **Tailwind CSS v4** · **tw-animate-css**

## Deploy

Build with `pnpm build` and host like any static/Node Next app (e.g. Vercel). Point the domain **art.leosiu.dev** at this project’s deployment.
