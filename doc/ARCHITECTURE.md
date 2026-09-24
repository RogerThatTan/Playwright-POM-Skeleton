# Architecture (skeleton)

This project follows a **four-layer** Playwright automation layout:

1. **Locators** — selector factories only  
2. **Pages** — POM actions/queries  
3. **Flows** — orchestration + assertions  
4. **Specs** — thin wrappers  

Full tree and conventions: see root [`STRUCTURE.md`](../STRUCTURE.md).

## Optional systems (stubs)

- **Locator heal** — `utilities/locatorHeal/`, `scripts/locator-heal/`
- **Locator failure guides** — `utilities/locatorFailure/`
- **Custom reporters** — `reporters/`

Do not expand these stubs until you need them.
