import CorporateBrandingPage from '../../pages/Admin/corporateBrandingPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Corporate Branding tests', () => {
    
  
    before(() => {
      cy.visit('http://localhost/orangehrm-5.7/orangehrm-5.7');
      loginPage.enterUsername(loginData.validUser.username);
      loginPage.enterPassword(loginData.validUser.password);
      loginPage.clickSignIn();
    });
  
    beforeEach(() => {
      cy.session('login', () => {
        cy.visit('http://localhost/orangehrm-5.7/orangehrm-5.7/');
        loginPage.enterUsername(loginData.validUser.username);
        loginPage.enterPassword(loginData.validUser.password);
        loginPage.clickSignIn();
      });
      cy.visit('http://localhost/orangehrm-5.7/orangehrm-5.7/web/index.php/admin/addTheme');
    });
  it('should select colors and upload files', () => {
    // Select colors
    CorporateBrandingPage.selectPrimaryColor('#FF5733');
    CorporateBrandingPage.selectSecondaryColor('#33FF57');

    // Upload files
    CorporateBrandingPage.uploadClientLogo('logo.png');
    CorporateBrandingPage.uploadClientBanner('banner.png');
    CorporateBrandingPage.uploadLoginBanner('login-banner.png');

    // Interact with buttons
    CorporateBrandingPage.clickResetToDefault();
    CorporateBrandingPage.clickPreview();
    CorporateBrandingPage.clickPublish();
  });
});