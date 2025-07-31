const inventoryPageElements = require('../page_elements/InventoryPageElements.json')

export class InventoryPageActions{
    getHamburger(){
        return cy.get(inventoryPageElements.InventoryPageLocators.hamburger)
    }
    getHeaderLogo() {
        return cy.get(inventoryPageElements.InventoryPageLocators.headerLogo)
    }
    getCartIcon(){
        return cy.get(inventoryPageElements.InventoryPageLocators.cartIcon)
    }
    getSecondaryHeaderLogo(){
        return cy.get(inventoryPageElements.InventoryPageLocators.secondary_header_logo)
    }
    getFilter() {
        return cy.get(inventoryPageElements.InventoryPageLocators.filter_dropdown)
    }
    getInventoryItemsCard(){
        return cy.get(inventoryPageElements.InventoryPageLocators.inventory_item_card)
    }
    getAddToCartInVentoryItem(){
        return cy.xpath(inventoryPageElements.InventoryPageLocators.Item_Card_AddToCart)
    }
    //footer
    getTwitterLink(){
        return cy.get(inventoryPageElements.InventoryPageLocators.footer_twitter_link)
    }
    getfacebookLink(){
        return cy.get(inventoryPageElements.InventoryPageLocators.footer_facebook_link)
    }
    getLinkedInLink(){
        return cy.get(inventoryPageElements.InventoryPageLocators.footer_linkedin_link)
    }
    getFooterText(){
        return cy.get(inventoryPageElements.InventoryPageLocators.footer_text)
    }
    
}