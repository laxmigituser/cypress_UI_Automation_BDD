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

//to get auto suggestion while code writing
/// <reference types = "Cypress" />
/// <reference types = "Cypress-xpath"/>

//command for login
import { LogInPageactions } from "../page_objects/page_actions/LogInPageActions";

const loginPage = new LogInPageactions();
const testData = require('../fixtures/example.json')

Cypress.Commands.add('loginToSauceDemoWeb', (un, pw)=>{
    // cy.visit(Cypress.env('url'))
    loginPage.enterUserName(un)
    loginPage.enterPassword(pw)
    loginPage.clickLoginButton();
})