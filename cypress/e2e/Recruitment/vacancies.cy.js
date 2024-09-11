import vacanciesPage from '../../pages/Recruitment/vacanciesPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';
import vacancyData from '../../fixtures/vacancyData.json';

describe('Vacancies Page Tests', () => {
    let vacancy;
    let editedVacancy;

    before(() => {
        vacancy = vacancyData.vacancy;
        editedVacancy = vacancyData.editedVacancy;
    });

    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
        });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewJobVacancy');
    });

    it('should add a new vacancy', () => {
        vacanciesPage.addVacancy(vacancy);
        vacanciesPage.searchVacancy(vacancy);
        vacanciesPage.verifyVacancyExists(vacancy);
    });

    it('should edit an existing vacancy', () => {
        vacanciesPage.searchVacancy(vacancy);
        vacanciesPage.editVacancy(vacancy.vacancyName, editedVacancy);
        vacanciesPage.searchVacancy(editedVacancy);
        vacanciesPage.verifyVacancyExists(editedVacancy);
    });

    it('should delete an existing vacancy', () => {
        vacanciesPage.searchVacancy(editedVacancy);
        vacanciesPage.deleteVacancy(editedVacancy);
        vacanciesPage.verifyVacancyDoesNotExist(editedVacancy);
    });
});
