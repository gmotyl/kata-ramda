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

export const firstStudentName: Student = undefined;
