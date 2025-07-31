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
Then("Verify Page Header is {string} with sub header {string}", (page_header, sub_header)=>{
    inventoryPage.getHeaderLogo().should('be.visible')  
    inventoryPage.getHeaderLogo().then(($el)=>{
        const logoText = $el.text()
        expect(logoText).to.eq(page_header)
    })
    inventoryPage.getSecondaryHeaderLogo().should('be.visible')  
    inventoryPage.getSecondaryHeaderLogo().then(($el)=>{
        const logoText = $el.text()
        expect(logoText).to.eq(sub_header)
    })
})
Then("Verify hamburger cart icon and filter button displayed on page", ()=>{
    inventoryPage.getCartIcon().should('be.visible') 
    inventoryPage.getHamburger().should('be.visible')
    inventoryPage.getFilter().should('be.visible')
})
Then("Verify {string} items are displayed on page", (Item_no)=>{
    inventoryPage.getInventoryItemsCard().should('have.length', Item_no)
})
Then("Verify {string} item card has Add to cart button", (Item_no)=>{
    inventoryPage.getAddToCartInVentoryItem().should('have.length', Item_no)
})
Then("Verify footer UI displays twitter, facebook, linked in link with footer text", ()=>{
    inventoryPage.getTwitterLink().should('be.visible')
    inventoryPage.getfacebookLink().should('be.visible')
    inventoryPage.getLinkedInLink().should('be.visible')
    inventoryPage.getFooterText().then(($el) =>{
        const elem_text = $el.text()
        expect(elem_text).to.eq(testData.inventoryPage.footer_text)
    })
})
