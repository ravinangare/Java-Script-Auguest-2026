const {test: base,expect} = require('@playwright/test')
const {LoginPage} = require('../pages/LoginPage')
const {DashboardPage} = require('../pages/DashboardPage')
const {AdminPage} = require('../pages/AdminPage')
const {PIMPage} = require('../pages/PIMPage')
const {UtkarshaaHomePage} = require('../pages/UtkarshaaHomePage')

exports.test = base.extend({
    loginPage: async({page},use)=>{
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    dashboardPage: async({page},use)=>{
        const dashboardPage = new DashboardPage(page);
        await use(dashboardPage);
    },
    adminPage: async({page},use)=>{
        const adminPage = new AdminPage(page);
        await use(adminPage)
    },
    pimPage: async({page},use)=>{
        const pimPage = new PIMPage(page);
        await use(pimPage)
    },
    utkarshaaHomePage: async({page},use)=>{
        const utkarshaaHomePage = new UtkarshaaHomePage(page);
        await use(utkarshaaHomePage)
    }
})
exports.expect = expect;