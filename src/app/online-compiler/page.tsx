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
        <div className="bg-blue-700">
          <div className="max-w-3xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white text-center">
              Ready to Start Coding?
            </h2>
            <p className="mt-4 text-lg leading-6 text-blue-100 text-center">
              Try our online code editor now. No installation or setup required.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50">
                  <Code className="mr-2 h-5 w-5" />
                  Launch Editor
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
