Feature: User want to checkout item(s) on cart
  
Background: 
    Given User open the Swag Labs web
    And Verify user on the right page
    And User enter the username on Username text field
    And User enter the password on Password text field
    When User click on the login button
    Then Login should be sucessful and user directed to Swag Labs homepage

Scenario: User want to add item to cart from home page 
    When User already on Swag Labs homepage
    And User click on Add to Cart button
    Then Cart icon should be updated with the number of item in cart

Scenario: User want to checkout item(s) on cart
    When User click on the cart button
    And User already on cart page with item added
    And User Click on checkout button
    And User fill the first name text field
    And User fill the last name text field
    And User fill the postal code text field
    And User click on continue button
    And User already on checkout overview page
    And User click on finish button
    Then User should see the order success page

Scenario: User want to add item to cart from item page
    When User already on Swag Labs homepage
    And User click on the item name
    And User click on Add to Cart button from item detail page
    Then Cart icon should be updated with the number of item in cart
