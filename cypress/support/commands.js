// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('getBySel', (selector, ...args) => {
    const isXpath = selector.startsWith('//') || selector.startsWith('(') || selector.startsWith('/')
    const command = isXpath ? 'xpath' : 'get';
    return cy[command](selector, ...args);
});

Cypress.Commands.add('hold', (time) => {
    if (time > 0) {
        time = time * 1000
        cy.wait(time)
    } else {
        cy.wait(1000)
    }
})

Cypress.Commands.add('assertSortedOrder', (selector, sortOrder = 'asc') => {
    cy.get(selector).then(($elements) => {
        // Extract text content into an array and trim any extra whitespace
        const textArray = $elements.toArray().map(el => el.innerText.trim());

        cy.log('Original Array:', JSON.stringify(textArray));

        // Sort the array based on the sortOrder parameter
        const sortedArray = [...textArray].sort((a, b) => {
            return sortOrder === 'asc'
                ? a.localeCompare(b)
                : b.localeCompare(a);
        });

        cy.log('Sorted Array:', JSON.stringify(sortedArray));

        // Assert that the text elements are in the correct sorted order
        expect(textArray).to.deep.equal(sortedArray);
    });
});

Cypress.Commands.add('assertElementContainsText', (selector, partialText) => {
    cy.getBySel(selector).should('contain.text', partialText);
});

Cypress.Commands.add('checkCheckboxByText', (checkboxText) => {
    cy.contains('p', checkboxText)
        .closest('label')
        .click();
});

Cypress.Commands.add('assertCellsContainText', (selector, expectedText) => {
    cy.get(selector)
        .each($cell => {
            const cellData = $cell.text().trim();
            expect(cellData).to.include(expectedText);
        });
});

Cypress.Commands.add('assertValueContainText', (selector, expectedText) => {
    cy.getBySel(selector).should('be.visible').invoke('val').then((text) => {
        return text
    }).should('contain', expectedText)
});

Cypress.Commands.add('typeInIframe', (iframeSelector, text) => {
    cy.get(iframeSelector)
        .its('0.contentDocument.body')
        .should('not.be.empty')
        .then(cy.wrap)
        .clear()
        .type(text);
});

/*
specific to form fields
*/
Cypress.Commands.add('fields', (selector, inputData) => {
    cy.getBySel(selector)
        .should('be.visible')
        .clear()
        .type(inputData)
});

