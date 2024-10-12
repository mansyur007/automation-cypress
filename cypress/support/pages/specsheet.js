import { common, designFolderPage, specsheetPage, subfolderPage } from '../locator/locators';
import {fakeUserData} from "../fakeData";
import { user_data } from '../../fixtures/user-data.json'
class specsheet {

    search(keyword) {
        cy.getBySel(specsheetPage.search_input).should('be.visible').click().type(keyword)
    }
    select(keyword) {
        const { environment, protocol, embedded_credential_environment } = user_data
        cy.getBySel(specsheetPage.table)
            .contains(keyword)
            .should('be.visible')
            .invoke('attr', 'href')
            .then((href) => {
                // Check if href includes the domain
                if (!href.startsWith('http')) {
                    // Prepend credentials and the base URL if href is a relative path
                    href = environment + href
                } else {
                    // If it's a full URL, prepend credentials only
                    href = href.replace(protocol, embedded_credential_environment);
                }

                // Visit the constructed URL
                cy.visit(href, { failOnStatusCode: false });
            });
        cy.getBySel(designFolderPage.specsheet_title_name).invoke('text').then((text) => {
            return text
        }).should('eq', keyword)

    }
    createSpecsheet(specsheetname, designfolder) {
        cy.getBySel(specsheetPage.create_new_specsheet).click()
        cy.hold(3)
        cy.getBySel(specsheetPage.input_name_specsheet).type(specsheetname)
        cy.hold()
        cy.getBySel(specsheetPage.list_design_folder).click()
        cy.hold()
        cy.getBySel(specsheetPage.result_design_folder).contains(designfolder).click()
        cy.hold()
        cy.getBySel(specsheetPage.btn_create).click()
    }
    changeViewPerPage(page) {
        cy.getBySel(specsheetPage.dropdown_page).should('be.visible').select(page)
        cy.hold(2)
        cy.getBySel(specsheetPage.selection_table_list).should('have.length', parseInt(page, 10))
    }
    preview() {
        cy.hold()
        cy.getBySel(specsheetPage.preview_button).should('be.visible').click().hold(2)
        cy.getBySel(specsheetPage.all_in_one_button).should('be.visible').click().hold(3)
    }
    download(file_type) {
        cy.hold();
        cy.getBySel(specsheetPage.dots_button).should('be.visible').click();
        cy.getBySel(specsheetPage.dots_container).contains('Download').should('be.visible').click();
    
        let expectedExtension = '';
    
        switch(file_type) {
            case 'excel':
                cy.getBySel(specsheetPage.checkbox_excel).should('be.visible').click();
                expectedExtension = '.xlsx';
                break;
            case 'one per sheet':
                cy.getBySel(specsheetPage.checkbox_one_per_sheet).should('be.visible').click();
                expectedExtension = '.pdf';
                break;
            default:
                throw new Error(`Unsupported file type: ${file_type}`);
        }
    
        cy.hold();
        cy.getBySel(specsheetPage.download_specsheet_button).should('be.visible').click().hold();
    
        // Add a short wait to ensure the download starts
        cy.wait(3000); // Adjust the wait time as needed
    
        cy.task('findDownloadedFile', expectedExtension).then((foundFilename) => {
            if (foundFilename) {
                const filePath = `cypress/downloads/${foundFilename}`;
    
                // Wait for the file to exist before verifying
                cy.readFile(filePath, { timeout: 15000 }).should('exist');
    
                // Ensure the file has the correct extension
                expect(foundFilename).to.match(new RegExp(`${expectedExtension}$`));
            } else {
                cy.log('Downloaded file not found in the specified folder');
                throw new Error('Downloaded file not found');
            }
        });
    }
    addNoteleft(notes,details){
        cy.getBySel(specsheetPage.left_header_notes_btn).should('be.visible').click()
        cy.getBySel(specsheetPage.left_header_notes_left).should('be.visible').type(notes)
        cy.getBySel(specsheetPage.left_header_notes_right).type(details)
    }
    addNoteRight(notes,details){
        cy.getBySel(specsheetPage.right_header_notes_button).should('be.visible').click()
        cy.getBySel(specsheetPage.right_header_notes_left).should('be.visible').type(notes)
        cy.getBySel(specsheetPage.right_header_notes_left).type(details)
    }
    addProduct(productName){
        cy.getBySel(specsheetPage.add_product_btn).click()
        cy.hold(3)
        cy.getBySel(specsheetPage.input_search_product_field).type(`${productName}{enter}`)
        cy.hold(2)
        cy.getBySel(specsheetPage.product_list_wrapper).first().click();
    }
    uploadProduct(){
        cy.getBySel(specsheetPage.btn_upload_product).click()
        cy.getBySel(designFolderPage.custom_upload).then($upload => {
            cy.wrap($upload).find(designFolderPage.file_locator).selectFile('cypress/fixtures/image.png', { force: true });
        });
    }
    addGeneralSpec(specleft,detailspec){
        cy.getBySel(specsheetPage.add_general_spec_btn)
            .click();
        cy.getBySel(specsheetPage.left_form).type(specleft)
        cy.getBySel(specsheetPage.right_form).type(detailspec)
    }
    deleteGeneralSpec(){
        cy.getBySel(specsheetPage.delete_general_spec).click()
    }
    addAnnotation(annotation){
        cy.getBySel(specsheetPage.btn_edit_annotation)
            .type(annotation)
        cy.getBySel(specsheetPage.btn_save_annotation)
            .click()
    }
    selectContentTriDots(contents){
        cy.getBySel(specsheetPage.btn_three_dot).click()
        cy.getBySel(specsheetPage.wrapper_three_dot).contains(contents).click()
    }
    editDivider(name){
        cy.getBySel(specsheetPage.btn_edit_divider).type(name)
        cy.getBySel(specsheetPage.btn_save_divider).click()
    }
    deleteDivider(){
        cy.getBySel(specsheetPage.btn_delete_devider).click()
    }
    collapeItem(){
        cy.getBySel(specsheetPage.btn_minus_collapse).click()
        cy.getBySel(specsheetPage.btn_plus_icon).click()
    }
    triDotSpecsheet(content){
        cy.getBySel(specsheetPage.btn_specsheets_tri_dots).click()
        cy.getBySel(specsheetPage.wrapper_content).contains(content).click()
    }
    renameSpec(name){
        cy.getBySel(specsheetPage.btn_rename_specsheet).should('be.visible').click()
        cy.getBySel(specsheetPage.field_rename_input).type(name)
        cy.getBySel(specsheetPage.btn_submit_name_edit).click()
    }
    removeSpecFirstRow(){
        cy.getBySel(specsheetPage.checkbox_first_row).click()
        cy.getBySel(specsheetPage.btn_remove).click()
    }
}
export default new specsheet();