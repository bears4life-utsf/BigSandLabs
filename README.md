# Big Sand Labs

Independent software lab homepage — practical software, AI tools, and experiments born from curiosity and real-world problems.

## Stack

Next.js · TypeScript · Tailwind CSS · React

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

Site copy and experiment cards live in `src/content/`:

- `site.ts` — brand, navigation, section copy
- `experiments.ts` — experiment cards (problem, status, category, links)

Add new experiments to the `experiments` array; the homepage picks them up automatically.

## Deploy

Pushing to `main` builds a static export and deploys to GitHub Pages via Actions.

Live site: https://bears4life-utsf.github.io/BigSandLabs/

Local production export:

```bash
GITHUB_PAGES=true npm run build
```

The static files are written to `out/`.
