import { curry, filterQs, getOdds, sentences, words } from "../curry";

describe("curry", () => {
  it.skip("#1 should curry two params", () => {
    const add = (x, y) => x + y;
    const curriedAdd = curry(add);
    const add2 = curriedAdd(2);
    const add7 = curriedAdd(7);

    expect(add2(10)).toBe(12);
    expect(add7(100)).toBe(107);
  });

  it.skip("#2 shuld return odd numbers", () => {
    expect(getOdds([1, 2, 3, 4, 5])).toEqual([1, 3, 5]);
  });

  it("#3 split", () => {
    expect(words("Ala ma kota")).toEqual(["Ala", "ma", "kota"]);
  });

  it("#4 sentences", () => {
    expect(sentences(["Ala ma kota", "kot ma Alę"])).toEqual([
      ["Ala", "ma", "kota"],
      ["kot", "ma", "Alę"],
    ]);
  });

  it("#5 filterQs", () => {
    expect(filterQs(["quick", "camels", "quarry", "over", "quails"])).toEqual([
      "quick",
      "quarry",
      "quails",
    ]);
  });
});
