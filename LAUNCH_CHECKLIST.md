# Launch Checklist

## 1) Final code + build checks

- [x] Run `npm install`
- [x] Run `npm run check`
- [x] Run `npm run lint`
- [x] Run `npm run build`
- [ ] Optional local production smoke test: `npm run build && npm run start`

## 2) GitHub + Cloudflare setup

- [x] Create/setup GitHub repository
- [x] Push this project to the repository
- [ ] Connect Cloudflare to the GitHub repository for deploys
- [ ] Verify Cloudflare build/deploy settings match this project (`npm run build`, output handled by Vinext/Worker setup)

### Recommended Cloudflare Git build settings

- [ ] Framework preset: None / Custom
- [ ] Build command: `npm run build`
- [ ] Build output directory: `.output/static` (if prompted by Pages UI)
- [ ] Root directory: `/` (repo root)
- [ ] Node.js version: `20`
- [ ] Environment variables (Production + Preview):
  - [ ] `SITE_URL`
  - [ ] `SITE_TITLE`
  - [ ] `SITE_DESCRIPTION`
  - [ ] `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
  - [ ] `RESEND_FROM_EMAIL`
  - [ ] `CONTACT_TO_EMAIL`
- [ ] Secrets (Production + Preview):
  - [ ] `TURNSTILE_SECRET_KEY`
  - [ ] `RESEND_API_KEY`

## 3) Contact form production test

- [ ] Submit a real test message from the live site
- [ ] Verify Turnstile challenge appears and validates
- [ ] Verify owner notification email is received at `CONTACT_TO_EMAIL`
- [ ] Verify user confirmation/autoresponder email is received by sender
- [ ] Verify honeypot/rate-limiting behavior still blocks abuse attempts

## 4) Content + assets review

- [ ] Add/replace final images in `public/assets/`
- [ ] Confirm every image path resolves (`/assets/...`)
- [ ] Check nav links, CTA links, and contact page copy
- [ ] Verify About/Services/Work copy is final

## 5) Accessibility + UX smoke test

- [ ] Keyboard-only navigation works across all pages
- [ ] Skip-to-content link works
- [ ] Focus outlines are visible and clear
- [ ] Mobile menu opens/closes and routes correctly
- [ ] Responsive layout check at mobile/tablet/desktop breakpoints

## 6) Deploy

- [ ] Login to Cloudflare CLI: `npx wrangler login`
- [ ] If deploying from CI/agent/non-interactive shell, export `CLOUDFLARE_API_TOKEN`
- [ ] Deploy: `npm run deploy`
- [ ] Verify Worker deployment success in terminal output
- [ ] Open live domain and run quick cross-page smoke test

### Deploy troubleshooting notes

- If deploy fails with `Could not resolve "virtual:vinext-rsc-entry"`, ensure `worker/index.ts` imports the built RSC handler from `../dist/server/index.js` (and calls `handler(request)`), not `vinext/server/app-router-entry`.
- Keep Cloudflare deploy command as `npm run deploy` (not raw `wrangler deploy --config ...` with missing args).

## 7) Post-launch monitoring (first 24–48 hours)

- [ ] Test contact form once per day
- [ ] Watch Resend dashboard for delivery/bounce issues
- [ ] Check Cloudflare logs/analytics for abnormal traffic
- [ ] Fix any broken links or content issues quickly
