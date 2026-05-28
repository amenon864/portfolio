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
        canvas: "var(--bg)",
        panel: "var(--panel)",
        raised: "var(--panel-elevated)",
        line: "var(--border)",
        strong: "var(--border-strong)",
        text: "var(--text)",
        muted: "var(--text-muted)",
        subtle: "var(--text-subtle)",
        accent: "var(--accent)",
        orange: "var(--accent-orange)",
        good: "var(--accent-green)",
        bad: "var(--accent-red)",
        info: "var(--accent-blue)",
        purple: "var(--accent-purple)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      boxShadow: {
        focus: "0 0 0 3px var(--focus-ring)",
      },
    },
  },
  plugins: [],
};

export default config;
