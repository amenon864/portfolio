import { profile } from "@/data/profile";

export const siteContent = {
  url: "https://aditya-menon.vercel.app",
  metadata: {
    defaultTitle: profile.name,
    titleTemplate: `%s | ${profile.name}`,
    description: `${profile.name}'s personal technical homepage, activity, and course notes.`,
    category: "Personal portfolio",
  },
};
