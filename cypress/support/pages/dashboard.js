import {
    drawingFiles,
    categoriesPage,
    articlesPage,
    brandPage,
    headerUserMenu,
    professionalsPage,
    projectsPage,
    productPage,
    common,
    homePage,
    searchResultPage,
    labelManufacturer,
    countryManufacturer,
    homeMemberPage
} from '../locator/locators'
import { user_data } from '../../fixtures/user-data.json'
class dashboardArchify {

    logoutArchify() {
        cy.getBySel(headerUserMenu.usermenu_button, { timeout: 10000 }).should('be.visible').click()
        cy.getBySel(headerUserMenu.logout_button, { timeout: 10000 }).should('be.visible').click()
    }
    checkInbox() {
        cy.getBySel(headerUserMenu.message_button, { timeout: 10000 }).should('be.visible').click()
    }

    selectLanguange(lang) {
        cy.getBySel(headerUserMenu.select_language_button).should('be.visible').click()
        cy.getBySel(headerUserMenu.select_language_container).contains(lang).should('be.visible').click()
    }

    searchFromHomePage(keyword) {
        cy.getBySel(homePage.search_input).type(keyword).type('{enter}')
        cy.hold()
        cy.getBySel(searchResultPage.search_result_page_header).should('contain', keyword)
    }

    validateNews() {
        cy.url().then((url) => {
            if (url.includes('/id')) {
                cy.getBySel(homePage.news_container).should('be.visible')
            } else if (url.includes('/au')) {
                cy.getBySel(homePage.news_container).should('not.be.exist')
            }
        })
    }    

    navProduct() {
        cy.getBySel(headerUserMenu.nav_button).contains('Product').should('be.visible').click()
        cy.hold()
        cy.getBySel(productPage.product_container).should('be.visible', { timeout: 40000 }).log('have product container')
        cy.getBySel(productPage.product_img).should('be.visible').log('have product image')
        cy.getBySel(productPage.product_title).should('be.visible').log('have product title')
    }

    navBrands() {
        cy.getBySel(headerUserMenu.nav_button).contains('Brands').should('be.visible').click()
        cy.getBySel(productPage.product_container).should('be.visible', { timeout: 40000 }).log('have brand container')
        cy.getBySel(brandPage.brand_img).should('be.visible').log('have brand image')
        cy.getBySel(brandPage.brand_name).should('be.visible').log('have brand name')
    }

    navBrandsCategory(categories, subcategory) {
        switch (categories) {
            case 'Accessibility':
                cy.getBySel(brandPage.brand_accessibility).should('be.visible').click()
                if (subcategory === "All Accessibility") {
                    cy.getBySel(brandPage.brand_sub_accessibility).should('be.visible').click({ force: true, multiple: true })
                }
                break
            case 'Bathroom':
                cy.getBySel(categoriesPage.main_bathroom).should('be.visible').click()
                if (subcategory === "Fitting") {
                    cy.getBySel(categoriesPage.sub_fitting).should('be.visible').click({ force: true, multiple: true })
                }
        }
    }

    brandProduct(product) {
        switch (product) {
            case 1:
                cy.getBySel(brandPage.brand_product_item).should('be.visible').first().find('a').first().click({ force: true })
                break
        }

    }

    navProfessionals() {
        cy.getBySel(headerUserMenu.nav_button).contains('Professionals').should('be.visible').click()
        cy.getBySel(professionalsPage.proffessinals_container).should('be.visible').log('have professionals container')
        cy.getBySel(professionalsPage.professionals_img).should('be.visible').log('have professionals image')
        cy.getBySel(professionalsPage.professionals_name).should('be.visible').log('have professionals name')
    }

    navProjects() {
        cy.getBySel(headerUserMenu.nav_button).contains('Projects').should('be.visible').click()
        cy.getBySel(projectsPage.projects_container).should('be.visible').log('have projects container')
        cy.getBySel(projectsPage.projects_img).should('be.visible').log('have projects image')
        cy.getBySel(projectsPage.projects_name).should('be.visible').log('have projects name')
    }

    navEvents() {
        cy.getBySel(headerUserMenu.nav_button).contains('Events').should('be.visible').click()
        cy.url().should('include', '/events')
    }

    navArticles() {
        cy.getBySel(headerUserMenu.nav_button).contains('Articles').should('be.visible').click()
        cy.getBySel(articlesPage.articles_container).should('be.visible').log('have projects container')
        cy.getBySel(articlesPage.articles_img).should('be.visible').log('have projects container')
        cy.getBySel(articlesPage.articles_head_title).should('be.visible').log('have projects container')
    }

