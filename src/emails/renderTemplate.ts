export function escapeHtml(value: string): string {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
}

export function escapeHtmlWithLineBreaks(value: string): string {
  return escapeHtml(value).replaceAll('\n', '<br />');
}

export function renderTemplate(template: string, tokens: Record<string, string>): string {
  return template.replace(/{{\s*([a-zA-Z0-9_]+)\s*}}/g, (_, key: string) => tokens[key] ?? '');
}
