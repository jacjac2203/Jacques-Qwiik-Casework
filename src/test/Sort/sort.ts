import {Given, Then, When, formatterHelpers} from "@cucumber/cucumber"
import {chromium, Browser, Page, expect} from "@playwright/test"
import { pageFixture } from "../hooks/pageFixture";

const variable = require("../variables");

Given('User already on Swag Labs homepage', async function () {
    expect(pageFixture.page.locator("id=react-burger-menu-btn")).toBeVisible();
})

Given('User click on the sort button', async function () {
    await pageFixture.page.locator("data-test=product-sort-container").click();
})

Given('User click on the sort options on the drop down selection', async function () {
    const sortList = pageFixture.page.locator("data-test=product-sort-container"); 
    await sortList.selectOption({value: "lohi"});
    await expect(sortList).toHaveValue("lohi");
})

// Then('Login should be sucessful and user directed to Swag Labs homepage', async function () {
//     await Page.waitForURL("https://www.saucedemo.com/inventory.html");
//     expect(Page).toHaveURL("https://www.saucedemo.com/inventory.html");
// })


