export const  getIframeDocument = (selector) => {
    return cy
        .get(selector)
        .its('0.contentDocument')
}

export const getIframeBody = (selector) => {
    return getIframeDocument(selector)
        .its('body').should('not.be.undefined')
        .then(cy.wrap)
}