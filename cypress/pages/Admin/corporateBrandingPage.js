class CorporateBrandingPage {
    selectPrimaryColor(color) {
      cy.get('div[data-v-ae9dff95] .oxd-color-input').eq(0).click();
      this.setColor(color);
    }
  
    selectSecondaryColor(color) {
      cy.get('div[data-v-ae9dff95] .oxd-color-input').eq(1).click();
      this.setColor(color);
    }
  
  
    setColor(color) {
      cy.get('input.oxd-color-picker-range').invoke('val', color).trigger('change');
      cy.get('input.oxd-input').clear().type(color);
      cy.get('div[data-v-2d1384ea] .oxd-color-picker-indicator').click(); 
    }
  
    uploadClientLogo(filePath) {
      cy.get('.oxd-file-button').eq(0).attachFile(filePath);
    }
  
    uploadClientBanner(filePath) {
      cy.get('.oxd-file-button').eq(1).attachFile(filePath);
    }
  
    uploadLoginBanner(filePath) {
      cy.get('oxd-file-button').eq(2).attachFile(filePath);
    }
  
    clickResetToDefault() {
      cy.contains('button', 'Reset to Default').click();
    }
  
    clickPreview() {
      cy.contains('button', 'Preview').click();
    }
  
    clickPublish() {
      cy.contains('button', 'Publish').click();
    }
  }
  
  export default new CorporateBrandingPage();
  