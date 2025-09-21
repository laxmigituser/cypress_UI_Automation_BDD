const inventoryPageElements = require('../page_elements/InventoryPageElements.json')

export class InventoryPageActions{
    //hamburger
    getHamburger(){
        return cy.get(inventoryPageElements.InventoryPageLocators.hamburger)
    }
    getLeftMenuCard(){
        return cy.get(inventoryPageElements.InventoryPageLocators.left_menu_card)
    }
    getLogOutButton(){
        return cy.xpath(inventoryPageElements.InventoryPageLocators.logout_button)
    }
    getLeftMenuCloseButton(){
        return cy.get(inventoryPageElements.InventoryPageLocators.left_menu_close_btn)
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
    getInventoryItemNames(){
        return cy.get(inventoryPageElements.InventoryPageLocators.item_card_name)
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