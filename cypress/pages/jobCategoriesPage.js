class JobCategoriesPage {
    // Click the Add button
    clickAdd() {
      cy.contains('Add').click();
    }
  
    // Enter the Job Category name
    enterJobCategoryName(name) {
      cy.get('input.oxd-input--active').eq(1).clear().type(name);
    }
  
    // Click the Save button
    clickSave() {
      cy.get('button.oxd-button--secondary').contains('Save').click();
    }
  
    // Click the Edit button for a specific job category
    clickEdit(jobCategoryName) {
      cy.contains('.oxd-table-row', jobCategoryName).within(() => {
        cy.get('.oxd-icon.bi-pencil-fill').click();
      });
    }
  
    // Click the Delete button for a specific job category
    clickDelete(jobCategoryName) {
      cy.contains('.oxd-table-row', jobCategoryName).within(() => {
        cy.get('.oxd-icon.bi-trash').click();
      });
      // Confirm deletion
      cy.get('button[data-v-10d463b7][data-v-8f9701a2]').contains('Yes, Delete').click();
    }
  
    // Verify if the Job Category exists in the table
    verifyJobCategoryInTable(jobCategoryName) {
      cy.contains(jobCategoryName).should('exist');
    }
  
    // Verify if the Job Category does not exist in the table
    verifyJobCategoryNotInTable(jobCategoryName) {
      cy.contains(jobCategoryName).should('not.exist');
    }
  }
  
  export default new JobCategoriesPage();
  