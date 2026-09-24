import { expect, type Page, type TestInfo } from '@playwright/test';
import { ExampleFeaturePage } from '../../pages/exampleFeaturePage/exampleFeature.page';
import { dismissModalIfVisible } from '../../utilities/helper/uiHelper/dismissModal.helper';
import { attachFlowNote } from '../baseFlow/base.flow';

/**
 * Open the example feature, fill a dummy name, click Save, assert heading.
 */
export async function openExampleFeatureAndSave(
  page: Page,
  testInfo: TestInfo
): Promise<void> {
  const featurePage = new ExampleFeaturePage(page);
  await featurePage.gotoExampleFeature();
  await dismissModalIfVisible(page);

  await featurePage.fillName('Dummy Item');
  await featurePage.clickSave();

  const visible = await featurePage.verifyHeadingVisible();
  expect(visible).toBe(true);

  await attachFlowNote(
    testInfo,
    'example-feature-result',
    `Heading: ${await featurePage.getHeadingText()}`
  );
}
