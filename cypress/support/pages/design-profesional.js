import {
    branchOfficePage,
    designFolderPage,
    designProfesionalPage,
    designProjectPage,
    headOfficePage,
    homeMemberPage,
    specsheetPage,
    tagsPage,
    projectPage,
    productPage,
    accreditationsPage,
    analyticsPage,
    moodboardPage,
    companyUpdates,
    companySettings, iframeLocator
} from '../locator/locators';
import { getFormattedDate } from '../function/utils'
import { user_data } from '../../fixtures/user-data.json'
import fileUpload from "./file-upload";
class designProfesional {
    companyContact() {
        cy.getBySel(homeMemberPage.manage_company).should('be.visible').click()
        cy.getBySel(homeMemberPage.sub_menu_company_container).contains('Contact').should('be.visible').click()
        cy.getBySel(designProfesionalPage.head_office_container).should('be.visible')
        cy.getBySel(designProfesionalPage.branch_office_container).should('be.visible')
    }

    /*
    use this avoid redundant code
     */
    performAction(selector) {
        cy.getBySel(selector).should('be.visible').click();
    }

    myCompany() {
        cy.hold()
        this.performAction(homeMemberPage.manage_company);
    }

    backToPersonal() {
        cy.hold()
        this.performAction(homeMemberPage.manage_company);
    }

    company() {
        cy.getBySel(homeMemberPage.manage_company).should('be.visible').click()
    }

    createNewProject() {
        cy.getBySel(designProjectPage.create_new_project_btn).should('be.visible').click()
    }
    projectName(projectname) {
        cy.getBySel(designProjectPage.project_name).type(projectname)
    }
    projectType(projecttype) {
        cy.getBySel(designProjectPage.field_project_type).click()
        cy.getBySel(designProjectPage.dropdown_project_type).type(projecttype)
        cy.getBySel(designProjectPage.value_project_type).contains(projecttype, { matchCase: true }).click()
    }
    projectAddress(address) {
        cy.getBySel(designProjectPage.field_project_location).type(address)
    }
    projectLocation(city) {
        cy.getBySel(designProjectPage.field_project_city).click()
        cy.getBySel(designProjectPage.dropdown_project_city).type(city)
        cy.getBySel(designProjectPage.value_project_city).contains(city, { matchCase: true }).click()
    }
    projectDescription(description) {
        cy.typeInIframe(iframeLocator.txt_area_iframe, description);
    }
    projectDesignStyle(style) {
        cy.getBySel(designProjectPage.field_project_style).type(`${style}{enter}`)
    }
    projectAreaSize(size) {
        cy.getBySel(designProjectPage.field_project_area).type(size)
    }
    projectArchitect(name) {
        cy.getBySel(designProjectPage.field_project_architect).type(name)
    }
    projectContractor(name) {
        cy.getBySel(designProjectPage.field_project_contractor).type(name)
    }
    projectPhotographer(name) {
        cy.getBySel(designProjectPage.field_project_photographer).type(name)
    }
    addProduct() {
        cy.getBySel(designProjectPage.btn_add_product).click()
        cy.hold(3)
    }
    searchProduct(name) {
        cy.getBySel(designProjectPage.field_search_product).type(`${name}{enter}`)
        cy.hold(3)
    }
    addToProject() {
        cy.getBySel(designProjectPage.btn_add_product_project).click()
    }
    uploadCover() {
        fileUpload.uploadMockFile(designProjectPage.upload_cover, 'cypress/fixtures/image_2.png')
        // cy.getBySel(designProjectPage.upload_cover)
        //     .find('input[type="file"]').selectFile('cypress/fixtures/image_2.png', { force: true });
    }
    clickResultOption() {
        cy.getBySel(designProjectPage.form_upload_edit).contains('Please Select Room Area').click()
    }
    selectRoomArea(area) {
        cy.getBySel(designProjectPage.result_option).contains(area).click()
    }
    selectColour(colour) {
        cy.getBySel(designProjectPage.form_upload_edit)
            .contains('Please Select Colour')
            .click()
            .then(() => {
                cy.getBySel(designProjectPage.result_option)
                    .contains(colour)
                    .click();
            });
    }
    createNewProjectCover() {
        fileUpload.uploadMockFile(designProjectPage.upload_project, 'cypress/fixtures/image_2.png')
        // cy.getBySel(designProjectPage.upload_project)
        //     .find(designFolderPage.file_locator).selectFile('cypress/fixtures/image_2.png', { force: true });
        this.clickResultOption()
        this.selectRoomArea('Bedroom')
        this.selectColour('Grey')
    }
    actionProjectButton(name) {
        cy.getBySel(designProjectPage.button_action_from).contains(name).click()
    }

