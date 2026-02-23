import { test } from '@playwright/test';

test('print all MacBook Air search results', async ({ page }) => {

  await page.goto('https://www.amazon.in', { waitUntil: 'domcontentloaded' });

  const searchBox = page.getByRole('searchbox', { name: 'Search Amazon.in' });
  await searchBox.fill('MacBook Air')
  await searchBox.press('Enter');

  // ✅ WAIT for navigation caused by Enter
  //await Promise.all([
   // page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
   // searchBox.press('Enter')
  //]);

  // ✅ WAIT for search result cards (not links)
  await page.waitForSelector(
    'div[data-component-type="s-search-result"]',
    
  );

  const cards = page.locator(
    'div[data-component-type="s-search-result"]'
  );

  const count = await cards.count();
  console.log(`Total result cards found: ${count}`);

  for (let i = 0; i < count; i++) {
    const title = await cards
      .nth(i)
      .locator('h2')
      .innerText()
      .catch(() => null);

    if (title) {
      console.log(`${i + 1}. ${title}`);
    }
  }
});
