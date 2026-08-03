export type CourseNote = {
  courseCode: string;
  courseName: string;
  institution: string;
  fileName: string;
  href: string;
};

export type CourseNoteTerm = {
  term: string;
  entries: CourseNote[];
};

export const notesContent = {
  metadataTitle: "Course Notes",
  eyebrow: "Notes",
  title: "Course notes",
  introduction: [
    "Notes from courses and topics I have spent time with.",
  ],
  availableNotesLabel: "Available notes",
  pdfLabel: "PDF",
  terms: [
    {
      term: "Spring 2026",
      entries: [
        {
          courseCode: "CS 245",
          courseName: "Computability",
          institution: "University of Waterloo",
          fileName: "computability-cs245.pdf",
          href: "/computability-cs245.pdf",
        },
      ],
    },
  ] as CourseNoteTerm[],
};
