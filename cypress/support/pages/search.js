import { searchResultPage } from '../locator/locators'

class SearchArchify {
    selectFromSearchPage(category, select_keyword) {
        if (typeof select_keyword == 'number') {
            cy.log('select by number')
            cy.getBySel(searchResultPage.list_result_container).contains(category).parent().then(($parent) => {
                // Perform actions on the parent element or its children
                cy.wrap($parent).find(searchResultPage.list_item_wrapper).eq(select_keyword).should('be.visible').click()
            });
        } else if (typeof select_keyword == 'string' && category != 'Products') {
            cy.log('select by name')
            cy.getBySel(searchResultPage.list_result_container).contains(category).parent().then(($parent) => {
                // Perform actions on the parent element or its children
                cy.wrap($parent).find(searchResultPage._name).contains(select_keyword).should('be.visible').click()
            });
        } else if (typeof select_keyword == 'string' && category == 'Products') {
            cy.log('select by name on Products')
            cy.getBySel(searchResultPage.list_result_container).contains(category).parent().then(($parent) => {
                // Perform actions on the parent element or its children
                cy.wrap($parent).find('img[alt="' + select_keyword + '"]').click()
            });
        } else {
            cy.log('not specific')
            cy.getBySel(searchResultPage.list_result_container).contains('Products').parent().then(($parent) => {
                // Perform actions on the parent element or its children
                cy.wrap($parent).find(searchResultPage.list_item_wrapper).eq(0).should('be.visible').click()
            });
        }


    }

}

export default new SearchArchify();