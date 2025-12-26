const { test, expect } = require('@playwright/test');




test('Brower Context playwright test', async ({ browser }) => {

  const context = await browser.newContext();

  const page = await context.newPage();
  await page.goto('/loginpagePractise');

  const userName = page.locator("#username"); //locator element declaration
  const password = page.locator("#password");
  const signInBtn = page.locator("#signInBtn");
  const cardTitles = page.locator(".card-body a");

  console.log(await page.title());

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



test('page Playwright test', async ({ page }) => {
  await page.goto('https://google.com');
  //get title - assertion
  console.log(await page.title());
  await expect(page).toHaveTitle("Google");

});



test.only('Register to sign in with personal account', async ({ page }) => {
  //locator element declaration
  const register_Link = page.locator(".text-reset");
  const firstName = page.locator("#firstName");
  const lastName = page.locator("#lastName");
  const email = page.locator("#userEmail");
  const phoneNmber = page.locator("#userMobile");
  const dropDown = page.locator("select.custom-select");
  const radioBtn = page.locator("input[value='Female']");
  const password = page.locator("#userPassword");
  const confirmPassword = page.locator("#confirmPassword");
  const checkBox = page.locator("input[type='checkbox']");
  const signUpBtn = page.locator("#login")
  const loginBtn = page.locator(".btn.btn-primary");
  const cardTitles = page.locator("//b[normalize-space()='ZARA COAT 3']");

  await page.goto('/client/#/auth/login'); //navigate to url
  await register_Link.click(); // click on a element
  await firstName.fill('Joyce');  // typing on a element
  await lastName.fill('Sabwa'); // typing on a element  
  await email.fill('keke@gmail.com');
  await phoneNmber.fill('6817606872');
  await dropDown.selectOption('1: Doctor'); // select from dropdown
  await radioBtn.click(); // click on a element
  await password.fill('Neville123'); // typing on a element
  await confirmPassword.fill('Neville123'); // typing on a element
  await checkBox.click(); // click on a element
  await signUpBtn.click(); // click on a element
  await expect(radioBtn).toBeChecked(); // assertion
  await expect(checkBox).toBeChecked(); // assertion
  await loginBtn.click(); // click on a element


  //login with the created account
  const signInBtn = page.locator("#login");

  await email.fill('keke@gmail.com');  // typing on a element
  await password.fill('Neville123'); // typing on a element  
  await signInBtn.click(); // click on a element

  //getting the first card title
  // console.log( await cardTitles.first().textContent());
  // await page.pause();


});

