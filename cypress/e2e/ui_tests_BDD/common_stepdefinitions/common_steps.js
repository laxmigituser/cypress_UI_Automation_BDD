/// <reference types = "Cypress" />
/// <reference types = "Cypress-xpath"/>
import { Given, When ,Then} from "@badeball/cypress-cucumber-preprocessor";
import { InventoryPageActions } from "../../../page_objects/page_actions/InventoryPageActions";



const testData = require('../../../fixtures/example.json')
const inventoryPage = new InventoryPageActions

Given("User navigates to saucedemo website", ()=>{
    cy.visit(Cypress.env('url'))
})
When("User login with credentials {string} {string}", (un, pw) => {
    cy.loginToSauceDemoWeb(un, pw)
})
