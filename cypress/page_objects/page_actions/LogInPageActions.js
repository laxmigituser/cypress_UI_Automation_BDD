// <reference types = "Cypress" />
const logInPageElements = require("../page_elements/LogInPageElements.json")

export class LogInPageactions{

    //Getting elements
    getLogInPageLogo(){
        return cy.get(logInPageElements.LogInPageLocators.loginPageLogo)
    }
    getUsernameBox(){
        return cy.get(logInPageElements.LogInPageLocators.userNameIPBox)
    }
    getPasswordBox(){
        return cy.get(logInPageElements.LogInPageLocators.passwordIPBox)
    }
    getLogInButton(){
        return cy.get(logInPageElements.LogInPageLocators.loginBtn)
    }
    getAcceptedUserNamesHeader(){
        return cy.get(logInPageElements.LogInPageLocators.accepted_username_header)
    }
    getAcceptedPwdsHeader(){
        return cy.get(logInPageElements.LogInPageLocators.accepted_password_header)
    }
    getAcceptedUserNames(){
        return cy.xpath(logInPageElements.LogInPageLocators.accepted_usernames)
    }
    getAcceptedPasswords(){
        return cy.xpath(logInPageElements.LogInPageLocators.accepted_passwords)
    }
    getLogInErrorMessage(){
        return cy.get(logInPageElements.LogInPageLocators.logIn_error_message)
    }

    //Actions on elements
    enterUserName(un){
        this.getUsernameBox().type(un)
    }
    enterPassword(pass){
        this.getPasswordBox().type(pass)
    }
    clickLoginButton(){
        this.getLogInButton().click()
    }
    
        
           
    

}