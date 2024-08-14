Feature: Sorting filter on Swag Labs homepage
  
Background: 
    Given User open the Swag Labs web
    And Verify user on the right page
    And User enter the username on Username text field
    And User enter the password on Password text field
    When User click on the login button
    Then Login should be sucessful and user directed to Swag Labs homepage

Scenario: Sort from lowest to highest price
    Given User already on Swag Labs homepage
    And User click on the sort button
    And User click on the sort options on the drop down selection
    # Then The item list should be sorted according to user selection
