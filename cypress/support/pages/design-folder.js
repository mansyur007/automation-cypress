import {common, designFolderPage, imgLocator, subfolderPage} from '../locator/locators';
import fileUpload from './file-upload';
class designFolder {

    addDesignFolder(folder_name) {
        cy.hold(2)
        cy.getBySel(designFolderPage.add_design_folder_button).should('be.visible').click().hold()
        cy.getBySel(designFolderPage.folder_name_input).should('be.visible').type(folder_name).hold()
        cy.getBySel(designFolderPage.create_folder_button).should('be.visible').click()
        cy.getBySel(designFolderPage.folders_list_container).contains(folder_name).should('be.visible')
    }

    deleteExistFolder(folder_name) {
        cy.getBySel(designFolderPage.folder_name).then($elements => {
            let total = $elements.length;

            function processFolder(i) {
                if (i < total) {
                    cy.getBySel(designFolderPage.folder_name).eq(i).then($parent => {
                        if ($parent.length > 0) {
                            if ($parent.text() === folder_name) {
                                cy.log($parent.text() + ' exists');

                                cy.hold()
                                cy.getBySel(common.h1).eq(0).click({ force: true })
                                cy.getBySel(designFolderPage.design_folder_box)
                                    .contains($parent.text())                          // Locate the folder box containing the folder name
                                    .should('be.visible')
                                    .parents(designFolderPage.design_folder_box)    // Move to the parent box level
                                    .within(() => {                                 // Scope subsequent commands to this parent
                                        cy.get(designFolderPage.option_popup_button)  // Locate the option popup button within this scope
                                            .invoke('css', 'display', 'block')          // Make the popup content visible
                                            .contains('a', 'Delete')                 // Locate the "Duplicate" link by its text
                                            .click({ force: true });                    // Click the "Duplicate" link
                                    });
                                cy.hold(2)
                                cy.getBySel(designFolderPage.deletion_folder_name).should('contain', folder_name).hold()
                                cy.getBySel(designFolderPage.ok_modal_button).should('be.visible').click()

                                total = total - 2; // Update total count after deletion
                                processFolder(0); // Restart the loop
                            } else {
                                cy.log($parent.text() + ' does not exist');
                                processFolder(i + 1); // Move to the next element
                            }
                        } else {
                            cy.log('No title element found within ' + $parent.text());
                            processFolder(i + 1); // Move to the next element
                        }
                    });
                }
            }

            processFolder(0); // Start processing folders from the beginning
        })
    }

    navigateToDesignProfesional(folder_name) {
        cy.getBySel(designFolderPage.folders_list_container)
            .contains(folder_name)
            .should('be.visible')
            .closest(designFolderPage.design_folder_box) // find element parent of selected element from 'contains'
            .should('exist')
            .click()
    }

    navigateToFolder(folder_name) {
        cy.getBySel(designFolderPage.folders_list_container)
            .contains(folder_name)
            .should('be.visible')
            .closest(designFolderPage.design_folder_box) // find element parent of selected element from 'contains'
            .should('exist')
            .click()
        cy.getBySel(designFolderPage.folder_title_name).should('contain', folder_name)
        cy.getBySel(designFolderPage.add_design_sub_folder_button).should('be.visible')
    }

    duplicateFolder(folder_name) {
        cy.getBySel(designFolderPage.design_folder_box)
            .contains(folder_name)                          // Locate the folder box containing the folder name
            .should('be.visible')
            .parents(designFolderPage.design_folder_box)    // Move to the parent box level
            .within(() => {                                 // Scope subsequent commands to this parent
                cy.get(designFolderPage.option_popup_button)  // Locate the option popup button within this scope
                    .invoke('css', 'display', 'block')          // Make the popup content visible
                    .contains('a', 'Duplicate')                 // Locate the "Duplicate" link by its text
                    .click({ force: true });                    // Click the "Duplicate" link
            });
    }

    deleteDesignFolder(folder_name) {
        cy.hold()
        cy.getBySel(common.h1).eq(0).click({ force: true })
        cy.getBySel(designFolderPage.design_folder_box)
            .contains(folder_name)                          // Locate the folder box containing the folder name
            .should('be.visible')
            .parents(designFolderPage.design_folder_box)    // Move to the parent box level
            .within(() => {                                 // Scope subsequent commands to this parent
                cy.get(designFolderPage.option_popup_button)  // Locate the option popup button within this scope
                    .invoke('css', 'display', 'block')          // Make the popup content visible
                    .contains('a', 'Delete')                 // Locate the "Duplicate" link by its text
                    .click({ force: true });                    // Click the "Duplicate" link
            });
        cy.hold()
        cy.getBySel(designFolderPage.deletion_folder_name).should('contain', folder_name).hold()
        cy.getBySel(designFolderPage.ok_modal_button).should('be.visible').click()
    }

