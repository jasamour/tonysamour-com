'use server';

import { headers } from 'next/headers';
import { Resend } from 'resend';
import { buildAdminNotificationHtml } from '@/emails/adminNotificationTemplate';
import { buildUserConfirmationHtml } from '@/emails/userConfirmationTemplate';

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_SUBMISSIONS = 5;
const submissionStore = new Map<string, { count: number; resetAt: number }>();

function getClientIp(forwardedHeaders: Headers): string {
  const cfIp = forwardedHeaders.get('cf-connecting-ip');
  if (cfIp) {
    return cfIp;
  }

  const xForwardedFor = forwardedHeaders.get('x-forwarded-for');
  if (xForwardedFor) {
    return xForwardedFor.split(',')[0].trim();
  }

  return 'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const existing = submissionStore.get(ip);

  if (!existing || now > existing.resetAt) {
    submissionStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (existing.count >= RATE_LIMIT_MAX_SUBMISSIONS) {
    return true;
  }

  submissionStore.set(ip, { ...existing, count: existing.count + 1 });
  return false;
}

async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const bypassTurnstileInDev = process.env.NODE_ENV !== 'production' && process.env.TURNSTILE_BYPASS_IN_DEV === 'true';
  if (bypassTurnstileInDev) {
    return true;
  }

  const turnstileSecretKey = process.env.TURNSTILE_SECRET_KEY;
  if (!turnstileSecretKey || !token) {
    return false;
  }

  const body = new URLSearchParams({
    secret: turnstileSecretKey,
    response: token,
    remoteip: ip,
  });

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  });

  if (!response.ok) {
    return false;
  }

  const result = (await response.json()) as { success?: boolean };
  return Boolean(result.success);
}

export async function sendContactEmail(formData: FormData) {
  const name = (formData.get('name') as string | null)?.trim() || '';
  const email = (formData.get('email') as string | null)?.trim() || '';
  const organization = (formData.get('organization') as string | null)?.trim() || '';
  const website = (formData.get('website') as string | null)?.trim() || '';
  const message = (formData.get('message') as string | null)?.trim() || '';
  const deadline = (formData.get('deadline') as string | null)?.trim() || '';
  const honeypot = (formData.get('company_website') as string | null)?.trim() || '';
  const turnstileToken = (formData.get('cf-turnstile-response') as string | null)?.trim() || '';

  if (honeypot) {
    return { success: true };
  }

  if (!name || !email || !message) {
    return { success: false, error: 'Please fill in all required fields' };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: 'Please provide a valid email address' };
  }

  try {
    const requestHeaders = await headers();
    const ip = getClientIp(requestHeaders);

    if (isRateLimited(ip)) {
      return {
        success: false,
        error: 'Too many submissions. Please wait a few minutes and try again.',
      };
    }

    const isTurnstileValid = await verifyTurnstile(turnstileToken, ip);
    if (!isTurnstileValid) {
      return {
        success: false,
        error: 'Verification failed. Please try again.',
      };
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const resendFromEmail = process.env.RESEND_FROM_EMAIL;
    const contactToEmail = process.env.CONTACT_TO_EMAIL;

    if (!resendApiKey || !resendFromEmail || !contactToEmail) {
      throw new Error('Email service is not configured correctly');
    }

    const resend = new Resend(resendApiKey);

    const adminEmailText = ['New contact form submission', '', `Name: ${name}`, `Email: ${email}`, `Organization: ${organization || 'N/A'}`, `Website: ${website || 'N/A'}`, `Timeline: ${deadline || 'N/A'}`, '', 'Message:', message].join('\n');

    const userEmailText = [`Hi ${name},`, '', 'Thanks for reaching out. I received your message and will reply within 24–48 hours.', '', 'Best,', 'Tony Samour'].join('\n');

    const adminEmailHtml = buildAdminNotificationHtml({
      name,
      email,
      organization,
      website,
      deadline,
      message,
    });
    const userEmailHtml = buildUserConfirmationHtml(name);

    await Promise.all([
      resend.emails.send({
        from: resendFromEmail,
        to: [contactToEmail],
        replyTo: email,
        subject: `New contact form submission from ${name}`,
        html: adminEmailHtml,
        text: adminEmailText,
      }),
      resend.emails.send({
        from: resendFromEmail,
        to: [email],
        subject: 'Thanks for your message — Tony Samour',
        html: userEmailHtml,
        text: userEmailText,
      }),
    ]);

    return { success: true };
  } catch (error) {
    console.error('Contact form error:', error);
    return { success: false, error: 'Failed to send message. Please try again.' };
  }
}
