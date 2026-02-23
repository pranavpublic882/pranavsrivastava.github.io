import {test , expect} from '@playwright/test'

test('flipkart',  async ({page}) => 
    {

await page.goto ('https://www.flipkart.com/');
await page.waitForTimeout(5000);
const search =  page.locator('[name="q"]');
await page.waitForTimeout(5000);
await search.fill("IPhone");
await page.waitForTimeout(5000);
await search.press('Enter');
await page.waitForTimeout(5000);
const fullpage = page.locator("//div[@class='QSCKDh dLgFEE']");
const hoverr = await fullpage.first().click();
console.log(hoverr);
await page.waitForTimeout(5000);





}
);






