import pages from "../../support/pages/login";
import propertyowner from "../../support/pages/property-owner";
import specsheet from "../../support/pages/specsheet";
import commonsteps from "../../support/pages/commons";
import { fakeUserData } from '../../support/fakeData';
import { productPage, specsheetPage } from "../../support/locator/locators";
import dashboard from "../../support/pages/dashboard";
import commons from "../../support/pages/commons";

describe("Specsheet", () => {
    let userdata
    beforeEach(() => {
        cy.fixture('user-data.json').then((user) => {
            userdata = user;
        });
    })

    context('Specsheet Isolation Test', { testIsolation: true }, () => {
        it('ARC45 - User wants to create New Specsheet', () => {
            const { environment, user_archi_1, password_archi_id } = userdata.user_data
            pages.loginToArchify(environment, user_archi_1, password_archi_id)
            cy.url().should('include', '/id/member/home')
            commons.subMenu('Specsheet');
            cy.hold(3)
            specsheet.createSpecsheet(fakeUserData.folderName, 'DESIGN 1')
            cy.assertElementContainsText(specsheetPage.title_specsheet, fakeUserData.folderName)

            cy.go('back')
            commons.subMenu('Specsheet');
        });
        it('ARC46 - User wants to add specsheet details', () => {
            const { environment, user_archi_1, password_archi_id } = userdata.user_data
            pages.loginToArchify(environment, user_archi_1, password_archi_id)
            cy.url().should('include', '/id/member/home')
            commons.subMenu('Specsheet');
            cy.hold(3)
            specsheet.search(fakeUserData.folderName)
            specsheet.select(fakeUserData.folderName)
            cy.hold(3)
            specsheet.addNoteleft(fakeUserData.left_notes, fakeUserData.left_desc)
            specsheet.addNoteRight(fakeUserData.right_notes, fakeUserData.right_desc)
            specsheet.addProduct('Nyx')
            cy.assertElementContainsText(productPage.notice_body, 'success')
            specsheet.uploadProduct()
            cy.hold(3)
            commonsteps.addItem()
            cy.hold(5)
            cy.getBySel(specsheetPage.wrapper_specsheet)
                .find('li[id^="productList"]')
                .last()
                .within(() => {
                    specsheet.addGeneralSpec('general', 'this maybe temp spec')
                    specsheet.deleteGeneralSpec()
                    specsheet.addAnnotation('may anno')
                    specsheet.selectContentTriDots('Add Divider Above')
                    specsheet.selectContentTriDots('Add Divider Below')
                });
            cy.getBySel(specsheetPage.wrapper_specsheet)
                .find('.specsheet-item.divider')
                .first()
                .within(() => {
                    specsheet.editDivider('Top Divider')
                })
            cy.getBySel(specsheetPage.wrapper_specsheet)
                .find('.specsheet-item.divider')
                .last()
                .within(() => {
                    specsheet.editDivider('Bottom Divider')
                    specsheet.deleteDivider()
                })
            cy.hold(2)
            commonsteps.confirmOK()
            cy.getBySel(specsheetPage.wrapper_specsheet)
                .find('li[id^="productList"]')
                .last()
                .within(() => {
                    specsheet.collapeItem()
                    specsheet.selectContentTriDots('Remove')
                });
            cy.hold(2)
            commonsteps.confirmOK()
        });
        it('ARC47 - User wants to sort specsheets', () => {
            const { environment, user_archi_1, password_archi_id } = userdata.user_data
            pages.loginToArchify(environment, user_archi_1, password_archi_id)
            cy.url().should('include', '/id/member/home')
            commons.subMenu('Specsheet');
            cy.hold(3)
            const sortColumn = (columnName) => {
                cy.getBySel(specsheetPage.tr_row).contains(columnName).click();
                cy.getBySel(specsheetPage.sort_asc).should('be.visible');

                cy.getBySel(specsheetPage.tr_row).contains(columnName).click();
                cy.getBySel(specsheetPage.sort_desc).should('be.visible');
            };
            const columns = [
                'Specsheets',
                'Design Folders',
                'Created By',
                'Last Update By',
                'Created Date',
                'Update Date'
            ];
            columns.forEach(columnName => {
                sortColumn(columnName);
            });
        })
    })
    context('Specsheet edit - remove ', () => {
        it("ARC50 - User wants to edit specsheet", () => {
            cy.clearCookies()
            const { environment, user_archi_1, password_archi_id } = userdata.user_data
            pages.loginToArchify(environment, user_archi_1, password_archi_id)
            cy.url().should('include', '/id/member/home')
            commons.subMenu('Specsheet');
            specsheet.search(fakeUserData.folderName)
            specsheet.triDotSpecsheet('Edit Specsheet')
            cy.hold(5)
            specsheet.renameSpec(fakeUserData.right_notes)
            cy.hold(3)
            cy.assertElementContainsText(specsheetPage.title_specsheet, fakeUserData.right_notes)
            cy.go('back')
        })
        it("ARC51 - User wants to remove specsheet", () => {
            commons.subMenu('Specsheet');
            specsheet.search(fakeUserData.folderName)
            specsheet.removeSpecFirstRow()
            cy.hold(2)
            commonsteps.confirmOK()
        })
    })
    it("ARC47 - User wants to Search Specsheet", () => {
        cy.clearCookies()
        const { environment, user_archi_1, password_archi_id } = userdata.user_data
        pages.loginToArchify(environment, user_archi_1, password_archi_id)
        cy.url().should('include', '/id/member/home')

        commons.subMenu('Specsheet');
        specsheet.search('House Planning')
        specsheet.select('House Planning')
    })

    it("ARC49 - User wants to preview specsheets", () => {
        specsheet.preview()
        cy.go('back')
    })

    it("ARC52 - User wants to download specsheet", () => {
        specsheet.search('House Planning')
        specsheet.download('excel')
        specsheet.download('one per sheet')
    })

    it("ARC53 - User wants to change view per page", () => {
        cy.reload()
        cy.hold()
        specsheet.changeViewPerPage('25')
    })
})