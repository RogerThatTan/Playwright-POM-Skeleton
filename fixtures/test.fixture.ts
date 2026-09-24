import { test as base, expect } from '@playwright/test';

/**
 * Shared Playwright test fixture.
 * Extend here for custom fixtures (e.g. heal capture, shared helpers).
 */
export const test = base;
export { expect };
