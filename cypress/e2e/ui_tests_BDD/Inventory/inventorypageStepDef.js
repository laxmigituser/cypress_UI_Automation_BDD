/// <reference types = "Cypress" />
/// <reference types = "Cypress-xpath"/>
import { Given, When ,Then} from "@badeball/cypress-cucumber-preprocessor";
import { InventoryPageActions } from "../../../page_objects/page_actions/InventoryPageActions";
import { API_Utilities } from "../../../services/API_Utilities";


const testData = require('../../../fixtures/example.json')
const inventoryPage = new InventoryPageActions
const api_util = new API_Utilities()

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

Then("Verify products list displayed on page and compare with expected list", ()=>{
    //item list comparison from fixture file
    const product_list = testData.inventoryPage.expected_productsList
    inventoryPage.getInventoryItemNames().each(($el, index, $list)=>{
        const item_text = $el.text().trim()
        expect(product_list).to.include(item_text)
    })

    //item list comparison by consuming the API
    api_util.getItemsList().then((response)=>{
        expect(response.status).to.eq(200)
        cy.log('API response body: '+ JSON.stringify(response.body))
        // const api_item_list = response.body
        //validations / assertions to be put here ***THIS IS DUMMY API SO NOT VALIDATING THE RESPONSE DATA***
    })

    //item list comparison by fetching data from DB
    cy.task('queryMysqlDB', 'SELECT * FROM user_table;').then((result)=>{
        cy.log('DB response: '+ JSON.stringify(result))
        //***THIS IS DUMMY DB SO NOT VALIDATING THE QUERY RESULT DATA***
    })

    // cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts', {fixture: 'posts.json'}).as('getPosts')
    // ***INTERCEPT CAN ALSO BE USED TO STUB THE API RESPONSE AND VALIDATE THE UI BASED ON STUBBED RESPONSE DATA***
    //***WE CAN USE IT FOR INTEGRATION TESTING AS WELL TO ENSURE DATA IN API AND DISPLAYED IN UI ARE SYNC */

})