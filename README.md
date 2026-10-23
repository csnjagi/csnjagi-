# Collins Steve Njagi — Portfolio

A personal portfolio built with Next.js 15 App Router, TypeScript, Tailwind CSS, Framer Motion and Lucide icons. The interface is dark by default, responsive, keyboard-friendly and respects reduced-motion preferences.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

The site is a static, client-enhanced portfolio and can be deployed to Vercel or another Next.js host. Configure the production domain in `app/layout.tsx` metadata before publishing canonical or sitemap URLs.

## Content and assets

- Portfolio content, project architecture and professional experience are in `sections/portfolio.tsx`.
- Reusable reveal and heading components are in `components/`.
- Shared contact details are in `lib/site.ts`; scroll progress is in `hooks/`; shared data types are in `types/`.
- All six source photographs are included as optimized WebP files in `public/images/`.
- Project dashboard illustrations are custom mockups, not screenshots or live repository data. Neither inspected repository contained screenshot assets.
- The contact form opens a prefilled email draft in the visitor’s email app; it does not submit data to a server.
- The CV download is `public/collins-steve-njagi-cv.pdf`. Rebuild it with `python scripts/create-cv.py` (install the asset/document script dependencies with `python -m pip install -r requirements.txt`).

## Repository sources

- [NeuroBudget](https://github.com/csnjagi/NeuroBudget)
- [Network-Monitoring](https://github.com/csnjagi/Network-Monitoring)
