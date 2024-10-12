import pages from "../../support/pages/login";
import designProfesional from "../../support/pages/design-profesional";
import { fakeUserData } from "../../support/fakeData";
import {designProjectPage, specsheetPage} from "../../support/locator/locators";
import commons from "../../support/pages/commons";
import updates from "../../support/pages/company-update-page"

describe("Company Update", { testIsolation: true }, () => {
    let userdata
    beforeEach(() => {
        cy.fixture('user-data.json').then((user) => {
            userdata = user;
        });
    })

    it("ARC98 - User wants to Create New Update", () => {
        const {environment, user_archi_company, password_archi_id} = userdata.user_data
        pages.loginToArchify(environment, user_archi_company, password_archi_id)
        cy.url().should('include', '/id/member/home')
        designProfesional.company()
        commons.subMenu('Updates')
        designProfesional.clickCreateNewUpdate()

        updates.createContentUpdate(fakeUserData.left_notes, fakeUserData.left_desc, fakeUserData.right_desc);
        designProfesional.search(fakeUserData.left_notes)
        designProfesional.validateDataTable(fakeUserData.left_notes)
    })
    it("ARC99 - User wants to view updates as visitor", () => {
        const {environment, user_archi_company, password_archi_id} = userdata.user_data
        pages.loginToArchify(environment, user_archi_company, password_archi_id)
        cy.url().should('include', '/id/member/home')
        designProfesional.company()
        commons.subMenu('Updates')
        designProfesional.clickAsVisitor()
        cy.hold()
        cy.go('back')
    })
    it("ARC100 - User wants to filter updates based on category", () => {
        const {environment, user_archi_company, password_archi_id} = userdata.user_data
        pages.loginToArchify(environment, user_archi_company, password_archi_id)
        cy.url().should('include', '/id/member/home')
        designProfesional.company()
        commons.subMenu('Updates')
        designProfesional.selectMenuUpdate('Education')
        cy.hold()
        cy.assertCellsContainText(designProjectPage.cell_location, 'Education');
        cy.hold()
        designProfesional.selectMenuUpdate('Events')
        cy.assertCellsContainText(designProjectPage.cell_location, 'Events');
        cy.hold()
        designProfesional.selectMenuUpdate('News')
        cy.assertCellsContainText(designProjectPage.cell_location, 'News');
        cy.hold()
        designProfesional.selectMenuUpdate('Other')
        cy.assertCellsContainText(designProjectPage.cell_location, 'Other');
        cy.hold()
        designProfesional.selectMenuUpdate('Project Case Studies')
        cy.assertCellsContainText(designProjectPage.cell_location, 'Project Case Studies');
        cy.hold()
        designProfesional.selectMenuUpdate('Tips')
        cy.assertCellsContainText(designProjectPage.cell_location, 'Tips');
    })
    it("ARC101 - User wants to change total data per page", () => {
        const {environment, user_archi_company, password_archi_id} = userdata.user_data
        pages.loginToArchify(environment, user_archi_company, password_archi_id)
        cy.url().should('include', '/id/member/home')
        designProfesional.company()
        commons.subMenu('Updates')
        cy.hold()
        designProfesional.showNumberUpdate(25)
    })
    it("ARC102 - User wants to search updates", () => {
        const {environment, user_archi_company, password_archi_id} = userdata.user_data
        pages.loginToArchify(environment, user_archi_company, password_archi_id)
        cy.url().should('include', '/id/member/home')
        designProfesional.company()
        commons.subMenu('Updates')
        designProfesional.search(fakeUserData.left_notes)
        cy.hold()
        designProfesional.validateDataTable(fakeUserData.left_notes)
        designProfesional.search(' ')
    })
    it("ARC103 - User wants to Edit updates", () => {
        const {environment, user_archi_company, password_archi_id} = userdata.user_data
        pages.loginToArchify(environment, user_archi_company, password_archi_id)
        cy.url().should('include', '/id/member/home')
        designProfesional.company()
        commons.subMenu('Updates')
        designProfesional.search(fakeUserData.left_notes)
        cy.hold()
        designProfesional.validateDataTable(fakeUserData.left_notes)
        designProfesional.clickContentTriDots('Edit Update')
        updates.createContentUpdate(fakeUserData.right_notes, fakeUserData.right_desc, fakeUserData.left_desc);
        designProfesional.search(fakeUserData.right_notes)
        cy.hold()
        designProfesional.validateDataTable(fakeUserData.right_notes)
    })
    it("ARC104 - User wants to Delete updates", () => {
        const method = 'POST';
        const deleteUrlPattern = '*/professional/updates/delete/*';
        cy.intercept(method, deleteUrlPattern).as('deleteProject');
        const {environment, user_archi_company, password_archi_id} = userdata.user_data
        pages.loginToArchify(environment, user_archi_company, password_archi_id)
        cy.url().should('include', '/id/member/home')
        designProfesional.company()
        commons.subMenu('Updates')
        designProfesional.search(fakeUserData.right_notes)
        cy.hold()
        designProfesional.validateDataTable(fakeUserData.right_notes)
        designProfesional.clickContentTriDots('Delete Update')
        designProfesional.getConfirmation('Delete Update')
        cy.wait('@deleteProject', { timeout: 30000 })
            .its('response.statusCode').should('eq', 200);
        cy.hold(3)
    })
    it("ARC105 - User wants to sort updates", () => {
        const {environment, user_archi_company, password_archi_id} = userdata.user_data
        pages.loginToArchify(environment, user_archi_company, password_archi_id)
        cy.url().should('include', '/id/member/home')
        designProfesional.company()
        commons.subMenu('Updates')
        const sortColumn = (columnName) => {
            cy.getBySel(specsheetPage.tr_row).contains(columnName).click();
            cy.getBySel(specsheetPage.sort_asc).should('be.visible');

            cy.getBySel(specsheetPage.tr_row).contains(columnName).click();
            cy.getBySel(specsheetPage.sort_desc).should('be.visible');
        };
        const columns = [
            'Update Name',
            'Short Description',
            'Category',
            'Created Date',
        ];
        columns.forEach(columnName => {
            sortColumn(columnName);
        });
    })


})