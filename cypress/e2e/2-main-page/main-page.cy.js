import { brandPage } from '../../support/locator/locators'
import dashboard from '../../support/pages/dashboard'
import search from '../../support/pages/search'

describe("Main Page", { testIsolation: true }, () => {
    let userdata

    beforeEach(() => {
        cy.fixture('user-data.json').then((user) => {
            userdata = user;
        });
    })

    it("ARC10 - Navigate Navbar", () => {
        const { environment } = userdata.user_data
        cy.visit(Cypress.env(environment))
        cy.hold()

        // click and validate each navigation menu and page
        dashboard.navProduct()
        dashboard.navBrands()
        dashboard.navProfessionals()
        dashboard.navProjects()
        dashboard.navEvents()
        dashboard.navArticles()
    })

    it("ARC11 - Navigate Navbar (AU/NZ only)", () => {
        const { environment } = userdata.user_data
        cy.visit(Cypress.env(environment)).hold(2)

        // change country to AU
        dashboard.selectLanguange('Australia')
        cy.url().should('include', '/au')
        cy.hold(1)

        // click and validate each navigation menu and page
        dashboard.navEducation()
        cy.go('back')
        dashboard.selectDropdownExplore('Professionals')
        cy.url().should('include', '/professionals')
        cy.go('back')
        dashboard.selectDropdownExplore('Projects')
        cy.url().should('include', '/projects')
        cy.go('back')
        dashboard.selectDropdownExplore('Inspiration')
        cy.url().should('include', '/photos')
        cy.go('back')

        dashboard.navArchifySpec()
    })

    it("ARC12 - Select Category", () => {
        const { environment } = userdata.user_data
        cy.visit(Cypress.env(environment))

        // click and validate several category
        dashboard.selectCategory('Bathroom')
        cy.hold().go('back').hold()
        dashboard.selectCategory('Lighting')
        cy.hold().go('back').hold()
        dashboard.selectCategory('Security, Fire And Safety')
        cy.hold()
    })

    it("ARC13 - Search Products", () => {
        const { environment } = userdata.user_data
        cy.visit(Cypress.env(environment))

        dashboard.searchFromHomePage('minimalist')
        search.selectFromSearchPage('Products', 0) // parameter to select product list appered on Search result by order
        cy.url().should('include', '/product')
    })

    it("ARC14 - Search Brands", () => {
        const { environment } = userdata.user_data
        cy.visit(Cypress.env(environment))

        dashboard.searchFromHomePage('minimalist')
        search.selectFromSearchPage('Brands', 0) // parameter to select product list appered on Search result by order
        cy.getBySel(brandPage.brand_company).should('be.visible')
    })

    it("ARC15 - Browse Products", () => {
        const { environment } = userdata.user_data
        cy.visit(Cypress.env(environment))

        dashboard.browseProducts()
        cy.url().should('include', '/products')
    })

    it("ARC16 - Browse Brands", () => {
        const { environment } = userdata.user_data
        cy.visit(Cypress.env(environment))

        dashboard.browseBrands()
        cy.url().should('include', '/brands')
    })

    it("ARC17 - Change Country Flag", () => {
        const { environment } = userdata.user_data
        cy.visit(Cypress.env(environment))
        cy.hold()

        // change country to NZ
        dashboard.selectLanguange('New Zealand')
        cy.url().should('include', '/nz')
        cy.hold(1)
        dashboard.browseProducts()
        cy.url().should('include', '/products')
        dashboard.validateMenuByCountry('New Zealand')

        cy.visit(Cypress.env(environment))

        // change country to AU
        dashboard.selectLanguange('Australia')
        cy.url().should('include', '/au')
        cy.hold(1)
        dashboard.browseProducts()
        cy.url().should('include', '/products')
        dashboard.validateMenuByCountry('Australia')
    })

    it("ARC19 - User wants to see latest news", () => {
        const { environment } = userdata.user_data
        cy.visit(Cypress.env(environment))
        
        dashboard.selectLanguange('Indonesia')
        dashboard.validateNews()
        dashboard.selectLanguange('Australia')
        dashboard.validateNews()
    })

})
