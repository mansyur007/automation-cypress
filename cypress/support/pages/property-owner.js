import {
    carausel,
    common,
    designFolderPage,
    myLibrabryPage,
    productPage, projectsPage,
    savedCompaniesPage
} from './../locator/locators'
class propertyOwner {

    viewAllFeaturedProduct(){
        cy.intercept('GET', '/catalog/product/s/*', (req) => {
            console.log(`Intercepted request to: ${req.url}`);
        }).as('imageRequest');
        cy.getBySel(productPage.featured_product, { timeout: 10000 }).contains('View All Products').should('be.visible').click()
        cy.url().should('include', '/id/products')
        cy.wait('@imageRequest',{ timeout: 30000 }).its('response.statusCode').then((statusCode) => {
            expect([200, 301 , 304]).to.include(statusCode);
        });
    }
    selectFeaturedProduct(){
        cy.getBySel(productPage.featured_product, { timeout: 10000 })
            .find(common.container_feature)
            .find(common.feature_carausel)
            .find(common.carausel)
            .find(common.slick_list)
            .find(common.slick_track)
            .find(productPage.index_data_featured_product_1)
            .find(common.text_area)
            .find(projectsPage.projects_name)
            .should('be.visible')
            .click();
    }
    compareProduct(){
        cy.getBySel(productPage.index_data_featured_product_1, { timeout: 10000 })
            .find(common.image_wrapper)
            .find(common.design_hov_com)
            .find(common.cta_button_img)
            .click()
        cy.getBySel(productPage.index_data_featured_product_2, { timeout: 10000 })
            .find(common.image_wrapper)
            .find(common.design_hov_com)
            .find(common.cta_button_img)
            .click()
        cy.intercept('POST', '/id/gpost/comparison/data_comparison_v3').as('postComparisonData');
        cy.get(myLibrabryPage.bottom_page).contains('Compare').click()
        cy.wait('@postComparisonData', { timeout: 30000 }).its('response.statusCode').should('eq', 200);
    }
    addToLibrary(){
        cy.getBySel(productPage.index_data_featured_product_1, { timeout: 10000 })
            .find(common.image_wrapper)
            .find(common.button_star)
            .then($buttonStar => {
                const $iconStarOn = $buttonStar.find(common.library_hov_on).find(common.visible_icon_star_on)
                if ($iconStarOn.length > 0) {
                    cy.wrap($iconStarOn).click();
                } else {
                    cy.wrap($buttonStar).find(common.library_hov_off).find(common.icon_star_off).click();
                }
            });
    }
    removeFromLibrary(){
        cy.getBySel(productPage.index_data_featured_product_1, { timeout: 10000 })
            .find(common.image_wrapper)
            .find(common.button_star)
            .then($buttonStar => {
                const $iconStarOff = $buttonStar.find(common.library_hov_off).find(common.visible_icon_star_off)
                if ($iconStarOff.length > 0) {
                    cy.wrap($iconStarOff).click();
                } else {
                    cy.wrap($buttonStar).find(common.library_hov_on).find(common.icon_star_on).click();
                }
            });
    }
    slickCarausel(){
        cy.getBySel(carausel.project_feature).scrollIntoView()
            .find(carausel.slick_next)
            .click({ duration: 2000 });
        cy.getBySel(carausel.project_feature).scrollIntoView()
            .find(carausel.slick_previous)
            .click({ duration: 2000 });

        cy.getBySel(carausel.latest_article).scrollIntoView()
            .find(carausel.slick_next)
            .click({ duration: 2000 });
        cy.getBySel(carausel.latest_article).scrollIntoView()
            .find(carausel.slick_previous)
            .click({ duration: 2000 });

        cy.getBySel(carausel.product_updates).scrollIntoView()
            .find(carausel.slick_next)
            .click({ duration: 2000 });
        cy.getBySel(carausel.product_updates).scrollIntoView()
            .find(carausel.slick_previous)
            .click({ duration: 2000 });

        cy.getBySel(productPage.featured_product).scrollIntoView()
            .find(carausel.slick_next)
            .click({ duration: 2000 });
        cy.getBySel(productPage.featured_product).scrollIntoView()
            .find(carausel.slick_previous)
            .click({ duration: 2000 });
    }
    searchProduct(name){
        cy.intercept('POST', '/id/gpost/member/get_product_mylibrary/all-category').as('postComparisonData');
        cy.getBySel(myLibrabryPage.search_field).click()
        cy.wait('@postComparisonData', { timeout: 30000 }).its('response.statusCode').should('eq', 200)
        cy.getBySel(myLibrabryPage.search_field).type(`${name}{enter}`)
    }
    colapseCategory(){
        cy.getBySel(myLibrabryPage.collapse_category_button).click()
        cy.hold()
    }
    colapseBrand(){
        cy.getBySel(myLibrabryPage.collapse_brand_button).click()
        cy.hold()
    }

