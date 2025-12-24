const{test, expect} = require('@playwright/test');




  test.only('Brower Context playwright test',async ({browser})=>
  {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise');
    console.log( await page.title());

    await page.locator("#username").fill('nevil');
    await page.locator("#password").fill('nevil123');
    await page.locator("#signInBtn").click();
    
    //get title
    
  });



  test('page Playwright test',async ({page})=>
  {
    await page.goto('https://google.com');
    //get title - assertion
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");

  });



  test('register to sign in with personal account',async ({page})=>
  {
    await page.goto('');
    //get title - assertion
    

  });

