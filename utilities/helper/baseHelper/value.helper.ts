/**
 * Normalize whitespace and trim a scraped UI value.
 */
export function normalizeValue(raw: string | null | undefined): string {
  if (raw == null) return '';
  return raw.replace(/\s+/g, ' ').trim();
}
