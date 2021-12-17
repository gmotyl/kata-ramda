import {
  applyDiscount,
  moneyToFloat,
  percentToFloat,
} from "../3_functors_practice";

describe("3: functors", () => {
  it("#1 refactor moneyToFloat to be unnested", () => {
    expect(moneyToFloat("$5.00")).toBe(5);
  });

  it("#2 refactor percentToFloat to remove assignment ", () => {
    expect(percentToFloat("20%")).toBe(0.2);
  });

  it("#3: Apply discount ", () => {
    expect(applyDiscount("$5.00", "20%")).toBe(4);
  });
});
