// #########################################################################
// # 1
// #########################################################################
// # implement 'curry' function that takes as parameter function "f" with two parameters
// # and returns a function which takes two parameters one at a time
// #########################################################################

export const curry = undefined;

// #########################################################################
// # 2
// #########################################################################
// # (using curry) implement getOdds that takes array of numbers
// # and returns array of odd numbers
// #########################################################################

const modulo = curry((x, y) => y % x);
const isOdd = modulo(2);
const filter = curry((f, xs: []) => xs.filter(f));

export const getOdds = undefined;
