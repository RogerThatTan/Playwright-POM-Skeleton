import fs from 'node:fs';
import path from 'node:path';
import { STORAGE_DIR } from '../config/appPaths';
import { EXAMPLE_USER_STATE_PATH } from './auth/example-user.auth.setup';

/**
 * Ensures storage dir exists and writes a minimal empty auth state
 * so local smoke runs do not fail when auth setup is skipped.
 *
 * Replace with real login + `storageState` persistence for your app.
 */
async function globalAuthSetup(): Promise<void> {
  fs.mkdirSync(STORAGE_DIR, { recursive: true });

  if (!fs.existsSync(EXAMPLE_USER_STATE_PATH)) {
    const emptyState = { cookies: [], origins: [] };
    fs.writeFileSync(EXAMPLE_USER_STATE_PATH, JSON.stringify(emptyState, null, 2));
  }

  const multiPath = path.join(STORAGE_DIR, 'multiUser.auth.json');
  if (!fs.existsSync(multiPath)) {
    fs.writeFileSync(multiPath, JSON.stringify({ cookies: [], origins: [] }, null, 2));
  }
}

export default globalAuthSetup;
