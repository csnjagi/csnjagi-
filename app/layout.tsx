import type { Metadata, Viewport } from "next";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — Software & Network Engineer`,
    template: "%s | Collins Steve Njagi",
  },
  description:
    "Collins Steve Njagi is a computer scientist and technology professional in Nairobi, Kenya, building useful software and dependable IT infrastructure.",
  keywords: [
    SITE.name,
    "Software Developer",
    "Network Engineer",
    "Computer Scientist",
    "Nairobi Kenya",
    "FastAPI",
    "Network Monitoring",
  ],
  openGraph: {
    title: "Collins Steve Njagi — Software & Network Engineer",
    description:
      "Building reliable software, resilient networks and practical technology solutions.",
    type: "website",
    locale: "en_KE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Collins Steve Njagi — Software & Network Engineer",
    description: "Reliable software. Resilient networks. Practical solutions.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#080a0d",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
