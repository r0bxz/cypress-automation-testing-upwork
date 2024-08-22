import loginPage from '../pages/loginPage';
import loginData from '../fixtures/loginData.json';
import jobTitlesPage from '../pages/jobTitlesPage';
import 'cypress-file-upload';


describe('Job Titles Page Tests', () => {
  let validJobTitle;
  
  before(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    loginPage.enterUsername(loginData.validUser.username);
    loginPage.enterPassword(loginData.validUser.password);
    loginPage.clickSignIn();

    cy.request('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/job-titles?limit=50&offset=0&sortField=jt.jobTitleName&sortOrder=ASC')
      .then((response) => {
        const jobTitles = response.body.data;
        validJobTitle=jobTitles[0];
      });
  });

  beforeEach(() => {
    cy.session('login', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/');
      loginPage.enterUsername(loginData.validUser.username);
      loginPage.enterPassword(loginData.validUser.password);
      loginPage.clickSignIn();
    });
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList');
  });

  it('should add a new job title and verify in the list', () => {
    jobTitlesPage.clickAdd();
    jobTitlesPage.enterJobTitle('New Job Title');
    jobTitlesPage.enterJobDescription('This is a test job description.');
    jobTitlesPage.fileUploadButton().click();
    cy.get('input[type="file"]').attachFile('test-file.txt'); 
    jobTitlesPage.clickSave();
    cy.wait(1000);
    jobTitlesPage.verifyJobTitleInTable('New Job Title');
  });

  it('should edit an existing job title', () => {
    jobTitlesPage.editJobTitle(validJobTitle.title, 'Edited Job Title');
    cy.contains('Success').should('be.visible');
    jobTitlesPage.verifyJobTitleInTable('Edited Job Title');
  });

  it('should delete a job title and verify it is removed', () => {
    jobTitlesPage.deleteJobTitle(validJobTitle.title);
  });
});
