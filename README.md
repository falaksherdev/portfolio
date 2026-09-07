# Developer Portfolio — Next.js 16

A frontend-focused MERN/Next.js developer portfolio: animated header and hero,
light/dark theme, an ambient animated SVG "blueprint" background, and sections
for projects, skills, experience, education, and hobbies.

Built with Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS v4,
Framer Motion, and `next-themes`.

## 1. Install

```bash
npm install
```

## 2. Add your own content

Everything on the page is pulled from **`data/portfolio.ts`**. Open that file
and replace the placeholder values:

- `profile` — name, role, tagline, summary, email, resume link, socials
- `skills` — frontend / backend / tools, grouped
- `projects` — name, `status: "live" | "not-live"`, `url`, description, bullet
  points, tech tags
- `experience` — company, role, duration, location, bullet points
- `education` — school, degree, duration, detail
- `certifications` — simple string list
- `hobbies` — label + short note

You don't need to touch any component file to update your content.

If you add a resume PDF, drop it in `public/resume.pdf` (already referenced
by `profile.resumeUrl`).

## 3. Run locally

```bash
npm run dev
```

Open http://localhost:3000.

## 4. Build for production

```bash
npm run build
npm run start
```

## Notes

- **Theme toggle**: top-right of the navbar, powered by `next-themes` with
  `class` strategy — see `app/globals.css` for the `:root` / `.dark` color
  tokens if you want to adjust the palette.
- **Background animation**: `components/AmbientBackground.tsx` draws the
  slow-drifting blueprint grid + circuit nodes. Reduced-motion is respected
  automatically.
- **Fonts**: Space Grotesk (headings), Inter (body), JetBrains Mono (labels/
  tags), loaded via `next/font/google` in `app/layout.tsx` — requires an
  internet connection on first build so Next can fetch them.
- Deploy anywhere that supports Next.js 16 (Vercel is the zero-config option).
