import type { Metadata } from "next";
import "@fontsource-variable/fira-code/wght.css";
import "@fontsource/libertinus-serif/latin-400.css";
import "@fontsource/libertinus-serif/latin-400-italic.css";
import "@fontsource/libertinus-serif/latin-600.css";
import "./globals.css";
import { SiteShell } from "@/components/SiteShell";
import { siteContent } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: siteContent.metadata.defaultTitle,
    template: siteContent.metadata.titleTemplate,
  },
  description: siteContent.metadata.description,
  authors: [{ name: siteContent.metadata.defaultTitle }],
  creator: siteContent.metadata.defaultTitle,
  category: siteContent.metadata.category,
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: siteContent.metadata.defaultTitle,
    title: siteContent.metadata.defaultTitle,
    description: siteContent.metadata.description,
  },
  twitter: {
    card: "summary",
    title: siteContent.metadata.defaultTitle,
    description: siteContent.metadata.description,
  },
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
