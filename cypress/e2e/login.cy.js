import LoginPage from '../pages/loginPage';
import loginData from '../fixtures/loginData.json';
import loginPage from '../pages/loginPage';

describe('Login Page Tests', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/'); 
  });

  it('TC_1.1 Verify the appearance banner and the url of login page', () => {
    LoginPage.checkLoginBannerVisible();
    cy.url().should('include','/login')
  });

  it('TC_1.2 Verify login with valid credentials', () => {
    LoginPage.enterUsername(loginData.validUser.username);
    LoginPage.enterPassword(loginData.validUser.password);
    LoginPage.clickSignIn();
    cy.url().should('include', '/dashboard'); 
  });

  it('TC_1.3 Verify login with invalid credentials', () => {
    LoginPage.enterUsername(loginData.invalidUser.username);
    LoginPage.enterPassword(loginData.invalidUser.password);
    LoginPage.clickSignIn();
    cy.contains('Invalid credentials').should('be.visible'); 
  });

  it('TC_1.4 Verify that clicking the "Forgot Password" link works and sending reset link', () => {
    LoginPage.clickForgotPassword();
    cy.url().should('include', '/requestPasswordResetCode'); 
    LoginPage.restPassword(loginData.validUser.username)
    cy.contains('Reset Password link sent successfully').should('be.visible')
  });
  it('TC_1.5 Verify the pressing "cancel" button on Rest Password page redirects to "login" page ',() => {
    LoginPage.clickForgotPassword();
    cy.url().should('include', '/requestPasswordResetCode'); 
    loginPage.cancelResetPassword();
    cy.url().should('include','/login')

});

 
});
