/// <reference types = "Cypress" />
/// <reference types = "Cypress-xpath"/>
import { Given, When ,Then} from "@badeball/cypress-cucumber-preprocessor";
import { InventoryPageActions } from "../../../page_objects/page_actions/InventoryPageActions";



const testData = require('../../../fixtures/example.json')
const inventoryPage = new InventoryPageActions

// Given("User navigates to saucedemo website", ()=>{
//     cy.visit(Cypress.env('url'))
// })
// When("User login with credentials {string} {string}", (un, pw) => {
//     cy.loginToSauceDemoWeb(un, pw)
// })
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
When("User click on hamburger icon", ()=>{
    inventoryPage.getHamburger().click()
})
Then("Verify left menu gets displayed on page", ()=>{
    inventoryPage.getLeftMenuCard().should('be.visible')
    inventoryPage.getLeftMenuCard().should('have.attr', 'aria-hidden', 'false')
})
Then("Verify following elements displayed in left menu", (dataTable)=>{
    const expected_elements = dataTable.raw().flat() //returns array of string
    expected_elements.forEach(el => {
        cy.xpath("//div[@class='bm-menu']//nav//a[text()='"+el+"']").should('be.visible')
    })
})
Then("Verify close button is displayed in left menu", ()=>{
    inventoryPage.getLeftMenuCloseButton().should('be.visible')
})
Then("Verify left menu gets collapsed on clicking close button", ()=>{
    inventoryPage.getLeftMenuCloseButton().click()
    inventoryPage.getLeftMenuCard().should('have.attr', 'aria-hidden', 'true')
    inventoryPage.getLeftMenuCard().should('not.be.visible')
})
When("User click on Logout button", ()=>{
    inventoryPage.getLogOutButton().click()
})
Then("Verify User lands on page with url {string}", (expected_url)=>{
    cy.url().should('eq', expected_url)
})

