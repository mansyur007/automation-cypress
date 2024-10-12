import pages from "../../support/pages/login";
import designProfesional from "../../support/pages/design-profesional";
import { designProfesionalPage, designProjectPage } from "../../support/locator/locators";
import { fakeUserData } from "../../support/fakeData";
import commons from "../../support/pages/commons";

describe("Company Project", { testIsolation: true }, () => {
    let userdata
    beforeEach(() => {
        cy.fixture('user-data.json').then((user) => {
            userdata = user;
        });
    })

    it("ARC66 - User wants to create new project and publish", () => {
        const { environment, user_archi_company, password_archi_id } = userdata.user_data
        pages.loginToArchify(environment, user_archi_company, password_archi_id)
        cy.url().should('include', '/id/member/home')
        designProfesional.company()
        commons.subMenu('Project')
        designProfesional.createNewProject()
        designProfesional.projectName(fakeUserData.company_name)
        designProfesional.projectType('Public')
        designProfesional.projectAddress(fakeUserData.address)
        designProfesional.projectLocation('Pangkal Pinang')
        designProfesional.projectDescription(fakeUserData.right_desc)
        designProfesional.projectDesignStyle('Futuristic')
        designProfesional.projectAreaSize(123)
        designProfesional.projectArchitect(fakeUserData.name)
        designProfesional.projectContractor(fakeUserData.lastname)
        designProfesional.projectPhotographer(fakeUserData.firstname)
        designProfesional.addProduct()
        designProfesional.searchProduct('Archify')
        cy.checkCheckboxByText('Security Products');
        designProfesional.addToProject()
        cy.hold(2)
        designProfesional.addProduct()
        designProfesional.searchProduct('Acme')
        cy.checkCheckboxByText('Fittings & Accessories');
        cy.checkCheckboxByText('Water Chillers, Boilers & Filters');
        designProfesional.addToProject()
        cy.hold(2)
        designProfesional.addProduct()
        designProfesional.searchProduct('Laburox')
        cy.checkCheckboxByText('Sanitary');
        cy.checkCheckboxByText('Fencing');
        designProfesional.addToProject()
        cy.hold(2)
        designProfesional.uploadCover()
        designProfesional.createNewProjectCover()
        designProfesional.actionProjectButton('Publish')
        cy.hold(3)
        designProfesional.search(fakeUserData.company_name)
        designProfesional.validateDataTable(fakeUserData.company_name)
    })
    it("ARC67 - User wants to create new project and save as draft", () => {
        const { environment, user_archi_company, password_archi_id } = userdata.user_data
        pages.loginToArchify(environment, user_archi_company, password_archi_id)
        cy.url().should('include', '/id/member/home')
        designProfesional.company()
        commons.subMenu('Project')
        designProfesional.createNewProject()
        designProfesional.projectName(fakeUserData.company_name_draft)
        designProfesional.projectType('Public')
        designProfesional.projectAddress(fakeUserData.address)
        designProfesional.projectLocation('Pangkal Pinang')
        designProfesional.projectDescription(fakeUserData.right_desc)
        designProfesional.projectDesignStyle('Futuristic')
        designProfesional.projectAreaSize(123)
        designProfesional.projectArchitect(fakeUserData.name)
        designProfesional.projectContractor(fakeUserData.lastname)
        designProfesional.projectPhotographer(fakeUserData.firstname)
        designProfesional.addProduct()
        designProfesional.searchProduct('Archify')
        cy.checkCheckboxByText('Security Products');
        designProfesional.addToProject()
        cy.hold(2)
        designProfesional.addProduct()
        designProfesional.searchProduct('Acme')
        cy.checkCheckboxByText('Fittings & Accessories');
        cy.checkCheckboxByText('Water Chillers, Boilers & Filters');
        designProfesional.addToProject()
        cy.hold(2)
        designProfesional.addProduct()
        designProfesional.searchProduct('Laburox')
        cy.checkCheckboxByText('Sanitary');
        cy.checkCheckboxByText('Fencing');
        designProfesional.addToProject()
        cy.hold(2)
        designProfesional.uploadCover()
        designProfesional.createNewProjectCover()
        designProfesional.actionProjectButton('Save as Draft')
        cy.hold(3)
        designProfesional.search(fakeUserData.company_name_draft)
        designProfesional.validateDataTable(fakeUserData.company_name_draft)
    })
    it("ARC68 - User wants to filter project with statuses", () => {
        cy.intercept('POST', '/id/gpost/professional/interface_profile_projects_list_v2/9507/all/all/all').as('filterStatusAll');
        const { environment, user_archi_company, password_archi_id } = userdata.user_data
        pages.loginToArchify(environment, user_archi_company, password_archi_id)
        cy.url().should('include', '/id/member/home')
        designProfesional.company()
        commons.subMenu('Project')
        cy.hold(1)
        designProfesional.projectStatus('Draft')
        cy.hold(1)
        cy.assertCellsContainText(designProjectPage.cell_status, 'Draft');
        cy.hold(1)
        designProfesional.projectStatus('Published Projects')
        cy.hold(1)
        cy.assertCellsContainText(designProjectPage.cell_status, 'Published');
        cy.hold(1)
        designProfesional.projectStatus('All Projects')
        cy.wait('@filterStatusAll', { timeout: 30000 }).its('response.statusCode').should('eq', 200);
        cy.hold(1)
    })
    it("ARC69 - User wants to filter project based on categories", () => {
        const { environment, user_archi_company, password_archi_id } = userdata.user_data
        pages.loginToArchify(environment, user_archi_company, password_archi_id)
        cy.url().should('include', '/id/member/home')
        designProfesional.company()
        commons.subMenu('Project')
        cy.hold(3)
        designProfesional.projectStatus('All Project')
        cy.hold(3)
        designProfesional.getProjectCategories('Libraries')
        cy.hold()
        cy.assertCellsContainText(designProjectPage.cell_categories, 'Libraries');
    })
    it("ARC70 - User wants to filter project based on location", () => {
        const { environment, user_archi_company, password_archi_id } = userdata.user_data
        pages.loginToArchify(environment, user_archi_company, password_archi_id)
        cy.url().should('include', '/id/member/home')
        designProfesional.company()
        commons.subMenu('Project')
        cy.hold(3)
        designProfesional.projectStatus('All Project')
        cy.hold(3)
        designProfesional.getProjectLocation('Sabang')
        cy.hold()
        cy.assertCellsContainText(designProjectPage.cell_location, 'Sabang');
    })
    it("ARC71 - User wants to use multiple filters", () => {
        const { environment, user_archi_company, password_archi_id } = userdata.user_data
        pages.loginToArchify(environment, user_archi_company, password_archi_id)
        cy.url().should('include', '/id/member/home')
        designProfesional.company()
        commons.subMenu('Project')
        cy.hold(3)
        designProfesional.projectStatus('Published')
        cy.hold(3)
        designProfesional.getProjectLocation('Sabang')
        cy.hold(3)
        designProfesional.getProjectCategories('Libraries')
        cy.assertCellsContainText(designProjectPage.cell_categories, 'Libraries');
        cy.assertCellsContainText(designProjectPage.cell_location, 'Sabang');
        cy.assertCellsContainText(designProjectPage.cell_status, 'Published');
    })
    it("ARC72 - User wants to view project as visitor", () => {
        const { environment, user_archi_company, password_archi_id } = userdata.user_data
        pages.loginToArchify(environment, user_archi_company, password_archi_id)
        cy.url().should('include', '/id/member/home')
        designProfesional.company()
        commons.subMenu('Project')
        designProfesional.clickAsVisitor()
        cy.go('back')
        cy.url().should('include', '/professional/project')
    })
    it("ARC73 - User wants to download project as excel", () => {
        const { environment, user_archi_company, password_archi_id } = userdata.user_data
        pages.loginToArchify(environment, user_archi_company, password_archi_id)
        cy.url().should('include', '/id/member/home')
        designProfesional.company()
        commons.subMenu('Project')
        cy.hold(3)
        designProfesional.clickDownloadExcel()
    })
    it("ARC74 - User wants to search a project using keyword", () => {
        const { environment, user_archi_company, password_archi_id } = userdata.user_data
        pages.loginToArchify(environment, user_archi_company, password_archi_id)
        cy.url().should('include', '/id/member/home')
        designProfesional.company()
        commons.subMenu('Project')
        cy.hold(3)
        designProfesional.search('Lib')
        cy.hold(2)
        cy.assertCellsContainText(designProjectPage.cell_categories, 'Libraries');
        designProfesional.search('Labs')
        cy.hold(2)
        cy.assertCellsContainText(designProjectPage.cell_categories, 'Labs');

    })
    it("ARC75 - User wants to set a project as highlight", () => {
        const { environment, user_archi_company, password_archi_id } = userdata.user_data
        pages.loginToArchify(environment, user_archi_company, password_archi_id)
        cy.url().should('include', '/id/member/home')
        designProfesional.company()
        commons.subMenu('Project')
        cy.hold(3)
        designProfesional.search(fakeUserData.company_name)
        designProfesional.validateDataTable(fakeUserData.company_name)
        cy.hold(2)
        designProfesional.clickContentTriDots('Set as Highlight')
        designProfesional.getConfirmation('Set As Highlight')
        designProfesional.getStatusHighlight('be.visible')
    })
    it("ARC76 - User wants to remove a project as highlight", () => {
        const { environment, user_archi_company, password_archi_id } = userdata.user_data
        pages.loginToArchify(environment, user_archi_company, password_archi_id)
        cy.url().should('include', '/id/member/home')
        designProfesional.company()
        commons.subMenu('Project')
        cy.hold(3)
        designProfesional.search(fakeUserData.company_name)
        designProfesional.validateDataTable(fakeUserData.company_name)
        cy.hold(2)
        designProfesional.clickContentTriDots('Remove from Highlight')
        designProfesional.getConfirmation('Remove from Highlight')
        designProfesional.getStatusHighlight('not.exist')
    })
    it("ARC77 - User wants to publish a draft project", () => {
        const { environment, user_archi_company, password_archi_id } = userdata.user_data
        pages.loginToArchify(environment, user_archi_company, password_archi_id)
        cy.url().should('include', '/id/member/home')
        designProfesional.company()
        commons.subMenu('Project')
        cy.hold(3)
        designProfesional.search(fakeUserData.company_name_draft)
        designProfesional.validateDataTable(fakeUserData.company_name_draft)
        cy.hold(2)
        designProfesional.clickContentTriDots('Publish Project')
        designProfesional.getConfirmation('Publish Project')
        cy.hold(3)
        cy.assertCellsContainText(designProjectPage.cell_status, 'Published');
    })
    it("ARC78 - User wants to Set a published project as Draft", () => {
        const { environment, user_archi_company, password_archi_id } = userdata.user_data
        pages.loginToArchify(environment, user_archi_company, password_archi_id)
        cy.url().should('include', '/id/member/home')
        designProfesional.company()
        commons.subMenu('Project')
        cy.hold(3)
        designProfesional.search(fakeUserData.company_name_draft)
        designProfesional.validateDataTable(fakeUserData.company_name_draft)
        cy.hold(2)
        designProfesional.clickContentTriDots('Set as Draft')
        designProfesional.getConfirmation('Set as Draft')
        cy.hold(3)
        cy.assertCellsContainText(designProjectPage.cell_status, 'Draft');
    })
    it("ARC79 - User wants to edit projects", () => {
        const { environment, user_archi_company, password_archi_id } = userdata.user_data
        pages.loginToArchify(environment, user_archi_company, password_archi_id)
        cy.url().should('include', '/id/member/home')
        designProfesional.company()
        commons.subMenu('Project')
        cy.hold(3)
        designProfesional.search(fakeUserData.company_name_draft)
        designProfesional.validateDataTable(fakeUserData.company_name_draft)
        cy.hold(2)
        designProfesional.clickContentTriDots('Edit Projects')
        cy.hold(2)
        designProfesional.deleteAllUsedProduct()
        designProfesional.projectName(' Edited')
        designProfesional.projectAddress(' Edited')
        designProfesional.projectDescription(fakeUserData.right_desc)
        designProfesional.projectAreaSize(1)
        designProfesional.projectArchitect(' Edited')
        designProfesional.projectContractor(' Edited')
        designProfesional.projectPhotographer(' Edited')
        designProfesional.addProduct()
        designProfesional.searchProduct('Archify')
        cy.checkCheckboxByText('Security Products');
        designProfesional.addToProject()
        cy.hold(2)
        designProfesional.addProduct()
        designProfesional.searchProduct('Acme')
        cy.checkCheckboxByText('Fittings & Accessories');
        cy.checkCheckboxByText('Water Chillers, Boilers & Filters');
        designProfesional.addToProject()
        cy.hold(2)
        designProfesional.addProduct()
        designProfesional.searchProduct('Laburox')
        cy.checkCheckboxByText('Sanitary');
        cy.checkCheckboxByText('Fencing');
        designProfesional.addToProject()
        cy.hold(2)
        designProfesional.uploadCover()
        designProfesional.createNewProjectCover()
        designProfesional.actionProjectButton('Publish')
        cy.hold(3)
        designProfesional.search(fakeUserData.company_name_draft + ' Edited')
        designProfesional.validateDataTable(fakeUserData.company_name_draft + ' Edited')
    })
    it("ARC80 - User wants to filter delete project", () => {
        cy.intercept('POST', '/*/professional/project/delete_project_multi/*').as('deleteProject');
        const { environment, user_archi_company, password_archi_id } = userdata.user_data
        pages.loginToArchify(environment, user_archi_company, password_archi_id)
        cy.url().should('include', '/id/member/home')
        designProfesional.company()
        commons.subMenu('Project')
        cy.hold(3)
        designProfesional.search(fakeUserData.company_name_draft + ' Edited')
        designProfesional.validateDataTable(fakeUserData.company_name_draft + ' Edited')
        cy.hold(2)
        designProfesional.clickContentTriDots('Delete Project')
        designProfesional.getConfirmation('Delete Project')
        cy.hold(3)
        cy.wait('@deleteProject', { timeout: 30000 }).its('response.statusCode').should('eq', 200);
        // delete project under variable fakeUserData.company_name
        cy.reload()
        designProfesional.search(fakeUserData.company_name)
        designProfesional.validateDataTable(fakeUserData.company_name)
        cy.hold(2)
        designProfesional.clickContentTriDots('Delete Project')
        designProfesional.getConfirmation('Delete Project')
        cy.hold(3)
        cy.wait('@deleteProject', { timeout: 30000 }).its('response.statusCode').should('eq', 200);

    })
})