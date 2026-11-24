const { test, expect } = require('../fixtures/customfixtures');
const loginData = require('../testdata/user.json');
const pimTestData = require('../testdata/pim.json');

test.describe('OrangeHRM PIM module', () => {
    test.beforeEach(async ({ loginPage, pimPage }) => {
        await loginPage.navigate(loginData.url);
        await loginPage.login(loginData.username, loginData.password);
        await pimPage.openPIM();
    });

    test('searches for an employee by employee ID', async ({ pimPage }) => {
        const employeeId = await pimPage.getFirstEmployeeId();
        expect(employeeId).not.toBe('');

        await pimPage.searchByEmployeeId(employeeId);

        await expect(
            pimPage.page.getByRole('cell', { name: employeeId, exact: true })
        ).toBeVisible();
    });

    test('adds a new employee', async ({ pimPage }) => {
        const employee = {
            ...pimTestData.employee,
            lastName: `${pimTestData.employee.lastName}${Date.now()}`
        };

        await pimPage.openAddEmployee();
        await pimPage.addEmployee(employee);

        await expect(pimPage.personalDetailsHeading).toBeVisible();
        await expect(pimPage.firstNameInput).toHaveValue(employee.firstName);
        await expect(pimPage.lastNameInput).toHaveValue(employee.lastName);
    });
});
