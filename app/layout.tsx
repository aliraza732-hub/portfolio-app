import type { Metadata, Viewport } from "next";
// import { DM_Sans, DM_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import SkipLink from "./components/SkipLink";


// const dmSans = DM_Sans({
//   variable: "--font-dm-sans",
//   subsets: ["latin"],
// });

// const dmMono = DM_Mono({
//   variable: "--font-dm-mono",
//   subsets: ["latin"],
// });

// const playfairDisplay = Playfair_Display({
//   variable: "--font-playfair-display",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title:       "Ali Mubarak — Software Engineer",
  description: "Software Engineer based in Kasur, Pakistan. I build modern, performant web applications with clean architecture and great user experiences.",
  keywords:    ["Software Engineer", "Ali Mubarak", "Web Development", "Full Stack", "Next.js", "React", "TypeScript", "Pakistan"],
  authors:     [{ name: "Ali Mubarak", url: "https://linkedin.com/in/ali32" }],
  creator:     "Ali Mubarak",
  robots:      { index: true, follow: true },
  openGraph: {
    type:        "website",
    locale:      "en_US",
    title:       "Ali Mubarak — Software Engineer",
    description: "Software Engineer based in Kasur, Pakistan. Building modern, performant web applications.",
    siteName:    "Ali Mubarak Portfolio",
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Ali Mubarak — Software Engineer",
    description: "Software Engineer based in Kasur, Pakistan. Building modern, performant web applications.",
    creator:     "@alirazamehar732",
  },
};

export const viewport: Viewport = {
  themeColor:    "#080b12",
  width:         "device-width",
  initialScale:  1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   return (
    <html lang="en">
      <body>
        <SkipLink />

        {children}</body>
    </html>
  );
}
