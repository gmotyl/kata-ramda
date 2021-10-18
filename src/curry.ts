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
// # fix filter function to make getOdds work as expected
// #########################################################################

const modulo = curry((x, y) => y % x);
const isOdd = modulo(2);
const filter = curry((xs, f) => xs.filter(f));

export const getOdds = filter(isOdd);
