import {test , expect} from '@playwright/test'

test ('myntra' , async({page})=>
{

await page.goto('https://testautomationpractice.blogspot.com/');

const count1 = await page.getByRole('link').count();

console.log(count1);







}



)