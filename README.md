# pvt-next

A Next.js (App Router) project using TypeScript, Tailwind CSS, and Supabase for authentication and data.

This README summarizes the project and how to run it locally. It intentionally omits the admin side of the app.

## Key Features

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Auth / DB:** Supabase (see `lib/supabase.ts`)
- **UI:** Reusable component library in `components/` and `components/ui/`

## Quick Start

Prerequisites: Node.js (v16+ recommended) and a package manager (`npm`, `pnpm`, or `yarn`).

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Useful Scripts

- `npm run dev` — Run development server
- `npm run build` — Build for production
- `npm run start` — Start production server

(See `package.json` for the exact script definitions.)

## Project Structure (high-level)

- `app/` — Next.js app routes and layouts (public-facing pages like home, about, projects, contact, notes sharing, etc.)
- `components/` — Shared React components and UI primitives
- `components/ui/` — Small UI building blocks (button, input, dialog, etc.)
- `lib/` — Small libraries and helpers (e.g., `lib/supabase.ts`, `lib/utils.ts`)
- `public/` — Static assets

Note: the `admin/` route and related files are intentionally not documented here.

## Environment

This project uses Supabase. Provide the following environment variables in your local `.env.local` (or via your host):

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Other environment variables may be required depending on added integrations—check `lib/supabase.ts` and other `lib/` helpers.

## Deployment

Deploy to Vercel for the smoothest Next.js experience. Make sure to add the same environment variables to your Vercel project settings.

## Useful Files

- `app/page.tsx` — Home page entry
- `app/layout.tsx` — Global layout and metadata
- `components/Header.tsx`, `components/Footer.tsx` — Primary layout components
- `lib/supabase.ts` — Supabase client setup


## Website Information

This section describes the public-facing website: its purpose, key pages, audience, and features. The admin side is intentionally excluded.

- **Purpose:** Serve as a content and resource portal for projects, notes, and company information. It includes informational pages (About, Careers, Contact), legal pages (Privacy Policy, Terms), and content-sharing for notes and projects.
- **Primary audience:** Students, contributors, and visitors looking for project information, shared notes, or to contact the team.

Key public pages and routes (found under `app/`):

- `/` (home): Landing page and primary entry to the site.
- `/about`: Organization or site information and mission.
- `/projects`: Project listings and details.
- `/contact`: Contact form or contact information.
- `/careers`: Career openings or company hiring info.
- `/note/[slug]`: Individual note pages accessible by slug.
- `/share/notes/[branch]/semester/[semester]`: Notes-sharing section organized by branch and semester.
- `/privacy-policy`: Privacy policy content.
- `/terms-and-condition`: Terms and conditions page.
- `/disclaimer`: Any legal disclaimers.

Features and notable integrations:

- **Authentication & data:** Supabase is used for auth and data access (`lib/supabase.ts`) — used by public features like login and user-specific actions.
- **SEO & sitemap:** `sitemap.ts` and `robots.ts` are present to support search engine indexing and crawling rules.
- **Reusable UI:** A component library in `components/` and `components/ui/` provides consistent UI primitives (buttons, cards, dialogs, inputs).
- **Accessibility & theming:** There is a `DarkModeScript.tsx` and consistent layout components (`Header.tsx`, `Footer.tsx`) to support theming and navigation.
- **Shareable content:** The `share/notes` structure implies easy sharing of semester/branch-scoped notes.

Content & UX notes:

- Pages are organized with layouts under `app/` to provide consistent header/footer and metadata.
- The site prioritizes readable content (note pages, project descriptions) and simple navigation for finding semester/branch notes.
- Legal and policy pages are included to support privacy and compliance needs.

Where to look in the codebase for core website behavior:

- Layout and routing: `app/layout.tsx` and route folders under `app/`
- Page implementations: files like `app/page.tsx`, `app/about/page.tsx`, `app/projects/page.tsx`, etc.
- Shared UI: `components/` and `components/ui/`
- Data/auth helpers: `lib/supabase.ts`, `lib/utils.ts`

## Contributing

If you'd like to contribute, open an issue or PR describing your changes. Keep changes focused and follow the existing code style.

---

If you want, I can also:

- Add a short development checklist to this README
- Add example `.env.local` with placeholder keys
- Generate a minimal CONTRIBUTING guide

Tell me which of the above you'd like next.
