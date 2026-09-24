import { test as base, expect } from '@playwright/test';
import path from 'node:path';

/** Storage state path for the optional multi-user fixture. */
export const MULTI_USER_STATE_PATH = path.join(
  process.cwd(),
  'storage',
  'multiUser.auth.json'
);

type MultiUserFixtures = {
  /** Page bound to multi-user storage state (stub — wire auth setup when needed). */
  multiUserPage: import('@playwright/test').Page;
};

/**
 * Optional multi-user fixture.
 * Use only when a test needs a second authenticated session.
 */
export const test = base.extend<MultiUserFixtures>({
  multiUserPage: async ({ browser }, use) => {
    const context = await browser.newContext({
      storageState: MULTI_USER_STATE_PATH,
    });
    const page = await context.newPage();
    await use(page);
    await context.close();
  },
});

export { expect };
