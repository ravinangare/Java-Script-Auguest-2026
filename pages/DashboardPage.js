const {BasePage} = require('../pages/BasePage')
class DashboardPage extends BasePage{
    constructor(page){
        super(page);
        this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard' });
        this.dropDownTab = page.locator(".oxd-userdropdown-tab")
        this.logoutBtn = page.getByRole('menuitem', { name: 'Logout' })
        this.userProfileIcon = page.getByRole('img', { name: 'profile picture' }).nth(1)
        this.AdminLink = page.getByText('Admin').first()
    }
    async isDashboardPageHeadingVisible(){
       await this.dashboardHeading.waitFor({
            state:'visible'
       })
    }
      async verifyPageLoaded(){
       await this.dashboardHeading.waitFor({
            state:'visible'
       });
       return await this.dashboardHeading.isVisible();
    }
    // async isUserProfileIconVisible(){
    //     return await this.
    // }
    async Logout(){
        await this.dropDownTab.click()
        await this.logoutBtn.click()
    }
}
module.exports = {DashboardPage}