# Houswire Quality Gates & Visual Regression

Quality gates and visual regression automation for https://houswire.com

This repository is intentionally SEPARATE from standard Playwright E2E tests.
It focuses on:
- Visual regression (BackstopJS + Playwright)
- UI quality gates
- Resilient / self-healing locators
- Visual spot-checks
- Test data generation utilities
- Trace + artifact generation

---

## WHAT THIS REPO DEMONSTRATES

- **Visual regression baselines with BackstopJS** - Automated visual comparison across multiple viewports
- **UI quality gates independent from E2E tests** - Focused testing separate from end-to-end flows
- **Playwright traces, screenshots, and artifacts** - Rich debugging information for test failures
- **Resilient selector strategy (self-healing)** - Multiple fallback locators for stable tests
- **Test data generation utilities** - Faker.js integration for realistic test data
- **Visual spot-checks for critical UI areas** - Targeted screenshot comparison for key components

---

## PREREQUISITES

You need:
- Node.js 18+
- VS Code
- Git
- Internet access to https://houswire.com

---

## INSTALLATION

### 1) Clone and Install

```bash
git clone <repository-url>
cd housewire-quality-gates
npm install
npx playwright install
```

### 2) Verify Installation

```bash
npm test -- --list
```

---

## PROJECT STRUCTURE

```
housewire-quality-gates/
├── backstop/                  # BackstopJS configuration
├── backstop_data/             # BackstopJS generated data
├── tests/              # End-to-end quality gate tests
│   └── visual/                # Visual regression tests
├── src/
│   ├── utils/                 # Utility functions
│   │   └── locators.ts        # Resilient locator strategies
│   └── data/                  # Test data
│       └── testDataGenerator.ts
├── reports/                   # Test reports and artifacts
├── playwright.config.ts       # Playwright configuration
├── backstop.json              # BackstopJS configuration
└── package.json
```

---

## RUNNING TESTS

### Playwright Tests

```bash
# Run all tests
npm test

# Run E2E tests only
npm run test:e2e

# Run visual regression tests only
npm run test:visual

# Run with UI (hspecific test file
npx playwright test tests/e2e/houswire-basic.spec.ts

# Run on specific browser
npx playwright test --project=chromium
```

### BackstopJS Visual Regression

```bash
# Create reference screenshots (baseline)
npm run backstop:reference

# Run visual regression test (compare against reference)
npm run backstop:test

# Approve changes (update baseline)
npm run backstop:approve

# Open visual report
npm run backstop:openReport
```

---

## VIEWING REPORTS

### Playwright Reports

```bash
# Open HTML report
npm run report

# Reports are saved to: reports/playwright/
```

### Test Artifacts

- Screenshots: `reports/*.png`
- Videos: `test-results/*/video.webm`
- Traces: `test-results/*/trace.zip`

To view traces:
```bash└── package.json
```

---

## RUNNING TESTS

### Playwri## UTILITIES

### Resilient Locators

The `ResilientLocator` class provides self-healing locator strategies:

```typescript
import { ResilientLocator } from './src/utils/locators';

// Use predefined patterns
const nav = await ResilientLocator.findElement(
  page, 
  ResilientLocator.patterns.navigation
);

// Or provide custom fallbacks
const element = await ResilientLocator.findElement(page, [
  '#my-id',
  '.my-class',
  '[data-testid="my-element"]'
]);
```

### Test Data Generation

Generate realistic test data using Faker.js:

```typescript
import { TestDataGenerator } from './src/data/testDataGenerator';

const user = TestDataGenerator.generateUser();
const
#roperty = TestDataGenerator.generateProperty();
const article = TestDataGenerator.generateArticle();
const query = TestDataGenerator.generateSearchQuery();
```

---

## CODE QUALITY

### Linting

```bash
npm run lint
```

### Formatting

```bash
# Format code
npm run format

# Check formatting
npm run format:check
```

---

## CONFIGURATION

### Playwright Configuration

Edit `playwright.config.ts` to:
- Change base URL
- Adjust timeouts
- Configure browsers
- Set up retries
- Modify reporters

### BackstopJS Configuration

Edit `backstop.json` to:
- Add/remove scenarios
- Configure viewports
- Set si  Resily threshold
- Adjust delays and selectors

---

## ENVIRONMENT VARIABLES

Create a `.env` file for environment-specific configuration:

```env
BASE_URL=https://houswire.com
HEADLESS=true
TIMEOUT=30000
```

---

## CI/CD INTEGRATION

### GitHub Actions Example

```yaml
name: Quality Gates

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npm test
      - uses: actions/upload-artifact@v3
        if: always()
        with:
          name: playwright-report
          path: reports/
```

---

## BEST PRA
-ICES

1. **Use Resilient Locators**: Always prefer the `ResilientLocator` class with multiple fallback strategies
2. **Visual Regression**: Run BackstopJS tests on stable environments to avoid false positives
3. **Trace Generation**: Enable traces for debugging failed tests
4. **Test Data**: Use `TestDataGenerator` for consistent, realistic test data
5. **Parallel Execution**: Playwright runs tests in parallel by default
6. **Artifacts**: Always capture screenshots/videos on failure for debugging

---

## TROUBLESHOOTING

### Tests Failing to Connect

- Verify internet connection
- Check if https://houswire.com is accessible
- Review proxy/firewall settings      - uses: actions/setup-nodesitives

- Increase `maxDiffPixels` threshold
- Use `waitForLoadState('networkidle')` before screenshots
- Mask dynamic content (ads, dates, etc.)

### Playwright Browser Issues

```bash
# Reinstall browsers
npx playwright install --with-deps
```

---

## CONTRIBUTING

1. Fork the repository
2. Create a feature branch
3. Write tests for new features
4. Ensure all tests pass
5. Format code with Prettier
6. Submit a pull request

---

## LICENSE

ISC

---

## SUPPORT

For issues and questions:
- GitHub Issues: [Create an issue](https://github.com/anapotter/housewire-quality-gates/issues)
- Documentation: See this README

---

## CHANGELOG

### v1.0.0 (Initial Release)
- Playwright test framework setup
- BackstopJS visual regression integration
- Resilient locator utilities
- Test data generation with Faker.js
- Basic E2E and visual regression tests
- CI/CD ready configuration
