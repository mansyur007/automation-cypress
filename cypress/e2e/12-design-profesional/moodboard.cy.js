import pages from "../../support/pages/login";
import designProfesional from "../../support/pages/design-profesional";
import dashboard from "../../support/pages/dashboard";
import { fakeUserData } from "../../support/fakeData";

describe("Moodboard", () => {
    let userdata
    beforeEach(() => {
        cy.fixture('user-data.json').then((user) => {
            userdata = user;
        });
    })

    it("ARC116 - User wants to create Moodboard", () => {
        cy.clearCookies()
        const { environment, user_archi_company, password_archi_id } = userdata.user_data
        pages.loginToArchify(environment, user_archi_company, password_archi_id)
        cy.url().should('include', '/id/member/home')

        dashboard.selectSubMenu('Moodboards');
        cy.url().should('include', '/id/member/moodboards')

        designProfesional.createMoodboard('AutomationMoodboard '+ fakeUserData.left_notes)
        designProfesional.selectMoodboardSidebar('Library') // this part is a workaround to avoid infinite loading
        designProfesional.selectMoodboardSidebar('Photos') // this part is a workaround to avoid infinite loading
        designProfesional.selectMoodboardCategory('Community & Recreation', 'All Community & Recreation')
        designProfesional.searchMoodboard(2, 'Roof')
        designProfesional.selectMoodboardSidebar('Products')
        designProfesional.selectMoodboardCategory('Flooring', 'Carpets & Rugs')
        designProfesional.searchMoodboard(5, 'Stone')
        designProfesional.selectMoodboardSidebar('Shapes')
        designProfesional.selectMoodboardSidebar('Text')
        designProfesional.selectMoodboardSidebar('Stock Images')
        designProfesional.searchMoodboard(7, 'Television')
        designProfesional.selectMoodboardSidebar('Upload Images', 'image_2')
        designProfesional.saveMoodboard()
        designProfesional.closeMoodboard()
        dashboard.selectSubMenu('Moodboards')
    })
    it("ARC117 - User wants to Edit Moodboard", () => {
        designProfesional.search('AutomationMoodboard')
        designProfesional.editMoodboard('AutomationMoodboard')

        designProfesional.selectMoodboardSidebar('Library') // this part is a workaround to avoid infinite loading
        designProfesional.selectMoodboardSidebar('Photos') // this part is a workaround to avoid infinite loading
        designProfesional.selectMoodboardCategory('Community & Recreation', 'Libraries')
        designProfesional.searchMoodboard(2, 'Roof')
        designProfesional.selectMoodboardSidebar('Products')
        designProfesional.selectMoodboardCategory('Kitchens', 'Kitchen Systems')
        designProfesional.searchMoodboard(5, 'Stone')
        designProfesional.selectMoodboardSidebar('Shapes')
        designProfesional.selectMoodboardSidebar('Text')
        designProfesional.selectMoodboardSidebar('Stock Images')
        designProfesional.searchMoodboard(7, 'Yard')
        designProfesional.selectMoodboardSidebar('Upload Images', 'image')
        designProfesional.saveMoodboard()
        designProfesional.closeMoodboard()
        dashboard.selectSubMenu('Moodboards')
    })
    it("ARC118 - User wants to delete Moodboard", () => {
        designProfesional.search('AutomationMoodboard')
        designProfesional.deleteMoodboard('AutomationMoodboard')
    })

})