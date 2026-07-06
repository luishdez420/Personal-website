import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CustomCursor } from "@/components/CustomCursor";
import { CommandPalette } from "@/components/CommandPalette";
import { EasterEggTerminal, TabStatus } from "@/components/ExperienceEnhancers";
import { Navigation } from "@/components/Navigation";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ThemeProvider } from "@/components/ThemeProvider";
import { profile } from "@/data/profile";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://luishernandez.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Luis Hernandez | Software Engineer",
    template: "%s | Luis Hernandez"
  },
  description:
    "Portfolio for Luis Hernandez, a Software Engineering graduate and full-stack/cloud developer building reliable cloud systems, scalable APIs, and thoughtful digital products.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Luis Hernandez | Software Engineer",
    description: profile.statement,
    url: "/",
    siteName: "Luis Hernandez Portfolio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Luis Hernandez | Software Engineer",
    description: profile.statement
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <ScrollProgress />
          <Navigation />
          {children}
          <CommandPalette />
          <CustomCursor />
          <EasterEggTerminal />
          <TabStatus />
        </ThemeProvider>
      </body>
    </html>
  );
}
