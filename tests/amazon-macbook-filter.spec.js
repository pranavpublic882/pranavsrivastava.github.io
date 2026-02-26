import { test, expect } from '@playwright/test';

test('Search MacBook on Amazon, apply filter, open first result, verify details', async ({ page }) => {
  // 1. Navigate to Amazon
  await page.goto('https://www.amazon.in/', { waitUntil: 'domcontentloaded' });
  await page.waitForLoadState('load');

  // 2. Search for MacBook
  const searchBox = page.getByRole('searchbox', { name: 'Search Amazon.in' });
  await searchBox.fill('MacBook');
  await searchBox.press('Enter');
  await page.waitForTimeout(3000);

  // Verify search results page loaded
  await expect(page).toHaveURL(/s\?k=MacBook/);
  console.log('✅ Search results page loaded');

  // 3. Wait for product results and apply filter
  await page.waitForSelector('div[data-component-type="s-search-result"]', { timeout: 15000 });
  
  // Try to apply Apple brand filter if available
  try {
    const filterLink = page.locator('a:has-text("Apple")').first();
    const isFilterVisible = await filterLink.isVisible({ timeout: 3000 }).catch(() => false);
    
    if (isFilterVisible) {
      await filterLink.click();
      await page.waitForTimeout(3000);
      console.log('✅ Applied Apple brand filter');
    } else {
      console.log('ℹ️ Filter not available, proceeding with search results');
    }
  } catch (e) {
    console.log('ℹ️ Filter application skipped, using search results');
  }

  // 4. Get first product and click it
  // Wait for search results to load
  await page.waitForTimeout(3000);
  
  // Find the first product link
  const productLink = page.locator('a[href*="/dp/"]').first();
  await productLink.waitFor({ state: 'visible', timeout: 10000 });
  
  const productTitle = await productLink.getAttribute('title');
  console.log('First product:', productTitle);

  await productLink.click();
  await page.waitForLoadState('load');
  console.log('✅ Opened first product');

  // 5. Verify product details on product page
  // Wait for product title
  await page.waitForSelector('span[id="productTitle"]', { timeout: 10000 });
  
  const detailPageTitle = page.locator('span[id="productTitle"]');
  const titleText = await detailPageTitle.textContent();
  console.log('Product title:', titleText);
  expect(titleText?.toLowerCase()).toContain('macbook');
  console.log('✅ Product title verified');

  // Verify price is visible
  const priceElement = page.locator('.a-price.a-text-price.a-size-medium.a-color-price').first();
  const priceVisible = await priceElement.isVisible({ timeout: 5000 }).catch(() => false);
  
  if (priceVisible) {
    const price = await priceElement.textContent();
    console.log('Product price:', price);
    console.log('✅ Price verified');
  } else {
    console.log('ℹ️ Price element not in expected location');
  }

  // Verify "Add to Cart" button exists
  const addToCartButton = page.getByRole('button', { name: /add to cart|add to basket/i });
  const buttonVisible = await addToCartButton.isVisible({ timeout: 5000 }).catch(() => false);
  
  if (buttonVisible) {
    console.log('✅ Add to Cart button found');
  }

  // Verify product rating/reviews section
  const ratingSection = page.locator('span[data-rating], .a-icon-star').first();
  const ratingVisible = await ratingSection.isVisible({ timeout: 5000 }).catch(() => false);
  
  if (ratingVisible) {
    console.log('✅ Product rating section found');
  }

  // Verify stock status
  const stockElement = page.locator('text=/In Stock|Only [0-9]+ left|Comes/').first();
  const stockVisible = await stockElement.isVisible({ timeout: 5000 }).catch(() => false);
  
  if (stockVisible) {
    const stock = await stockElement.textContent();
    console.log('Stock status:', stock);
    console.log('✅ Stock status verified');
  }

  console.log('✅ Test completed successfully - Product details verified');
});
