export type EducationFact = {
  label: string;
  value: string;
};

export type CourseReference = {
  code: string;
  title: string;
  href?: string;
};

export type CourseGroup = {
  heading: string;
  courses: CourseReference[];
};

export type ActivityLink = {
  label: string;
  href: string;
};

export type ActivityEntry = {
  period: string;
  type: string;
  title: string;
  organization?: string;
  description: string[];
  tags?: string[];
  links?: ActivityLink[];
};

export type RecognitionItem = {
  date?: string;
  title: string;
  detail?: string;
};

export const activityContent = {
  metadataTitle: "Activity",
  eyebrow: "Activity",
  title: "Activity",
  introduction: [] as string[],
  education: {
    heading: "Education",
    institution: "University of Waterloo",
    program: "Computer Science Honours, Pure Mathematics Joint Honours",
    period: "",
    description: [] as string[],
    facts: [] as EducationFact[],
    courseGroups: [
      { heading: "Courses that shaped my interests", courses: [] },
      { heading: "Courses I want to take", courses: [] },
    ] as CourseGroup[],
  },
  timeline: {
    heading: "Chronological activity",
    entries: [] as ActivityEntry[],
  },
  recognition: {
    heading: "Recognition",
    items: [] as RecognitionItem[],
  },
};

