import { compose } from "ramda";

/**
 * https://kwijibo.github.io/task-monad-in-javascript/
 *
 * Task is like a Promise
 */

// One way of implementing Box is
// const Box = x => ({
//   map: Box(x)
// })

// If you take a function as argument instead, it turns out that
// MAPPING IS FUNCTION COMPOSITION

const Box = (f: (x?: unknown) => unknown) => ({
  map: (g: (x?: any) => unknown) => Box(compose(f, g)),
  fold: f,
});

const res = Box(() => 2)
  .map((two) => 10)
  .fold();

console.log(res);

// https://codepen.io/drboolean/pen/Mparbp?editors=0010
