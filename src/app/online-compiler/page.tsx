import { Code } from "lucide-react";
import Footer from "@/layouts/components/Footer";
import HeroSectionOnlineCompiler from "@/layouts/components/HeroSectionOnlineCompiler";
import FeatureSectionsOnlineCompiler from "@/layouts/components/FeatureSectionsOnlineCompiler";
import Header from "@/layouts/components/Header";

export const metadata = {
  title: "Online Compiler | EZ-CodE",
  description:
    "Write, run, and share code in 30+ languages using EZ-CodE's powerful online compiler.",
  keywords: [
    "online compiler",
    "code editor",
    "collaborative coding",
    "run code online",
    "interview coding",
    "JS compiler",
    "Python compiler",
    "C++ compiler",
  ],
  openGraph: {
    title: "Online Compiler | EZ-CodE",
    description:
      "Code and collaborate in real-time using our cloud-based compiler.",
    url: "https://yourdomain.com/online-compiler",
    siteName: "EZ-CodE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EZ-CodE | Online Code Editor",
    description:
      "Run 30+ languages online. Share, collaborate, and compile code instantly.",
  },
};

export default function OnlineCompilerPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-gradient-to-b from-white to-blue-50">
        <article>
          <section id="hero">
            <HeroSectionOnlineCompiler />
          </section>

          <section id="features" aria-labelledby="features-heading">
            <h2 id="features-heading" className="sr-only">
              Platform Features
            </h2>
            <FeatureSectionsOnlineCompiler />
          </section>
        </article>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-10 sm:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                  <span className="block">Ready to Start Coding?</span>
                  <span className="block text-blue-200">
                    Get started with EZ-CodE today.
                  </span>
                </h2>
                <p className="mt-4 text-lg text-blue-100 max-w-xl mx-auto lg:mx-0">
                  Try our online code editor now. No installation or setup
                  required.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center sm:space-x-4 space-y-4 sm:space-y-0 lg:justify-end">
                <a
                  href="#create-room"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors shadow">
                  <Code size={18} className="mr-2" />
                  Launch Editor
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
