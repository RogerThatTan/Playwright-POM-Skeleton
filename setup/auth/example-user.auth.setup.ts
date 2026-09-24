import path from 'node:path';
import { STORAGE_DIR } from '../../config/appPaths';

/** Path where example-user storage state is saved. */
export const EXAMPLE_USER_STATE_PATH = path.join(STORAGE_DIR, 'exampleUser.auth.json');

/**
 * Auth setup stub for the example user.
 *
 * Wire this as a Playwright setup project when you need a real logged-in
 * storage state. For the skeleton, `global.auth.setup` writes an empty state.
 *
 * Example real implementation:
 * ```ts
 * import { chromium } from '@playwright/test';
 * import { env } from '../../config/env';
 * import { LoginPage } from '../../pages/loginPage/login.page';
 *
 * async function exampleUserAuthSetup() {
 *   const browser = await chromium.launch();
 *   const page = await browser.newPage();
 *   await new LoginPage(page).loginAsExampleUser();
 *   await page.context().storageState({ path: EXAMPLE_USER_STATE_PATH });
 *   await browser.close();
 * }
 * export default exampleUserAuthSetup;
 * ```
 */
export default async function exampleUserAuthSetup(): Promise<void> {
  // Stub — see JSDoc above for a real login + storageState flow.
}
