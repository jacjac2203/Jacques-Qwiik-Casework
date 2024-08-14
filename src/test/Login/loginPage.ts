import {Given, Then, When, formatterHelpers} from "@cucumber/cucumber"
import {expect} from "@playwright/test"
import { pageFixture } from "../hooks/pageFixture";

const variable = require("../variables");
// const object = require("../Login/objects");

Given('User open the Swag Labs web', async function () {

    await pageFixture.page.goto(variable.data.url);
})

Given('Verify user on the right page', async function () {
    await pageFixture.page.waitForURL(variable.data.url);
    expect(pageFixture.page.locator("data-test=login-button")).not.toBeNull();
})

Given('User enter the username on Username text field', async function () {
    await pageFixture.page.locator("data-test=username").fill(variable.data.username);
})

Given('User enter the password on Password text field', async function () {
    await pageFixture.page.locator("data-test=password").fill(variable.data.password);
})

Given('User enter the wrong username on Username text field', async function () {
    await pageFixture.page.locator("data-test=username").fill(variable.data.invalidUsername);
})

Given('User enter the wrong password on Password text field', async function () {
    await pageFixture.page.locator("data-test=password").fill(variable.data.invalidPassword);
})

When('User click on the login button', async function () {
    await pageFixture.page.locator("data-test=login-button").click();
})

Then('Login should be sucessful and user directed to Swag Labs homepage', async function () {
    await pageFixture.page.waitForURL("https://www.saucedemo.com/inventory.html");
    expect(pageFixture.page).toHaveURL("https://www.saucedemo.com/inventory.html");
})

Then('Error message should be shown', async function () {
    expect(pageFixture.page.locator("data-test=error-button")).not.toBeNull();
})
