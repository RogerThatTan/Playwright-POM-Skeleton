import { env } from '../../config/env';
import { BasePage } from '../base.page';

/**
 * Login page POM — dummy example.
 * Replace selectors via `utilities/locators/loginLocator/login.locators.ts`.
 */
export class LoginPage extends BasePage {
  /**
   * Log in as the configured example user (from `config/env.ts`).
   */
  async loginAsExampleUser(): Promise<void> {
    await this.gotoLogin();
    await this.fillCredentials(env.exampleUsername, env.examplePassword);
    await this.clickLogin();
    await this.waitForLoggedInChrome();
  }
}
