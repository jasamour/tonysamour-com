# Tony Samour – Freelance Web / Tech Consultant

Freelance web consulting and implementation: website builds, updates, accessibility improvements, and light automations for small businesses and nonprofits.

## Stack

- Vinext (Next.js-compatible API on Vite)
- React 19 + TypeScript
- Tailwind CSS v4
- Cloudflare Workers (production)
- Cloudflare Turnstile (bot protection)
- Resend (notification + autoresponder emails)

## Project status

This project is configured for **production-only** deployment on Cloudflare using:

- Domain: `tonysamour.com`
- Additional custom domain: `www.tonysamour.com`
- Worker config: `wrangler.jsonc`
- Worker entry: `worker/index.ts`

## Local development

Prerequisites:

- Node.js 18+
- npm
- Cloudflare account (for deploy)

Install and run:

```bash
npm install
npm run dev
```

Local app runs at `http://localhost:3000`.

## Assets folder

Use this folder for any site images you want to add:

- `public/assets/`

Examples:

- `public/assets/headshot.jpg`
- `public/assets/case-study-1.jpg`

Then reference images in components/pages with paths like:

- `/assets/headshot.jpg`

## Environment variables

This project uses runtime env vars for metadata and form handling.

Create local env file:

```bash
cp .env.example .env.local
```

Current variables:

- `SITE_URL`
- `SITE_TITLE`
- `SITE_DESCRIPTION`
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
- `TURNSTILE_SECRET_KEY`
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `CONTACT_TO_EMAIL`

Notes:

- `wrangler.jsonc` already includes production `vars` for Cloudflare deploys.
- `.env.local` is for local development only.
- Add secrets to Cloudflare with Wrangler:

```bash
wrangler secret put TURNSTILE_SECRET_KEY
wrangler secret put RESEND_API_KEY
```

- Keep `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `RESEND_FROM_EMAIL`, and `CONTACT_TO_EMAIL` in `wrangler.jsonc` vars.

## Cloudflare production deployment

### 1) Authenticate Wrangler

```bash
npx wrangler login
```

### 2) Deploy

```bash
npm run deploy
```

If deploying from a non-interactive environment (CI/agent), set an API token first:

```bash
export CLOUDFLARE_API_TOKEN=your_cloudflare_api_token
npm run deploy
```

### 3) Confirm custom domains in Cloudflare

`wrangler.jsonc` is configured with custom-domain routes:

- `tonysamour.com`
- `www.tonysamour.com`

In Cloudflare dashboard, verify under **Workers & Pages → your worker → Domains & Routes**.

### 4) Canonical redirect (WWW -> root)

Canonicalization is managed in Cloudflare dashboard (not in `worker/index.ts`).

Configure this Redirect Rule in Cloudflare:

Cloudflare Redirect Rule:

- **If (expression):** `(http.host eq "www.tonysamour.com")`
- **Then:** Static Redirect
- **Target URL:** `concat("https://tonysamour.com", http.request.uri.path)`
- **Preserve query string:** On
- **Status code:** `301`

## Quality checks

```bash
npm run check
npm run lint
npm run build
```

Latest full audit status:

- `npm run check` ✅ pass
- `npm run lint` ✅ pass
- `npm run build` ✅ pass
- Build output includes non-blocking Vinext/Vite warnings only.

## Launch checklist

Use the step-by-step checklist in:

- `LAUNCH_CHECKLIST.md`

## Contact form security

The contact form is hardened with:

- Turnstile server-side verification
- Honeypot bot trap field
- Basic in-memory rate limit guard (5 submissions / 10 minutes / IP)
- Dual email send on successful submit:
  - Notification to site owner
  - Confirmation autoresponder to user

## Email templates (MJML workflow)

Email HTML templates are stored in code so they are version-controlled:

- `src/emails/adminNotificationTemplate.ts`
- `src/emails/userConfirmationTemplate.ts`

Recommended workflow:

1. Build email in MJML.
2. Export compiled HTML.
3. Paste the HTML into the relevant template builder file above.
4. Keep dynamic placeholders (`name`, `email`, `message`, etc.) in the template function.

This keeps templates portable across providers and avoids dashboard lock-in.

## Content and branding sources

- Global metadata: `src/app/layout.tsx`
- Cloudflare runtime vars and domain routes: `wrangler.jsonc`
- Contact form server action: `src/app/contact/actions.ts`

## Accessibility

Includes:

- Skip-to-content link
- Semantic landmarks (`header`, `main`, `footer`, sections)
- Strong focus-visible states
- Labeled form fields

## Notes

- Vinext is used as the default runtime.
- Next.js compatibility APIs are still used in source (for metadata/types), but build/deploy is Vinext + Cloudflare.
