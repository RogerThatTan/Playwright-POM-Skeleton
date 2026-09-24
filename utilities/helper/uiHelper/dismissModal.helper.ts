import type { Page } from '@playwright/test';
import { getModalDismissButton } from '../../locators/common.locators';

/**
 * Dismiss a visible modal if present (idempotent).
 */
export async function dismissModalIfVisible(page: Page): Promise<void> {
  const dismiss = getModalDismissButton(page);
  if (await dismiss.isVisible().catch(() => false)) {
    await dismiss.click();
  }
}
