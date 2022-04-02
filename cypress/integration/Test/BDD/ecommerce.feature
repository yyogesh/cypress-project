Feature: End to end Ecommerce validation
    application Regression

    Scenario: Ecommerce products delivery
        Given Open ecommerce page
        When I add items to cart
        And Validate the total prices
        Then Select the country submit and verify Thankyou