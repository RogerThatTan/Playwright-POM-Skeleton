import type { Page, TestInfo } from '@playwright/test';

/**
 * Shared flow helpers (attach notes, soft markers, etc.).
 */
export async function attachFlowNote(
  testInfo: TestInfo,
  name: string,
  body: string
): Promise<void> {
  await testInfo.attach(name, {
    body,
    contentType: 'text/plain',
  });
}

/** No-op placeholder for flows that only need a page reference. */
export async function ensurePageReady(page: Page): Promise<void> {
  await page.waitForLoadState('domcontentloaded');
}
