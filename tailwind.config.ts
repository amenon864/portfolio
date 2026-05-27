import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#090a0c",
        panel: "#101216",
        raised: "#151922",
        line: "#242a35",
        text: "#e8edf2",
        muted: "#9aa6b2",
        accent: "#7dd3fc",
        good: "#86efac",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      boxShadow: {
        focus: "0 0 0 3px rgba(125, 211, 252, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
