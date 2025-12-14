class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = '#username';
    this.passwordInput = '#password';
    this.loginButton = 'button[type="submit"]';
    this.errorMessage = '#flash';
  }

  async acessar() {
    await this.page.goto('/login');
  }

  async login(email, senha) {
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.passwordInput, senha);
    await this.page.click(this.loginButton);
  }
}

module.exports = { LoginPage };
