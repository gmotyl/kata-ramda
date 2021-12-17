/**
 * BOXING
 * dotchain following function
 *
 * **/

const nextCharForNumberString_ = (str: string) => {
  const trimmed = str.trim();
  const number = parseInt(trimmed);
  const nextNumber = new Number(number + 1);
  const value = nextNumber.valueOf();
  return String.fromCharCode(value);
};

// const result = nextCharForNumberString_("   64");

/**
 * let's define Box
 * - map runs a function on x but keeps it in the Box, so we can chain
 */

export const Box = (x: any) => ({
  map: (f: CallableFunction) => Box(f(x)),
  fold: (f: CallableFunction) => f(x), // implement in Step 2.
  // - runs a function on x and dont Box it this time,
  // drop out of the box - you can't chain any more
  toString: () => `Box(${x})`,
});

/**
 * if you put following function in the Box
 *  const result = ["  a"]
 *    .map((x) => x.toLocaleUpperCase())
 *    .map((x) => x.trim());
 */

// const result = Box("  a")
//   .map((x: string) => x.toLocaleUpperCase())
//   .map((x: string) => x.trim());

/**
 * you have Box returned as well, so you can continue to map
 */

// console.log(result); // { map: [Function: map] }

/**
 * Steps to refactor nextCharForNumberString
 * 1. Put param  in the Box, map & map again
 * this is composition

const nextCharForNumberString = (str: string) =>
  Box(str)
    .map((x: string) => x.trim())
    .map((x: string) => parseInt(x))
    .map((x: number) => new Number(x + 1))
    .map((x: Number) => x.valueOf())
    .map((x: number) => String.fromCharCode(x));

 * we endup with Box('A'), but we want have plain 'A'
 * 
 * 2. Add fold to the Box
 * Boxing allows you to compose not composable functions
 * Makes your programs much more digestible, you know at hig level it can just flow through the steps
    */

const nextCharForNumberString = (str: string) =>
  Box(str)
    .map((x: string) => x.trim())
    .map((x: string) => parseInt(x))
    .map((x: number) => new Number(x + 1))
    .map((x: Number) => x.valueOf())
    .fold((x: number) => String.fromCharCode(x));

const result = nextCharForNumberString("   64");

console.group(result);

/**
 * Box is a functor since it has a map method, it's identity functor
 * we are abstracting function application, we are not calling those functions, instead we pass them to Box
 * and say, hey Box call these for me!
 
const Box = (x: any) => ({
  map: (f: CallableFunction) => Box(f(x)), <--- function call happens here, inside the Box!
});

 */

/**
 * You can define composition with Box
 */

const compose = (f: CallableFunction, g: CallableFunction) => (x: any) =>
  Box(x).map(g).fold(f);
