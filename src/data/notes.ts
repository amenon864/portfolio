export type CourseNote = {
  courseCode: string;
  courseName: string;
  institution: string;
  term: string;
  fileName: string;
  href: string;
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
  entries: [
    {
      courseCode: "CS 245",
      courseName: "Computability",
      institution: "University of Waterloo",
      term: "",
      fileName: "computability-cs245.pdf",
      href: "/computability-cs245.pdf",
    },
  ] as CourseNote[],
};

