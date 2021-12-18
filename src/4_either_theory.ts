//  Either Monad

// const findColor = (name: string) =>
//   ({ red: "#ff4444", blue: "#3b5998", yellow: "#fff68f" }[name]);

// if you misspell, you get undefined

// const res = findColor("redx").toUpperCase(); // boom!

// 1. use Box to deal with undefined

const Right = (x: any) => ({
  map: (f: CallableFunction) => Right(f(x)),
  chain: (f: typeof Right) => f(x),
  fold: (f: CallableFunction, g: CallableFunction) => g(x),
  toString: () => `Right(${x})`,
});

const Left = (x?: any) => ({
  map: (f: CallableFunction) => Left(x),
  chain: (f: typeof Left) => Left(x),
  fold: (f: CallableFunction, g: CallableFunction) => f(x),
  toString: () => `Left(${x})`,
});

/**
 * Left and Right - they look almost like the Box but they are two sublasses of superclass we call either
 *
 * 2. Refactor findColor
 */

const findColor = (name: string) => {
  const found = { red: "#ff4444", blue: "#3b5998", yellow: "#fff68f" }[name];

  return found ? Right(found) : Left("not found");
};

// const res = findColor("redz");
// console.log(res.toString()); // Right(#ff4444)

// const res = findColor("redz");
// console.log(res.toString()); // Left(not found)

// Fold takes two functions, If you are Left it runs the first one, if you are Right it runs second one

const res = () =>
  findColor("red") //
    .map((x: string) => x.toUpperCase()) // Right maps, Left ignores it <--- happy path
    .fold(
      () => "no color!", //left case
      (color: string) => color // right case
    );

// in right case you continue composition (happy path) in left case you cut it out
// none of happy path runs in LEft case, instead you bubble up the error
// inversion of control -> you manage error on fold, findColor simply returns Either
// effectively this is inverted if/else

// 3. Introduce generic fromNullable

const fromNullable = (x: any) => (x != null ? Right(x) : Left());

const findColor_ = (name: string) =>
  fromNullable({ red: "#ff4444", blue: "#3b5998", yellow: "#fff68f" }[name]);

// -----

console.log(res());

/**
 * Refactor using fromNullable
 */

const fs = require("fs");

// const getPort = () => {
//   try {
//     const str = fs.readFileSync("config.json");
//     const config = JSON.parse(str);
//     return config.port;
//   } catch (e) {
//     return 8080;
//   }
// };

const tryCatch = (f: CallableFunction) => {
  try {
    return Right(f());
  } catch (error) {
    return Left(error);
  }
};

// const getPort = () =>
//   tryCatch(() => fromNullable(fs.readFileSync("config.json")))
//     .map((contents) => JSON.parse(contents)) //
//     .map((config) => config.port) //
//     .fold(
//       () => 8080,
//       (x) => x
//     );

const readFileSync = (path: string) => tryCatch(() => fs.readFileSync(path));

// const getPort = () =>
//   readFileSync("config.json") // Right('...something...')
//     .map((contents) => JSON.parse(contents))
//     .map((config) => config.port) //
//     .fold(
//       () => 8080,
//       (x) => x
//     );
const parseJson = (contents: string) => tryCatch(() => JSON.parse(contents));

const getPort = () =>
  readFileSync("config.json") // Right('...some string...')
    // .map((contents) => parseJson(contents)) // Right(Right({...some json...}))
    .chain((contents) => parseJson(contents)) // Right({...some json...}) chain is flatMap
    .map((config) => config.port) //
    .fold(
      () => 8080,
      (x) => x
    );
