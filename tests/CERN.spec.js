import {test , expect} from '@playwright/test'

test ('redbus', async({page})=>

{


await page.goto ('https://www.redbus.in/')
await page.waitForTimeout(3000);
const origin = await page.locator ('#srcinput')
await page.waitForTimeout(3000);
await origin.fill('Hyderabad')
await page.waitForTimeout(3000);
await page.getByRole('heading', { name: /^Hyderabad$/ }).first().click();
await page.waitForTimeout(3000);
const destination = await page.locator ('#destinput')
await page.waitForTimeout(3000);
await destination.fill('Banagalore')
await page.waitForTimeout(3000);
await page.getByRole('heading', { name: /^Bangalore$/ }).first().click();

await page.waitForTimeout(3000);
await page.getByText('Date of Journey', { exact: true }).click();

 await page.waitForTimeout(3000);

    const journeyDate = 'Sunday, February 15, 2026';
  await page.getByRole('button', { name: journeyDate }).click();
}

)