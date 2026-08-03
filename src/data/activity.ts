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
  sortDate: string;
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
    interests: {
      heading: "Mathematical interests",
      items: [] as string[],
    },
    courseGroups: [
      { heading: "Courses that shaped my interests", courses: [] },
      { heading: "Courses I want to take", courses: [] },
    ] as CourseGroup[],
    recognition: {
      heading: "Recognition",
      items: [] as RecognitionItem[],
    },
  },
  timeline: {
    heading: "Chronology",
    currentPeriodLabel: "Present",
    currentTypeLabel: "Current work",
    entries: [] as ActivityEntry[],
  },
};
