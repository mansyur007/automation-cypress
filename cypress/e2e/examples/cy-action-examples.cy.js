
const { faker, actionStorage } = require("../../support/e2e");

describe("Describe testing", function () {
  before(() => {
    cy.crudVisit("https://walkdog.vercel.app/signup"); // using styles
    // cy.visit()  // not using styles
  });
  it("Testing in page walkdog", function () {
    cy.action({ attr: selects.fillName }).click();
    // automatic save element in actionStorage.find.element
  });

  it("select cssSelector other test, and text information", function () {
    // value get before test
    console.log(actionStorage.find.element);
    cy.action({ attr: actionStorage.find.element, text: "fill name" }).type(
      faker.generateName()
    );
  });

  it("Fill email", function () {
    cy.action({ attr: selects.fillEmail, text: "fill email" }).type(
      faker.generateEmails()
    );
  });

  it("Fill CPF using cssSelector", () => {
    cy.action({ attr: selects.fillCpf, text: "Fill CPF" }).type(
      faker.generateCPF()
    );
  });

  it("Fill CEP using xpath", () => {
    cy.action({ attr: selects.fillCEP, text: "Fill CEP" }).type(
      faker.generateCEP()
    );
  });

  it("Fill click button CEP using fullXpath", () => {
    cy.action({
      attr: selects.clickSearchCEP,
      text: "click search CEP",
    }).click();
  });
  it("Expect not empty", () => {
    cy.action({ attr: selects.expectCEP }, { timeout: 20000 })
      .invoke("val")
      .should("not.be.empty");
  });

  it("Test mixed functions", () => {
    // cy.action({ attr: selects.expectCEPNotFound })
    //   .invoke("val")
    //   .should("not.be.empty");

    cy.action({ attr: selects.fillName })
      .click()
      .If('input[name="name"]')
      .type("Test");

    cy.action({ attr: selects.fillName })
      .click()
      .elseIf('input[name="name"]')
      .type("Test");

    cy.action({
      attr: 'name="name"',
      text: "Entering username",
      maxAttempts: 5,
    }).act({ attr: 'name="name"' });
  });
  it("Test using cy.action with error, wait element max attempts 5", () => {
    cy.action({ attr: selects.expectCEPNotFound, maxAttempts: 5 });
  });
});

let selects = {
  fillName: 'name="name"',
  fillEmail: 'name="email"',
  fillCpf:
    "#page-walker > form > fieldset:nth-child(3) > div:nth-child(3) > div:nth-child(2) > input[type=text]",
  fillCEP: '//*[@id="page-walker"]/form/fieldset[2]/div[2]/div[1]/input',
  clickSearchCEP: "/html/body/div/div/form/fieldset[2]/div[2]/div[2]/input",
  expectCEP: 'name="addressStreet"',
  expectCEPNotFound: 'name="addressStree"',
};

