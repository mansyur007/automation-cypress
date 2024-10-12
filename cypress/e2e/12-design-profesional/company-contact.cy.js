import pages from "../../support/pages/login";
import designProfesional from "../../support/pages/design-profesional";
import { getFormattedDate } from "../../support/function/utils";
import { branchOfficePage, headOfficePage } from "../../support/locator/locators";
import { fakeUserData } from "../../support/fakeData";

describe("Company Contact", () => {
    let userdata
    beforeEach(() => {
        cy.fixture('user-data.json').then((user) => {
            userdata = user;
        });
    })

    it("ARC-106 - User wants to change contact view between Head and Branch Office", () => {
        cy.clearCookies()
        const { environment, user_archi_company, password_archi_id } = userdata.user_data
        pages.loginToArchify(environment, user_archi_company, password_archi_id)
        cy.url().should('include', '/id/member/home')

        designProfesional.companyContact()
    })

    it("ARC-107 - User wants to modify values for Head Office", () => {
        const date = getFormattedDate()

        // fill data
        cy.fields(headOfficePage.company_name_input, fakeUserData.company_name + date)
        cy.fields(headOfficePage.address_input, fakeUserData.address + date)
        cy.fields(headOfficePage.phone_number_input, '+62' + date)
        cy.fields(headOfficePage.fax_number_input, date)
        cy.fields(headOfficePage.website_input, date + '.com')
        cy.fields(headOfficePage.email_input, date + '@mailinator.com')
        designProfesional.saveHeadOffice()

        // validate data
        cy.assertValueContainText(headOfficePage.company_name_input, date)
        cy.assertValueContainText(headOfficePage.address_input, date)
        cy.assertValueContainText(headOfficePage.phone_number_input, date)
        cy.assertValueContainText(headOfficePage.fax_number_input, date)
        cy.assertValueContainText(headOfficePage.website_input, date)
        cy.assertValueContainText(headOfficePage.email_input, date)
    })

    it("ARC-108 - User wants to modify values for Branch Office", () => {
        const date = getFormattedDate()

        // fill data
        cy.fields(branchOfficePage.company_name_input, fakeUserData.company_name + date)
        cy.fields(branchOfficePage.address_input, fakeUserData.address + date)
        cy.fields(branchOfficePage.phone_number_input, '+62' + date)
        cy.fields(branchOfficePage.fax_number_input, date)
        cy.fields(branchOfficePage.website_input, date + '.com')
        cy.fields(branchOfficePage.email_input, date + '@mailinator.com')
        designProfesional.saveBranchOffice()

        // validate data
        cy.assertValueContainText(branchOfficePage.company_name_input, date)
        cy.assertValueContainText(branchOfficePage.address_input, date)
        cy.assertValueContainText(branchOfficePage.phone_number_input, date)
        cy.assertValueContainText(branchOfficePage.fax_number_input, date)
        cy.assertValueContainText(branchOfficePage.website_input, date)
        cy.assertValueContainText(branchOfficePage.email_input, date)
    })

})