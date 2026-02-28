import { Metadata } from 'next';
import Container from '@/components/Container';
import CaseStudySection from '@/components/CaseStudySection';

export const metadata: Metadata = {
  title: 'Work | Tony Samour',
  description: 'Selected case studies and projects.',
};

export default function WorkPage() {
  return (
    <>
      {/* Intro */}
      <section className="pt-16 lg:pt-20">
        <Container>
          <div className="max-w-6xl">
            <h1 className="text-4xl lg:text-5xl font-semibold text-[#1a1a1a] mb-6 tracking-tight">Work</h1>
            <p className="text-lg text-[#666] leading-relaxed max-w-6xl">A selection of recent projects where I&rsquo;ve helped teams build premium web experiences, improve performance, and streamline operations.</p>
          </div>
        </Container>
      </section>

      {/* Case Studies */}
      <section className="">
        <Container>
          <CaseStudySection title="OCSC Sailing" subtitle="Booking + fleet management integrated with the website" image="/assets/ocsc-sailing.jpg" context="OCSC was a high-traffic San Francisco Bay sailing school and club in Berkeley. I maintained and evolved the platform over multiple years and led a major redesign that moved the experience from older PHP-style content structures toward clearer, task-first navigation." whatIDid={['Maintained and steadily improved the website over an 8-year engagement', 'Led a redesign focused on usability and core member journeys', 'Integrated website flows with CRM/fleet management and member portal actions', 'Reorganized IA around key pathways: Learn to Sail, Charter, Club, Events, Vacations, and Team Building']} outcome={['Members could self-serve reservations and course enrollment with less staff overhead', 'Availability and booking logic stayed more consistent across owners, members, and staff', 'A more modern web experience better supported operations, not just marketing content']} stack="CMS-driven content architecture + CRM/fleet-management integrations + member-portal connectivity" />

          <CaseStudySection title="Rockefeller Lodge" subtitle="Premium bilingual venue site with modern UX" image="/assets/rockefeller-lodge.jpg" context="Rockefeller Lodge needed a website that felt elegant and approachable, clearly presented venue details, and pushed visitors toward high-intent tour/contact actions." whatIDid={['Set up domain/hosting and built a responsive, future-ready site foundation', 'Designed wireframes and high-fidelity prototypes before development', 'Implemented bilingual UX with English/Spanish language paths', 'Structured content around venue atmosphere, event types, capacity/accessibility details, and clear tour-focused CTAs']} outcome={['Clearer venue story and practical decision details for prospective guests', 'Polished mobile-friendly browsing for events and inquiry actions', 'A bilingual experience that supports a broader local audience']} stack="Responsive marketing site architecture + bilingual routing/content + media-forward page components" />

          <CaseStudySection title="Spirit Rock Meditation Center" subtitle="Scalable platform for programs, content, and registration" image="/assets/spirit-rock-meditation-center.jpg" context="Spirit Rock serves a large ecosystem of retreats, classes, and daylong offerings across on-land and online formats, with deep educational content and donation pathways." whatIDid={['Helped expand platform support from primarily in-person experiences into a robust online + hybrid offering model', 'Supported IA/UX patterns across a large and evolving catalog of programs, teachers, and resources', 'Worked on integrations between site experience and registration systems, including external retreat booking flows', 'Contributed to scalable templates/components for long-term content operations and discoverability']} outcome={['A platform that supports multiple program types and a broad, evolving catalog', 'Clearer discovery paths for new and returning visitors across programs and learning journeys', 'Less friction for users and staff through better-structured content and integrated registration journeys']} stack="CMS-driven content platform + registration integrations (including Retreat Guru flows) + scalable component architecture" />

          <CaseStudySection title="TonySamour.com" subtitle="Consultant brand site with secure contact and Cloudflare deployment" image="/assets/tonysamour.jpg" context="This project was built as a premium freelance consultant website focused on clarity, trust, performance, and conversion while keeping the stack lean and maintainable." whatIDid={['Designed and built the full multi-page experience (Home, Services, Work, About, Contact)', 'Created reusable components and a consistent design system with accessibility-first defaults', 'Implemented responsive navigation, polished mobile UX, and semantic page structure', 'Hardened the contact flow with Turnstile verification, honeypot protection, rate limiting, and Resend email automation']} outcome={['A fast, modern, and credible web presence aligned with premium consulting positioning', 'A contact workflow that is conversion-friendly and resilient against common spam/bot abuse', 'Streamlined deployment and operations using Vinext + Cloudflare Workers with production routing', 'A maintainable codebase with clear launch documentation and environment setup']} stack="Vinext, React 19, TypeScript, Tailwind CSS v4, Cloudflare Workers, Turnstile, Resend" />
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[#f0f9f9]">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-[#1a1a1a] mb-4 tracking-tight">Let&rsquo;s create your next case study.</h2>
            <p className="text-lg text-[#666] max-w-6xl mx-auto mb-8">Whether you&rsquo;re building something new or improving what you have, I&rsquo;d like to help.</p>
            <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 font-medium rounded bg-[#0d6e6e] text-white hover:opacity-90 transition-opacity duration-200 focus-visible:outline-2 focus-visible:outline-[#0d6e6e] focus-visible:outline-offset-2">
              Contact
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
