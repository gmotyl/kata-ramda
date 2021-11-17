import R from "ramda";

// #########################################################################
// # 0 - Intro
// #########################################################################
const compose = (f, g) => x => f(g(x))

// currry plays well with composition, as it helps to make any fn into unary function
const concat = R.curry((y: string, x: string) => x + y);
const toUpper = (s: string) => s.toUpperCase()

const shout = compose(concat('!'), toUpper);
console.log(shout('Ala ma kota'));

// #########################################################################
// # 1
// #########################################################################
// # use R.compose() to refactor lastNote
// # Hint: Ramda functions are curried.
// #########################################################################

type Student = {
  name: string;
  note: number;
};

export const lastNote = R.compose<Student[], Student, number>(
  R.prop("note"),
  R.last
);

// #########################################################################
// # 2
// #########################################################################
// # use use R.compose(), R.prop() and R.head()
// # to retrieve first student's name
// #########################################################################

// export const firstStudentName = (students: Student[]): string => "Ala";
export const firstStudentName = R.compose<Student[], Student, string>(
  R.prop("name"),
  R.head
);

// #########################################################################
// # 3
// #########################################################################
// # Use the helper function _average to refactor averageNote as a composition
// #########################################################################
const _average = function (xs: number[]) {
  return R.reduce<number, number>(R.add, 0, xs) / xs.length; // <- leave be
};

export var averageNote = R.compose<Student[], number[], number>(
  _average,
  R.map(R.prop("note"))
);

// #########################################################################
// # 4
// #########################################################################
// # unskip test '#4 sanitizeNames' in __tests__/compose.tets.ts
// #########################################################################
// # Write a function: sanitizeNames() using compose that returns
// # a list of lowercase and underscored names:
// # e.g: sanitizeNames(["Hello World"]) //=> ["hello_world"].
// #########################################################################

const _underscore = R.replace(/\W+/g, "_"); //<-- leave this alone and use to sanitize

// phase 1
// export const sanitizeNames = 
//   R.compose<Student[], string[], string[], string[]>(
//     R.map(_underscore),
//     R.map(R.toLower),
//     R.map(R.prop("name"))
//   )

// 1. since map = curry((f: , x) => x.map(f))
// 2. compose(map(f), map(g)) == map(compose(f, g)) -- category theory explains it (only if f, and g are functions!!)
// compose(map(f), map(g))  -- many looping
//  map(compose(f, g)) -- one loop

// final solution
export const sanitizeNames = R.map(
  R.compose<Student, string, string, string>(
    _underscore,
    R.toLower,
    R.prop("name")
  )
);

// compose(map(f), map(g)) == map(compose(f, g))
//   many loops composed   == one loop

// #########################################################################
// # 5
// #########################################################################
// # Refactor whoHasPassed with compose
// #########################################################################

const passCondition = (s: Student) => s.note > 1;

export const whoHasPassed = R.compose<Student[], Student[], string[], string>(
  R.join(", "),
  R.map(R.prop("name")),
  R.filter(passCondition)
);
