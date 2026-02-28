import { Metadata } from 'next';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Services | Tony Samour',
  description: 'Freelance consulting services: Build, Improve, Automate, and Maintain.',
};

const services = [
  {
    title: 'Build',
    description: 'Premium sites and flows that feel clear, fast, and solid for real users.',
    outcomes: ['High-performance, accessible websites and applications', 'Clear information architecture and user flows', 'Modern tech stack (Next.js, React, TypeScript, Tailwind)'],
    deliverables: ['Fully functional, production-ready website or web app', 'Performance and accessibility audits', 'Documentation and handoff materials'],
    examples: ['Building a new product website from strategy to launch', 'Redesigning and rebuilding a portfolio or company site', 'Creating a custom web application for internal workflows'],
  },
  {
    title: 'Improve',
    description: 'UX, content, performance, accessibility, and analytics tuned for real outcomes.',
    outcomes: ['Faster load times and better performance metrics', 'Improved user experience and conversion rates', 'Better accessibility and SEO'],
    deliverables: ['Performance optimization and code refactoring', 'UX research, testing, and recommendations', 'Analytics setup and reporting'],
    examples: ['Auditing and improving site performance by 40%+', 'Redesigning key pages for better conversion', 'Setting up proper analytics and tracking'],
  },
  {
    title: 'Automate',
    description: 'Practical integrations and reporting that save time and reduce errors.',
    outcomes: ['Reduced manual work and human error', 'Automated workflows and data synchronization', 'Clear, actionable reporting and dashboards'],
    deliverables: ['Integration between tools and platforms', 'Automated workflows (Zapier, custom APIs, etc.)', 'Custom reporting and monitoring solutions'],
    examples: ['Connecting CRM to email, forms, and spreadsheets', 'Automating invoice generation and delivery', 'Building a dashboard to track key metrics'],
  },
  {
    title: 'Maintain',
    description: 'Updates, monitoring, and improvements to keep things stable.',
    outcomes: ['Site stays fast, secure, and up-to-date', 'Proactive monitoring and issue detection', 'Incremental improvements based on performance data'],
    deliverables: ['Regular updates and security patches', 'Uptime monitoring and performance tracking', 'Quarterly or ongoing optimization passes'],
    examples: ['Ongoing maintenance and updates for an existing site', 'Monitoring site health and performance', 'Rolling out incremental improvements over time'],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Intro */}
      <section className="pt-16 lg:pt-20">
        <Container>
          <div className="max-w-6xl">
            <h1 className="text-4xl lg:text-5xl font-semibold text-[#1a1a1a] mb-6 tracking-tight">Services</h1>
            <p className="text-lg text-[#666] leading-relaxed max-w-6xl">I focus on small, clear, high-quality engagements. Whether you need a new site, performance improvements, workflow automation, or ongoing maintenance&mdash;I deliver focused work with real impact.</p>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <article key={index} className="p-8 border border-[#e5e5e5] rounded-lg bg-[#faf8f6]">
                <SectionHeading tag="h2">{service.title}</SectionHeading>
                <p className="text-lg text-[#666] mb-12 leading-relaxed">{service.description}</p>

                <div className="mb-12">
                  <h3 className="text-lg font-semibold text-[#1a1a1a] mb-4">Outcomes</h3>
                  <ul className="space-y-3">
                    {service.outcomes.map((item, i) => (
                      <li key={i} className="flex gap-3 text-[#666] text-sm">
                        <span className="text-[#0d6e6e] font-semibold mt-0.5 flex-shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-12">
                  <h3 className="text-lg font-semibold text-[#1a1a1a] mb-4">Typical deliverables</h3>
                  <ul className="space-y-3">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex gap-3 text-[#666] text-sm">
                        <span className="text-[#0d6e6e] font-semibold mt-0.5 flex-shrink-0">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-[#1a1a1a] mb-4">Examples</h3>
                  <ul className="space-y-3">
                    {service.examples.map((item, i) => (
                      <li key={i} className="flex gap-3 text-[#666] text-sm">
                        <span className="text-[#0d6e6e] font-semibold mt-0.5 flex-shrink-0">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button href="/contact" variant="primary">
                  Discuss {service.title.toLowerCase()}
                </Button>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-20 bg-[#f0f9f9]">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-[#1a1a1a] mb-4 tracking-tight">Let&rsquo;s talk about your project.</h2>
            <p className="text-lg text-[#666] max-w-6xl mx-auto mb-8">Have questions or want to explore a service? I&rsquo;m happy to discuss how I can help.</p>
            <Button href="/contact" variant="primary">
              Contact
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
