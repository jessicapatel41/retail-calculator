import { getTaxRate, applyTax } from "./calculateTax";

// Tests for getTaxRate
describe("getTaxRate", () => {
  test("returns correct tax rate for each region", () => {
    expect(getTaxRate("AUK")).toBe(0.0685);
    expect(getTaxRate("WLG")).toBe(0.08);
    expect(getTaxRate("WAI")).toBe(0.0625);
    expect(getTaxRate("CHC")).toBe(0.04);
    expect(getTaxRate("TAS")).toBe(0.0825);
  });

  // Test for unknown region
  test("returns 0 for unknown region", () => {
    expect(getTaxRate("XYZ")).toBe(0);
    expect(getTaxRate("")).toBe(0);
  });
});

// Tests for applyTax
describe("applyTax", () => {
  test("applies tax correctly for a given region", () => {
    expect(applyTax(100, "AUK")).toBeCloseTo(106.85);
    expect(applyTax(200, "WLG")).toBeCloseTo(216);
    expect(applyTax(50, "CHC")).toBeCloseTo(52);
  });

  // Test for unknown region
  test("returns same value when region is unknown", () => {
    expect(applyTax(100, "XYZ")).toBe(100);
    expect(applyTax(200, "")).toBe(200);
  });
});
