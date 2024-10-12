import {designFolderPage, common} from "../locator/locators";

class commonsteps{
    addItem(){
        cy.getBySel(designFolderPage.confirm_add).click()
    }
    confirmOK(){
        cy.getBySel(designFolderPage.ok_modal_button).should('be.visible').click()
    }
    subMenu(submenu) {
        cy.getBySel(common.sub_menu).should('be.visible').contains(submenu).click()
    }


}
export default new commonsteps();