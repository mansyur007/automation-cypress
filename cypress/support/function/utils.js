export function getFormattedDate() {
    const now = new Date();
    return `${now.getHours()}${now.getDay()}${now.getDate()}${now.getMonth() + 1}${now.getFullYear().toString().slice(-2)}`;
}

export function checkElementContainsValue(viewBtn, link, expectedValue, method = 'text') {
    cy.getBySel(viewBtn)
        .should('be.visible')
        .click();

    cy.hold()
    cy.getBySel(link)
        .should('be.visible')
        .invoke(method)
        .then((value) => {
            expect(value).to.contain(expectedValue);
        });
}