    renameDesignFolder(folder_name, new_folder_name) {
        cy.getBySel(common.h1).eq(0).click({ force: true })
        cy.getBySel(designFolderPage.design_folder_box)
            .contains(folder_name)                          // Locate the folder box containing the folder name
            .should('be.visible')
            .parents(designFolderPage.design_folder_box)    // Move to the parent box level
            .within(() => {                                 // Scope subsequent commands to this parent
                cy.get(designFolderPage.option_popup_button)  // Locate the option popup button within this scope
                    .invoke('css', 'display', 'block')          // Make the popup content visible
                    .contains('a', 'Rename')                 // Locate the "Duplicate" link by its text
                    .click({ force: true });                    // Click the "Duplicate" link
            })
        cy.hold()
        cy.getBySel(designFolderPage.rename_folder_name_imput).should('be.visible').clear().type(new_folder_name).hold()
        cy.getBySel(designFolderPage.rename_folder_button).should('be.visible').click()
        cy.getBySel(designFolderPage.folders_list_container).contains(new_folder_name).should('be.visible')
    }

    sortBy(sort_type) {
        cy.hold(2)
        cy.getBySel(designFolderPage.sort_button).should('be.visible').click()
        cy.getBySel(designFolderPage.sort_dropdown_container).contains(sort_type).click()
    }

    createSpecsheets(folder_name, specsheets_name) {
        cy.getBySel(designFolderPage.design_folder_box)
            .contains(folder_name)                          // Locate the folder box containing the folder name
            .should('be.visible')
            .parents(designFolderPage.design_folder_box)    // Move to the parent box level
            .within(() => {                                 // Scope subsequent commands to this parent
                cy.get(designFolderPage.option_popup_button)  // Locate the option popup button within this scope
                    .invoke('css', 'display', 'block')          // Make the popup content visible
                    .contains('a', 'New Specsheet')                 // Locate the "Duplicate" link by its text
                    .click({ force: true })
                    .hold()                   // Click the "Duplicate" link
            })
        cy.getBySel(designFolderPage.create_specsheet_input).should('be.visible').type(specsheets_name).hold()
        cy.getBySel(designFolderPage.create_specsheet_button).should('be.visible').click()
        cy.getBySel(designFolderPage.specsheet_title_name).should('contain', specsheets_name)
    }
    shareFolder(foldername) {
        cy.hold()
        cy.getBySel(common.h1).eq(0).click({ force: true })
        cy.getBySel(designFolderPage.design_folder_box)
            .contains(foldername)
            .should('be.visible')
            .parents(designFolderPage.design_folder_box)
            .within(() => {
                cy.getBySel(designFolderPage.option_popup_button)
                    .invoke('css', 'display', 'block')
                cy.getBySel(imgLocator.share_button_whatsapp)
                    .click({ force: true });
            });
    }
    uploadImage() {
        cy.getBySel(designFolderPage.add_image_button).click()
        cy.getBySel(designFolderPage.custom_upload).then($upload => {
            cy.wrap($upload).find(designFolderPage.file_locator).selectFile('cypress/fixtures/image.png', { force: true });
        });
        cy.hold(3)
        cy.getBySel(designFolderPage.confirm_add).click()
    }
    createSubFolder() {
        cy.getBySel(subfolderPage.add_button_img).should('be.visible').click()
        cy.getBySel(subfolderPage.create_subfolder).should('be.visible').type('Nice Design')
        cy.getBySel(subfolderPage.button_create_subfolder).click()
    }
    renameSubFolder() {
        cy.getBySel(subfolderPage.subfolder_1).click().then(() => {
            cy.contains('Rename').click({ force: true });
            cy.getBySel(subfolderPage.button_edit).click()
            cy.getBySel(subfolderPage.button_edit).click()

        });
    }
    duplicateSubFolder() {
        cy.getBySel(subfolderPage.subfolder_1).click().then(() => {
            cy.contains('Duplicate').click({ force: true });
        });
    }
    selectSubFolder() {
        cy.getBySel(subfolderPage.item_list_item_folder).eq(1).within(() => {
            cy.getBySel(subfolderPage.image_area).click({ force: true });
        });
    }

}
export default new designFolder();