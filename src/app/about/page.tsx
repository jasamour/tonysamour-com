import { Metadata } from 'next';
import Container from '@/components/Container';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'About | Tony Samour',
  description: 'About Tony Samour and my approach to freelance consulting.',
};

export default function AboutPage() {
  return (
    <>
      {/* Intro */}
      <section className="pt-16 lg:pt-20">
        <Container>
          <div className="max-w-6xl">
            <h1 className="text-4xl lg:text-5xl font-semibold text-[#1a1a1a] mb-6 tracking-tight">About</h1>

            <div className="space-y-6 text-lg text-[#666] leading-relaxed">
              <p>I&rsquo;m Tony Samour, a freelance consultant specializing in web strategy and implementation. For over a decade, I&rsquo;ve worked with small teams, founders, and organizations to build premium digital experiences, improve performance, and create systems that actually work.</p>

              <p>I believe the best work comes from clarity, collaboration, and a commitment to quality. I focus on understanding your specific situation, not applying one-size-fits-all solutions, and delivering work that solves real problems.</p>

              <p>Whether you're building something new, fixing what's broken, or looking to streamline operations, I help you navigate the technical and strategic decisions that matter most.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Approach + Stack */}
      <section className="py-16 lg:py-20 bg-[#faf8f6]">
        <Container>
          <div className="max-w-6xl space-y-12">
            {/* Approach */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold text-[#1a1a1a] mb-6 tracking-tight">My approach</h2>
              <ul className="space-y-4 lg:pl-6">
                <li className="flex gap-4">
                  <span className="text-[#0d6e6e] font-semibold flex-shrink-0 mt-1">1.</span>
                  <div>
                    <h3 className="font-semibold text-[#1a1a1a] mb-1">Strategy first</h3>
                    <p className="text-[#666] text-base">Before diving into code, we align on your goals, constraints, and success metrics.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#0d6e6e] font-semibold flex-shrink-0 mt-1">2.</span>
                  <div>
                    <h3 className="font-semibold text-[#1a1a1a] mb-1">Clear communication</h3>
                    <p className="text-[#666] text-base">Regular updates, honest feedback, and transparency about timelines and investment.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#0d6e6e] font-semibold flex-shrink-0 mt-1">3.</span>
                  <div>
                    <h3 className="font-semibold text-[#1a1a1a] mb-1">Quality obsessed</h3>
                    <p className="text-[#666] text-base">Performance, accessibility, security, and maintainability aren&rsquo;t afterthoughts.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#0d6e6e] font-semibold flex-shrink-0 mt-1">4.</span>
                  <div>
                    <h3 className="font-semibold text-[#1a1a1a] mb-1">Your success</h3>
                    <p className="text-[#666] text-base">I&rsquo;m invested in results. I deliver work you can build on, maintain, and scale.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Stack */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold text-[#1a1a1a] mb-4 tracking-tight">Core stack</h2>
              <p className="text-[#666] mb-4">I work with modern, proven technologies that prioritize performance and developer experience:</p>
              <ul className="grid grid-cols-2 gap-3">
                {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Vercel', 'Node.js', 'APIs & Integrations'].map((tech) => (
                  <li key={tech} className="flex items-center gap-2 text-[#666]">
                    <span className="text-[#0d6e6e] font-semibold">·</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-20 bg-[#f0f9f9]">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-[#1a1a1a] mb-4 tracking-tight">Let's work together.</h2>
            <p className="text-lg text-[#666] max-w-6xl mx-auto mb-8">I'd love to hear about your project and explore how I can help.</p>
            <Button href="/contact" variant="primary">
              Contact
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