    selectCategory(category){
        cy.getBySel(myLibrabryPage.select_product_category).contains(category).click()
        cy.hold()
    }
    selectTopRowBrand(){
        cy.getBySel(myLibrabryPage.top_row_brands).click()
    }
    selectAllBrands(){
        cy.getBySel(myLibrabryPage.all_brands).click()
    }
    compareItem(){
        cy.getBySel(myLibrabryPage.item_row_1)
            .should('be.visible')
            .trigger('mouseover')
            .then(($img) => {
                const $productItem = $img.closest(common.product_item);
                cy.wrap($productItem).find(myLibrabryPage.compare_icon)
                    .click({force:true});
            })
        cy.getBySel(myLibrabryPage.item_row_2)
            .should('be.visible')
            .trigger('mouseover')
            .then(($img) => {
                const $productItem = $img.closest(common.product_item);
                cy.wrap($productItem).find(myLibrabryPage.compare_icon)
                    .click({force:true});
            })
        cy.intercept('POST', '/id/gpost/comparison/data_comparison_v3').as('postComparisonData');
        cy.getBySel(myLibrabryPage.bottom_page).contains('Compare').click()
        cy.wait('@postComparisonData', { timeout: 30000 }).its('response.statusCode').should('eq', 200);
    }
    clickRibbon(){
        cy.getBySel(myLibrabryPage.item_row_1)
            .should('be.visible')
            .trigger('mouseover')
            .then(($img) => {
                const $productItem = $img.closest(common.product_item);
                cy.wrap($productItem).find(myLibrabryPage.ribbon_button)
                // .click({force:true}); // this action need run test suite add product name TOSO and INDOGRESS to my library
            })
    }
    addToDesignFolder(designname){
        cy.getBySel(myLibrabryPage.item_row_2)
            .should('be.visible')
            .trigger('mouseover')
            .then(($img) => {
                const $productItem = $img.closest(common.product_item);
                cy.wrap($productItem).find(myLibrabryPage.add_design_button)
                    .click({force:true});
            })

        cy.getBySel(myLibrabryPage.board_modal).contains(designname).click()
    }
    select2items(){
        cy.getBySel(myLibrabryPage.select_button).click()
        cy.getBySel(myLibrabryPage.item_selected_tick_1).click()
        cy.getBySel(myLibrabryPage.item_selected_tick_2).click()
        cy.getBySel(myLibrabryPage.remove_all_item_buttom).click()
        cy.getBySel(myLibrabryPage.modal_dialog).contains('Cancel').should('be.visible').click()
    }
    deleteDesignSavedCompanies(designer){
        cy.getBySel(common.h1).eq(0).click({ force: true })
        cy.getBySel(designFolderPage.design_folder_box)
            .contains(designer)
            .should('be.visible')
            .parents(designFolderPage.design_folder_box)
            .within(() => {
                cy.getBySel(savedCompaniesPage.delete_item_design).invoke('show')
                    .find(savedCompaniesPage.close_icon_button)
                    .click();
            });
    }
    deleteBrandsSavedComapnies(brands){
        cy.getBySel(common.h1).eq(0).click({ force: true })
        cy.getBySel(designFolderPage.design_folder_box)
            .contains(brands)
            .should('be.visible')
            .parents(designFolderPage.design_folder_box)
            .within(() => {
                cy.getBySel(savedCompaniesPage.delete_item_supplier).invoke('show')
                    .find(savedCompaniesPage.close_icon_button)
                    .click();
            });
    }
    sortBySavedCompanies(){
        cy.getBySel(designFolderPage.sort_button).should('be.visible').click()
        cy.getBySel(savedCompaniesPage.sort_2).click()
        cy.getBySel(designFolderPage.sort_button).should('be.visible').click()
        cy.hold()
        cy.getBySel(savedCompaniesPage.sort_1).click()
        cy.getBySel(designFolderPage.sort_button).should('be.visible').click()
        cy.hold()
        cy.getBySel(savedCompaniesPage.sort_3).click()
    }



}
export default new propertyOwner()
