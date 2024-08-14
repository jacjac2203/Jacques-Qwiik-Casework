class object {
    constructor(Page){
        this.Page = Page;
        this.usernameF = Page.locator("data-test=username");
        this.passF = Page.locator("data-test=password");
        this.loginButton = Page.locator("data-test=login-button");
    }
};

module.exports = {object};