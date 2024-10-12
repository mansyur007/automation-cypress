import { accountPage, common, headerUserMenu } from '../locator/locators';
class account {
    gotoMyAccount() {
        cy.getBySel(headerUserMenu.account_icon).should('be.visible').click()
        cy.hold(2)
        cy.getBySel(headerUserMenu.account_my_account).click({ force: true })
    }

    editEmail(email) {
        cy.hold(2)
        cy.getBySel(accountPage.edit_button)
            .eq(1)
            .should('be.visible')
            .click()
        cy.hold(2)
        cy.getBySel(accountPage.edit_email_input).should('be.visible').clear().type(email)
        cy.getBySel(accountPage.save_email_button).should('be.visible').click()
    }

    editPassword(password, new_password) {
        cy.hold(2)
        cy.getBySel(accountPage.edit_button)
            .eq(2)
            .should('be.visible')
            .click()
        cy.hold(2)
        cy.getBySel(accountPage.edit_current_password_input).should('be.visible').clear().type(password)
        cy.getBySel(accountPage.edit_new_password_input).should('be.visible').clear().type(new_password)
        cy.getBySel(accountPage.edit_confirm_password_input).should('be.visible').clear().type(new_password)
        cy.getBySel(accountPage.save_edit_password).should('be.visible').click()
    }

    changeFirstName(param) {
        cy.getBySel(accountPage.first_name_input).should('be.visible').clear().type(param)
    }

    changeLastName(param) {
        cy.getBySel(accountPage.last_name_input).should('be.visible').clear().type(param)
    }

    changeDateOfBirth(param) {
        cy.hold()
        cy.getBySel(accountPage.date_birth_input).should('be.visible').clear().invoke('val', param)
        cy.hold()
    }

    changeWhereLive(param) {
        cy.getBySel(accountPage.where_live_input).should('be.visible').click().hold()
        cy.getBySel(accountPage.search_city_input).should('be.visible').type(param)
        cy.getBySel(accountPage.select_city_dropdown).contains(param).should('be.visible').click({ force: true })
    }

    changePhoneNumber(param) {
        cy.getBySel(accountPage.phone_number_input).should('be.visible').clear().type(param)
    }

    changeAboutMe(param) {
        cy.getBySel(accountPage.about_me_input).should('be.visible').clear().type(param)
    }

    saveEditProfile() {
        cy.getBySel(accountPage.save_edit_profile).should('be.enabled').click()
    }

    validateChangeProfile(firs_name, last_name, date_birth, where_live, phone_number, about_me) {
        cy.getBySel(accountPage.first_name_input).should('have.value', firs_name)
        cy.getBySel(accountPage.last_name_input).should('have.value', last_name)
        cy.getBySel(accountPage.date_birth_input).should('have.value', date_birth)
        cy.getBySel(accountPage.where_live_input).should('have.text', where_live)
        cy.getBySel(accountPage.phone_number_input).should('have.value', phone_number)
        cy.getBySel(accountPage.about_me_input).should('have.value', about_me)
    }
}
export default new account();