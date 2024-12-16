import pages from '../../support/pages/login'
import dashboard from '../../support/pages/dashboard'

describe("Login", { testIsolation: true }, () => {

    let userdata
    beforeEach(() => {
        cy.fixture('user-data.json').then((user) => {
            userdata = user;
        });

    })

    it("tets commit", () => {

    })
})
