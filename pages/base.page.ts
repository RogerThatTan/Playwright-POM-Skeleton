import type { Locator, Page } from '@playwright/test';
import { env } from '../config/env';
import { routes } from '../config/routes';
import { BASE_PAGE_VISIBLE_MS, LOGIN_REDIRECT_MS } from '../config/timeouts';
import {
  getLoggedInUserChrome,
  getLoginButton,
  getPasswordInput,
  getUsernameInput,
} from '../utilities/locators/loginLocator/login.locators';

/**
 * Base page class. All page objects extend this.
 *
 * Locators live in `utilities/locators/` — never put raw selectors here.
 */
export class BasePage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly loggedInUserChrome: Locator;

  constructor(readonly page: Page) {
    this.usernameInput = getUsernameInput(page);
    this.passwordInput = getPasswordInput(page);
    this.loginButton = getLoginButton(page);
    this.loggedInUserChrome = getLoggedInUserChrome(page);
  }

  getBaseUrl(): string {
    return env.baseUrl;
  }

  async gotoLogin(): Promise<void> {
    await this.page.goto(`${env.baseUrl}${routes.login}`);
  }

  async gotoHome(): Promise<void> {
    await this.page.goto(`${env.baseUrl}${routes.home}`);
  }

  async fillCredentials(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
  }

  async clickLogin(): Promise<void> {
    await this.loginButton.click();
  }

  async waitForLoggedInChrome(): Promise<void> {
    await this.loggedInUserChrome.waitFor({
      state: 'visible',
      timeout: LOGIN_REDIRECT_MS,
    });
  }

  async isLoggedInChromeVisible(): Promise<boolean> {
    return this.loggedInUserChrome
      .isVisible({ timeout: BASE_PAGE_VISIBLE_MS })
      .catch(() => false);
  }
}
