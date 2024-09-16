import attendanceRecordsPage from '../../pages/Time/punchPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Attendance Records Page Tests', () => {
    const punchInDate = '2024-02-09';
    const punchInTime = '08:30 AM';
    const punchInNote = 'Just a test In';

    const punchOutDate = '2024-02-09';
    const punchOutTime = '04:30 PM';
    const punchOutNote = 'Just a test Out';
    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
        });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/attendance/punchOut');
    });

    it('should punch in and punch out successfully', () => {
        

        attendanceRecordsPage.selectPunchInDate(punchInDate);
        attendanceRecordsPage.enterPunchInTime(punchInTime);
        attendanceRecordsPage.enterPunchInNote(punchInNote);
        attendanceRecordsPage.clickPunchIn();

        cy.contains('Success').should('be.visible');
        cy.wait(2000);
        attendanceRecordsPage.enterPunchOutTime(punchOutTime);
        attendanceRecordsPage.enterPunchOutNote(punchOutNote);
        attendanceRecordsPage.clickPunchOut();
        cy.contains('Success').should('be.visible');



    });

    it('verify the Punch In/Out and delete the record', ()=>{

      attendanceRecordsPage.verifyAndDelete(punchInNote);


    
    })

});
