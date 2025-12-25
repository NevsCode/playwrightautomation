const{test, expect} = require('@playwright/test');




  test.only('Brower Context playwright test',async ({browser})=>
  {

    const context = await browser.newContext();

    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise');

    const userName = page.locator("#username"); //locator element declaration
    const password = page.locator("#password");
    const signInBtn = page.locator("#signInBtn");
    const cardTitles = page.locator(".card-body a");
    
    console.log( await page.title());

    await userName.fill('nevil');  // typing on a element
    await password.fill('nevil123'); // typing on a element  
    
    await signInBtn.click(); // click on a element 

    console.log(await page.locator("[style*='block']").textContent()); 
    await expect(page.locator("[style*='block']")).toContainText("Incorrect"); //get text - assertion
    
    await userName.fill("");  // clear the element
    await userName.fill('rahulshettyacademy');  // typing on a element
    await password.fill('learning'); // typing on a element
    await signInBtn.click(); // click on a element
    
    //console.log(await page.locator(".card-body a").nth(0).textContent()); //getting multiple elements - text b
    console.log(await cardTitles.first().textContent()); //getting multiple elements - text a
    const allTitles = await cardTitles.allTextContents();
    [] //getting multiple elements - text
    console.log(allTitles); //print array of texts


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

