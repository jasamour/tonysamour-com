'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
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
  const [emailValue, setEmailValue] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const [forceShowTurnstile, setForceShowTurnstile] = useState(false);
  const turnstileContainerRef = useRef<HTMLDivElement | null>(null);
  const turnstileWidgetIdRef = useRef<string | number | null>(null);
  const isLocalDev = process.env.NODE_ENV !== 'production';
  const bypassTurnstileInDev = isLocalDev && process.env.NEXT_PUBLIC_TURNSTILE_BYPASS_IN_DEV === 'true';
  const shouldUseTurnstile = !bypassTurnstileInDev && Boolean(turnstileSiteKey);
  const hasRequiredIntent = emailValue.trim().length > 0 && messageValue.trim().length > 0;
  const shouldRenderTurnstile = shouldUseTurnstile && (hasRequiredIntent || forceShowTurnstile);

  const renderTurnstile = useCallback(() => {
    if (!shouldRenderTurnstile || !turnstileContainerRef.current) {
      return;
    }

    const turnstileApi = (window as Window & { turnstile?: { render: (container: HTMLElement, options: Record<string, unknown>) => string | number; remove?: (widgetId: string | number) => void } }).turnstile;
    if (!turnstileApi?.render) {
      return;
    }

    if (turnstileWidgetIdRef.current !== null && turnstileApi.remove) {
      turnstileApi.remove(turnstileWidgetIdRef.current);
      turnstileWidgetIdRef.current = null;
    }

    turnstileContainerRef.current.innerHTML = '';
    turnstileWidgetIdRef.current = turnstileApi.render(turnstileContainerRef.current, {
      sitekey: turnstileSiteKey,
      theme: 'light',
      action: 'contact_submit',
    });
  }, [shouldRenderTurnstile, turnstileSiteKey]);

  useEffect(() => {
    if (!shouldRenderTurnstile) {
      return;
    }

    renderTurnstile();

    return () => {
      const turnstileApi = (window as Window & { turnstile?: { remove?: (widgetId: string | number) => void } }).turnstile;
      if (turnstileWidgetIdRef.current !== null && turnstileApi?.remove) {
        turnstileApi.remove(turnstileWidgetIdRef.current);
      }
      turnstileWidgetIdRef.current = null;
      if (turnstileContainerRef.current) {
        turnstileContainerRef.current.innerHTML = '';
      }
    };
  }, [renderTurnstile, shouldRenderTurnstile]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setFormErrors({});

    const formData = new FormData(e.currentTarget);
    const turnstileToken = (formData.get('cf-turnstile-response') as string | null)?.trim() || '';

    if (shouldUseTurnstile && !turnstileToken) {
      setForceShowTurnstile(true);
      setError('Please complete the verification checkbox before sending.');
      setLoading(false);
      return;
    }

    const result = await sendContactEmail(formData);

    if (result.success) {
      setSuccess(true);
      e.currentTarget.reset();
      setFormErrors({});
      setEmailValue('');
      setMessageValue('');
      setForceShowTurnstile(false);
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
      {!bypassTurnstileInDev && <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer onLoad={renderTurnstile} />}
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
            <Input label="Email" name="email" id="email" type="email" placeholder="your@email.com" required error={formErrors.email} disabled={loading} onChange={(e) => setEmailValue(e.currentTarget.value)} />

            {/* Organization */}
            <Input label="Organization" name="organization" id="organization" type="text" placeholder="Company or project name" error={formErrors.organization} disabled={loading} />

            {/* Website */}
            <Input label="Website" name="website" id="website" type="text" placeholder="example.com" error={formErrors.website} disabled={loading} />

            {/* Message */}
            <Textarea label="Message" name="message" id="message" placeholder="Tell me about your project, challenge, or idea..." rows={6} required error={formErrors.message} disabled={loading} onChange={(e) => setMessageValue(e.currentTarget.value)} />

            {/* Deadline */}
            <Input label="Timeline" name="deadline" id="deadline" type="text" placeholder="e.g., 'Starting in 2 weeks' or 'No specific deadline'" error={formErrors.deadline} disabled={loading} />

            <div className="pt-2">{bypassTurnstileInDev ? <p className="text-sm text-[#666]">Turnstile is bypassed in local development.</p> : turnstileSiteKey ? shouldRenderTurnstile ? <div ref={turnstileContainerRef} /> : null : <p className="text-sm text-red-700">Form protection is not configured.</p>}</div>

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
