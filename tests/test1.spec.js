import { test, expect } from '@playwright/test';

test('Amazon.in hover and click Start here', async ({ page }) => {
  await page.goto('https://www.amazon.in/', { waitUntil: 'domcontentloaded' });

  // Hover on "Hello, sign in · Account & Lists"
  await page.hover('#nav-link-accountList');

  // Locate "Start here" using aria-label (most stable)
  const startHere = page.getByLabel(
    'New to Amazon? Start here to create an account'
  );

  // Ensure it is visible before clicking
  await expect(startHere).toBeVisible();

  // Click "Start here"
  await startHere.click();

  // Optional validation
  await expect(page).toHaveURL(/register/);
  await page.getByRole('link', {name: 'Conditions of Use'}).first().click();
  await expect(page).toHaveTitle(/Conditions of Use - Amazon Customer Service/);
  const searchbox = page.getByRole('searchbox', {name: 'Find more solutions'});
  await searchbox.fill('Patent')
  await searchbox.press('Enter');
  const text =  page.locator('text=/search results for/i').innerText();
   console.log(text);

});


