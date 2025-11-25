# retail-calculator

PURPOSE: To calculates the total cost of a retail order based on quantity, price per item, region-based tax, and discounts.

## Installations/ Set-Up

- Created react-typescript app using Vite
- installed Chakra UI for styling
- installed JEST for testing

## Components

- CalculatorForm

  - Handles inputs for items, price, and region.
  - Uses Chakra UI components (NumberInput, Select) for consistent styling.
  - Updates React state for each input.

- ResultsCard
  - Displays a breakdown of the calculations: - Order value - Discounted value - Tax applied (final answer)
    Only shows when all inputs are valid.

## Utilities

- calculateDiscount.ts

  - getDiscountRate(orderValue) → returns the discount percentage based on order tiers.
  - applyDiscount(orderValue) → applies the discount and returns the discounted total.

- calculateTax.ts
  - getTaxRate(region) → returns the tax percentage for a given 3-letter region code.
  - applyTax(amount, region) → applies the tax to a discounted amount and returns the taxed total.

## Validation

- basic validation has been added on all three inputs.
- Items and Price: must be numbers greater than 0.
- Region: must select from dropdown

ResultsCard will only be shown when the above is valid.

## Testing

- Unit tests are written using Jest:

- calculateDiscount.test.ts

  - Tests all discount tiers
  - Checks that applyDiscount returns the correct discounted value

- calculateTax.test.ts
  - Tests tax rates for all regions
  - Checks that applyTax applies the correct tax