    navEducation() {
        cy.getBySel(headerUserMenu.nav_button).contains('Education').should('be.visible').click()
        cy.getBySel(common.h1).should('contain', 'CPD Courses')
    }

    navArchifySpec() {
        const { environment_archify_spec } = user_data
        cy.getBySel(headerUserMenu.nav_button).contains('ArchifySpec').should('be.visible').invoke('attr', 'href').then((href) => {
            return href
        }).should('eq', Cypress.env(environment_archify_spec))
        cy.getBySel(headerUserMenu.nav_button).contains('ArchifySpec').should('be.visible').click()
        cy.hold(2)
    }

    selectDropdownExplore(menu) {
        cy.hold()
        cy.getBySel(headerUserMenu.explore_dropdown_button).should('be.visible').click()
        cy.getBySel(headerUserMenu.explore_dropdown_container)
            .should('be.visible')
            .should('contain', 'Professionals')
            .should('contain', 'Projects')
            .should('contain', 'Inspiration')
            .contains(menu).click()
    }

    selectCategory(category) {
        cy.getBySel(headerUserMenu.category_container).contains(category, { matchCase: false }).should('be.visible').click()
        cy.getBySel(common.h1).should('contain', category)
    }

    browseProducts() {
        cy.getBySel(homePage.browse_products_button).should('be.visible').click()
        cy.getBySel(productPage.product_container).should('be.visible').log('have product container')
        cy.getBySel(productPage.product_img).should('be.visible').log('have product image')
        cy.getBySel(productPage.product_title).should('be.visible').log('have product title')
    }

    browseBrands() {
        cy.getBySel(homePage.browse_brands_button).should('be.visible').click()
        cy.getBySel(productPage.product_container).should('be.visible').log('have brand container')
        cy.getBySel(brandPage.brand_img).should('be.visible').log('have brand image')
        cy.getBySel(brandPage.brand_name).should('be.visible').log('have brand name')
    }
    tickSustainable() {
        cy.getBySel(searchResultPage.sustainable_checkbox).should('be.visible').click()
    }

    searchKeyword(keyword) {
        cy.getBySel(searchResultPage.search_keyword).should('be.visible').type(`${keyword}{enter}`)
    }
    clearKeyword() {
        cy.getBySel(searchResultPage.search_keyword).should('be.visible').clear()
    }
    searchManufacturer(manufacturer) {
        cy.getBySel(searchResultPage.search_manufacturer3).should('be.visible').type(`${manufacturer}{enter}`)
    }
    clearManufacturer() {
        cy.getBySel(searchResultPage.search_manufacturer3).should('be.visible').clear()
    }
    select1Manufacturer(manufacturer) {
        cy.getBySel(labelManufacturer.top_row_lvl3_item).first().click({ force: true })
    }
    selectDrawingFiles(checkbox) {
        switch (checkbox) {
            case 'Others':
                cy.getBySel(drawingFiles.label_others).should('be.visible').click()
                break
            case 'Step':
                cy.getBySel(drawingFiles.label_step).eq(1).should('be.visible').click()
                break
        }
    }
    selectCountryManufacturer(country) {
        cy.getBySel(countryManufacturer.dropdown_country_manufacturer).should('be.visible').click()
        cy.getBySel(countryManufacturer.search_country_manufacturer).type(`${country}{enter}`)
    }


    validateMenuByCountry(country) {
        switch (country) {
            case 'Australia':
                let menuListNz = ['Products', 'Brands', 'Education', 'Events', 'Articles', 'ArchifySpec']
                menuListNz.forEach((menuItem, index) => {
                    cy.getBySel(headerUserMenu.nav_button).find('li').eq(index).find('a').invoke('text').then((text) => {
                        // Assert that the text matches the corresponding item in the menuListNz array
                        expect(text.trim()).to.equal(menuItem);

                        cy.log(text);
                    })
                })
                break

            case 'New Zealand':
                let menuListAu = ['Products', 'Brands', 'Education', 'Events', 'Articles']
                menuListAu.forEach((menuItem, index) => {
                    cy.getBySel(headerUserMenu.nav_button).find('li').eq(index).find('a').invoke('text').then((text) => {
                        // Assert that the text matches the corresponding item in the menuListNz array
                        expect(text.trim()).to.equal(menuItem);

                        cy.log(text)
                    })
                })
                break
        }
    }

    selectSubMenu(sub_menu) {
        cy.getBySel(homeMemberPage.sub_menu_container).contains(sub_menu).should('be.visible').click()
        cy.hold()
    }

}

export default new dashboardArchify();