/**
 * Resilient and self-healing locators for Houswire.com
 * Uses multiple fallback strategies for robust element selection
 */

import { Page, Locator } from '@playwright/test';

type Candidate = {
  name: string;
  build: (page: Page) => Locator;
};

/**
 * Resilient locator function with named candidates
 * Returns the first matching locator and which candidate was used
 */
export async function resilientLocator(page: Page, candidates: Candidate[]) {
  for (const c of candidates) {
    try {
      const loc = c.build(page);
      await loc.first().waitFor({ state: 'visible', timeout: 1500 });
      return { locator: loc.first(), used: c.name };
    } catch {}
  }
  throw new Error('No resilient locator matched');
}

export class ResilientLocator {
  /**
   * Creates a locator with multiple fallback strategies
   * @param page Playwright page object
   * @param selectors Array of selectors to try in order
   */
  static async findElement(page: any, selectors: string[]) {
    for (const selector of selectors) {
      try {
        const element = await page.locator(selector).first();
        if (await element.isVisible({ timeout: 5000 })) {
          return element;
        }
      } catch (e) {
        // Try next selector
        continue;
      }
    }
    throw new Error(
      `Could not find element with any of the provided selectors: ${selectors.join(', ')}`
    );
  }

  /**
   * Common patterns for resilient locators
   */
  static patterns = {
    navigation: ['nav', '[role="navigation"]', 'header nav', '.navigation', '#navigation'],
    searchBox: [
      'input[type="search"]',
      'input[placeholder*="search" i]',
      '[aria-label*="search" i]',
      '.search-input',
      '#search',
    ],
    primaryButton: [
      'button[type="submit"]',
      '.btn-primary',
      '.primary-button',
      'button:has-text("Submit")',
      'a.button',
    ],
    article: ['article', '[role="article"]', '.article', '.post'],
  };
}
