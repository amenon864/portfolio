import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/SiteShell";
import { siteContent } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: siteContent.metadata.defaultTitle,
    template: siteContent.metadata.titleTemplate,
  },
  description: siteContent.metadata.description,
};

const displayModeScript = `
(() => {
  try {
    const storedMode = window.localStorage.getItem("display-mode");
    const mode = storedMode === "terminal" || storedMode === "docs"
      ? storedMode
      : "terminal";

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
