import pages from '../../support/pages/login'
import dashboard from '../../support/pages/dashboard'

describe("Message", { testIsolation: true }, () => {
    let userdata
    beforeEach(() => {
        cy.fixture('user-data.json').then((user) => {
            userdata = user;
        });

    })
    it("ARC18 - User wants to go to inbox", () => {
        const { environment, user_archi_au, password_archi_au } = userdata.user_data
        pages.loginToArchify(environment, user_archi_au, password_archi_au)
        cy.url().should('include', '/au/member/home')
        dashboard.checkInbox()
        cy.hold()
        dashboard.checkInbox() // need to be click twice
        cy.url().should('include', '/au/inbox')
    })
})
