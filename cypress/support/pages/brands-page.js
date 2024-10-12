import { flagCheckbox, common, brandPage } from '../locator/locators'

class brandsPage {
    checkAllCountry() {
        cy.getBySel(flagCheckbox.countryFlag_checkbox).contains('sg').should('be.visible').click();
        cy.getBySel(flagCheckbox.countryFlag_checkbox).contains('my').should('be.visible').click();
        cy.getBySel(flagCheckbox.countryFlag_checkbox).contains('ph').should('be.visible').click();
        cy.getBySel(flagCheckbox.countryFlag_checkbox).contains('hk').should('be.visible').click();

    }
    sortItemASC() {
        cy.getBySel(brandPage.dropdown_sort, { timeout: 10000 }).should('be.visible').click()
        cy.getBySel(brandPage.ASC_sort).should('be.visible').click()
    }
    sortItemDESC() {
        cy.getBySel(brandPage.dropdown_sort, { timeout: 10000 }).should('be.visible').click()
        cy.getBySel(brandPage.DESC_sort, { timeout: 10000 }).should('be.visible').click()
    }
    sortItemLatest() {
        cy.getBySel(brandPage.dropdown_sort, { timeout: 10000 }).should('be.visible').click()
        cy.getBySel(brandPage.latest_sort, { timeout: 10000 }).should('be.visible').click()
    }
    sortItemRelevant() {
        cy.getBySel(brandPage.dropdown_sort, { timeout: 10000 }).should('be.visible').click()
        cy.getBySel(brandPage.relevant_sort, { timeout: 10000 }).should('be.visible').click()
    }
    viewByBrand() {
        cy.getBySel(brandPage.dropdown_brand, { timeout: 10000 }).should('be.visible').click()
        cy.getBySel(common.txtInput, { timeout: 10000 }).contains('Brands').should('be.visible').click()
    }
    viewByProduct() {
        cy.getBySel(brandPage.dropdown_brand, { timeout: 10000 }).should('be.visible').click()
        cy.getBySel(common.txtInput, { timeout: 10000 }).contains('Products').should('be.visible').click()
    }
}
export default new brandsPage();
