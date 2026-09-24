# Playwright POM Skeleton — File & Folder Structure

Reusable skeleton for Playwright TypeScript test automation using a **four-layer** architecture (locators → pages → flows → specs).

Copy this folder into a new project, replace dummy values, and grow feature folders by mirroring the `exampleFeature*` vertical slice.

---

## Top-level layout

```text
playwright-pom-skeleton/
├── STRUCTURE.md                 ← this file
├── README.md
├── package.json
├── tsconfig.json
├── playwright.config.ts
├── .env.example                 ← copy to .env (never commit .env)
├── .gitignore
├── .nvmrc
├── .editorconfig
│
├── .cursor/rules/               ← Cursor agent conventions
├── .github/workflows/           ← CI stubs
│
├── config/                      ← env, routes, timeouts, paths
├── fixtures/                    ← Playwright test.extend
├── setup/                       ← global + auth storage-state setup
├── pages/                       ← Page Object Model (actions only)
├── utilities/
│   ├── locators/                ← ALL raw selectors (factory functions)
│   ├── helper/                  ← shared helpers
│   ├── locatorHeal/             ← optional self-heal stubs
│   └── locatorFailure/          ← optional failure-classifier stubs
├── flows/                       ← business orchestration + assertions
├── tests/                       ← thin specs (one flow call per test)
├── scripts/locator-heal/        ← optional heal-runner stubs
├── reporters/                   ← custom reporter stubs
├── storage/                     ← auth JSON (gitignored contents)
├── test-contexts/               ← runtime context artifacts
├── reports/pdf/                 ← PDF report output folder
└── doc/                         ← architecture notes
```

---

## Four-layer architecture (do not collapse)

| Layer | Path pattern | Responsibility |
|-------|--------------|----------------|
| **Locators** | `utilities/locators/**/*.locators.ts` | Raw selector strings as exported factory functions (`getFooButton(page)`) |
| **Pages** | `pages/**/*.page.ts` | POM classes: hold locator refs, expose `click*` / `fill*` / `get*` methods. **No raw selectors.** |
| **Flows** | `flows/**/*.flow.ts` | Multi-step orchestration; instantiate page objects; place assertions here |
| **Specs** | `tests/**/*.spec.ts` | Thin wrappers: `test.describe` + `beforeEach` + one `await someFlow(page, testInfo)` |

Supporting layers:

| Layer | Path | Responsibility |
|-------|------|----------------|
| Config | `config/` | `env`, routes, timeouts, app paths — single source of truth |
| Fixtures | `fixtures/` | Shared `test` / `expect`; optional multi-user fixture |
| Setup | `setup/` | Global auth setup + per-user `*.auth.setup.ts` |
| Helpers | `utilities/helper/` | Reusable non-POM utilities (UI dismiss, value parse, etc.) |

---

## Naming conventions

| Type | Convention | Example |
|------|------------|---------|
| Page objects | `camelCase.page.ts` | `exampleFeature.page.ts` |
| Spec files | `camelCase.spec.ts` | `exampleFeature.spec.ts` |
| Flow files | `camelCase.flow.ts` | `exampleFeature.flow.ts` |
| Locator files | `camelCase.locators.ts` | `exampleFeature.locators.ts` |
| Helper files | `camelCase.helper.ts` | `dismissModal.helper.ts` |
| Auth setup | `kebab-case.auth.setup.ts` | `example-user.auth.setup.ts` |
| Fixtures | `kebab-case.fixture.ts` | `test.fixture.ts` |

Feature folders mirror each other:

```text
pages/exampleFeaturePage/exampleFeature.page.ts
utilities/locators/exampleFeatureLocator/exampleFeature.locators.ts
flows/exampleFeatureFlow/exampleFeature.flow.ts
tests/exampleFeatureTest/exampleFeature.spec.ts
```

---

## Example vertical slice (included)

Dummy “login” + “example feature” files demonstrate the full path:

1. `utilities/locators/loginLocator/login.locators.ts` — selectors
2. `pages/loginPage/login.page.ts` — POM methods
3. `flows/loginFlow/login.flow.ts` — orchestration + assert
4. `tests/loginTest/login.spec.ts` — thin spec

Same pattern for `exampleFeature*`.

Replace selectors, URLs, and credentials with your app’s real values.

---

## Optional extras (stubs included)

| Area | Path | Notes |
|------|------|-------|
| Cursor rules | `.cursor/rules/*.mdc` | Architecture + MCP budget + RTK notes |
| CI | `.github/workflows/playwright-tests.yml` | Minimal Playwright CI |
| Locator heal | `utilities/locatorHeal/`, `scripts/locator-heal/` | Stubs only — wire up when needed |
| Locator failure | `utilities/locatorFailure/` | Classifier / repair-guide stubs |
| Custom reporter | `reporters/example.reporter.ts` | Optional list reporter stub |

These folders are **not required** for day-to-day test authoring. Leave them until you need self-healing or custom reporting.

---

## Import order (new / edited files)

1. `@playwright/test`
2. `config/`
3. Page classes
4. Locator factories from `utilities/locators/`
5. Helpers from `utilities/helper/`

---

## Spec shape (required)

```typescript
import { test } from '../test';
import { LoginPage } from '../../pages/loginPage/login.page';

test.describe('<feature>', () => {
  test.beforeEach(async ({ page }) => {
    await new LoginPage(page).loginAsExampleUser();
  });

  test('<case name>', async ({ page }, testInfo) => {
    await someFlowFunction(page, testInfo);
  });
});
```

Always import `test` / `expect` from `tests/test.ts` (barrel over `fixtures/test.fixture.ts`).

---

## Page method prefixes

| Prefix | Meaning |
|--------|---------|
| `fill*` | Fill an input/group |
| `click*` | Click an element |
| `ensure*` | Idempotent state guard + action |
| `wait*` / `waitFor*` | Wait for a condition |
| `get*` | Retrieve a value asynchronously |
| `is*` | Boolean state check |
| `collect*` | Scrape and return a data object |
| `verify*` | Post-action assertion, returns boolean |

---

## Config & secrets

- Copy `.env.example` → `.env` and fill dummy/real values locally.
- Never commit `.env` or `storage/*.auth.json`.
- Read env only through `config/env.ts`, not scattered `process.env` calls.

---

## How to adapt for a new project

1. Copy `playwright-pom-skeleton` and rename the package in `package.json`.
2. Set `BASE_URL` and users in `.env`.
3. Update `utilities/locators/` for your app’s DOM.
4. Rename `exampleFeature*` folders to your first real feature (or delete them).
5. Run `npm install` and `npx playwright install chromium`.
6. Run `npm run test:smoke` (login flow) against a reachable app URL.

---

## What is intentionally dummy

All selectors, URLs (`https://example.com`), usernames/passwords, and feature names are placeholders. They exist so TypeScript compiles and the folder pattern is obvious — not to pass against a real product.
