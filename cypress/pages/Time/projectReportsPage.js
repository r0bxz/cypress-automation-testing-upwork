class ProjectReportPage {
    enterEmployeeName(employeeName) {
        cy.get('input[placeholder="Type for hints..."]').eq(0).clear().type(employeeName);
        cy.contains('.oxd-autocomplete-option', employeeName).click();
    }
    enterProjectName(projectName) {
        cy.get('input[placeholder="Type for hints..."]').eq(1).clear().type(projectName);
        cy.contains('.oxd-autocomplete-option', projectName).click();
    }

    setProjectDateRange(fromDate, toDate) {
        cy.get('input[placeholder="From"]').clear().type(fromDate);
        cy.get('input[placeholder="To"]').clear().type(toDate);
    }

    toggleOnlyIncludeApprovedTimesheets() {
        cy.get('.oxd-switch-input').click();
    }

    clickView() {
        cy.contains('button', 'View').click();
    }
}

export default new ProjectReportPage();
