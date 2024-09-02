class CustomersPage {
    addCustomer(customerName, customerDescription) {
        cy.contains('button', 'Add').click();
        cy.get('input[placeholder="Name"]').clear().type(customerName);
        cy.get('textarea[placeholder="Type description here"]').clear().type(customerDescription);
        cy.contains('button', 'Save').click();
    }

    editCustomer(customerName, newCustomerName, newCustomerDescription) {
        cy.contains('tr', customerName).within(() => {
            cy.contains('button', 'Edit').click();
        });
        cy.get('input[placeholder="Name"]').clear().type(newCustomerName);
        cy.get('textarea[placeholder="Type description here"]').clear().type(newCustomerDescription);
        cy.contains('button', 'Save').click();
    }

    deleteCustomer(customerName) {
        cy.contains('tr', customerName).within(() => {
            cy.contains('button', 'Delete').click();
        });
        cy.contains('button', 'Confirm').click();
    }

    verifyCustomerExists(customerName) {
        cy.contains('tr', customerName).should('exist');
    }

    verifyCustomerDoesNotExist(customerName) {
        cy.contains('tr', customerName).should('not.exist');
    }
}

export default new CustomersPage();
