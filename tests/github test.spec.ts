import {test, expect} from '@playwright/test'


test('TestAutomationPractice: new tab and online training', async ({ page, context }) => {
  // 1. Launch the site
  await page.goto('https://testautomationpractice.blogspot.com/', { waitUntil: 'domcontentloaded' });

  // 2. Click on 'New Tab' button and wait for new tab
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.click('button[onclick*="myFunction()"]'),
  ]);
  await newPage.waitForLoadState('domcontentloaded');

  // 3. Click 'Online Training' on new page
  await newPage.click('a:has-text("Online Training")');

  // 4. Print the page title
  await newPage.waitForLoadState('domcontentloaded');
  const title = await newPage.title();
  console.log('Page Title:', title);
});