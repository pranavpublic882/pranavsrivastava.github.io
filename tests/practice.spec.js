import {test, expect} from '@playwright/test';


test( 'practice' , async({page})=>

{

await page.goto ('https://testautomationpractice.blogspot.com/')
await page.waitForLoadState('load');
await page.getByRole ( 'link' , {name: 'PlaywrightPractice'} ).click();
const xy = await page.title();
console.log (xy);

await page.getByRole ('textbox', {name: 'username'}).fill("Ram");
await page.locator('#input1').fill('Laxman');
await page.waitForTimeout(3000); // so video captures something










});