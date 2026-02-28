import Link from 'next/link';
import Container from './Container';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-[#faf8f6] py-16 lg:py-20">
      <Container>
        <div className="border-t border-[#333] pt-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            {/* Footer tagline */}
            <p className="text-sm leading-relaxed max-w-sm">
              Build · Improve · Automate · Maintain
            </p>

            {/* Footer CTA link */}
            <Link
              href="/contact"
              className="text-sm font-medium text-[#faf8f6] hover:text-[#0d6e6e] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#0d6e6e] focus-visible:outline-offset-2 rounded px-1"
            >
              Start a project
            </Link>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-[#333] text-xs text-[#999]">
            <p>© {new Date().getFullYear()} Tony Samour. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
