import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('my name is');
  await page.getByText('My Name Is Khan', { exact: true }).click();
  await page.locator('iframe[name="a-1xwugu2usx7v"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.locator('iframe[name="c-1xwugu2usx7v"]').contentFrame().locator('[id="2"]').click();
  await page.locator('iframe[name="c-1xwugu2usx7v"]').contentFrame().locator('[id="7"]').click();
  await page.locator('iframe[name="c-1xwugu2usx7v"]').contentFrame().locator('[id="6"]').click();
  await page.locator('iframe[name="c-1xwugu2usx7v"]').contentFrame().locator('[id="5"]').click();
  await page.locator('iframe[name="c-1xwugu2usx7v"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await page.getByRole('link', { name: 'My Name Is Khan Prime Video' }).click();
  await page.goto('https://www.google.com/search?q=my+name+is+khan&sca_esv=51db692ab24d98dd&source=hp&ei=xViCaZS1OKicseMP0ZWGqQ4&iflsig=AFdpzrgAAAAAaYJm1Yx2JF-tOPj12Wyu7rIIjOpYYgsy&gs_ssp=eJzj4tLP1TcwKTQwyCk3YPTiz61UyEvMTVXILFbIzkjMAwB8XQjn&oq=my+name+is&gs_lp=Egdnd3Mtd2l6IgpteSBuYW1lIGlzKgIIADIIEC4YgAQYsQMyCBAAGIAEGLEDMgUQABiABDIIEC4YgAQYsQMyBRAAGIAEMggQLhiABBixAzIFEC4YgAQyBRAAGIAEMggQLhiABBixAzIFEC4YgARIpklQsxtYmjxwAXgAkAEAmAGDA6ABzgqqAQcwLjkuMC4xuAEByAEA-AEBmAILoALgCqgCCsICChAAGAMY6gIYjwHCAgoQLhgDGOoCGI8BwgIOEC4YgAQYsQMY0QMYxwHCAgsQABiABBixAxiDAcICDhAAGIAEGLEDGIMBGIoFwgIHEAAYgAQYCpgDAvEFxSWe5RCCRiySBwcxLjkuMC4xoAedjAGyBwcwLjkuMC4xuAfdCsIHAzYuNcgHDIAIAA&sclient=gws-wiz&sei=01iCaYGsDKecseMPnbOdyAU');
  await page.getByRole('link', { name: 'My Name Is Khan (2010) IMDb' }).click();
  await page.goto('https://www.google.com/search?q=my+name+is+khan&sca_esv=51db692ab24d98dd&source=hp&ei=xViCaZS1OKicseMP0ZWGqQ4&iflsig=AFdpzrgAAAAAaYJm1Yx2JF-tOPj12Wyu7rIIjOpYYgsy&gs_ssp=eJzj4tLP1TcwKTQwyCk3YPTiz61UyEvMTVXILFbIzkjMAwB8XQjn&oq=my+name+is&gs_lp=Egdnd3Mtd2l6IgpteSBuYW1lIGlzKgIIADIIEC4YgAQYsQMyCBAAGIAEGLEDMgUQABiABDIIEC4YgAQYsQMyBRAAGIAEMggQLhiABBixAzIFEC4YgAQyBRAAGIAEMggQLhiABBixAzIFEC4YgARIpklQsxtYmjxwAXgAkAEAmAGDA6ABzgqqAQcwLjkuMC4xuAEByAEA-AEBmAILoALgCqgCCsICChAAGAMY6gIYjwHCAgoQLhgDGOoCGI8BwgIOEC4YgAQYsQMY0QMYxwHCAgsQABiABBixAxiDAcICDhAAGIAEGLEDGIMBGIoFwgIHEAAYgAQYCpgDAvEFxSWe5RCCRiySBwcxLjkuMC4xoAedjAGyBwcwLjkuMC4xuAfdCsIHAzYuNcgHDIAIAA&sclient=gws-wiz&sei=01iCaYGsDKecseMPnbOdyAU');
});

