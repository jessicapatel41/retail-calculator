const TAX_RATES: Record<string, number> = {
  AUK: 0.0685,
  WLG: 0.08,
  WAI: 0.0625,
  CHC: 0.04,
  TAS: 0.0825,
};

export function getTaxRate(region: string): number {
  return TAX_RATES[region] ?? 0;
}

export function applyTax(amount: number, region: string): number {
  const rate = getTaxRate(region);
  return amount + amount * rate;
}
