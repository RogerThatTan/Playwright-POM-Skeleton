import { config as loadDotenv } from 'dotenv';
import path from 'node:path';

/**
 * Local runs: `.env` wins over leftover shell env.
 * CI: process env / secrets win (do not override).
 */
const envFile = path.resolve(process.cwd(), '.env');
loadDotenv({
  path: envFile,
  override: !process.env.CI,
});

function optional(name: string, fallback: string): string {
  const value = process.env[name];
  return value && value.trim() !== '' ? value : fallback;
}

function optionalBool(name: string, fallback: boolean): boolean {
  const raw = process.env[name];
  if (raw === undefined) return fallback;
  return !/^(false|0|no|off)$/i.test(raw.trim());
}

const baseUrlRaw = optional('BASE_URL', 'https://example.com');

/**
 * Centralized environment loader.
 * Add new vars here — do not read `process.env` directly in pages/flows/specs.
 */
export const env = {
  baseUrl: baseUrlRaw.replace(/\/$/, ''),
  exampleUsername: optional('EXAMPLE_USERNAME', 'dummy_user'),
  examplePassword: optional('EXAMPLE_PASSWORD', 'dummy_password'),
  multiUsername: optional('MULTI_USERNAME', 'dummy_multi_user'),
  multiPassword: optional('MULTI_PASSWORD', 'dummy_multi_password'),
  headless: optionalBool('HEADLESS', true),
  isCI: optionalBool('CI', false),
  pdfReportEnabled: optionalBool('PDF_REPORT_ENABLED', false),
  locatorHealEnabled: optionalBool('LOCATOR_HEAL_ENABLED', false),
};
