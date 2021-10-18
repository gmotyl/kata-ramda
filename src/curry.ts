import R from "ramda";

// #########################################################################
// # 1
// #########################################################################
// # implement 'curry' function that takes as parameter function "f" with two parameters
// # and returns a function which takes two parameters one at a time
// # unskip test
// #########################################################################

export const curry = undefined;

// #########################################################################
// # 2
// #########################################################################
// # fix filter function to make getOdds work as expected
// # unskip test
// #########################################################################

const modulo = R.curry((x, y) => y % x);
const isOdd = modulo(2);
const filter = R.curry((xs, f) => xs.filter(f));

export const getOdds = filter(isOdd);
