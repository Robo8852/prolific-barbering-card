# Project notes

## Delivery status

Created and pushed to GitHub first, then deployed to Vercel at Leo's request.

Live: https://prolific-barbering-card.vercel.app/
GitHub: https://github.com/Robo8852/prolific-barbering-card
Vercel team/project: `leo-reyes-projects/prolific-barbering-card`
GitHub integration is connected for automatic deployments.

## Source material

Two WhatsApp images downloaded locally on 2026-10-03:

- `wa-180601-01.jpg`: original logo, studio hours, telephone, email, booking QR
- `wa-180606-02.jpg`: all eight service prices

Phone confirmed and corrected by Leo: (458) 308-5429 (supersedes the photo transcription). Email transcribed from the photo: prolificbarberingcompany@gmail.com.
Hours: Monday–Saturday, 2:00 PM–8:00 PM. Sunday hours are not specified and have not been invented.

| Service | Price |
| --- | ---: |
| Skin fade | $30 |
| Classic cut | $25 |
| Senior cut 65+ | $20 |
| Kids cut | $20 |
| Classic shave | $35 |
| Beard trim | $15 |
| Straight razor with hot towel | $15 |
| Shampoo | $10 |

The reference labels the last four services “Add ons”; that grouping is preserved. Do not invent package pricing, booking availability, an address, social profiles, or owner biography.

## Branding

- The logo is the actual photographed artwork, perspective-corrected with the background removed and encoded as WebP. This preserves the original blackletter wordmark rather than substituting a font.
- Sancreek is a close vintage display match for the service menu, not a verified identification of the original print font.
- Barlow Condensed provides readable, narrow menu/body typography.
- “A classic cut. A lasting impression.” is new marketing copy, not a source quotation.
- Footer credit follows the existing card convention: Proclaim Agency, plain text.

## Follow-ups

1. **Booking URL:** the photographed QR could not be reliably decoded. `src/App.tsx` intentionally uses an honest “Text to book” action. Replace only when a verified booking URL is supplied.
2. **Original artwork:** if the owner can supply a vector or high-resolution logo, replace the extracted `public/assets/prolific-logo.webp` and regenerate the social preview and touch icon.
3. **Owner review:** confirm the transcribed contact details, current prices, and hours before distributing widely.

## QA

Production `npm run build` passes; install audit reports zero vulnerabilities. Automated headless Chrome smoke checks and screenshot review completed at mobile and desktop sizes. Contact actions were checked by destination only; no calls, emails, or SMS messages were sent. Real-device native share/contact import remains a useful final owner check.
