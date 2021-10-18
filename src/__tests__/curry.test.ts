import { curry, getOdds } from "../curry";

describe("curry", () => {
  it.skip("should curry two params", () => {
    const add = (x, y) => x + y;
    const curriedAdd = curry(add);
    const add2 = curriedAdd(2);
    const add7 = curriedAdd(7);

    expect(add2(10)).toBe(12);
    expect(add7(100)).toBe(107);
  });

  it.skip("shuld return odd numbers", () => {
    expect(getOdds([1, 2, 3, 4, 5])).toEqual([1, 3, 5]);
  });
});
