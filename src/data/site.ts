import { profile } from "@/data/profile";

export const siteFeatures = {
  commandPalette: false,
} as const;

export const siteContent = {
  url: "https://aditya-menon.vercel.app",
  metadata: {
    defaultTitle: profile.name,
    titleTemplate: `%s | ${profile.name}`,
    description: `${profile.name}'s personal homepage for technical interests and current activity.`,
    category: "Personal portfolio",
  },
};
