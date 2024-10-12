import { loginPageLocators } from '../locator/locators';
import account from './account';
import dashboard from './dashboard';
class LoginArchify {
    loginToArchify(environmentURL, username, password) {
        cy.visit(Cypress.env(environmentURL))
        cy.getBySel(loginPageLocators.login_button, { timeout: 10000 }).should('be.visible').click()
        cy.getBySel(loginPageLocators.email_field, { timeout: 10000 }).should('be.visible').clear().type(username);
        cy.getBySel(loginPageLocators.password_field, { timeout: 10000 }).should('be.visible').clear().type(password);
        cy.getBySel(loginPageLocators.submit_button, { timeout: 10000 }).should('be.visible').click()
    }

    loginToArchifyGoogle(environmentURL) {
        cy.visit(Cypress.env(environmentURL))
        cy.getBySel(loginPageLocators.login_button, { timeout: 10000 }).should('be.visible').click()
        cy.getBySel(loginPageLocators.google_connect_button, { timeout: 10000 }).should('be.visible').click()
        cy.getBySel(loginPageLocators.google_connect_button, { timeout: 10000 }).should('be.visible').click({ force: true })
    }

    checkLoginToArchify(environmentURL, username_1, password_1, username_2, password_2) {
        cy.visit(Cypress.env(environmentURL))
        cy.getBySel(loginPageLocators.login_button, { timeout: 10000 }).should('be.visible').click()
        cy.getBySel(loginPageLocators.email_field, { timeout: 10000 }).should('be.visible').clear().type(username_1);
        cy.getBySel(loginPageLocators.password_field, { timeout: 10000 }).should('be.visible').clear().type(password_1);
        cy.getBySel(loginPageLocators.submit_button, { timeout: 10000 }).should('be.visible').click()

        cy.wait(500)
        cy.get('body').then(($parent) => {
            if ($parent.find('.noty_body').length > 0) {
                cy.get('.noty_body').then(($el) => {
                    if ($el.text().includes('Your email or password is incorrect. please try again')) {
                        // Do something if the text matches
                        cy.log('Your email or password is incorrect. please try again')
                        cy.getBySel(loginPageLocators.email_field, { timeout: 10000 }).should('be.visible').clear().type(username_2);
                        cy.getBySel(loginPageLocators.password_field, { timeout: 10000 }).should('be.visible').clear().type(password_1);
                        cy.getBySel(loginPageLocators.submit_button, { timeout: 10000 }).should('be.visible').click()

                        cy.wait(500)
                        cy.get('body').then(($parent) => {
                            if ($parent.find('.noty_body').length > 0) {
                                cy.get('.noty_body').then(($el) => {
                                    if ($el.text().includes('Your email or password is incorrect. please try again')) {
                                        // Do something if the text matches
                                        cy.log('Your email or password is incorrect. please try again')
                                        cy.getBySel(loginPageLocators.email_field, { timeout: 10000 }).should('be.visible').clear().type(username_1);
                                        cy.getBySel(loginPageLocators.password_field, { timeout: 10000 }).should('be.visible').clear().type(password_2);
                                        cy.getBySel(loginPageLocators.submit_button, { timeout: 10000 }).should('be.visible').click()

                                        cy.wait(500)
                                        cy.get('body').then(($parent) => {
                                            if ($parent.find('.noty_body').length > 0) {
                                                cy.get('.noty_body').then(($el) => {
                                                    if ($el.text().includes('Your email or password is incorrect. please try again')) {
                                                        // Do something if the text matches
                                                        cy.log('Your email or password is incorrect. please try again')
                                                        cy.getBySel(loginPageLocators.email_field, { timeout: 10000 }).should('be.visible').clear().type(username_2);
                                                        cy.getBySel(loginPageLocators.password_field, { timeout: 10000 }).should('be.visible').clear().type(password_2);
                                                        cy.getBySel(loginPageLocators.submit_button, { timeout: 10000 }).should('be.visible').click()

                                                        cy.wait(500)
                                                        cy.get('body').then(($parent) => {
                                                            if ($parent.find('.noty_body').length > 0) {
                                                                cy.get('.noty_body').then(($el) => {
                                                                    if ($el.text().includes('Your email or password is incorrect. please try again')) {
                                                                        // Do something if the text matches
                                                                        cy.log('Your email or password is incorrect. Nothing from user-data.json')
                                                                    } else {

                                                                    }
                                                                })
                                                            } else {
                                                                cy.log('Element do not exist')
                                                                // Change email to old email
                                                                account.gotoMyAccount()
                                                                cy.url().should('include', '/member/settings')
                                                                account.editEmail(username_1)

                                                                // Change password to old password
                                                                account.editPassword(password_2, password_1)

                                                                cy.log('Email and Password are restored!')
                                                                dashboard.logoutArchify()
                                                            }

                                                        })
                                                    } else {

                                                    }
                                                })
                                            } else {
                                                cy.log('Element do not exist')
                                                // Change password to old password
                                                account.gotoMyAccount()
                                                cy.url().should('include', '/member/settings')
                                                account.editPassword(password_2, password_1)

                                                cy.log('Password is restored!')
                                                dashboard.logoutArchify()
                                            }
                                        })
                                    } else {

                                    }
                                })
                            } else {
                                cy.log('Element do not exist')
                                // Change email to old email
                                account.gotoMyAccount()
                                cy.url().should('include', '/member/settings')
                                account.editEmail(username_1)

                                cy.log('Email is restored!')
                                dashboard.logoutArchify()
                            }
                        })
                    } else {

                    }
                })
            } else {
                cy.log('Element do not exist')
                cy.log('All clear')
                dashboard.logoutArchify()
            }
        })

    }
}
export default new LoginArchify();