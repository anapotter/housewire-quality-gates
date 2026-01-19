import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests', () => {
  test('homepage visual comparison', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Take screenshot for visual comparison
    await expect(page).toHaveScreenshot('homepage.png', {
      fullPage: true,
      maxDiffPixels: 100,
    });
  });

  test('article page visual comparison', async ({ page }) => {
    await page.goto('/');

    // Find and click first article link
    const articleLink = page.locator('article a, .article-link, [href*="article"]').first();
    if (await articleLink.isVisible()) {
      await articleLink.click();
      await page.waitForLoadState('networkidle');

      await expect(page).toHaveScreenshot('article-page.png', {
        fullPage: true,
        maxDiffPixels: 100,
      });
    }
  });

  test('responsive layout comparison', async ({ page }) => {
    const viewports = [
      { width: 1920, height: 1080, name: 'desktop' },
      { width: 768, height: 1024, name: 'tablet' },
      { width: 375, height: 667, name: 'mobile' },
    ];

    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('/');
      await page.waitForLoadState('networkidle');

      await expect(page).toHaveScreenshot(`homepage-${viewport.name}.png`, {
        maxDiffPixels: 100,
      });
    }
  });
});
