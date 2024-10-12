import pages from "../../support/pages/login";
import designProfesional from "../../support/pages/design-profesional";
import commons from "../../support/pages/commons";

describe("Company Accreditation", () => {
    let userdata
    beforeEach(() => {
        cy.fixture('user-data.json').then((user) => {
            userdata = user;
        });
    })

    it("ARC92 - User wants to Create New Accreditation", () => {
        cy.clearCookies()
        const { environment, user_archi_company, password_archi_id } = userdata.user_data
        pages.loginToArchify(environment, user_archi_company, password_archi_id)
        cy.url().should('include', '/id/member/home')

        designProfesional.company()
        cy.hold(2)
        commons.subMenu('Accreditations')
        designProfesional.createAccreditation()
        designProfesional.fillAccreditationData('Create', 'Edit Automation Accreditation', 'Awards')
    })
    it("ARC93 - User wants to Filter Accreditation based on Category", () => {
        designProfesional.selectAccreditationCategory('Awards')
        designProfesional.selectAccreditationCategory('Certification')
        designProfesional.selectAccreditationCategory('Others')
        designProfesional.selectAccreditationCategory('All Categories')
    })
    it("ARC94 - User wants to View Accreditation as Visitor", () => {
        designProfesional.clickAsVisitor()
        cy.url().should('include', '/acreditations')
        cy.go('back')
    })
    it("ARC95 - User wants to view document", () => {
        designProfesional.search('Test Automation Accreditation')
        designProfesional.viewDocumentAccreditation() //only first row on table
    })
    it("ARC96 - User wants to edit accreditation", () => {
        designProfesional.search('Test Automation Accreditation')
        designProfesional.editAccreditation()
        designProfesional.fillAccreditationData('Edit', 'Edit Automation Accreditation', 'Awards')
    })
    it("ARC97 - User wants to delete accreditation", () => {
        designProfesional.search('Edit Automation Accreditation')
        designProfesional.deleteAccreditation('Edit Automation Accreditation')
    })
})