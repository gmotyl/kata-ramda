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

// comment
