// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

export {
  Scenario,
  Given,
  When,
  And,
  Then,
  Cenario,
  Dado,
  Quando,
  E,
  Entao,
  describes,
  its,
  actionStorage,
} from "cypress-action/src/gherkin/bdd.js";
import "cypress-plugin-steps";
require("cypress-action");
import "cypress-file-upload";
require("cypress-xpath");
import "cypress-wait-until";
import "cypress-mochawesome-reporter/register";

//hiden xhr trash in ui cypress
const app = window.top;
if (!app.document.head.querySelector("[data-hide-command-log-request]")) {
  const style = app.document.createElement("style");
  style.innerHTML = `
    .command-name-request, 
    .command-name-xhr,
    .command-name-page-load,
    .command-name-new-url,
    .command-name-uncaught-exception,
    .command-name-page-load-start,
    .command-name-page-load-end { 
      display: none; 
    }
    .command-method::before {
      content: none !important;
    }
  .command-method span{
    color: white;

  }
  
`;
  style.setAttribute("data-hide-command-log-request", "");
  app.document.head.appendChild(style);
}

// Cypress.on("uncaught:exception", (err, runnable) => {
//   // Ignore specific error
//   if (
//     err.message.includes("Cannot set properties of null (setting 'onchange')")
//   ) {
//     return false; // Returning false here prevents Cypress from failing the test
//   }
// });
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});


export {
  Scenario,
  Given,
  When,
  And,
  Then,
  Cenario,
  Dado,
  Quando,
  E,
  Entao,
  describes,
  its,
  actionStorage,
} from "cypress-action/src/gherkin/bdd.js";
import "cypress-plugin-steps";
require("cypress-action");
import "cypress-file-upload";
require("cypress-xpath");
export const faker = require("generate-datafaker");
import "cypress-wait-until";
import "cypress-mochawesome-reporter/register";

//hiden xhr trash in ui cypress
const app = window.top;
if (!app.document.head.querySelector("[data-hide-command-log-request]")) {
  const style = app.document.createElement("style");
  style.innerHTML = `
    .command-name-request, 
    .command-name-xhr,
    .command-name-page-load,
    .command-name-new-url,
    .command-name-uncaught-exception,
    .command-name-page-load-start,
    .command-name-page-load-end { 
      display: none; 
    }
    .command-method::before {
      content: none !important;
    }
  .command-method span{
    color: white;

  }
  
`;
  style.setAttribute("data-hide-command-log-request", "");
  app.document.head.appendChild(style);
}

// Cypress.on("uncaught:exception", (err, runnable) => {
//   // Ignore specific error
//   if (
//     err.message.includes("Cannot set properties of null (setting 'onchange')")
//   ) {
//     return false; // Returning false here prevents Cypress from failing the test
//   }
// });
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

