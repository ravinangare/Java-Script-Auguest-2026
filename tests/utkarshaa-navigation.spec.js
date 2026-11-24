const { test, expect } = require('../fixtures/customfixtures');
const siteData = require('../testdata/utkarshaa.json');

test.describe('Utkarshaa Academy link navigation', () => {
    test.beforeEach(async ({ utkarshaaHomePage }) => {
        await utkarshaaHomePage.navigate(siteData.baseUrl);
    });

    test('academy logo navigates to the homepage', async ({ page, utkarshaaHomePage }) => {
        await utkarshaaHomePage.academyLogo.click();

        await expect(page).toHaveURL(siteData.baseUrl);
        await expect(page).toHaveTitle('Software Testing');
    });

    for (const destination of siteData.internalPages) {
        test(`navigates to ${destination.name}`, async ({ page, utkarshaaHomePage }) => {
            await utkarshaaHomePage.openPrimaryLink(destination.name);

            await expect(page).toHaveURL(new URL(destination.path, siteData.baseUrl).href);
            await expect(page).toHaveTitle(destination.title);
        });
    }

    for (const linkName of siteData.demoLinks) {
        test(`opens the demo form from ${linkName}`, async ({ utkarshaaHomePage }) => {
            const popup = await utkarshaaHomePage.openDemoLink(linkName);

            await expect(popup).toHaveURL(new RegExp(siteData.demoFormUrlPattern));
            await expect(popup).toHaveTitle(siteData.demoFormTitle);
            await popup.close();
        });
    }

    test('GoDaddy promotion opens the Airo page in a new tab', async ({ utkarshaaHomePage }) => {
        const popup = await utkarshaaHomePage.openGoDaddyPromotion();

        await expect(popup).toHaveURL(new RegExp(siteData.goDaddyPromotionUrlPattern));
        await popup.close();
    });

    test('footer attribution opens the GoDaddy website builder in a new tab', async ({
        utkarshaaHomePage
    }) => {
        const popup = await utkarshaaHomePage.openFooterLink();

        await expect(popup).toHaveURL(new RegExp(siteData.goDaddyFooterUrlPattern));
        await popup.close();
    });

    test('cookie accept link points to the homepage without accepting cookies', async ({
        utkarshaaHomePage
    }) => {
        await expect(utkarshaaHomePage.cookieAcceptLink).toHaveAttribute(
            'href',
            siteData.cookieAcceptDestination
        );
    });
});
