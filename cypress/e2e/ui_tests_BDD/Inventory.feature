Feature: Login page related tests

Scenario: Inventory page UI validation
Given User navigates to saucedemo website
When User login with credentials "<username>" "<password>"
Then Verify Page Header is "<page_header>" with sub header "<sub_header>"
And Verify hamburger cart icon and filter button displayed on page
And Verify "<Item_no>" items are displayed on page
And Verify "<Item_no>" item card has Add to cart button
And Verify footer UI displays twitter, facebook, linked in link with footer text
Examples:
| username      | password     | page_header | sub_header | Item_no |                                 
| standard_user | secret_sauce | Swag Labs   | Products   |     6   | 