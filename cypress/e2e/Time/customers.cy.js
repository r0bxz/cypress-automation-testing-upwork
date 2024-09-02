import customersPage from '../../pages/Time/customersPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Customers Page Tests', () => {
    let customerName = `Test Customer ${Math.floor(Math.random() * 10000)}`;
    let customerDescription = 'This is a test description.';
    
    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
        });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewCustomers');
    });

    it('should add a new customer', () => {
        customersPage.addCustomer(customerName, customerDescription);
        customersPage.verifyCustomerExists(customerName);
    });

    it('should edit an existing customer', () => {
        let newCustomerName = `Edited Customer ${Math.floor(Math.random() * 10000)}`;
        let newCustomerDescription = 'This is an edited description.';
        
        customersPage.addCustomer(customerName, customerDescription); 
        customersPage.editCustomer(customerName, newCustomerName, newCustomerDescription);
        customersPage.verifyCustomerExists(newCustomerName);
    });

    it('should delete an existing customer', () => {
        customersPage.addCustomer(customerName, customerDescription); 
        customersPage.deleteCustomer(customerName);
        customersPage.verifyCustomerDoesNotExist(customerName);
    });
});
