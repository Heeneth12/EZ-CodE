import Footer from "@/layouts/components/Footer";
import HeroSection from "@/layouts/components/HeroSection";
import FeatureSections from "@/layouts/components/FeatureSections";
import { Users, Code } from "lucide-react";
import Header from "@/layouts/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-gradient-to-b from-white to-blue-50">
        <article>
          <section id="hero">
            <HeroSection />
          </section>

          <section id="features" aria-labelledby="features-heading">
            <h2 id="features-heading" className="sr-only">
              Platform Features
            </h2>
            <FeatureSections />
          </section>
        </article>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                  <span className="block">
                    Ready to elevate your coding experience?
                  </span>
                  <span className="block text-blue-200">
                    Get started with EZ-CodE today.
                  </span>
                </h2>
                <p className="mt-4 text-lg text-blue-100 max-w-xl mx-auto lg:mx-0">
                  Join thousands of developers, teams, and educators who use our
                  platform for seamless coding collaboration and technical
                  interviews.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center sm:space-x-4 space-y-4 sm:space-y-0 lg:justify-end">
                <a
                  href="#create-room"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors shadow">
                  <Code size={18} className="mr-2" />
                  Create Free Room
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700 transition-colors shadow">
                  <Users size={18} className="mr-2" />
                  Team Solutions
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
