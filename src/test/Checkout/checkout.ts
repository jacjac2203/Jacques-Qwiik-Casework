import {Given, Then, When, formatterHelpers} from "@cucumber/cucumber"
import {chromium, Browser, Page, expect} from "@playwright/test"
import { pageFixture } from "../hooks/pageFixture";

const variable = require("../variables");

Given('User click on the item name', async function () {
    await pageFixture.page.locator("data-test=item-0-title-link").click();
})

Given('User click on Add to Cart button', async function () {
    await pageFixture.page.locator("xpath=(//*[@class='inventory_item'])")
        .filter({hasText: 'Sauce Labs Bike Light'}).getByRole("button").click();
})

Given('User click on Add to Cart button from item detail page', async function () {
    await pageFixture.page.waitForURL("https://www.saucedemo.com/inventory-item.html?id=0");
    await pageFixture.page.locator("data-test=add-to-cart").click();
})

Given('User already on cart page with item added', async function () {
    await pageFixture.page.waitForURL("https://www.saucedemo.com/cart.html");
    expect(pageFixture.page.locator("data-test=inventory-item")).not.toBeNull();
})

Given('User Click on checkout button', async function () {
    await pageFixture.page.locator("data-test=checkout").click();
})

Given('User fill the first name text field', async function () {
    await pageFixture.page.waitForURL("https://www.saucedemo.com/checkout-step-one.html");
    await pageFixture.page.locator("data-test=firstName").click();
    await pageFixture.page.locator("data-test=firstName").fill(variable.data.first);
})

Given('User fill the last name text field', async function () {
    await pageFixture.page.locator("data-test=lastName").click();
    await pageFixture.page.locator("data-test=lastName").fill(variable.data.last);
})

Given('User fill the postal code text field', async function () {
    await pageFixture.page.locator("data-test=postalCode").click();
    await pageFixture.page.locator("data-test=postalCode").fill(variable.data.postal);
})

Given('User click on continue button', async function () {
    await pageFixture.page.locator("data-test=continue").click();
})

Given('User already on checkout overview page', async function () {
    await pageFixture.page.waitForURL("https://www.saucedemo.com/checkout-step-two.html");
    expect(pageFixture.page.locator("data-test=finish")).not.toBeNull();
})

Given('User click on finish button', async function () {
    await pageFixture.page.locator("data-test=finish").click();
})

When('User click on the cart button', async function () {
    await pageFixture.page.locator("data-test=shopping-cart-link").click();
})

Then('Cart icon should be updated with the number of item in cart', async function () {
    expect(pageFixture.page.locator("data-test=shopping-cart-badge")).not.toBeNull();
})

Then('User should see the order success page', async function () {
    await pageFixture.page.locator("https://www.saucedemo.com/checkout-complete.html");
    expect(pageFixture.page.locator("data-test=back-to-products")).not.toBeNull();
})

