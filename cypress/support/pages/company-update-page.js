import {companyUpdates, designFolderPage} from "../locator/locators";

class companyUpdatePage {
    typeTitle(title) {
        cy.getBySel(companyUpdates.field_title).should('be.visible').clear().type(title);
    }
    selectCategoryContent() {
        cy.getBySel(companyUpdates.dropdown_category).should('be.visible').click();
        cy.getBySel(companyUpdates.content_dropdown).should('be.visible').contains('News').click();
    }
    uploadCoverContent() {
        cy.getBySel(companyUpdates.upload_cover).then($upload => {
            cy.wrap($upload).find(designFolderPage.file_locator).selectFile('cypress/fixtures/image.png', { force: true });
        });
    }
    typeDescription(description) {
        cy.getBySel(companyUpdates.field_description).should('be.visible').type(description);
    }

    typeContent(content) {
        cy.getBySel(companyUpdates.field_content).should('be.visible').type(content);
    }

    checkYes() {
        cy.getBySel(companyUpdates.checkbox_yes).should('be.visible').click();
    }

    submitUpdates() {
        cy.getBySel(companyUpdates.btn_submit).should('be.visible').click();
    }

    createContentUpdate(title, description, content) {
        this.typeTitle(title);
        this.selectCategoryContent();
        this.uploadCoverContent();
        this.typeDescription(description);
        this.typeContent(content);
        this.checkYes();
        this.submitUpdates();
    }
}
export default new  companyUpdatePage()
