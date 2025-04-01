export const AuthPage = {
  userNameInput: '[name="UserName"]',
  passwordInput: '[name="Password"]',
  loginButton: '#login',
  loginMessage: '#loginstatus',

  /**
   * Perform a login
   *
   * @see cypress/support/pages/auth.page.ts
   * @param {string} email - The email to type
   * @param {string} password - The password to type
   *
   * @example cy.login("example email", "example password")
   */
  login(email: string, password: string): void {
    cy.get(this.userNameInput).type(email);
    cy.get(this.passwordInput).type(password);
    cy.get(this.loginButton).click();
  }
};

export default AuthPage;
