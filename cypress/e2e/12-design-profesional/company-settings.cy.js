import pages from "../../support/pages/login";
import designProfesional from "../../support/pages/design-profesional";
import companySettingsPage from "../../support/pages/company-settings-page";
import commons from "../../support/pages/commons";

describe("Company Settings", { testIsolation: true }, () => {
    let userdata
    beforeEach(() => {
        cy.fixture('user-data.json').then((user) => {
            userdata = user;
        });
    })
    it("ARC113 - User wants to modify Company Details", () => {
        const { environment, user_archi_company, password_archi_id } = userdata.user_data
        pages.loginToArchify(environment, user_archi_company, password_archi_id)
        cy.url().should('include', '/member/home')
        designProfesional.company()
        commons.subMenu('Settings')
        companySettingsPage.setupBusinessSettings()
        // cy.assertElementContainsText(productPage.notice_body, 'success')

    })
    it("ARC114 - User wants to modify Company Profile Details", () => {
        const { environment, user_archi_company, password_archi_id } = userdata.user_data
        pages.loginToArchify(environment, user_archi_company, password_archi_id)
        cy.url().should('include', '/member/home')
        designProfesional.company()
        commons.subMenu('Settings')
        companySettingsPage.setupCompanyProfile()
        // cy.assertElementContainsText(productPage.notice_body, 'success')
        designProfesional.clickViewProfile()
        companySettingsPage.validateSettingCompanyProfile()

    })
    it("ARC115 - User wants to back to personal settings", () => {
        const { environment, user_archi_company, password_archi_id } = userdata.user_data
        pages.loginToArchify(environment, user_archi_company, password_archi_id)
        cy.url().should('include', '/member/home')
        designProfesional.myCompany()
        cy.reload()
        cy.hold(3)
        designProfesional.backToPersonal()
        cy.url().should('include', '/member/home')
        cy.hold(3)
    })
})