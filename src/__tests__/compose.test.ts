import { lastNote } from "../compose";

const students = [
  { name: "Ala", note: 6 },
  { name: "Greg", note: 5 },
  { name: "Kent", note: 6 },
  { name: "Klara", note: 3 },
  { name: "Tod", note: 1 },
];

describe("compose", () => {
  it("last note is 1", () => {
    expect(lastNote(students)).toBe(1);
  });
});
