import { expect, type Page, type TestInfo } from '@playwright/test';
import { routes } from '../../config/routes';
import { env } from '../../config/env';
import { LoginPage } from '../../pages/loginPage/login.page';
import { attachFlowNote } from '../baseFlow/base.flow';

/**
 * Login successfully and verify we left the login route (dummy assert).
 */
export async function loginSuccessfullyAndVerifyRedirect(
  page: Page,
  testInfo: TestInfo
): Promise<void> {
  const loginPage = new LoginPage(page);
  await loginPage.loginAsExampleUser();

  await expect(page).not.toHaveURL(new RegExp(`${routes.login}$`));
  await attachFlowNote(
    testInfo,
    'login-result',
    `Logged in as ${env.exampleUsername} against ${env.baseUrl}`
  );
}
