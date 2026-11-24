class UtkarshaaHomePage {
    constructor(page) {
        this.page = page;
        this.academyLogo = page.getByRole('link', {
            name: 'Software DEVELOPMENT Testing',
            exact: true
        }).first();
        this.goDaddyPromotion = page.getByRole('link', {
            name: /Go from idea to live site/
        });
        this.cookieAcceptLink = page.getByRole('link', { name: 'Accept', exact: true });
        this.footer = page.getByRole('contentinfo');
    }

    async navigate(url) {
        await this.page.goto(url);
    }

    async openPrimaryLink(name) {
        await this.page.getByRole('link', { name, exact: true }).first().click();
    }

    async openDemoLink(name) {
        const popupPromise = this.page.waitForEvent('popup');
        await this.page.getByRole('link', { name, exact: true }).click();
        return popupPromise;
    }

    async openGoDaddyPromotion() {
        const popupPromise = this.page.waitForEvent('popup');
        await this.goDaddyPromotion.click();
        return popupPromise;
    }

    async openFooterLink() {
        const popupPromise = this.page.waitForEvent('popup');
        await this.footer.getByRole('link').click();
        return popupPromise;
    }
}

module.exports = { UtkarshaaHomePage };
