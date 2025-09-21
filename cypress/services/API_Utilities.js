/// <reference types = "Cypress" />
/// <reference types = "Cypress-xpath"/>


export class API_Utilities{

    getItemsList(){
        return cy.request({
            method: 'GET',
            url: Cypress.env('api_url')+'/posts',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

}