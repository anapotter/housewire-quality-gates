import { test, expect } from '@playwright/test';
import { resilientLocator } from '../../src/utils/locators';

test('home page loads and has content', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  // Check page title
  await expect(page).toHaveTitle(/Hous Wire/i);

  // Check body is visible
  await expect(page.locator('body')).toBeVisible();
});
