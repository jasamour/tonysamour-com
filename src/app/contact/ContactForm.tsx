'use client';

import { useState } from 'react';
import Script from 'next/script';
import Container from '@/components/Container';
import Input from '@/components/Input';
import Textarea from '@/components/Textarea';
import Button from '@/components/Button';
import { sendContactEmail } from './actions';

interface ContactFormProps {
  turnstileSiteKey?: string;
}

export default function ContactForm({ turnstileSiteKey = '' }: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const isLocalDev = process.env.NODE_ENV !== 'production';
  const bypassTurnstileInDev = isLocalDev && process.env.NEXT_PUBLIC_TURNSTILE_BYPASS_IN_DEV === 'true';

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setFormErrors({});

    const formData = new FormData(e.currentTarget);
    const result = await sendContactEmail(formData);

    if (result.success) {
      setSuccess(true);
      e.currentTarget.reset();
      setFormErrors({});
    } else {
      setError(result.error || 'Failed to send message');
    }

    setLoading(false);
  }

  if (success) {
    return (
      <div className="py-16 lg:py-20 text-center">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-[#1a1a1a] mb-6 tracking-tight">Thank you for reaching out.</h2>
            <p className="text-lg text-[#666] mb-8 leading-relaxed">I've received your message and will review it shortly. I typically reply within 24–48 hours.</p>
            <Button href="/" variant="secondary">
              Back to home
            </Button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="py-16 lg:py-20 relative">
      {!bypassTurnstileInDev && <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />}
      <Container>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-semibold text-[#1a1a1a] mb-6 tracking-tight">Let's talk.</h1>
          <p className="text-lg text-[#666] mb-12 leading-relaxed">Fill out the form below and I'll get back to you with the simplest next step.</p>

          {error && <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded text-red-700 text-sm">{error}</div>}

          <div className="absolute left-[-9999px] top-auto w-px h-px overflow-hidden" aria-hidden="true">
            <label htmlFor="company_website">Company website</label>
            <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
          </div>

          <div className="space-y-6">
            {/* Name */}
            <Input label="Name" name="name" id="name" type="text" placeholder="Your name" required error={formErrors.name} disabled={loading} />

            {/* Email */}
            <Input label="Email" name="email" id="email" type="email" placeholder="your@email.com" required error={formErrors.email} disabled={loading} />

            {/* Organization */}
            <Input label="Organization" name="organization" id="organization" type="text" placeholder="Company or project name" error={formErrors.organization} disabled={loading} />

            {/* Website */}
            <Input label="Website" name="website" id="website" type="text" placeholder="example.com" error={formErrors.website} disabled={loading} />

            {/* Message */}
            <Textarea label="Message" name="message" id="message" placeholder="Tell me about your project, challenge, or idea..." rows={6} required error={formErrors.message} disabled={loading} />

            {/* Deadline */}
            <Input label="Timeline" name="deadline" id="deadline" type="text" placeholder="e.g., 'Starting in 2 weeks' or 'No specific deadline'" error={formErrors.deadline} disabled={loading} />

            <div className="pt-2">{bypassTurnstileInDev ? <p className="text-sm text-[#666]">Turnstile is bypassed in local development.</p> : turnstileSiteKey ? <div className="cf-turnstile" data-sitekey={turnstileSiteKey} data-theme="light" data-action="contact_submit" /> : <p className="text-sm text-red-700">Form protection is not configured.</p>}</div>

            {/* Submit */}
            <div className="pt-4">
              <Button type="submit" variant="primary" disabled={loading} className="w-full sm:w-auto">
                {loading ? 'Sending...' : 'Send'}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </form>
  );
}
