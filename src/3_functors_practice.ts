const Box = (x: any) => ({
  map: (f: CallableFunction) => Box(f(x)),
  chain: (f: typeof Box) => f(x),
  fold: (f: CallableFunction) => f(x),
  toString: () => `Box(${x})`,
});

// Exercise: Box
// Goal: Refactor each example using Box
// Keep these tests passing!
// Bonus points: no curly braces

// #########################################################################
// # 1 - Using Box, refactor moneyToFloat to be unnested
// #########################################################################

// export const moneyToFloat = (str: string) => parseFloat(str.replace(/\$/, ""));

export const moneyToFloat = (str: string) =>
  Box(str)
    .map((x: string) => str.replace(/\$/, ""))
    .fold(parseFloat);

// #########################################################################
// # 2 - Using Box, refactor percentToFloat to remove assignment
// #########################################################################
// export const percentToFloat = (str) => {
//   const float = parseFloat(str.replace(/\%/, ""));
//   return float * 0.01;
// };

export const percentToFloat = (str) =>
  Box(str)
    .map((x: string) => x.replace(/\%/, ""))
    .map(parseFloat)
    .fold((x: number) => x * 0.01);

// #########################################################################
// # 3 - Using Box, refactor applyDiscount
// # (hint: each variable introduces a new Box)
// #########################################################################
// export const applyDiscount = (price, discount) => {
//   const cents = moneyToFloat(price);
//   const savings = percentToFloat(discount);
//   return cents - cents * savings;
// };

// export const applyDiscount = (price: string, discount: string) =>
//   Box(moneyToFloat(price)).fold((cents) =>
//     Box(percentToFloat(discount)) //
//       .fold((savings) => cents - cents * savings)
//   );

/**
 * above solution is not preatty - monads would help to make it better
 * we would like to flatten Box that is in the Box
 *
 *  let's write a function chain (flatMap) that expects (Box(Box(x)))
 */

export const applyDiscount = (price: string, discount: string) =>
  Box(moneyToFloat(price)).chain(
    (
      cents //
    ) =>
      Box(percentToFloat(discount)) //
        .fold((savings) => cents - cents * savings)
  );
