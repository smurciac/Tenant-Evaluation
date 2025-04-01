import { AuthPage, visitHomePage } from '@pages';
import { generateRandomEmail } from '@utils';

const errorMessage = 'Invalid username/password';

describe('Login test suite', () => {
  beforeEach('User is currently on the login page', () => {
    visitHomePage();
  });

  it('Validate a successful login', () => {
    const email = generateRandomEmail();
    AuthPage.login(email, Cypress.env('password'));
    cy.get(AuthPage.loginMessage).should('contain', `Welcome, ${email}!`);
  });

  it('Validate a login with invalid password', () => {
    const email = generateRandomEmail();
    AuthPage.login(email, 'wrongpwd)');
    cy.get(AuthPage.loginMessage).should('contain', errorMessage);
  });

  it('Validate a login with empty fields', () => {
    cy.get(AuthPage.loginButton).click();
    cy.get(AuthPage.loginMessage).should('contain', errorMessage);
  });

  it('Validate a logout after successful login', () => {
    const email = generateRandomEmail();
    AuthPage.login(email, Cypress.env('password'));
    cy.get(AuthPage.loginButton).click();
    cy.get(AuthPage.loginMessage).should('contain', 'User logged out.');
  });

  context('Login with Only Username or Password Filled', () => {
    it('Validate a login with only username', () => {
      const email = generateRandomEmail();
      cy.get(AuthPage.userNameInput).type(email);
      cy.get(AuthPage.loginButton).click();
      cy.get(AuthPage.loginMessage).should('contain', errorMessage);
    });

    it('Validate a login with only password', () => {
      cy.get(AuthPage.passwordInput).type(Cypress.env('password'));
      cy.get(AuthPage.loginButton).click();
      cy.get(AuthPage.loginMessage).should('contain', errorMessage);
    });
  });

  context('Fail scenario', () => {
    it('Validate a successful login', () => {
      const email = generateRandomEmail();
      AuthPage.login(email, Cypress.env('password'));
      cy.get(AuthPage.loginMessage).should('contain', 'Error Message');
    });
  });
});
