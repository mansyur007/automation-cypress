import pages from "../../support/pages/login";
import propertyowner from "../../support/pages/property-owner";
import {carausel, common, productPage} from "../../support/locator/locators";
import brands from "../../support/pages/brands-page";
import commons from "../../support/pages/commons";
describe("My Library", { testIsolation: true }, () => {
  let userdata
  beforeEach(() => {
    cy.fixture('user-data.json').then((user) => {
      userdata = user;
    });

  })
  it("ARC29 - User wants to navigate in My Library", () => {
    const {environment, user_archi_1, password_archi_id} = userdata.user_data
    pages.loginToArchify(environment, user_archi_1, password_archi_id)
    cy.url().should('include', '/id/member/home')
    const checkUrlContains = (expectedPath) => {
      cy.url().should('include', expectedPath);
    };
    commons.subMenu('My Library');
    checkUrlContains('/id/member/my_library');
    // search product
    propertyowner.searchProduct('INDOGRESS')
    // collapse category
    propertyowner.colapseCategory()
    propertyowner.colapseCategory()
    //click category
    propertyowner.selectCategory('Blinds, Shutters & Screens')
    //click All Categories
    propertyowner.selectCategory('All Categories')
    //collapse item
    propertyowner.colapseBrand()
    propertyowner.colapseBrand()
    //click brands name
    propertyowner.selectTopRowBrand()
    //click all brands
    propertyowner.selectAllBrands()
    //compare products
    propertyowner.compareItem()
    cy.go('back')
    // click remove from my library
    propertyowner.clickRibbon()
    //add to design folder
    propertyowner.addToDesignFolder('DESIGN 1')
    // sort item
    brands.sortItemASC()
    cy.hold()
    brands.sortItemDESC()
    // select button
    propertyowner.select2items()
  })
})
