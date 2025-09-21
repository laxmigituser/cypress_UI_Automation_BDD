Feature: Inventory page related tests

@regression
Scenario Outline: Inventory page UI validation
Given User navigates to saucedemo website
When User login with credentials "<username>" "<password>"
Then Verify Page Header is "<page_header>" with sub header "<sub_header>"
And Verify hamburger cart icon and filter button displayed on page
And Verify "<Item_no>" items are displayed on page
And Verify "<Item_no>" item card has Add to cart button
And Verify footer UI displays twitter, facebook, linked in link with footer text
Examples:
| username      | password     | page_header | sub_header | Item_no |                                 
| standard_user | secret_sauce | Swag Labs   | Products   |     66   | 

Scenario Outline: Inventory page hamburger UI list
Given User navigates to saucedemo website
When User login with credentials "<username>" "<password>"
And User click on hamburger icon
Then Verify left menu gets displayed on page
And Verify following elements displayed in left menu
| All Items      |
| About          |
|Logout          |
|Reset App State |
And Verify close button is displayed in left menu
And Verify left menu gets collapsed on clicking close button
Examples:
| username      | password     |                                 
| standard_user | secret_sauce |

Scenario Outline: Logout Validation
Given User navigates to saucedemo website
When User login with credentials "<username>" "<password>"
And User click on hamburger icon
And User click on Logout button
Then Verify User lands on page with url "<login_page_url>"
Examples:
| username      | password     | login_page_url |                                 
| standard_user | secret_sauce | https://www.saucedemo.com/   |

Scenario Outline: Products List Validation
Given User navigates to saucedemo website
When User login with credentials "<username>" "<password>"
Then Verify products list displayed on page and compare with expected list

Examples:
| username      | password     |                              
| standard_user | secret_sauce |