    projectStatus(status) {
        cy.getBySel(designProjectPage.wrapper_project_status).contains(status).click()
    }
    getProjectLocation(location) {
        cy.getBySel(designProjectPage.wrapper_project_location).contains(location).click()
    }
    getProjectCategories(categories) {
        cy.getBySel(designProjectPage.wrapper_project_categories).contains(categories).click()
    }
    clickAsVisitor() {
        cy.getBySel(designProjectPage.view_as_visitor_btn).click()

    }
    clickDownloadExcel() {
        cy.getBySel(designProjectPage.button_download_excel).click()
    }
    clickContentTriDots(content) {
        cy.getBySel(designProjectPage.button_tree_dots).click({ force: true })
        cy.hold()
        cy.getBySel(designProjectPage.wrapper_tree_dots).contains(content).click({ force: true })
    }
    getConfirmation(content) {
        cy.hold(1)
        cy.getBySel(designProjectPage.wrapper_confirmation).contains(content).click()
        cy.hold(1)
    }
    clickCreateNewUpdate() {
        cy.getBySel(companyUpdates.create_new_update).should('be.visible').click()
    }

    clickViewProfile() {
        cy.getBySel(companySettings.view_profile).click()
    }

    selectMenuUpdate(menu) {
        cy.getBySel(companyUpdates.content_menu_update).should('be.visible').contains(menu).click();
    }
    showNumberUpdate(pages) {
        const pagesAsString = pages.toString();
        cy.getBySel(companyUpdates.select_show_updates).should('be.visible')
            .then($select => {
                cy.wrap($select).find('option').should('have.length.gte', 4);
                cy.wrap($select).select(pagesAsString);
            });
    }

    getStatusHighlight(status) {
        cy.getBySel(designProjectPage.highlight_icon).should(status);
    }

    saveHeadOffice() {
        cy.getBySel(headOfficePage.save_button).should('be.visible').click()
    }

    saveBranchOffice() {
        cy.getBySel(branchOfficePage.save_button).should('be.visible').click()
    }

    selectStatus(status) {
        this.changeViewPerPage('100')
        cy.getBySel(tagsPage.status_list_container).contains(status).should('be.visible').click().hold()

        if (status == 'Tagged Projects') {
            if (status == 'Tagged Projects') {
                cy.getBySel(tagsPage.status_label).eq(0).should('contain', 'Tagged')
            } else if (status == 'Request from Supplier') {
            } else if (status == 'Request from Supplier') {
                cy.getBySel(tagsPage.status_label).eq(0).should('contain', 'Request')
            } else {
                cy.getBySel(tagsPage.status_label).should('be.visible')
            }
        }
    }
    selectSupllier(supplier_name) {
        cy.getBySel(tagsPage.supplier_list_container).contains(supplier_name).should('be.visible').click()

        if (supplier_name == 'All Suppliers') {
            cy.getBySel(tagsPage.table_container).should('be.visible')
        } else {
            cy.getBySel(tagsPage.table_container)
                .contains(supplier_name)
                .then(($elements) => {
                    const count = $elements.length;
                    cy.log(`Number of elements containing '${supplier_name}': ${count}`)

                    // You can also perform assertions if needed
                    expect(count).to.be.greaterThan(0) // Example assertion
                });
        }
    }
    selectCategory(category) {
        cy.getBySel(tagsPage.category_list_container).contains(category).should('be.visible').click()

        if (category == 'All Categories') {
            cy.getBySel(tagsPage.table_container).should('be.visible')
        } else {
            cy.getBySel(tagsPage.table_container)
                .contains(category)
                .then(($elements) => {
                    const count = $elements.length;
                    cy.log(`Number of elements containing '${category}': ${count}`)

                    // You can also perform assertions if needed
                    expect(count).to.be.greaterThan(0) // Example assertion
                });
        }
    }
    changeViewPerPage(page) {
        cy.getBySel(tagsPage.view_per_page).select(page)
        cy.getBySel(tagsPage.table_container).should('be.visible')
    }
    search(keyword) {
        cy.getBySel(specsheetPage.search_input).should('be.visible').click().clear().type(keyword).hold(2)
    }
    validateDataTable(keyword) {
        cy.getBySel(tagsPage.table_container).contains(keyword).should('be.visible')
    }

