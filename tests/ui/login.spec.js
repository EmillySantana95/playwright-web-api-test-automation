const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.describe('Login', () => {

  test('Login com credenciais válidas', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.acessar();
    await loginPage.login(
      process.env.LOGIN_USER,
      process.env.LOGIN_PASSWORD
    );

    await expect(page.locator(loginPage.errorMessage))
      .toContainText('You logged into a secure area!');
  });

  test('Login com credenciais inválidas', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.acessar();
    await loginPage.login(
      'usuario_invalido',
      'senha_invalida'
    );

    await expect(page.locator(loginPage.errorMessage))
      .toContainText('Your username is invalid!');
  });

  test('Campos obrigatórios', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.acessar();
    await page.click(loginPage.loginButton);

    await expect(page.locator(loginPage.errorMessage))
      .toContainText('Your username is invalid!');
  });
});


