import {Given, Then, When, formatterHelpers} from "@cucumber/cucumber"
import {chromium, Browser, Page, expect} from "@playwright/test"

let Browser: Browser;
let Page: Page;

Given('User open the Swag Labs web', async function () {
    Browser = await chromium.launch({headless: false});
    Page = await Browser.newPage();
    await Page.goto("https://www.saucedemo.com/")
})

Given('User enter the username on Username text field', async function () {
    await Page.locator("data-test=username").fill("standard_user");
})

Given('User enter the password on Password text field', async function () {
    await Page.locator("data-test=password").fill("secret_sauce");
})

When('User click on the login button', async function () {
    await Page.locator("data-test=login-button").click();
})

Then('Login should be sucessful and user directed to Swag Labs homepage', async function () {
    expect(Page).toHaveURL("https://www.saucedemo.com/inventory.html");
})
