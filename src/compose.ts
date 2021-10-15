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
