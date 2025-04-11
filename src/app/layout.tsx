import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EZ-CodE | Online Compiler, Collaboration, and Interviews",
  description:
    "Run code, collaborate, and prepare for interviews in one place with EZ-CodE.",
  keywords: [
    "online compiler",
    "collaborative coding",
    "technical interviews",
    "coding platform",
    "remote interview tools",
    "code editor",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "EZ-CodE",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "All",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              description:
                "Run code in 30+ languages, collaborate in real-time, and conduct technical interviews with EZ-CodE.",
              keywords:
                "online compiler, technical interviews, collaborative coding, pair programming, interview platform",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
