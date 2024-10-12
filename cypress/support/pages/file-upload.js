import {designFolderPage, designProjectPage} from "../locator/locators";

class fileUploadJs {
    uploadMockFile(selector,filepath){
        cy.getBySel(selector)
            .find(designFolderPage.file_locator).selectFile(filepath, { force: true });
        cy.hold(2)
    }
}
export default new fileUploadJs()