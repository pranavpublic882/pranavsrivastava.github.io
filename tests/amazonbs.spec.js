import {test, expect} from '@playwright/test'

test ('amazonbs', async({page}) => 

{

await page.goto ('https://www.amazon.in/')
await page.waitForLoadState('load');

const search = page.getByRole('searchbox' , {name: 'Search Amazon.in'})

await search.fill('MacBook Air')
await search.press('Enter');
//await page.waitForTimeout(3000);


await page.locator('#a-autoid-0-announce').click();

await page.getByRole('option', { name: 'Best Sellers' }).click();
await page.waitForTimeout(3000);

//await page.locator("//span[@class='rush-component s-latency-cf-section']").first().click();
//await page.waitForTimeout(3000);



}



);