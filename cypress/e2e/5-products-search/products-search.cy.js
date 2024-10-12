import pages from '../../support/pages/login'
import dashboard from '../../support/pages/dashboard'
import brands from "../../support/pages/brands-page";
import productsPage from '../../support/pages/products-page';

describe("Products Search", { testIsolation: true }, () => {
    let userdata
    beforeEach(() => {
        cy.fixture('user-data.json').then((user) => {
            userdata = user;
        });

    })
    it("ARC19 - User wants to search product", () => {
        cy.intercept('GET', '/id/gpost/products/menu_products_solution_2/fittings-accessories').as('apiRequest');
        const { environment, user_archi_id, password_archi_id } = userdata.user_data
        pages.loginToArchify(environment, user_archi_id, password_archi_id)
        cy.url().should('include', '/id/member/home')
        dashboard.navProduct()
        cy.url().should('include', '/id/products')
        /*
         product.checkAllCountry() // feature removed
         */
        cy.url().should('include', '/id/')
        dashboard.navBrandsCategory('Bathroom', 'Fitting')
        cy.url().should('include', '/id/')
        dashboard.searchManufacturer('DE')
        cy.url().should('include', '/id/')
        dashboard.clearManufacturer()
        cy.wait('@apiRequest', { timeout: 30000 }).its('response.statusCode').should('eq', 200);
        dashboard.select1Manufacturer()
        cy.url().should('include', '/id/')
        dashboard.selectDrawingFiles('Others')
        cy.url().should('include', '/id/')
        dashboard.selectDrawingFiles('Step')
        cy.url().should('include', '/id/')
        dashboard.selectCountryManufacturer('Indonesia')
    })
    it("ARC20 - User wants to sort products", () => {
        cy.intercept('GET', '/id/gpost/products/menu_products_solution_2/fittings-accessories').as('apiRequest');
        const {environment, user_archi_id, password_archi_id} = userdata.user_data
        pages.loginToArchify(environment, user_archi_id, password_archi_id)
        cy.url().should('include', '/id/member/home')
        dashboard.navProduct()
        cy.url().should('include', '/id/products')
        brands.sortItemASC()
        cy.url().should('include', '/id/products/all-category/all/asc')
        brands.sortItemDESC()
        cy.url().should('include', '/id/products/all-category/all/desc')
        brands.sortItemLatest()
        cy.url().should('include', '/id/products/all-category/all/latest')
        brands.sortItemRelevant()
        cy.url().should('include', '/id/products/all-category')
    })
    it("ARC21 - User wants to view the result by brands", () => {
        cy.intercept('GET', '/id/gpost/products/menu_products_solution_2/fittings-accessories').as('apiRequest');
        const {environment, user_archi_id, password_archi_id} = userdata.user_data
        pages.loginToArchify(environment, user_archi_id, password_archi_id)
        cy.url().should('include', '/id/member/home')
        dashboard.navProduct()
        cy.url().should('include', '/id/products')
        brands.viewByProduct()
        cy.url().should('include', '/id/products/all-category').wait(3000) // need to force wait
        brands.viewByBrand()
        cy.url().should('include', '/id/brands/all-category')
        dashboard.brandProduct(1)
    })
    // this feature is hidden due to legal issue: info from Martin
    // it("ARC22 - User wants to search for sustainable product", () => {
    //     cy.intercept('GET', '/id/gpost/products/menu_products_solution_2/fittings-accessories').as('apiRequest');
    //     const {environment, user_archi_id, password_archi_id} = userdata.user_data
    //     pages.loginToArchify(environment, user_archi_id, password_archi_id)
    //     cy.url().should('include', '/id/member/home')
    //     dashboard.navProduct()
    //     cy.url().should('include', '/id/products')
    //     dashboard.tickSustainable()
    //     cy.url().should('include', '/id/products/all-category?sustainable=all')
    //     dashboard.tickSustainable()
    //     cy.url().should('include', '/id/products/all-category')
    // })
    it("ARC23 - User wants to search product that has Enhanced Spec (AU/NZ only)", () => {
        const { environment, user_archi_id, password_archi_id, lang_australia } = userdata.user_data
        pages.loginToArchify(environment, user_archi_id, password_archi_id)
        cy.url().should('include', '/id/member/home')
        dashboard.navProduct()
        dashboard.selectLanguange(lang_australia)
        cy.url().should('include', '/au/products')
        productsPage.checkEnhancedSpec()
    })
    it("ARC24 - User wants to search products from specific country", () => {
        const { environment, user_archi_id, password_archi_id, lang_australia } = userdata.user_data
        pages.loginToArchify(environment, user_archi_id, password_archi_id)
        cy.url().should('include', '/id/member/home')
        dashboard.navProduct()
        dashboard.selectLanguange(lang_australia)
        cy.url().should('include', '/au/products')
        const { category_accessibility, sub_category_all_accessibility } = userdata.brands_data
        dashboard.navBrandsCategory(category_accessibility, sub_category_all_accessibility)
        dashboard.brandProduct(1)
    })
})
