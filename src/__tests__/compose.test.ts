import {
  averageNote,
  firstStudentName,
  lastNote,
  sanitizeNames,
  whoHasPassed,
} from "../compose";

const students = [
  { name: "Ala Makota", note: 6 },
  { name: "Greg Mighty", note: 5 },
  { name: "Kent Clerk", note: 1 },
  { name: "Klara Kukaracza", note: 3 },
  { name: "Tod Toddler", note: 1 },
];

describe("compose", () => {
  it("#1 last note is 1", () => {
    expect(lastNote(students)).toBe(1);
  });

  it("#2 firstStudentName is Ala", () => {
    expect(firstStudentName(students)).toBe("Ala Makota");
  });

  it("#3 average note", () => {
    expect(averageNote(students)).toBe(3.2);
  });

  it.skip("#4 sanitizeNames", () => {
    expect(sanitizeNames(students)).toMatchInlineSnapshot(`
Array [
  "ala_makota",
  "greg_mighty",
  "kent_clerk",
  "klara_kukaracza",
  "tod_toddler",
]
`);
  });
  it("#5 whoHasPassed", () => {
    expect(whoHasPassed(students)).toBe(
      "Ala Makota, Greg Mighty, Klara Kukaracza"
    );
  });
});
