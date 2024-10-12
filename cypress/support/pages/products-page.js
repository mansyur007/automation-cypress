import { productPage } from '../locator/locators'

class productsPage {
    checkEnhancedSpec() {
        cy.getBySel(productPage.product_container).should('be.visible', { timeout: 20000 }).log('have product container')
        cy.getBySel(productPage.enhanced_spec_checkbox)
            .should('be.visible')
            .should('not.be.checked')
            .click()
        cy.getBySel(productPage.enhanced_spec_icon).eq(39).should('be.visible')

    }
}
export default new productsPage();
