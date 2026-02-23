import { test, expect } from '@playwright/test';

test('OrangeHRM: login, search employee, view details, logout', async ({ page }) => {
  // 1. Launch OrangeHRM demo site
  await page.goto('https://opensource-demo.orangehrmlive.com/', { waitUntil: 'domcontentloaded' });

  // 2. Login with demo credentials
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/dashboard/);

  // 3. Navigate to PIM (employee search)
  await page.getByRole('link', { name: 'PIM' }).click();
  await expect(page).toHaveURL(/pim/);

  // 4. Search for an employee (leave blank for all, or enter a name)
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForSelector('div.oxd-table-body');

  // 5. Click on the first employee in the results
  const firstRow = page.locator('div.oxd-table-body div.oxd-table-row').first();
  await firstRow.click();

  // 6. Verify employee details page
  await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();

  // 7. Logout
  // Click the unique profile avatar in the top bar
  await page.locator('.oxd-userdropdown-img').click();
  // Click the Logout menu item
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  await expect(page).toHaveURL(/auth\/login/);
});
