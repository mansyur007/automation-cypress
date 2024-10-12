import pages from "../../support/pages/login";
import propertyowner from "../../support/pages/property-owner";
import {carausel, common, productPage} from "../../support/locator/locators";
import commons from "../../support/pages/commons";
describe("Home Feed", { testIsolation: true }, () => {
    let userdata
    beforeEach(() => {
        cy.fixture('user-data.json').then((user) => {
            userdata = user;
        });

    })
    it("ARC28 - User wants to navigate in Home Feed", () => {
        const {environment, user_archi_1, password_archi_id} = userdata.user_data
        pages.loginToArchify(environment, user_archi_1, password_archi_id)
        cy.url().should('include', '/id/member/home')
        const checkUrlContains = (expectedPath) => {
            cy.url().should('include', expectedPath);
        };
        const menuItems = [
            { name: 'My Library', expectedPath: '/id/member/my_library' },
            { name: 'Home Feed', expectedPath: '/id/member/home' },
            { name: 'Design Folder', expectedPath: '/id/designfolders' },
            { name: 'Home Feed', expectedPath: '/id/member/home' },
            { name: 'Moodboard', expectedPath: '/id/member/moodboards' },
            { name: 'Home Feed', expectedPath: '/id/member/home' },
            { name: 'Specsheet', expectedPath: '/id/specsheet' },
            { name: 'Home Feed', expectedPath: '/id/member/home' },
            { name: 'Saved Companies', expectedPath: '/id/member/professional_saved' },
            { name: 'Home Feed', expectedPath: '/id/member/home' },
            { name: 'My Account', expectedPath: '/id/member/settings' },
            { name: 'Home Feed', expectedPath: '/id/member/home' },
        ];
        menuItems.forEach((item) => {
            commons.subMenu(item.name);
            checkUrlContains(item.expectedPath);
            cy.hold(2)
        })
        //view all featured product
        propertyowner.viewAllFeaturedProduct()
        cy.go('back')
        menuItems.forEach((item, index) => {
            if (item.name === 'Home Feed') {
                commons.subMenu(item);
                checkUrlContains(item.expectedPath);
            }
        })
        // click feature product
        propertyowner.selectFeaturedProduct()
        cy.go('back')
        menuItems.forEach((item, index) => {
            if (item.name === 'Home Feed') {
                commons.subMenu(item);
                checkUrlContains(item.expectedPath);
            }
        })
        // product compare
       propertyowner.compareProduct()
        cy.go('back')
        menuItems.forEach((item, index) => {
            if (item.name === 'Home Feed') {
                commons.subMenu(item);
                checkUrlContains(item.expectedPath);
            }
        })
        // add and remove to library
        propertyowner.addToLibrary()
        cy.getBySel(productPage.notice_body, { timeout: 10000 })
        cy.hold(3)
        propertyowner.removeFromLibrary()
        //slick my boi
        propertyowner.slickCarausel()
    })
})

