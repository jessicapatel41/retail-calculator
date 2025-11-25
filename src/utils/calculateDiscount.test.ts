import { getDiscountRate, applyDiscount } from "./calculateDiscount";

// Tests for getDiscountRate function
describe("getDiscountRate", () => {
  //Check of value is equal or greater than value

  test("returns 0.15 for orders >= 50000", () => {
    expect(getDiscountRate(50000)).toBe(0.15);
    expect(getDiscountRate(60000)).toBe(0.15);
  });

  test("returns 0.10 for orders >= 10000", () => {
    expect(getDiscountRate(10000)).toBe(0.1);
    expect(getDiscountRate(15000)).toBe(0.1);
  });

  test("returns 0.07 for orders >= 7000", () => {
    expect(getDiscountRate(7000)).toBe(0.07);
    expect(getDiscountRate(8000)).toBe(0.07);
  });

  test("returns 0.05 for orders >= 5000", () => {
    expect(getDiscountRate(5000)).toBe(0.05);
  });

  test("returns 0.03 for orders >= 1000", () => {
    expect(getDiscountRate(1000)).toBe(0.03);
  });

  test("returns 0 for orders below 1000", () => {
    expect(getDiscountRate(999)).toBe(0);
    expect(getDiscountRate(0)).toBe(0);
  });
});

// Tests for applyDiscount function
describe("applyDiscount", () => {
  test("applies correct discount for 10% tier", () => {
    expect(applyDiscount(10000)).toBe(9000);
  });

  test("applies correct discount for 5% tier", () => {
    expect(applyDiscount(5000)).toBe(4750);
  });

  test("returns the same value when no discount applies", () => {
    expect(applyDiscount(500)).toBe(500); // No discount for orders below 1000
  });

  test("handles large values", () => {
    expect(applyDiscount(50000)).toBe(42500); // 15% discount
  });
});
