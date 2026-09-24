/**
 * Locator-heal stub — record a failure artifact path for later orchestration.
 * Replace with a real capture + candidate-generation pipeline when enabling heal.
 */
export type LocatorFailureRecord = {
  testTitle: string;
  selectorHint?: string;
  pageUrl?: string;
  message: string;
};

const records: LocatorFailureRecord[] = [];

export function captureLocatorFailureStub(record: LocatorFailureRecord): void {
  records.push(record);
}

export function getCapturedFailures(): readonly LocatorFailureRecord[] {
  return records;
}

export function clearCapturedFailures(): void {
  records.length = 0;
}
