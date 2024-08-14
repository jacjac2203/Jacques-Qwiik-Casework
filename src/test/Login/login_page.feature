Feature: Login to Swag Labs
  
Background: 
    Given User open the Swag Labs web
    And Verify user on the right page

Scenario: Successful login scenario
    And User enter the username on Username text field
    And User enter the password on Password text field
    When User click on the login button
    Then Login should be sucessful and user directed to Swag Labs homepage

 Scenario: failed login scenario
    And User enter the wrong username on Username text field
    And User enter the wrong password on Password text field
    When User click on the login button
    Then Error message should be shown