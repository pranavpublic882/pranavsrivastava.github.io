import { test, expect } from '@playwright/test';

test('EDH: Education Fees Claim Submission', async ({ page }) => {
  // 1. Launch EDH Application (replace with actual URL)
  await page.goto('https://your-edh-application-url.com', { waitUntil: 'domcontentloaded' });

  // 2. Impersonate as Beneficiary user (replace with actual selector/steps)
  await page.getByRole('button', { name: /Impersonate/i }).click();
  await page.getByRole('textbox', { name: /User Search/i }).fill('Beneficiary');
  await page.getByRole('option', { name: /Beneficiary/i }).click();
  await page.getByRole('button', { name: /Confirm/i }).click();

  // 3. Click on Office -> Other Tasks folder
  await page.getByRole('menuitem', { name: /Office/i }).click();
  await page.getByRole('menuitem', { name: /Other Tasks/i }).click();

  // 4. Under Claims section, click on Education Fees option
  await page.getByRole('treeitem', { name: /Claims/i }).click();
  await page.getByRole('link', { name: /Education Fees/i }).click();

  // 5. Enter detail in EDUF template (Ref Test Data)
  // Replace with actual field selectors and test data
  await page.getByLabel('Student Name').fill('John Doe');
  await page.getByLabel('Institution').fill('Sample University');
  await page.getByLabel('Amount').fill('1000');
  await page.getByLabel('Academic Year').fill('2025-2026');

  // 6. Click on Sign-in for submitting the document
  await page.getByRole('button', { name: /Sign-in/i }).click();

  // 7. Input Username DMATHIES and click on Submit
  await page.getByLabel('Username').fill('DMATHIES');
  await page.getByRole('button', { name: /Submit/i }).click();

  // 8. Optionally, verify submission success
  await expect(page.getByText(/Submission Successful|Document Submitted/i)).toBeVisible();
});
