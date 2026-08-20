# Owais Ahmad — Portfolio

Personal portfolio of **Owais Ahmad**, AI & Data Science Manager.
Live at **[owaiskhan9654.github.io](https://owaiskhan9654.github.io)**.

## Tech stack

- **React 19** + **TypeScript**
- **Vite 6** (build tooling)
- **Tailwind CSS v4** (design system, CSS-first config)
- **Motion** (Framer Motion) for animations
- **lucide-react** for icons

Dark-first design with a light-mode toggle, glassmorphism, animated gradients,
and a fully responsive layout.

## Local development

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # type-check + production build → dist/
npm run preview  # preview the production build locally
```

## Editing content

All content lives in [`src/data/portfolio.ts`](src/data/portfolio.ts) —
profile, experience, skills, projects, honors, and education.
Update that file to change what the site shows; no component edits needed.

The résumé PDF is served from [`public/`](public/) and linked in the navbar/hero.

## Deployment

Deployed automatically to **GitHub Pages** via GitHub Actions
([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) on every push
to `master`.

> **One-time setup:** In the repo, go to **Settings → Pages → Build and
> deployment → Source** and select **GitHub Actions** (not "Deploy from a
> branch"). This is required because the site is now built from source rather
> than served from committed static files.
