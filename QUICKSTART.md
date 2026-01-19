# Quick Start Guide

Get up and running with Houswire Quality Gates in 5 minutes!

## Step 1: Verify Prerequisites

```bash
# Check Node.js version (need 18+)
node --version

# Check npm
npm --version
```

## Step 2: Install Dependencies

Already done if you cloned this repo! Otherwise:

```bash
npm install
npx playwright install
```

## Step 3: Run Your First Test

```bash
# Run all tests
npm test

# Or run just E2E tests
npm run test:e2e

# Or run in headed mode to see the browser
npm run test:headed
```

## Step 4: View Results

After tests run, view the report:

```bash
npm run report
```

This opens an HTML report in your browser showing:
- Test results
- Screenshots
- Videos (on failures)
- Trace files for debugging

## Step 5: Try Visual Regression

Run visual regression tests:

```bash
npm run test:visual
```

Or use BackstopJS:

```bash
# Create baseline screenshots
npm run backstop:reference

# Run comparison
npm run backstop:test

# View report
npm run backstop:openReport
```

## Common Commands

```bash
# List all tests
npm test -- --list

# Run specific test file
npx playwright test tests/e2e/houswire-basic.spec.ts

# Run on specific browser
npx playwright test --project=chromium

# Debug mode
npm run test:debug

# Format code
npm run format

# Lint code
npm run lint
```

## Next Steps

1. Explore the example tests in `tests/e2e/` and `tests/visual/`
2. Check out the utilities in `src/utils/locators.ts`
3. Use `TestDataGenerator` for creating test data
4. Read the full [README.md](README.md) for com
After tests run, viewoubleshooting

**Tests won't run?**
- Make sure you ran `npm install` and `npx playwright install`
- Check your internet connection

**Browsers not found?**
```bash
npx playwright install --with-deps
```

**Need help?**
Check the README or create an issue on GitHub!
