const { test, expect } = require('@playwright/test');


const LOGIN_URL = 'https://practicetestautomation.com/practice-test-login/';
const USERNAME = 'admin';
const PASSWORD = 'admin123';

test.describe('Practice Test Automation Login', () => {
  test('should log in successfully with valid credentials', async ({ page }) => {
    
    await page.goto(LOGIN_URL);

    
    const usernameInput = page.locator('#username');
    const passwordInput = page.locator('#password');
    const submitButton = page.locator('#submit');

    await usernameInput.fill(USERNAME);
    await passwordInput.fill(PASSWORD);

    
    await submitButton.click();

    await expect(page).toHaveURL(/logged-in-successfully/);
    await expect(page.getByText(/logged in successfully/i)).toBeVisible();
    
});
});