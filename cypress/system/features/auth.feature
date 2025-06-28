Feature: 'WooCommerce - Access Level Login'

Scenario: 'Login as Wholesale Customer'
    Given I am on login page
    When I log in with "wholesale_customer" credentials
    Then I should see the wholesale price in the product page


Scenario: 'Login as a Customer'
    Given I am on login page
    When I log in with "regular_customer" credentials
    Then I should not see the wholesale price in the product page