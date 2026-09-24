import { test } from '../test';
import { loginSuccessfullyAndVerifyRedirect } from '../../flows/loginFlow/login.flow';

test.describe('Login', () => {
  test.use({ storageState: { cookies: [], origins: [] } });

  test.describe('Login Functionality', () => {
    test('should login successfully and redirect', async ({ page }, testInfo) => {
      await loginSuccessfullyAndVerifyRedirect(page, testInfo);
    });
  });
});
