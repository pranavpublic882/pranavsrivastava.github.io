import {test , expect} from '@playwright/test'

test('test1', async ({ page }) => {

await page.goto('https://www.amazon.in/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3000); // so video captures something



const search =  page.getByRole ('searchbox' , {id: 'twotabsearchtextbox'});

await search.fill ("iPhone");



});