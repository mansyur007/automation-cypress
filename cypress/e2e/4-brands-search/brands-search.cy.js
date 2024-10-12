import pages from '../../support/pages/login'
import dashboard from '../../support/pages/dashboard'
import brands from '../../support/pages/brands-page'

describe("Brands Search", { testIsolation: true }, () => {
    let userdata
    beforeEach(() => {
        cy.fixture('user-data.json').then((user) => {
            userdata = user;
        });

    })
    it("ARC25 - User wants to search in brand view", () => {
        const { environment, user_archi_id, password_archi_id } = userdata.user_data
        pages.loginToArchify(environment, user_archi_id, password_archi_id)
        cy.url().should('include', '/id/member/home')
        dashboard.navBrands()
        cy.url().should('include', '/id/brands')
        /* removed next feature
            brands.checkAllCountry()
            cy.url().should('include', '/id/brands/all-category/all/?countries=3-4-5-6-7')
         */
        brands.sortItemASC()
        cy.url().should('include', '/id/brands/all-category/all/asc')
        brands.sortItemDESC()
        cy.url().should('include', '/id/brands/all-category/all/desc')
        brands.sortItemLatest()
        cy.url().should('include', '/id/brands/all-category/all/latest')
        brands.sortItemRelevant()
        cy.url().should('include', '/id/brands/all-category/all')
        brands.viewByProduct()
        cy.url().should('include', '/id/products/all-category').wait(3000) // need to force wait
        brands.viewByBrand()
        cy.url().should('include', '/id/brands/all-category')
        dashboard.brandProduct(1)

    })
    it("ARC26 - User wants to go to brand details", () => {
        const { environment, user_archi_id, password_archi_id } = userdata.user_data
        pages.loginToArchify(environment, user_archi_id, password_archi_id)
        cy.url().should('include', '/id/member/home')
        dashboard.navBrands()
        cy.url().should('include', '/id/brands')
        const { category_accessibility, sub_category_all_accessibility } = userdata.brands_data
        dashboard.navBrandsCategory(category_accessibility, sub_category_all_accessibility)
        dashboard.brandProduct(1)
    })
    it("ARC27 - User wants to search brands from specific country", () => {
        const { environment, user_archi_id, password_archi_id, lang_australia } = userdata.user_data
        pages.loginToArchify(environment, user_archi_id, password_archi_id)
        cy.url().should('include', '/id/member/home')
        dashboard.navBrands()
        dashboard.selectLanguange(lang_australia)
        cy.url().should('include', '/au/brands')
        const { category_accessibility, sub_category_all_accessibility } = userdata.brands_data
        dashboard.navBrandsCategory(category_accessibility, sub_category_all_accessibility)
        dashboard.brandProduct(1)
    })
})
