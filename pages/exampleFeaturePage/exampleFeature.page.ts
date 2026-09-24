import type { Locator } from '@playwright/test';
import { routes } from '../../config/routes';
import { env } from '../../config/env';
import {
  getExampleFeatureHeading,
  getExampleNameInput,
  getExampleSaveButton,
} from '../../utilities/locators/exampleFeatureLocator/exampleFeature.locators';
import { BasePage } from '../base.page';

/**
 * Example feature page POM — template for a real feature page.
 */
export class ExampleFeaturePage extends BasePage {
  readonly heading: Locator;
  readonly nameInput: Locator;
  readonly saveButton: Locator;

  constructor(page: BasePage['page']) {
    super(page);
    this.heading = getExampleFeatureHeading(page);
    this.nameInput = getExampleNameInput(page);
    this.saveButton = getExampleSaveButton(page);
  }

  async gotoExampleFeature(): Promise<void> {
    await this.page.goto(`${env.baseUrl}${routes.exampleFeature}`);
  }

  async fillName(name: string): Promise<void> {
    await this.nameInput.fill(name);
  }

  async clickSave(): Promise<void> {
    await this.saveButton.click();
  }

  async getHeadingText(): Promise<string> {
    return (await this.heading.textContent())?.trim() ?? '';
  }

  async verifyHeadingVisible(): Promise<boolean> {
    return this.heading.isVisible().catch(() => false);
  }
}
