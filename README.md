# Playwright E2E POM Framework

A data-driven end-to-end UI test for the SauceDemo shopping flow, written in
TypeScript with Playwright and the Page Object Model.

## What this demonstrates

- Page objects encapsulate locators and user actions for each application page.
- `PageManager` creates and exposes the page objects used by the test.
- The test reads product and login data from `utils/data.json` and creates one
  test per data row.
- Assertions verify navigation, cart contents, and order confirmation.

## Project structure

```text
pagesTS/                       Page objects and PageManager
tests/EndToEndPOMData.spec.ts  Data-driven end-to-end test
utils/data.json                Test data rows
playwright.config.js           Playwright test configuration
```

## Run locally

Prerequisites: Node.js 20 or newer and npm.

```bash
npm ci
npx playwright install chromium
npx playwright test tests/EndToEndPOMData.spec.ts
```

The test uses the public SauceDemo demo credentials in `utils/data.json`.
Replace or add data rows there to run the same flow with different products.

The report is generated in `playwright-report/` after a test run. Open it with:

```bash
npx playwright show-report
```
