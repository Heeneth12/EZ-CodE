import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Optional SEO Metadata (can override in individual pages too)
export const metadata: Metadata = {
  title: "Online Compiler - EZ-CodE",
  description:
    "Run code in multiple languages with real-time output using EZ-CodE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
      {children}
    </div>
  );
}
