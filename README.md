# Website Profile — Muhammad Ikhwan Ma'ruf Santoso

Personal portfolio built with Next.js (App Router), React, TypeScript, Tailwind CSS v4 and Framer Motion.
Supports Indonesian and English (toggle in the navbar, choice is saved in `localStorage`).

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Where to edit content

| What | File |
| --- | --- |
| UI text (ID / EN) | `src/i18n/translations.ts` |
| Projects | `src/data/projects.ts` |
| Social links & email | `src/data/socials.ts` (empty URL = icon hidden) |
| Profile photo | `public/profile.jpg` |
| Theme colors | `src/app/globals.css` |
