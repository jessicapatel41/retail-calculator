// Calculates discount based on order value
export function getDiscountRate(orderValue: number): number {
  if (orderValue >= 50000) return 0.15;
  if (orderValue >= 10000) return 0.1;
  if (orderValue >= 7000) return 0.07;
  if (orderValue >= 5000) return 0.05;
  if (orderValue >= 1000) return 0.03;
  return 0;
}

// Applies discount to the order value and returns the discounted price
export function applyDiscount(orderValue: number): number {
  const rate = getDiscountRate(orderValue);
  console.log(rate);
  console.log(orderValue);
  return orderValue - orderValue * rate; // discounted price
}
