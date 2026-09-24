import type { Locator, Page } from '@playwright/test';

/** Username input on the login screen (dummy selector). */
export function getUsernameInput(page: Page): Locator {
  return page.getByRole('textbox', { name: 'Username' });
}

/** Password input on the login screen (dummy selector). */
export function getPasswordInput(page: Page): Locator {
  return page.getByRole('textbox', { name: 'Password' });
}

/** Login submit button (dummy selector). */
export function getLoginButton(page: Page): Locator {
  return page.getByRole('button', { name: 'Login' });
}

/** Logged-in user chrome in the header (dummy selector). */
export function getLoggedInUserChrome(page: Page): Locator {
  return page.getByTestId('logged-in-user');
}
