import { test, expect } from '@playwright/test';

test('visual: home page stable region', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  const body = page.locator('body');
  await expect(body).toHaveScreenshot('home-body.png', {
    maxDiffPixelRatio: 0.02,
  });
});
