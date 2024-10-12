import pages from "../../support/pages/login";
import propertyowner from "../../support/pages/property-owner";
import {common, designFolderPage, productPage, savedCompaniesPage} from "../../support/locator/locators";
import designFolder from "../../support/pages/design-folder";
import brands from "../../support/pages/brands-page";
import commons from "../../support/pages/commons";
describe("Companies", { testIsolation: true }, () => {
    let userdata
    beforeEach(() => {
        cy.fixture('user-data.json').then((user) => {
            userdata = user;
        });

    })
    it("ARC54 - User wants to Saved Companies", () => {
        const {environment, user_archi_1, password_archi_id} = userdata.user_data
        pages.loginToArchify(environment, user_archi_1, password_archi_id)
        cy.url().should('include', '/id/member/home')
        const checkUrlContains = (expectedPath) => {
            cy.url().should('include', expectedPath);
        }
        commons.subMenu('Saved Companies');


    })
    it("ARC55 - User wants to Design Professional Details", () => {
        const {environment, user_archi_1, password_archi_id} = userdata.user_data
        pages.loginToArchify(environment, user_archi_1, password_archi_id)
        cy.url().should('include', '/id/member/home')
        const checkUrlContains = (expectedPath) => {
            cy.url().should('include', expectedPath);
        };
        commons.subMenu('Saved Companies');
        cy.getBySel(savedCompaniesPage.professional_categories).should('be.visible').click()
        designFolder.navigateToDesignProfesional('Musto Tresnahadi')
        cy.go('back')
        cy.getBySel(savedCompaniesPage.professional_list).contains('HG Architects').click()
    })
    it("ARC56 - User wants to see Brands supplier Saved Companies", () => {
        const {environment, user_archi_1, password_archi_id} = userdata.user_data
        pages.loginToArchify(environment, user_archi_1, password_archi_id)
        cy.url().should('include', '/id/member/home')
        const checkUrlContains = (expectedPath) => {
            cy.url().should('include', expectedPath);
        }
        commons.subMenu('Saved Companies');
        cy.getBySel(savedCompaniesPage.supplier_categories).click()
    })
    it("ARC57 - User wants to see Supplier Details", () => {
        const {environment, user_archi_1, password_archi_id} = userdata.user_data
        pages.loginToArchify(environment, user_archi_1, password_archi_id)
        cy.url().should('include', '/id/member/home')
        const checkUrlContains = (expectedPath) => {
            cy.url().should('include', expectedPath);
        }
        commons.subMenu('Saved Companies');
        cy.getBySel(savedCompaniesPage.brand_list).contains('JOTUN').click()
    })
    it("ARC58 - User wants to sort Saved Companies", () => {
        const {environment, user_archi_1, password_archi_id} = userdata.user_data
        pages.loginToArchify(environment, user_archi_1, password_archi_id)
        cy.url().should('include', '/id/member/home')
        const checkUrlContains = (expectedPath) => {
            cy.url().should('include', expectedPath);
        }
        commons.subMenu('Saved Companies');
        cy.hold(5)
        propertyowner.sortBySavedCompanies()
    })
    it("ARC59 - User wants to Remove Design Professional Saved Companies", () => {
        const {environment, user_archi_1, password_archi_id} = userdata.user_data
        pages.loginToArchify(environment, user_archi_1, password_archi_id)
        cy.url().should('include', '/id/member/home')
        const checkUrlContains = (expectedPath) => {
            cy.url().should('include', expectedPath);
        };
        commons.subMenu('Saved Companies');
        cy.getBySel(savedCompaniesPage.professional_categories).should('be.visible').click()
        cy.hold(2)
        propertyowner.deleteDesignSavedCompanies('Musto Tresnahadi')
    })
    it("ARC60 - User wants to Remove Brands Saved Companies", () => {
        const {environment, user_archi_1, password_archi_id} = userdata.user_data
        pages.loginToArchify(environment, user_archi_1, password_archi_id)
        cy.url().should('include', '/id/member/home')
        const checkUrlContains = (expectedPath) => {
            cy.url().should('include', expectedPath);
        };
        commons.subMenu('Saved Companies');
        cy.hold(2)
        cy.getBySel(savedCompaniesPage.supplier_categories).click()
        cy.hold(2)
        propertyowner.deleteBrandsSavedComapnies('JOTUN')
    })

})