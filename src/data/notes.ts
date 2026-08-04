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
  metadataDescription:
    "Course notes from computer science and mathematics courses at the University of Waterloo.",
  eyebrow: "Notes",
  title: "Course notes",
  introduction: [
    "Notes from courses and topics I have spent time with.",
  ],
  availableNotesLabel: "Available notes",
  learningResourceType: "Course notes",
  pdfLabel: "PDF",
  entries: [
    {
      courseCode: "CS 245",
      courseName: "Computability",
      institution: "University of Waterloo",
      term: "Spring 2026",
      fileName: "computability-cs245.pdf",
      href: "/computability-cs245.pdf",
    },
  ] as CourseNote[],
};
