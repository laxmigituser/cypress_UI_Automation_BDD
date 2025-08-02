Feature: Login page related tests

@regression @sanity
Scenario Outline: Login Page UI Validations
Given User navigates to saucedemo website
Then Verify page title should be "<pageTitle>"
And Verify loginpage logo is displayed
And Verify loginpage logo text is "<logoText>"
And Verify Username input box is displayed and enabled
# here we can use Then in the stepdefinition for line 6 since previous keyword is Then
And Verify Password input box is displayed and enabled
And Verify Login Button is displayed and enabled
And Verify Accepted username label is displayed with text "<un_text>"
And Verify following usernames are displayed below the label
| standard_user     |
| locked_out_user   |
| problem_user      |
| performance_glitch_user |
| error_user |
| visual_user |
And Verify Accepted password label is displayed with text "<pw_text>"
And Verify following passwords are displayed below the label
| secret_sauce |

Examples:
| pageTitle | logoText  | un_text                 | pw_text                 |
| Swag Labs | Swag Labs | Accepted usernames are: | Password for all users: |


Scenario Outline: Login with valid credential
Given User navigates to saucedemo website
When User enters username as "<username>"
And User enters password as "<password>"
And User click on Login Button
Then Verify user is directed to page with url "<page_url>"

Examples:
| username               | password     | page_url                                   |
| standard_user          | secret_sauce | https://www.saucedemo.com/inventory.html   |
| problem_user           | secret_sauce | https://www.saucedemo.com/inventory.html   |
| performance_glitch_user| secret_sauce | https://www.saucedemo.com/inventory.html   |
| error_user             | secret_sauce | https://www.saucedemo.com/inventory.html   |
| visual_user            | secret_sauce | https://www.saucedemo.com/inventory.html   |


Scenario Outline: Login with Invalid credential
Given User navigates to saucedemo website
When User enters username as "<username>"
And User enters password as "<password>"
And User click on Login Button
Then Verify user is directed to page with url "<page_url>"
And Verify "<err_msg>" is displayed above login button

Examples:
| username               | password     | page_url                     | err_msg |
| locked_out_user        | secret_sauce | https://www.saucedemo.com/   | Epic sadface: Sorry, this user has been locked out. |
| standard_user          | secret123    | https://www.saucedemo.com/   | Epic sadface: Username and password do not match any user in this service |