    clickPage(page) {
        if (page == 1) {
            cy.getBySel(tagsPage.pagination1).should('be.visible').click()
        } else if (page == 2) {
            cy.getBySel(tagsPage.pagination2).should('be.visible').click()
        } else if (page == 3) {
            cy.getBySel(tagsPage.pagination3).should('be.visible').click()
        }
    }
    sorting(sort_type) {
        switch (sort_type) {
            case 'Project Name':
                cy.getBySel(tagsPage.table_header_project).should('be.visible').click()
                cy.getBySel(tagsPage.table_sort_result_first).should('be.visible')
                cy.assertSortedOrder(tagsPage.table_sort_result_first)
                break

            case 'Supplier Name':
                cy.getBySel(tagsPage.table_header_supplier).should('be.visible').click()
                cy.getBySel(tagsPage.table_sort_result_first).should('be.visible')
                cy.assertSortedOrder(tagsPage.table_sort_result_first)
                break

            case 'Product Used':
                cy.getBySel(tagsPage.table_wrapper).contains('Product Used').should('be.visible').click()
                cy.getBySel(tagsPage.table_sort_result_first).should('be.visible')
                cy.assertSortedOrder(tagsPage.table_sort_result_first)
                break

            case 'Status':
                cy.getBySel(tagsPage.table_wrapper).contains('Status').should('be.visible').click()
                cy.getBySel(tagsPage.table_sort_result_first).should('be.visible')
                cy.assertSortedOrder(tagsPage.table_sort_result_first)
                break
        }
    }
    openProject(project_name) {
        const { environment, protocol, embedded_credential_environment } = user_data
        cy.getBySel(tagsPage.table_container)
            .contains(project_name)
            .should('be.visible')
            .invoke('attr', 'href')
            .then((href) => {
                // Check if href includes the domain
                if (!href.startsWith('http')) {
                    // Prepend credentials and the base URL if href is a relative path
                    href = environment + href;
                    cy.log('1 ' + href)
                } else {
                    // If it's a full URL, prepend credentials only
                    href = href.replace(protocol, embedded_credential_environment);
                    cy.log('2 ' + href)
                }

                // Visit the constructed URL
                cy.visit(href, { failOnStatusCode: false });
            });

        cy.url().should('include', '/id/project')
        cy.getBySel(projectPage.project_title).invoke('text').then((text) => {
            return text
        }).should('contain', project_name)
    }
    openSupplier(supplier_name) {
        const { environment, protocol, embedded_credential_environment } = user_data;

        cy.getBySel(tagsPage.table_container)
            .contains(supplier_name)
            .should('be.visible')
            .invoke('attr', 'href')
            .then((href) => {
                // Check if href includes the domain
                if (!href.startsWith('http')) {
                    // Prepend credentials and the base URL if href is a relative path
                    href = environment + href;
                    cy.log('1 ' + href);
                } else {
                    let normalizedHref = new URL(href).href;
                    cy.log('Normalized URL: ' + normalizedHref);

                    // If it's a full URL, prepend credentials only
                    normalizedHref = normalizedHref.replace(protocol, embedded_credential_environment);
                    cy.log('replaced URL: ' + normalizedHref);

                    cy.visit(normalizedHref, { failOnStatusCode: false });
                }

            });


        cy.url().should('include', '/id/product');
        cy.getBySel(productPage.company_title).invoke('text').then((text) => {
            return text;
        }).should('contain', supplier_name);
    }
    addTagToProject(brand, category) {
        cy.getBySel(projectPage.add_brand_button).should('be.visible').click()
        cy.getBySel(projectPage.dropdown_brand).should('be.visible').click()
        cy.getBySel(projectPage.search_brand_input).should('be.visible').clear().type(brand)
        cy.getBySel(projectPage.search_brand_container).contains(brand).should('be.visible').click()
        cy.getBySel(projectPage.category_checkbox_container).contains(category).should('be.visible').click()
        cy.getBySel(projectPage.tag_brand_button).should('be.visible').click()
        cy.getBySel(productPage.notice_body).should('contain', 'Successfully')
    }
    removeProjectsTag(project_name) {
        cy.getBySel(tagsPage.status_label).contains('Remove').eq(0).click()
        cy.getBySel(designFolderPage.deletion_folder_name).should('contain', project_name).hold(2)
        cy.getBySel(tagsPage.modal_delete_button).should('be.visible').click()
    }
    createAccreditation(title, category) {
        cy.getBySel(accreditationsPage.create_accreditation_button).contains('Accreditation').should('be.visible').click().hold()
    }
    fillAccreditationData(type, title, category) {
        cy.getBySel(accreditationsPage.title_input).should('be.visible').clear().type(title)
        cy.getBySel(accreditationsPage.category_dropdown).should('be.visible').click()
        cy.getBySel(accreditationsPage.category_result).contains(category).should('be.visible').click()

        cy.hold()
        fileUpload.uploadMockFile(accreditationsPage.upload_image_cover, 'cypress/fixtures/image_2.png')
        cy.getBySel(accreditationsPage.image_uploaded).should('be.visible').log('Image is uploaded!')
        fileUpload.uploadMockFile(accreditationsPage.upload_document, 'cypress/fixtures/file_upload_1.pdf')
        cy.getBySel(accreditationsPage.document_uploaded).should('contain', 'file_upload_1.pdf')
        cy.getBySel(accreditationsPage.document_uploaded).should('contain', 'file_upload_1.pdf')
        cy.getBySel(accreditationsPage.submit_button).should('be.visible').click().hold(3)
        cy.getBySel(accreditationsPage.accreditation_name_first_row).should('contain', title)
    }
    selectAccreditationCategory(category) {
        cy.getBySel(accreditationsPage.category_container).contains(category).should('be.visible').click()

        if (category == 'All Categories') {
            cy.getBySel(tagsPage.table_container).should('be.visible')
        } else {
            cy.getBySel(accreditationsPage.accreditation_category_first_row).eq(0).should('contain', category)
        }
    }
    viewDocumentAccreditation() {
        cy.getBySel(accreditationsPage.dots_button_first_row).should('be.visible').click()
        cy.window().then((win) => {
            // Stub the window.open method
            cy.stub(win, 'open').as('windowOpen');
        });

        cy.getBySel(accreditationsPage.view_document).click();

        // Get the URL that was attempted to open
        cy.get('@windowOpen').should('be.calledWith', Cypress.sinon.match.string).then((stub) => {
            const newTabUrl = stub.args[0][0]; // URL of the new tab
            cy.log(newTabUrl); // Log or use the URL as needed

            expect(newTabUrl).to.contain('.pdf'); // Make assertions as needed
        })

    }
    editAccreditation() {
        cy.hold()
        cy.getBySel(accreditationsPage.dots_button_first_row).should('be.visible').click().hold(4)
        cy.getBySel(accreditationsPage.dots_result_container).contains('Edit Accreditation').click({ force: true })
    }
    deleteAccreditation(accreditation_name) {
        cy.getBySel(accreditationsPage.dots_button_first_row).should('be.visible').click().hold(4)
        cy.getBySel(accreditationsPage.dots_result_container).contains('Delete Accreditation').click({ force: true })
        cy.getBySel(designFolderPage.deletion_folder_name).should('contain', accreditation_name)
        cy.getBySel(accreditationsPage.delete_button).should('be.visible').click()
    }
    deleteAllUsedProduct() {
        cy.getBySel(designProjectPage.button_remove_used_product).each(($el, index) => {
            if (index < 3) {
                cy.wrap($el).click({ force: true });
            }
        });
        cy.getBySel(designProjectPage.button_remove_used_product).each(($el, index) => {
            if (index < 2) {
                cy.wrap($el).click({ force: true });
            }
        });
        cy.getBySel(designProjectPage.remove_cover_btn).click()
        cy.getBySel(designProjectPage.remove_project_btn).click()
    }
    selectAnalyticsCategory(category) {
        cy.getBySel(analyticsPage.side_menu_container).contains(category).should('be.visible').click()

        switch (category) {
            case 'Summary':
                cy.getBySel(analyticsPage.summary_area_title).should('contain', category).click()
                cy.getBySel(analyticsPage.summary_container).should('be.visible')
                break

            case 'Graph':
                cy.getBySel(analyticsPage.graph_title).should('contain', category).click()
                cy.getBySel(analyticsPage.graph_area_container).should('be.visible')
                break

            case 'Project':
                cy.getBySel(analyticsPage.project_area_title).should('contain', category).click()
                cy.getBySel(tagsPage.table_wrapper).should('be.visible')
                break
        }
    }
    setGraphDate(type, year, month) {
        switch (type) {
            case 'From':
                cy.getBySel(analyticsPage.graph_date_from).should('be.visible').click().hold()
                break

            case 'To':
                cy.getBySel(analyticsPage.graph_date_to).should('be.visible').click()
                break
        }

        cy.getBySel(analyticsPage.date_picker_switch).eq(1).should('be.visible').click().hold()
        cy.getBySel(analyticsPage.date_picker_years).contains(year).should('be.visible').click().hold()
        cy.getBySel(analyticsPage.date_picker_months).contains(month).should('be.visible').click().hold()

        switch (type) {
            case 'From':
                cy.getBySel(analyticsPage.graph_date_from).invoke('val').then((text) => {
                    return text
                }).should('contain', month + ' ' + year)
                break

            case 'To':
                cy.getBySel(analyticsPage.graph_date_to).invoke('val').then((text) => {
                    return text
                }).should('contain', month + ' ' + year)
                cy.getBySel(analyticsPage.submit_go_button).should('be.visible').click().hold(3)
                cy.getBySel(analyticsPage.graph_area_container).should('be.visible')
                break
        }
    }
    searchProjects(keyword) {
        cy.getBySel(specsheetPage.search_input).clear().type(keyword).hold()
        cy.getBySel(analyticsPage.search_go_button).should('be.visible').click()
        cy.getBySel(analyticsPage.project_table_first_row).should('contain', keyword)
        cy.getBySel(analyticsPage.clear_search_button).should('be.visible').click()
        cy.getBySel(tagsPage.table_container).should('be.visible')
    }
    sortProjectsBy(table_head, table_first_row) {
        cy.getBySel(table_head).should('be.visible').click()
        cy.assertSortedOrder(table_first_row)
        cy.hold()
    }
    createMoodboard(name) {
        cy.getBySel(moodboardPage.create_button).should('be.visible').click().hold()
        cy.getBySel(moodboardPage.name_input).should('be.visible').clear().type(name).hold()
        cy.getBySel(moodboardPage.submit_create_button).should('be.visible').click().hold()
        cy.getBySel(moodboardPage.create_canvas_button).should('be.visible').click().hold()
    }
    selectMoodboardSidebar(menu, image) {
        cy.getBySel(moodboardPage.sidebar).contains(menu).should('be.visible').click().hold()

        if (menu == 'Upload Images') {
            cy.log('Upload Images menu').hold()
            fileUpload.uploadMockFile(designFolderPage.custom_upload, 'cypress/fixtures/' + image + '.png')
            cy.getBySel(moodboardPage.uploaded_image_name).should('have.value', image)
            cy.getBySel(moodboardPage.submit_upload_images).should('be.visible').click().hold(2)
        } else {
            cy.getBySel(moodboardPage.leftside_container).should('be.visible')
        }
    }
    selectMoodboardCategory(category, sub_category) {
        cy.getBySel(moodboardPage.leftside_container).contains(category).should('be.visible').click().hold(2)
        cy.getBySel(moodboardPage.leftside_container).contains(sub_category).should('be.visible').click().hold()
    }
    searchMoodboard(search_input, keyword) {
        cy.getBySel(moodboardPage.search_input).eq(search_input).should('be.visible').clear().type(keyword + '{enter}').hold(3)
        // cy.getBySel(moodboardPage.leftside_container).should('be.visible').contains(keyword).should('be.visible') // bug: infinite loading
    }
    saveMoodboard() {
        cy.getBySel(moodboardPage.save_button).should('be.visible').click()
        cy.getBySel(productPage.notice_body).should('be.visible')
    }
    closeMoodboard() {
        cy.getBySel(moodboardPage.exit_canvas_button).should('be.visible').click()
    }
    editMoodboard(moodboard_name) {
        cy.getBySel(moodboardPage.dots_first_row).should('be.visible').click()
        cy.getBySel(moodboardPage.name_first_row).should('contain', moodboard_name)
        cy.getBySel(specsheetPage.dots_container).contains('Edit Moodboard').should('be.visible').click().hold(3)
    }
    deleteMoodboard(moodboard_name) {
        cy.getBySel(moodboardPage.dots_first_row).should('be.visible').click()
        cy.getBySel(moodboardPage.name_first_row).should('contain', moodboard_name)
        cy.getBySel(specsheetPage.dots_container).contains('Delete Moodboard').should('be.visible').click()
        cy.getBySel(moodboardPage.delete_confirmation).should('be.visible').click()
        cy.getBySel(productPage.notice_body).should('be.visible')
    }

}
export default new designProfesional();