const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { validUser } = require('../../fixtures/login.data');

test.describe('Login – Cenário de Sucesso', () => {
  test('Deve realizar login com credenciais válidas', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.acessar();
    await loginPage.login(validUser.email, validUser.password);

    await expect(page).toHaveURL(/secure/);
  });
});
