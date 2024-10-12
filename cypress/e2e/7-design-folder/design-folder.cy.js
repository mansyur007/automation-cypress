import pages from '../../support/pages/login'
import designFolder from '../../support/pages/design-folder'
import { designFolderPage, productPage } from "../../support/locator/locators";
import commons from "../../support/pages/commons";
import { fakeUserData } from '../../support/fakeData';

describe("Design Folder", () => {
    context("Design Folder", () => {
        let userdata
        beforeEach(() => {
            cy.fixture('user-data.json').then((user) => {
                userdata = user;
            });

        })

        it("ARC30 - User wants to create new design folder", () => {
            cy.clearCookies()
            cy.intercept('GET', '/id/gpost/products/menu_products_solution_2/fittings-accessories').as('apiRequest');
            const { environment, user_archi_1, password_archi_1 } = userdata.user_data
            pages.loginToArchify(environment, user_archi_1, password_archi_1)
            cy.url().should('include', '/id/member/home')

            commons.subMenu('Design Folders')

            designFolder.addDesignFolder(fakeUserData.folderName)
        })


        it("ARC31 - User wants to navigate in a Design Folder", () => {
            designFolder.navigateToFolder(fakeUserData.folderName)
            cy.hold()
            cy.go('back')
        })

        it("ARC32 - User wants to sort design folder", () => {
            designFolder.sortBy('A TO Z')
            cy.assertSortedOrder(designFolderPage.folder_name)
            designFolder.sortBy('Z TO A')
            cy.assertSortedOrder(designFolderPage.folder_name,'desc')
            designFolder.sortBy('NEWEST')

            cy.hold()
        })

        it("ARC33 - User wants to duplicate design folder", () => {
            designFolder.duplicateFolder(fakeUserData.folderName)
            cy.hold()
        })

        it("ARC34 - User wants to rename design folder", () => {
            designFolder.renameDesignFolder(fakeUserData.folderName, 'Renamed')
            cy.hold()
        })

        it("ARC36 - User wants to create new Specsheets", () => {
            designFolder.createSpecsheets('Renamed', 'House Budget Specsheet')
            cy.url().should('include', '/id/specsheet')
            cy.go('back')
            cy.hold()
        })

        it("ARC43 - User wants to delete design folder", () => {
            designFolder.deleteDesignFolder(fakeUserData.folderName)
            designFolder.deleteDesignFolder('Renamed')
        })
    })


    context("Sub Folder", { testIsolation: true }, () => {
        let userdata
        beforeEach(() => {
            cy.fixture('user-data.json').then((user) => {
                userdata = user;
            });

        })
        it("ARC39 - User wants to Create subfolder inside design folder", () => {
            const { environment, user_archi_1, password_archi_id } = userdata.user_data
            pages.loginToArchify(environment, user_archi_1, password_archi_id)
            cy.url().should('include', '/id/member/home')
            commons.subMenu('Design Folder');
            cy.hold(2)
            designFolder.addDesignFolder(fakeUserData.folderName)
            designFolder.navigateToFolder(fakeUserData.folderName)

            //create subfolder
            designFolder.createSubFolder()
            cy.getBySel(productPage.notice_body, { timeout: 10000 }).should('be.visible')

        })
        it("ARC40 - User wants to Rename subfolder", () => {
            const { environment, user_archi_1, password_archi_id } = userdata.user_data
            pages.loginToArchify(environment, user_archi_1, password_archi_id)
            cy.url().should('include', '/id/member/home')
            commons.subMenu('Design Folder');
            designFolder.navigateToFolder(fakeUserData.folderName)

            //rename subfolder
            designFolder.renameSubFolder()
        })
        it("ARC41 - User wants to Duplicate subfolder", () => {
            const { environment, user_archi_1, password_archi_id } = userdata.user_data
            pages.loginToArchify(environment, user_archi_1, password_archi_id)
            cy.url().should('include', '/id/member/home')
            commons.subMenu('Design Folder');
            designFolder.navigateToFolder(fakeUserData.folderName)
            // duplicate
            designFolder.duplicateSubFolder()
        })
        it("ARC42 - User wants to Upload Image subfolder", () => {
            const { environment, user_archi_1, password_archi_id } = userdata.user_data
            pages.loginToArchify(environment, user_archi_1, password_archi_id)
            cy.url().should('include', '/id/member/home')
            commons.subMenu('Design Folder');
            designFolder.navigateToFolder(fakeUserData.folderName)

            designFolder.selectSubFolder()
            designFolder.uploadImage()

            cy.getBySel(productPage.notice_body, { timeout: 10000 }).should('be.visible')
        })
    })


    context("Share and Upload", { testIsolation: true }, () => {
        let userdata
        beforeEach(() => {
            cy.fixture('user-data.json').then((user) => {
                userdata = user;
            });

        })
        it("ARC38 - User wants to Share", () => {
            const { environment, user_archi_1, password_archi_id } = userdata.user_data
            pages.loginToArchify(environment, user_archi_1, password_archi_id)
            cy.url().should('include', '/id/member/home')
            commons.subMenu('Design Folder');
            designFolder.deleteExistFolder(fakeUserData.folderName)
            designFolder.addDesignFolder(fakeUserData.folderName)
            designFolder.shareFolder(fakeUserData.folderName)

        })
        it("ARC38 - User wants to Upload Image", () => {
            const { environment, user_archi_1, password_archi_id } = userdata.user_data
            pages.loginToArchify(environment, user_archi_1, password_archi_id)
            cy.url().should('include', '/id/member/home')
            commons.subMenu('Design Folder');
            designFolder.deleteExistFolder(fakeUserData.folderName)
            designFolder.addDesignFolder(fakeUserData.folderName)
            designFolder.navigateToFolder(fakeUserData.folderName)
            designFolder.uploadImage()


            cy.getBySel(productPage.notice_body, { timeout: 10000 }).should('be.visible')

        })
    })
})