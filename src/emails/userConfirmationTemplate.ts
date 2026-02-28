import { escapeHtml, renderTemplate } from './renderTemplate';

const USER_CONFIRMATION_TEMPLATE = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Thanks for your message</title>
  </head>
  <body style="margin:0;padding:24px;background:#faf8f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;color:#1a1a1a;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e5e5e5;border-radius:8px;overflow:hidden;">
      <tr>
        <td style="padding:24px 24px 8px 24px;">
          <h1 style="margin:0;font-size:24px;line-height:1.3;color:#1a1a1a;">Thanks for reaching out</h1>
        </td>
      </tr>
      <tr>
        <td style="padding:8px 24px 24px 24px;font-size:15px;line-height:1.7;color:#444444;">
          <p style="margin:0 0 12px 0;">Hi {{name}},</p>
          <p style="margin:0 0 12px 0;">I received your message and will reply within 24–48 hours.</p>
          <p style="margin:0;">Best,<br />Tony Samour</p>
        </td>
      </tr>
    </table>
  </body>
</html>
`.trim();

export function buildUserConfirmationHtml(name: string): string {
  return renderTemplate(USER_CONFIRMATION_TEMPLATE, {
    name: escapeHtml(name),
  });
}
