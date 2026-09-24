/**
 * Heal-one stub — would attempt to propose a replacement locator.
 * Intentionally a no-op in the skeleton.
 */
export async function healOneStub(_args: {
  locatorFile: string;
  factoryName: string;
}): Promise<{ healed: boolean; candidate?: string }> {
  return { healed: false };
}
