import path from 'node:path';

/** Absolute paths used by setup / helpers. */

export const AUTOMATION_ROOT = path.resolve(__dirname, '..');
export const STORAGE_DIR = path.join(AUTOMATION_ROOT, 'storage');
export const TEST_CONTEXTS_DIR = path.join(AUTOMATION_ROOT, 'test-contexts');
export const REPORTS_PDF_DIR = path.join(AUTOMATION_ROOT, 'reports', 'pdf');
