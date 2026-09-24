/**
 * Returns true when an error looks like a Playwright locator / timeout failure.
 * Stub heuristic — refine for your heal pipeline.
 */
export function isLocatorFailure(error: unknown): boolean {
  if (!error || typeof error !== 'object') return false;
  const message = String((error as { message?: string }).message ?? '');
  return /locator|timeout|strict mode violation|waiting for/i.test(message);
}
