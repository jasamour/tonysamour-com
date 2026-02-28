import Image from 'next/image';
import Hero from '@/components/Hero';
import Container from '@/components/Container';
import ServiceCard from '@/components/ServiceCard';
import SectionHeading from '@/components/SectionHeading';
import ProcessSteps from '@/components/ProcessSteps';
import FitSection from '@/components/FitSection';
import CTASection from '@/components/CTASection';

const featuredProjects = [
  {
    title: 'OCSC Sailing',
    image: '/assets/ocsc-sailing.jpg',
    context: 'Booking and fleet-management integrations for a high-traffic sailing school and club platform.',
    outcomes: ['Improved self-serve reservation and enrollment pathways', 'More reliable operational workflows across members, owners, and staff'],
  },
  {
    title: 'Rockefeller Lodge',
    image: '/assets/rockefeller-lodge.jpg',
    context: 'Bilingual, media-forward venue site designed to drive high-intent tour and contact inquiries.',
    outcomes: ['Clearer event and venue storytelling for prospective guests', 'Stronger mobile browsing and inquiry flow'],
  },
  {
    title: 'Spirit Rock Meditation Center',
    image: '/assets/spirit-rock-meditation-center.jpg',
    context: 'Scalable program and content platform supporting online/on-land offerings and registration journeys.',
    outcomes: ['Better discovery across a large, evolving program catalog', 'Reduced friction between content and registration pathways'],
  },
  {
    title: 'TonySamour.com',
    image: '/assets/tonysamour.jpg',
    context: 'Premium consultant website with secure contact flows and streamlined Cloudflare deployment operations.',
    outcomes: ['High-trust brand experience optimized for conversion', 'Hardened contact flow with Turnstile, rate limiting, and email automation'],
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero title="Premium web strategy + implementation for small teams, founders, and organizations." subtitle="I build modern websites and systems, improve UX and performance, connect tools with practical automation, and keep everything maintained—so it stays reliable over time." primaryButtonText="Contact" primaryButtonHref="/contact" secondaryButtonText="View services" secondaryButtonHref="/services" />

      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-[#faf8f6]">
        <Container>
          <SectionHeading>How I help</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceCard title="Build" description="Premium sites and flows that feel clear, fast, and solid." />
            <ServiceCard title="Improve" description="UX, content, performance, accessibility, and analytics tuned for real outcomes." />
            <ServiceCard title="Automate" description="Practical integrations and reporting that save time and reduce errors." />
            <ServiceCard title="Maintain" description="Updates, monitoring, and improvements to keep things stable." />
          </div>
        </Container>
      </section>

      {/* Featured Work */}
      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeading subtitle="Selected projects demonstrating strategy, design, and implementation excellence.">Featured work</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {featuredProjects.map((project) => (
              <div key={project.title} className="pb-8 md:pb-0 border-b md:border-b-0 border-[#e5e5e5]">
                <div className="bg-[#e5e5e5] rounded-lg mb-8 overflow-hidden">
                  <Image src={project.image} alt={project.title} width={1600} height={802} className="w-full h-auto object-cover" sizes="(min-width: 768px) 50vw, 100vw" quality={100} />
                </div>
                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3">{project.title}</h3>
                <p className="text-[#666] text-sm mb-4 max-w-xl">{project.context}</p>
                <ul className="space-y-2 text-sm text-[#666]">
                  {project.outcomes.map((outcome) => (
                    <li key={outcome}>• {outcome}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How I Work */}
      <section className="py-16 lg:py-24 bg-[#f0f9f9]">
        <Container>
          <SectionHeading>How I work</SectionHeading>
          <ProcessSteps
            steps={[
              {
                number: 1,
                title: 'Intake & scope',
                description: 'Understand your goals, constraints, and current state. Align on scope, timeline, deliverables, and investment.',
              },
              {
                number: 2,
                title: 'Build/fix',
                description: 'Execute the work with regular communication and checkpoints.',
              },
              {
                number: 3,
                title: 'QA + launch',
                description: 'Test thoroughly, gather feedback, deploy to production.',
              },
              {
                number: 4,
                title: 'Optional care',
                description: 'Ongoing support, monitoring, and incremental improvements.',
              },
            ]}
          />
        </Container>
      </section>

      {/* Fit Section */}
      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeading>Good fit?</SectionHeading>
          <FitSection goodFit={['Small teams and founders building their next product or improving an existing one', 'Organizations needing strategic input on web, UX, or technology decisions', 'Projects where quality, clarity, and long-term reliability matter', 'Engagements that benefit from an experienced, candid partner']} notGoodFit={['High-volume, project-based work with minimal strategy required', 'Teams looking for cheap or outsourced development labor', 'Projects requiring 24/7 support or dedicated full-time staff', 'Work in areas outside my expertise or values']} />
        </Container>
      </section>

      {/* Final CTA */}
      <CTASection heading="Start with a message." subheading="I'll reply with the simplest next step and a clear range for investment." buttonText="Contact" buttonHref="/contact" />
    </>
  );
}
