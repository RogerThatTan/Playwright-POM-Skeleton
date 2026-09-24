import type { TestInfo } from '@playwright/test';

/**
 * Formats a markdown repair guide attachment (stub).
 */
export function formatLocatorRepairGuide(args: {
  testInfo: TestInfo;
  error: unknown;
}): string {
  const message =
    args.error && typeof args.error === 'object'
      ? String((args.error as { message?: string }).message ?? args.error)
      : String(args.error);

  return [
    '# Locator repair guide (stub)',
    '',
    `**Test:** ${args.testInfo.title}`,
    '',
    '## Error',
    '```',
    message,
    '```',
    '',
    '## Next steps',
    '1. Open the failing locator factory under `utilities/locators/`.',
    '2. Confirm the DOM with a trace or MCP snapshot (budget: 2 attempts).',
    '3. Update the factory function only — never put selectors in pages/flows/specs.',
  ].join('\n');
}
