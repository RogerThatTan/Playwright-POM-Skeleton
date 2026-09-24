import { defineConfig, devices } from '@playwright/test';
import { env } from './config/env';
import {
  EXPECT_TIMEOUT_MS,
  PLAYWRIGHT_ACTION_TIMEOUT_MS,
  PLAYWRIGHT_NAVIGATION_TIMEOUT_MS,
  PLAYWRIGHT_TEST_TIMEOUT_MS,
} from './config/timeouts';
import { EXAMPLE_USER_STATE_PATH } from './setup/auth/example-user.auth.setup';

/**
 * Playwright config — skeleton defaults.
 * Point `BASE_URL` at your app and adjust projects as needed.
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: env.isCI,
  retries: env.isCI ? 1 : 0,
  maxFailures: 0,
  workers: env.isCI ? 1 : undefined,
  timeout: PLAYWRIGHT_TEST_TIMEOUT_MS,
  expect: { timeout: EXPECT_TIMEOUT_MS },

  globalSetup: './setup/global.auth.setup',

  reporter: [
    ['list'],
    ['html', { open: 'never', outputFolder: 'playwright-report' }],
    ['junit', { outputFile: 'test-results/junit.xml' }],
  ],

  use: {
    baseURL: env.baseUrl,
    headless: env.headless,
    ignoreHTTPSErrors: true,
    trace: env.isCI ? 'on-first-retry' : 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: PLAYWRIGHT_ACTION_TIMEOUT_MS,
    navigationTimeout: PLAYWRIGHT_NAVIGATION_TIMEOUT_MS,
    storageState: EXAMPLE_USER_STATE_PATH,
  },

  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
});
