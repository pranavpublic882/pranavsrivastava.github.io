import { test, expect } from '@playwright/test';

test('DuckDuckGo search - print first organic result', async ({ page }) => {

  await page.goto('https://duckduckgo.com/');

  await page.locator('#searchbox_input').fill('Playwright automation');
  await page.locator('#searchbox_input').press('Enter');

  const firstResult = page
    .locator('#links a[data-testid="result-title-a"]')
    .first();

  await expect(firstResult).toBeVisible();

  const text = await firstResult.innerText();
  console.log('First organic result:', text);
});
