const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { invalidPasswordUser } = require('../../fixtures/login.data');

test.describe('Login – Particionamento de Equivalência', () => {
  test('Email válido e senha inválida', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.acessar();
    await loginPage.login(
      invalidPasswordUser.email,
      invalidPasswordUser.password
    );

    await expect(page.locator('#flash')).toBeVisible();
  });
});
