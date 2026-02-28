import { Metadata } from 'next';
import Container from '@/components/Container';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact | Tony Samour',
  description: 'Get in touch with Tony Samour about your project or idea.',
};

export default function ContactPage() {
  return (
    <>
      <ContactForm />

      {/* FAQ or additional info */}
      <section className="py-16 lg:py-20 bg-[#faf8f6]">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#1a1a1a] mb-8 tracking-tight">What to expect</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Response time</h3>
                <p className="text-[#666]">I typically reply within 24–48 hours. If you don't hear from me, check your spam folder.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">First conversation</h3>
                <p className="text-[#666]">We'll discuss your goals, constraints, and timeline. No pressure or hard sell—just honest, candid feedback about whether I can help.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Investment & scope</h3>
                <p className="text-[#666]">After our initial conversation, I'll outline a clear investment range and project scope. You'll have all the information you need to decide.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Questions?</h3>
                <p className="text-[#666]">No question is too small. If you're curious about something, just ask in your message and I'll address it when we connect.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
