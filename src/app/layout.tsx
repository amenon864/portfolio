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
    "A fast technical index of systems, algorithms, graphics, embedded software, programming languages, and practical web tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
