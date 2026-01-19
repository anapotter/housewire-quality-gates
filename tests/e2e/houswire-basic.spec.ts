import { test, expect } from '@playwright/test';
import { ResilientLocator } from '../../src/utils/locators';

test.describe('Houswire.com Basic Quality Gates', () => {
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('/');

    // Check page loaded
    await expect(page).toHaveTitle(/Hous Wire/i);
  });

  test('should have working navigation', async ({ page }) => {
    await page.goto('/');

    // Find navigation using resilient locator
    const nav = await ResilientLocator.findElement(page, ResilientLocator.patterns.navigation);
    await expect(nav).toBeVisible();

    // Verify navigation is interactive
    await expect(nav).not.toBeDisabled();
  });

  test('should be responsive on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Check mobile rendering
    await expect(page).toHaveTitle(/Hous Wire/i);
    await page.screenshot({ path: 'reports/mobile-homepage.png' });
  });

  test('should have accessible content', async ({ page }) => {
    await page.goto('/');

    // Check for basic accessibility
    const bodyContent = page.locator('body');
    await expect(bodyContent).toBeVisible();
  });
});
