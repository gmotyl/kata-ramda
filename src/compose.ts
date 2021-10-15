import R from "ramda";

// #########################################################################
// # 1
// #########################################################################
// # use R.compose() to refactor lastNote
// # Hint: Ramda functions are curried.
// #########################################################################

export type Student = {
  name: string;
  note: number;
};

export const lastNote = (students: Student[]) => {
  const lastElement = R.last(students);

  return R.prop("note", lastElement);
};

// #########################################################################
// # 2
// #########################################################################
// # use use R.compose(), R.prop() and R.head()
// # to retrieve first student's name
// #########################################################################

export const firstStudentName = (students: Student[]): string => "Ala Makota";

// #########################################################################
// # 3
// #########################################################################
// # Use the helper function _average to refactor averageNote as a composition
// #########################################################################
const _average = function (xs: number[]) {
  return R.reduce<number, number>(R.add, 0, xs) / xs.length;
}; // <- leave be

export var averageNote = function (students: Student[]) {
  var notes = R.map(function (s) {
    return s.note;
  }, students);
  return _average(notes);
};

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

export const sanitizeNames = undefined;
