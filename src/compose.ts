import R from "ramda";

// #########################################################################
// # 1
// #########################################################################
// # use R.compose() to refactor lastNote
// # Hint: Ramda functions are curried.
// #########################################################################

export const lastNote = (students) => {
  const lastElement = R.last(students);

  return R.prop("note", lastElement);
};
