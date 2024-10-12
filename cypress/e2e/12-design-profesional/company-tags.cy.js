import pages from "../../support/pages/login";
import designProfesional from "../../support/pages/design-profesional";
import specsheet from "../../support/pages/specsheet";
import commons from "../../support/pages/commons";

describe("Company Tags", () => {
    let userdata
    beforeEach(() => {
        cy.fixture('user-data.json').then((user) => {
            userdata = user;
        });
    })

    it("ARC81 - User wants to filter tag based on status", () => {
        cy.clearCookies()
        const { environment, user_archi_company, password_archi_id } = userdata.user_data
        pages.loginToArchify(environment, user_archi_company, password_archi_id)
        cy.url().should('include', '/id/member/home')

        designProfesional.company()
        commons.subMenu('Tags')
        designProfesional.selectStatus('Tagged Projects')
        designProfesional.selectStatus('Request from Supplier')
        designProfesional.selectStatus('All Status')
    })
    it("ARC82 - User wants to filter tag based on product supplier", () => {
        designProfesional.selectSupllier("PT. Laburox Makmur's")
        designProfesional.selectSupllier('All Suppliers')
    })
    it("ARC83 - User wants to filter tag based on product used category", () => {
        designProfesional.selectCategory('Paints, Coatings & Textures')
        designProfesional.selectCategory('All Categories')
    })
    it("ARC84 - User wants to change total data per page", () => {
        designProfesional.changeViewPerPage('25')
        designProfesional.changeViewPerPage('50')
    })
    it("ARC85 - User wants to search tag based on keyword", () => {
        designProfesional.search('Draft')
        designProfesional.validateDataTable('Draft')
        designProfesional.search('Laburox')
        designProfesional.validateDataTable('Laburox')
        designProfesional.search('Paints') // unable to search 'Paints, Coatings & Textures'
        designProfesional.validateDataTable('Paints, Coatings & Textures')
    })
    it("ARC86 - User wants to move to next tag page", () => {
        cy.reload()
        cy.hold()
        designProfesional.clickPage('2')
        designProfesional.clickPage('3')
        designProfesional.clickPage('1')
    })
    it("ARC87 - User wants to sort the list", () => {
        designProfesional.sorting('Project Name')
        designProfesional.sorting('Supplier Name')
        designProfesional.sorting('Product Used')
        designProfesional.sorting('Status')
    })
    it("ARC89 - User wants to move to supplier details", () => {
        designProfesional.search("PT. Laburox Makmur's")
        designProfesional.openSupplier("PT. Laburox Makmur's")
    })
    it("ARC88 - User wants to move to professional details", () => {
        cy.go('back').hold(3)
        designProfesional.search('LABUROX BASIC PROJECT')
        designProfesional.openProject('LABUROX BASIC PROJECT')
    })
    it("ARC90 - User wants to add tag to a project", () => {
        designProfesional.addTagToProject('Stramm', 'Sofas, Lounges & Armchairs')
    })
    it("ARC91 - User wants to remove tag from a project", () => {
        cy.go('back').reload().hold(3)
        designProfesional.search('Test Automation')
        designProfesional.removeProjectsTag('Test Automation')
    })

})