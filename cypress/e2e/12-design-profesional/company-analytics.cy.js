import pages from "../../support/pages/login";
import designProfesional from "../../support/pages/design-profesional";
import { analyticsPage } from "../../support/locator/locators";
import commons from "../../support/pages/commons";

describe("Company Analytics", () => {
    let userdata
    beforeEach(() => {
        cy.fixture('user-data.json').then((user) => {
            userdata = user;
        });
    })

    it("ARC109 - User wants to anchor nav", () => {
        cy.clearCookies()
        const { environment, user_archi_company, password_archi_id } = userdata.user_data
        pages.loginToArchify(environment, user_archi_company, password_archi_id)
        cy.url().should('include', '/id/member/home')

        designProfesional.company()
        commons.subMenu('Analytics')
        cy.url().should('include', '/id/professional/analytics')
        designProfesional.selectAnalyticsCategory('Graph')
        designProfesional.selectAnalyticsCategory('Summary')
        designProfesional.selectAnalyticsCategory('Project')
    })
    it("ARC110 - User wants to filter graphic Total Views", () => {
        designProfesional.setGraphDate('From', '2024', 'Jul')
        designProfesional.setGraphDate('To', '2024', 'Aug')
    })
    it("ARC111 - User wants to filter Projects in Assets", () => {
        designProfesional.searchProjects('UNPUBLISHED')
    })
    it("ARC112 - User wants to sort Projects", () => {
        designProfesional.changeViewPerPage('25')
        designProfesional.sortProjectsBy(analyticsPage.date_table_head, analyticsPage.date_table_first_row)
        designProfesional.sortProjectsBy(analyticsPage.project_table_head, analyticsPage.project_table_first_row)
        designProfesional.sortProjectsBy(analyticsPage.images_table_head, analyticsPage.images_table_first_row)
        designProfesional.sortProjectsBy(analyticsPage.views_table_head, analyticsPage.views_table_first_row)
    })

})