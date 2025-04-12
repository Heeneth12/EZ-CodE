import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EZ-CodE | Online Compiler, Collaboration, and Interviews",
  description: "Write and run code, collaborate, and interview with EZ-CodE.",
  keywords: [
    "online compiler",
    "collaborative coding",
    "coding platform",
    "code editor",
    "HTML editor",
    "JavaScript compiler",
    "Python online compiler",
    "C++ online compiler",
  ],
  openGraph: {
    title: "EZ-CodE | Online Compiler & Interview Platform",
    description:
      "All-in-one platform for coding, collaboration, and interviews.",
    siteName: "EZ-CodE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EZ-CodE | Code, Collaborate, Interview",
    description:
      "30+ languages, pair programming, interview rooms – all in one place.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
      {children}
    </div>
  );
}
