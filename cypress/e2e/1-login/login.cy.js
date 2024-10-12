import pages from '../../support/pages/login'
import dashboard from '../../support/pages/dashboard'

describe("Login", { testIsolation: true }, () => {
    let userdata
    beforeEach(() => {
        cy.fixture('user-data.json').then((user) => {
            userdata = user;
        });

    })
    it("ARC05 - Property Owner wants to Login Archify", () => {
        const { environment, user_archi_au, password_archi_au } = userdata.user_data
        pages.loginToArchify(environment, user_archi_au, password_archi_au)
        cy.url().should('include', '/au/member/home')
    })
    it("ARC06 - DP wants to Login Archify", () => {
        const { environment, user_archi_id, password_archi_id } = userdata.user_data
        pages.loginToArchify(environment, user_archi_id, password_archi_id)
        cy.url().should('include', '/id/member/home')
    })
    it("ARC07 - Product Supplier wants to login Archify", () => {
        const { environment, suppplier_archi, password_supplier } = userdata.user_data
        pages.loginToArchify(environment, suppplier_archi, password_supplier)
        cy.url().should('include', '/id/product/supplier/product')
    })
    it("ARC08 - User wants to login through Google", () => {
        pages.loginToArchifyGoogle('staging')
    })
    it("ARC09 - User wants to logout", () => {
        const { environment, user_archi_au, password_archi_au } = userdata.user_data
        pages.loginToArchify(environment, user_archi_au, password_archi_au)
        cy.url().should('include', '/au/member/home')
        dashboard.logoutArchify()
    })
})
