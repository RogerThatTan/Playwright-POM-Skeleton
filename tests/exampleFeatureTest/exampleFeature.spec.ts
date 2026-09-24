import { test } from '../test';
import { LoginPage } from '../../pages/loginPage/login.page';
import { openExampleFeatureAndSave } from '../../flows/exampleFeatureFlow/exampleFeature.flow';

test.describe('Example Feature', () => {
  test.beforeEach(async ({ page }) => {
    await new LoginPage(page).loginAsExampleUser();
  });

  test('should open example feature and save', async ({ page }, testInfo) => {
    await openExampleFeatureAndSave(page, testInfo);
  });
});
