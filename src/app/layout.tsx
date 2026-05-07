import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ??
  "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aaditya Patil",
    template: "%s · Aaditya Patil"
  },
  description: "DevOps Engineer | Full Stack Developer",
  openGraph: {
    title: "Aaditya Patil",
    description: "DevOps Engineer | Full Stack Developer",
    url: siteUrl,
    siteName: "Aaditya Patil",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaditya Patil",
    description: "DevOps Engineer | Full Stack Developer"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

