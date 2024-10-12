
const { faker } = require("../../support/e2e");

describe("Test using ElseIf function", function () {
  before(() => {
    cy.crudVisit("https://walkdog.vercel.app/signup"); // using styles
    // cy.visit("https://walkdog.vercel.app/signup"); // not using styles
  });
  it("Test else if in cy.action framework", () => {
    cy.elseIf(select.fillName).type(faker.generateName(), { force: true });
    cy.elseIf(select.fillNameError).type(faker.generateName(), {
      force: true,
    });
  });
  it("Test else if in cy.action framework whit text description", () => {
    cy.elseIf(select.fillName, { text: "description action elseIf" }).type(
      faker.generateName(),
      {
        force: true,
      }
    );
  });

  it("Test click elseIf", () => {
    cy.elseIf(select.fillName).click({ force: true });
  });
  it("Test else if in cy.action framework  cssSelector error", () => {
    cy.elseIf(select.fillNameError).type(faker.generateName(), { force: true });
    // cy.elseIf('select[name="email"]').value("1").select("1", { force: true });
    // cy.elseIf('button[name="name"]').value("Salvar").click({ force: true });
  });
});

let select = {
  fillName: 'input[name="name"]',
  fillNameError: 'input[name="nam"]',
  //   fillNameError: 'select[name="nam"]',
  //   fillNameError: 'button[name="nam"]',
  //  a[href]
  //   area[href]
  //   input
  //   select
  //   textarea
  //   button
  //   iframe
  //   [tabindex]
  //   [contenteditable],
};
