# Prolific Barbering Company

A lightweight, mobile-first digital business card based on the studio-hours and service-menu photos supplied by Leo.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4 (CSS-first theme)
- shadcn/ui Button and Card components (Radix primitives)
- Tree-shaken Lucide icons
- Self-hosted Barlow Condensed and Sancreek fonts via Fontsource

No backend, analytics, external font requests, animation libraries, or client-side router.

## Develop

Node.js 22.12+ recommended.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

## Features

- Original blackletter logo extracted and perspective-corrected from the supplied photo
- Charcoal, ivory, and muted-gold palette; vintage menu typography
- All eight prices, studio hours, and contact details transcribed from the photos
- Call, text, email, and text-to-book actions
- Static downloadable vCard (including iOS support)
- Native share sheet with clipboard fallback
- Keyboard focus styles, skip link, reduced-motion support, and live status announcements
- Single-column phone-first layout; maximum width 480px

## Content

Update `src/App.tsx` for prices, hours, and contact details. Keep `public/Prolific-Barbering-Company.vcf` and `index.html` in sync if contact details change.

All display assets are in `public/`. The original WhatsApp photos are not included in this repository.

## Validation

Production build and npm audit pass. Browser smoke tests checked:

- All eight prices against the supplied menu
- No horizontal overflow at 320, 360, 390, 430, 768, and 1440px
- Service-menu anchor navigation
- Clipboard fallback for sharing
- vCard download and filename
- Call and SMS destinations
- No browser runtime errors
- Mobile and desktop screenshots visually reviewed

## Deploy to Vercel

The project is ready for Vercel's Vite preset: build command `npm run build`, output directory `dist`.

GitHub is the first delivery step; deployment is intentionally pending. After deployment, add absolute social-preview and canonical URLs to `index.html`, and the public URL to the vCard. Sharing already uses the current origin rather than a hardcoded development URL.

See `NOTES.md` for source notes and remaining follow-ups.
