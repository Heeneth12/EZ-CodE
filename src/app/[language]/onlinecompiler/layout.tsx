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
  description: "Run code in multiple languages with real-time output using EZ-CodE.",
};

export default function OnlineCompilerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
          {/* Topbar / shared components for online compiler can go here */}
          <header className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 px-4 py-3">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <h1 className="text-lg font-bold text-blue-600 dark:text-blue-400">
                EZ-CodE - Online Compiler
              </h1>
              <nav className="space-x-4">
                {/* You can link to other features like interview, collab, etc */}
              </nav>
            </div>
          </header>

          <main className="max-w-7xl mx-auto px-4 py-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
