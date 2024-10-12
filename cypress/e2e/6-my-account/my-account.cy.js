import pages from '../../support/pages/login'
import account from '../../support/pages/account';
import dashboard from '../../support/pages/dashboard';

describe("My Account", { testIsolation: true }, () => {
    let userdata
    beforeEach(() => {
        cy.fixture('user-data.json').then((user) => {
            userdata = user;
        });

    })

    // { retries: { runMode: 2, openMode: 1, }, }, 
    it("ARC61 - User wants to change email", () => {
        cy.intercept('GET', '/id/gpost/products/menu_products_solution_2/fittings-accessories').as('apiRequest');
        const { environment, user_archi_3, password_archi_3, user_archi_99, password_supplier } = userdata.user_data
        pages.checkLoginToArchify(environment, user_archi_3, password_archi_3, user_archi_99, password_supplier)
        cy.clearCookies()
        cy.hold()
        pages.loginToArchify(environment, user_archi_3, password_archi_3)
        cy.url().should('include', '/id/member/home')

        // Change email to new email
        account.gotoMyAccount()
        cy.url().should('include', '/member/settings')
        account.editEmail(user_archi_99)
        dashboard.logoutArchify()

        // Verify new email
        pages.loginToArchify(environment, user_archi_99, password_archi_3)
        cy.url().should('include', '/id/member/home')
    })


    it("ARC62 - User wants to change email back to old email", () => {
        cy.intercept('GET', '/id/gpost/products/menu_products_solution_2/fittings-accessories').as('apiRequest');
        const { environment, user_archi_3, password_archi_3, user_archi_99 } = userdata.user_data
        pages.loginToArchify(environment, user_archi_99, password_archi_3)
        cy.url().should('include', '/id/member/home')

        // Change email to old email
        account.gotoMyAccount()
        cy.url().should('include', '/member/settings')
        account.editEmail(user_archi_3)
        dashboard.logoutArchify()

        // Verify old email
        pages.loginToArchify(environment, user_archi_3, password_archi_3)
        cy.url().should('include', '/id/member/home')
    })

    it("ARC63 - User wants to change password", () => {
        cy.intercept('GET', '/id/gpost/products/menu_products_solution_2/fittings-accessories').as('apiRequest');
        const { environment, user_archi_3, password_archi_3, password_supplier } = userdata.user_data
        pages.loginToArchify(environment, user_archi_3, password_archi_3)
        cy.url().should('include', '/id/member/home')

        // Change password to new password
        account.gotoMyAccount()
        cy.url().should('include', '/member/settings')
        account.editPassword(password_archi_3, password_supplier)
        dashboard.logoutArchify()

        // Verify new password
        pages.loginToArchify(environment, user_archi_3, password_supplier)
        cy.url().should('include', '/id/member/home')
    })

    it("ARC64 - User wants to change password back to old password", () => {
        cy.intercept('GET', '/id/gpost/products/menu_products_solution_2/fittings-accessories').as('apiRequest');
        const { environment, user_archi_3, password_archi_3, password_supplier } = userdata.user_data
        pages.loginToArchify(environment, user_archi_3, password_supplier)
        cy.url().should('include', '/id/member/home')

        // Change password to old password
        account.gotoMyAccount()
        cy.url().should('include', '/member/settings')
        account.editPassword(password_supplier, password_archi_3)
        dashboard.logoutArchify()

        // Verify old password
        pages.loginToArchify(environment, user_archi_3, password_archi_3)
        cy.url().should('include', '/id/member/home')
    })

    it("ARC65 - User wants to change profile info details", () => {
        cy.intercept('GET', '/id/gpost/products/menu_products_solution_2/fittings-accessories').as('apiRequest');
        const { environment, user_archi_1, password_archi_1 } = userdata.user_data
        pages.loginToArchify(environment, user_archi_1, password_archi_1)
        cy.url().should('include', '/id/member/home')

        // Change password to old password
        cy.hold(2)
        account.gotoMyAccount()
        cy.url().should('include', '/member/settings')

        account.changeFirstName('Staging')
        account.changeLastName('POWNER')
        account.changeDateOfBirth('12-12-2012')
        account.changeWhereLive('BATAM')
        account.changePhoneNumber('123-456-XXX')
        account.changeAboutMe('This is about me details')
        account.saveEditProfile()
        cy.reload()
        cy.hold(2)
        account.validateChangeProfile('Staging', 'POWNER', '12-12-2012', 'BATAM', '123-456-XXX', 'This is about me details')

        account.changeFirstName('first')
        account.changeLastName('last')
        account.changeDateOfBirth('01-01-2001')
        account.changeWhereLive('Jakarta Selatan')
        account.changePhoneNumber('0987654321')
        account.changeAboutMe('Test Automation')
        account.saveEditProfile()
        cy.reload()
    })
})
