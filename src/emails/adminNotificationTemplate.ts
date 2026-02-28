type ContactPayload = {
  name: string;
  email: string;
  organization: string;
  website: string;
  deadline: string;
  message: string;
};

import { escapeHtml, escapeHtmlWithLineBreaks, renderTemplate } from './renderTemplate';

const ADMIN_NOTIFICATION_TEMPLATE = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Contact Form Submission</title>
  </head>
  <body style="margin:0;padding:24px;background:#faf8f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;color:#1a1a1a;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e5e5e5;border-radius:8px;overflow:hidden;">
      <tr>
        <td style="padding:24px 24px 12px 24px;">
          <h1 style="margin:0;font-size:24px;line-height:1.3;color:#1a1a1a;">New contact form submission</h1>
        </td>
      </tr>
      <tr>
        <td style="padding:0 24px 24px 24px;font-size:14px;line-height:1.7;color:#444444;">
          <p style="margin:0 0 8px 0;"><strong>Name:</strong> {{name}}</p>
          <p style="margin:0 0 8px 0;"><strong>Email:</strong> {{email}}</p>
          <p style="margin:0 0 8px 0;"><strong>Organization:</strong> {{organization}}</p>
          <p style="margin:0 0 8px 0;"><strong>Website:</strong> {{website}}</p>
          <p style="margin:0 0 16px 0;"><strong>Timeline:</strong> {{deadline}}</p>
          <p style="margin:0 0 8px 0;"><strong>Message:</strong></p>
          <div style="margin:0;padding:12px;border:1px solid #e5e5e5;border-radius:6px;background:#faf8f6;">{{message_html}}</div>
        </td>
      </tr>
    </table>
  </body>
</html>
`.trim();

export function buildAdminNotificationHtml(payload: ContactPayload): string {
  return renderTemplate(ADMIN_NOTIFICATION_TEMPLATE, {
    name: escapeHtml(payload.name),
    email: escapeHtml(payload.email),
    organization: escapeHtml(payload.organization || 'N/A'),
    website: escapeHtml(payload.website || 'N/A'),
    deadline: escapeHtml(payload.deadline || 'N/A'),
    message_html: escapeHtmlWithLineBreaks(payload.message),
  });
}
