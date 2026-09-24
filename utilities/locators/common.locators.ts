import type { Locator, Page } from '@playwright/test';

/** Generic dismiss / close control for modal dialogs (dummy selector). */
export function getModalDismissButton(page: Page): Locator {
  return page.getByRole('button', { name: /close|dismiss|ok/i });
}

/** Toast / snackbar container (dummy selector). */
export function getToastContainer(page: Page): Locator {
  return page.getByRole('alert');
}
