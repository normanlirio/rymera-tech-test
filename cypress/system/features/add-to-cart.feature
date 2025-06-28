Feature: Add Product to Cart

Scenario: Wholesale customer adds a product to the cart
    Given I login with "wholesale_customer" credentials
    And the customer is on the Shop page
    When the customer searches for the "item"
    And clicks the add to cart button
    And the price should match in the Shop and Cart