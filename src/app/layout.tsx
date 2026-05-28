import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/SiteShell";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: {
    default: `${profile.name} | Portfolio`,
    template: `%s | ${profile.name}`,
  },
  description:
    "Aditya Menon's personal website and portfolio",
};

const displayModeScript = `
(() => {
  try {
    const storedMode = window.localStorage.getItem("display-mode");
    const mode = storedMode === "terminal" || storedMode === "docs"
      ? storedMode
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "terminal"
        : "docs";

    document.documentElement.dataset.mode = mode;
  } catch {
    document.documentElement.dataset.mode = "terminal";
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: displayModeScript }} />
      </head>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
