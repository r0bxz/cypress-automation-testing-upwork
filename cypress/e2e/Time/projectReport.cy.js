import projectReportPage from '../../pages/Time/projectReportsPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Project Report Page Tests', () => {
    let projectName;
    let validUser;
    let employeeName;
    
    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
        });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/time/displayEmployeeReportCriteria');
        
        cy.request('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/time/projects?limit=50&offset=0&sortField=project.name&sortOrder=ASC&model=detailed')
        .then((response) => {
            const projects = response.body.data;
            projectName = projects[0].name;
        });

        cy.request('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users?limit=50&offset=0&sortField=u.userName&sortOrder=ASC').then((response) => {
            const users = response.body.data;
            validUser = users[0];
            employeeName = validUser.employee.middleName && validUser.employee.middleName.trim() !== "" 
            ? `${validUser.employee.firstName} ${validUser.employee.middleName} ${validUser.employee.lastName}`.trim()
            : `${validUser.employee.firstName} ${validUser.employee.lastName}`.trim();
  
      });
    });

    it('should generate a project report with a specific date range', () => {
        const fromDate = '2024-01-01';
        const toDate = '2024-12-31';

        projectReportPage.enterEmployeeName(employeeName);
        projectReportPage.enterProjectName(projectName);
        projectReportPage.setProjectDateRange(fromDate, toDate);
        projectReportPage.toggleOnlyIncludeApprovedTimesheets();
        projectReportPage.clickView();
        cy.contains('Record').should('be.visible');
    });
});
