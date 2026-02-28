# Tony Samour Freelance Website - Development Guide

## Project Overview

A premium freelance consultant website built with Next.js 15, TypeScript, and Tailwind CSS. Features a clean, minimal editorial design with deep teal accents and a warm off-white background.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## Key Design Principles

- **Premium minimal**: Lots of whitespace, precise grid, high legibility
- **Calm aesthetic**: Subtle borders, minimal shadows, consistent 4px–8px spacing rhythm
- **Accessible**: WCAG 2.1 compliant with strong focus states and semantic HTML
- **Fast**: System fonts, optimized Tailwind CSS, no heavy libraries

## Color Palette

- Background: `#faf8f6` (warm off-white)
- Text: `#1a1a1a` (near-black)
- Accent: `#0d6e6e` (deep teal) – used for links, buttons, focus rings
- Accent Light: `#f0f9f9` (light teal backgrounds for CTA sections)
- Border: `#e5e5e5` (subtle dividers)

## Important Note: Form Submission

The contact form uses **Formspree** (free, no backend). To enable it:

1. Visit [formspree.io](https://formspree.io)
2. Create a free account and new form
3. Copy your form ID
4. Update `src/app/contact/actions.ts` with your Formspree URL:
   ```typescript
   const formspreeUrl = 'https://formspree.io/f/YOUR_FORM_ID';
   ```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout (Header + Footer)
│   ├── globals.css          # Design tokens & base styles
│   ├── page.tsx             # Home (Hero + Services + Work + Process + Fit)
│   ├── services/page.tsx    # Services breakdown
│   ├── work/page.tsx        # Case studies (3 stacked sections)
│   ├── about/page.tsx       # Bio, approach, stack
│   └── contact/
│       ├── page.tsx         # Contact page wrapper
│       ├── ContactForm.tsx  # Form component (client)
│       └── actions.ts       # Form submission (server action)
├── components/              # Reusable components
│   ├── Header.tsx           # Sticky nav with skip link
│   ├── Footer.tsx           # Dark footer
│   ├── Container.tsx        # Max-width wrapper
│   ├── Button.tsx           # Primary/secondary buttons
│   ├── Hero.tsx             # Hero with CTAs
│   ├── ServiceCard.tsx      # Service cards (4-grid)
│   ├── SectionHeading.tsx   # Section titles
│   ├── ProcessSteps.tsx     # 5-step numbered process
│   ├── FitSection.tsx       # Good fit / Not a fit
│   ├── CaseStudySection.tsx # Case study blocks
│   ├── Input.tsx            # Form input
│   ├── Textarea.tsx         # Form textarea
│   ├── CTASection.tsx       # CTA band sections
│   └── index.ts             # Barrel exports
```

## Components Reference

### Header
- Sticky, minimal design with "Tony Samour" wordmark
- Skip-to-content link for accessibility
- Navigation: Services, Work, About, Contact

### Button
- `variant="primary"` (deep teal background)
- `variant="secondary"` (border + teal text)
- Supports both links and button elements

### Hero
- Large heading + subtitle + 2 CTA buttons
- Primary (Contact) + Secondary (View services)

### ServiceCard
- 4-card grid: Build, Improve, Automate, Maintain
- Light border, subtle shadow on hover

### ProcessSteps
- 5-step numbered layout
- Used for "How I Work" section

### FitSection
- Two-column: "Good fit" + "Not a good fit"
- Bullet points with semantic indicators

### CaseStudySection
- Stacked layout: title, image placeholder, context, bullets
- "What I did" + "Outcome" side-by-side on desktop

### CTASection
- Center-aligned heading + subheading + button
- Light teal background variant

### Form Components (Input, Textarea)
- Labeled, with optional indicators
- Error state styling
- Focus visible with teal outline

## Customization Guide

### Change Accent Color
Replace all instances of `#0d6e6e` (or search `0d6e6e`) with your color:
- Buttons
- Links
- Focus rings
- Borders
- Icons

### Update Navigation Links
Edit `src/components/Header.tsx`:
```typescript
const navItems = [
  { label: 'Services', href: '/services' },
  // ... add/remove as needed
];
```

### Modify Content
- Home page: `src/app/page.tsx`
- Services: `src/app/services/page.tsx` (update service details)
- Work: `src/app/work/page.tsx` (add real case studies)
- About: `src/app/about/page.tsx` (update bio, stack)
- Contact: Form auto-sends to your Formspree email

### Add Images
Images can be added to `public/` folder. For CaseStudySection:
```typescript
<CaseStudySection
  title="Project Name"
  image="/case-study-1.jpg"  // Add your image
  // ... other props
/>
```

## Accessibility Features

- ✓ Skip-to-content link (skip navigation)
- ✓ Semantic HTML (`<nav>`, `<main>`, `<section>`, `<footer>`)
- ✓ Strong focus visible states (2px teal outline, 2px offset)
- ✓ Labeled form fields with error states
- ✓ High contrast (text on background meets WCAG AA)
- ✓ Responsive and keyboard-navigable
- ✓ No auto-playing content

## Performance Checklist

- ✓ System fonts (no external font downloads)
- ✓ Tailwind CSS purges unused styles in production
- ✓ Optimized for Core Web Vitals
- ✓ Minimal CSS/JS payload
- ✓ Ready for image optimization (can add Next.js Image component)

## Deployment

### Vercel (Recommended)
```bash
npm run build
vercel deploy
```

### Other Platforms
```bash
npm run build  # Creates .next/ build output
npm start      # Runs production server
```

## Build & Lint Commands

```bash
npm run dev     # Start dev server with hot reload
npm run build   # Build for production
npm start       # Run production build locally
npm run lint    # Run ESLint
```

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS 12+, Android 6+)

## Common Issues

**Form not sending emails?**
- Ensure Formspree URL is correct in `src/app/contact/actions.ts`
- Check that you've configured your Formspree form and verified your email

**Styling not applying?**
- Ensure CSS classes use exact hex codes (`#0d6e6e`, `#faf8f6`, etc.)
- Clear Tailwind cache: `rm -rf .next/`

**Build failures?**
- Check for TypeScript errors: `npx tsc --noEmit`
- Ensure all imports use correct paths (`@/components/...`)

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## Support & Questions

For Next.js-specific questions, refer to the official documentation.
For project-specific questions, check the README.md file.
