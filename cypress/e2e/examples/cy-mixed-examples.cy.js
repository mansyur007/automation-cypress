
describe("Tests in page Gol", function () {
  before(() => {
    cy.crudVisit("https://www.voegol.com.br/");
  });
  it("Gol buy ticket ar lines", function () {
    cy.action({ attr: 'id="select2-edit-origin-container"' })
      .click()
      .act('aria-controls="select2-edit-origin-results"')
      .type("REC")
      .act('role="option"')
      .contains("Recife - REC")
      .click();

    cy.action({
      attr: 'id="select2-edit-destiny-container"',
      text: "select GRU",
    })
      .click()
      .act('aria-controls="select2-edit-destiny-results"')
      .type("GRU")
      .act('role="option"')
      .contains("São Paulo - Guarulhos - GRU")
      .click();
    //   .If('[id="onetrust-accept-btn-handler"]')
    //   .click({ force: true });
  });
});

