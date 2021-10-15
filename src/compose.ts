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

export const firstStudentName: Student = undefined;

// #########################################################################
// # 3
// #########################################################################
// # Use the helper function _average to refactor averageNote as a composition
// #########################################################################
const _average = function (xs) {
  return R.reduce(R.add, 0, xs) / xs.length;
}; // <- leave be

var averageNote = function (cars) {
  var dollar_values = R.map(function (c) {
    return c.dollar_value;
  }, cars);
  return _average(dollar_values);
};
