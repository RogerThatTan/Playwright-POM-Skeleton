import type { Locator, Page } from '@playwright/test';

/** Primary heading on the example feature page (dummy selector). */
export function getExampleFeatureHeading(page: Page): Locator {
  return page.getByRole('heading', { name: 'Example Feature' });
}

/** Save button on the example feature page (dummy selector). */
export function getExampleSaveButton(page: Page): Locator {
  return page.getByRole('button', { name: 'Save' });
}

/** Name input on the example feature form (dummy selector). */
export function getExampleNameInput(page: Page): Locator {
  return page.getByLabel('Name');
}
