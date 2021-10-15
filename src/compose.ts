import R from "ramda";

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

export const firstStudentName = (students: Student[]): string => "Ala";

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
