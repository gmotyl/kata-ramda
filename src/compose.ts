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
type LastNoteFunc = (students: Student[]) => number;

export const lastNote: LastNoteFunc = (students) => {
  const lastElement = R.last(students);

  return R.prop("note", lastElement);
};
