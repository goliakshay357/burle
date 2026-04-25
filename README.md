# Burle Convention

Production site for Burle Convention — a function hall in Sadashivpet, Telangana.

Implementation of the Hi-Fi design from `claude.ai/design`.

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript strict
- Self-hosted Google Fonts via `next/font` (Cormorant Garamond + Inter)
- Metadata API · sitemap · robots · manifest · dynamic OG image · favicon
- `EventVenue` JSON-LD for rich search results
- `prefers-reduced-motion` honored throughout
- API route stub for inquiry submissions at `/api/inquiry`

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
npm run typecheck
```

## Configure

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the production origin so canonical/OG URLs resolve correctly.

Site-wide constants (name, address, phone, email) live in `lib/site.ts`.

## Replace placeholders

- `public/media/aerial.mp4` — hero background video. Re-encode at lower bitrate for production (target < 1 MB).
- `components/Placeholders.tsx` — SVG photo stand-ins for Main Hall / Lawn / Foyer / Suites. Swap each for `next/image` when real photography arrives.
- `lib/site.ts` — phone, email, social handles.
- `app/api/inquiry/route.ts` — currently logs to stdout. Wire to Resend / Postmark / Notion / Google Sheets / your CRM of choice.

## Source design bundle

The Claude Design handoff (chat transcript, original HTML/CSS/JS prototype, source assets) lives outside the repo at `/tmp/burle_design/burle-convention/` for reference.
