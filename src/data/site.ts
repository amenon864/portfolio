import { profile } from "@/data/profile";

export const siteContent = {
  metadata: {
    defaultTitle: profile.name,
    titleTemplate: `%s | ${profile.name}`,
    description: `${profile.name}'s personal technical homepage, activity, and course notes.`,
    category: "Personal portfolio",
  },
};
