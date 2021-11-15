import R from "ramda";

// #########################################################################
// # 1
// #########################################################################
// # implement 'curry' function that takes as parameter function "f" with two parameters
// # and returns a function which takes two parameters one at a time
// # unskip test
// #########################################################################

export const curry = (f) => (x) => (y) => f(x, y);

// #########################################################################
// # 2
// #########################################################################
// # fix filter function to make getOdds work as expected
// # unskip test
// #########################################################################

const modulo = curry((x, y) => y % x);
const isOdd = modulo(2);
const filter = curry((f, xs) => xs.filter(f));

export const getOdds = filter(isOdd);

// #########################################################################
// # 3
// #########################################################################
// # refactor words
// # leverage fact that split is curried
// #########################################################################

const split = R.curry((delimiter: string, str: string) => str.split(delimiter));

export const words = split(" ");

// #########################################################################
// # 4
// #########################################################################
// # sentences use map to make a new words fn that not only works on 1 string,
// # but on an array of strings.
// # refactor it to simpler form and notice inferred typings
// #########################################################################

export const sentences = R.map(words);

// #########################################################################
// # 5
// #########################################################################
// # refactor fiterQs to remove noise
// #########################################################################

export const filterQs = R.filter(R.test(/q/gi));
