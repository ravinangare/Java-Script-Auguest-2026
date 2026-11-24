class PIMPage {
    constructor(page) {
        this.page = page;
        this.pimLink = page.getByRole('link', { name: 'PIM', exact: true });
        this.addButton = page.getByRole('button', { name: 'Add' });
        this.addEmployeeHeading = page.getByRole('heading', { name: 'Add Employee' });
        this.firstNameInput = page.getByRole('textbox', { name: 'First Name' });
        this.middleNameInput = page.getByRole('textbox', { name: 'Middle Name' });
        this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' });
        this.employeeIdInput = page.locator('.oxd-input-group')
            .filter({ hasText: 'Employee Id' })
            .getByRole('textbox');
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.personalDetailsHeading = page.getByRole('heading', { name: 'Personal Details' });
    }

    async openPIM() {
        await this.pimLink.click();
        await this.page.waitForURL(/pim\/viewEmployeeList/);
    }

    async openAddEmployee() {
        await this.addButton.click();
        await this.addEmployeeHeading.waitFor({ state: 'visible' });
    }

    async getFirstEmployeeId() {
        const firstEmployeeRow = this.page.getByRole('row').nth(1);
        await firstEmployeeRow.waitFor({ state: 'visible' });
        return (await firstEmployeeRow.getByRole('cell').nth(1).innerText()).trim();
    }

    async searchByEmployeeId(employeeId) {
        await this.employeeIdInput.fill(employeeId);
        await this.searchButton.click();
    }

    async addEmployee(employee) {
        await this.firstNameInput.fill(employee.firstName);
        await this.middleNameInput.fill(employee.middleName);
        await this.lastNameInput.fill(employee.lastName);
        await this.saveButton.click();
    }
}

module.exports = { PIMPage };