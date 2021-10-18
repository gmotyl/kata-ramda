import { curry } from "../curry";

describe("curry", () => {
  it("should curry two params", () => {
    const add = (x, y) => x + y;
    const curriedAdd = curry(add);
    const add2 = curriedAdd(2);
    const add7 = curriedAdd(7);

    expect(add2(10)).toBe(12);
    expect(add7(100)).toBe(107);
  });
});
