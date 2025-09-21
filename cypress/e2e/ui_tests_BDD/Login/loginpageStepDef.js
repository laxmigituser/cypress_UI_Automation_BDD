
/// <reference types = "Cypress" />
/// <reference types = "Cypress-xpath"/>
import { Given, When ,Then} from "@badeball/cypress-cucumber-preprocessor";
import { LogInPageactions } from "../../../page_objects/page_actions/LogInPageActions";


const testData = require('../../../fixtures/example.json')
const loginPage = new LogInPageactions

// Given("User navigates to saucedemo website", ()=>{
//     cy.visit(Cypress.env('url'))
// })
Then("Verify page title should be {string}", (expectedTitle)=>{
    cy.title().should('eq', expectedTitle)  
})
Then("Verify loginpage logo is displayed", ()=>{
    loginPage.getLogInPageLogo().should('be.visible')  
})
Then("Verify loginpage logo text is {string}", (expectedText)=>{
    loginPage.getLogInPageLogo().then(($el) =>{
        const logoText = $el.text()
        expect(logoText).to.eq(expectedText)
    })  
})
Then("Verify Username input box is displayed and enabled", ()=>{
    loginPage.getUsernameBox().should('be.visible').and('be.enabled')
})
Then("Verify Password input box is displayed and enabled", ()=>{
    loginPage.getPasswordBox().should('be.visible').and('be.enabled')
})
Then("Verify Login Button is displayed and enabled", ()=>{
    loginPage.getLogInButton().should('be.visible').and('be.enabled')
})
Then("Verify Accepted username label is displayed with text {string}", (expected_un)=>{
    loginPage.getAcceptedUserNamesHeader().should('be.visible')
    loginPage.getAcceptedUserNamesHeader().then(($el)=>{
        const un_headerText = $el.text()
        expect(un_headerText).to.eq(expected_un)
    })
})
Then("Verify following usernames are displayed below the label", (dataTable)=>{
    const expectedUsernames = dataTable.raw().flat(); // get array of usernames
    loginPage.getAcceptedUserNames().then((elm)=>{
        // Accepted usernames are:standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
        const usernames = elm.text()
        const prefix = "Accepted usernames are:";
        const usernamesStr = usernames.replace(prefix, '');
        cy.log(usernamesStr)
        const userNames_arr = usernamesStr.match(/[a-z_]+?_user/g)
            
        for(let str in userNames_arr){
             cy.log(userNames_arr[str])
        }
        const isEqual = userNames_arr.sort().join() === expectedUsernames.sort().join();
        expect(isEqual).to.equal(true) 
    })
})
Then("Verify Accepted password label is displayed with text {string}", (expected_pw)=>{
    loginPage.getAcceptedPwdsHeader().should('be.visible')
    loginPage.getAcceptedPwdsHeader().then(($el)=>{
        const pw_headerText = $el.text()
        expect(pw_headerText).to.eq(expected_pw)
    })
})
Then("Verify following passwords are displayed below the label", (dataTable) => {
    const expectedpasswords = dataTable.raw().flat(); // get array of usernames
    loginPage.getAcceptedPasswords().then((elm) => {
        // Password for all users:secret_sauce
        const passwords = elm.text()
        const prefix = "Password for all users:";
        const pwdStr = passwords.replace(prefix, '');
        cy.log(pwdStr)
        const pwd_arr = pwdStr.match(/[a-z_]+?_sauce/g)

        for (let str in pwd_arr) {
            cy.log(pwd_arr[str])
        }
        const isEqual = pwd_arr.sort().join() === expectedpasswords.sort().join();
        cy.screenshot('passwords_displayed')
        expect(isEqual).to.equal(true)
    })
    
})

When("User enters username as {string}", (username)=>{
    loginPage.getUsernameBox().type(username)
    loginPage.getUsernameBox().should('have.value', username)
})
When("User enters password as {string}", (password)=>{
    loginPage.getPasswordBox().type(password)
    loginPage.getPasswordBox().should('have.value', password)
})
When("User click on Login Button", ()=>{
    loginPage.getLogInButton().click()
})
Then("Verify user is directed to page with url {string}", (expectedurl)=>{
    cy.url().should('eq', expectedurl)
})
Then("Verify {string} is displayed above login button", (expected_error_msg)=>{
    loginPage.getLogInErrorMessage().then(($el)=>{
        const error_msg = $el.text()
        expect(error_msg).to.eq(expected_error_msg)
    })
})


