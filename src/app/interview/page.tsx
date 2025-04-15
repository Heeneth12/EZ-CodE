import React from "react";
import Footer from "@/layouts/components/Footer";
import Header from "@/layouts/components/Header";
import HeroSection from "@/layouts/components/interview/HeroSection";
import FeatureSections from "@/layouts/components/interview/FeatureSections";
import CtaSection from "@/layouts/components/interview/CtaSection";
import { CtaSectionModel } from "@/layouts/models/CtaSectionModel";

export default function TechInterviewPage() {
  const ctaSectionData: CtaSectionModel = {
    title: "Ready to Transform Your Technical Hiring?",
    description:
      "Join thousands of companies using TechInterview to streamline their technical interview process and find the best talent.",
    buttonText_1: "Sign Up For Free",
    buttonText_2: "Request Demo",
    buttonLink_1: "",
    buttonLink_2: "",
  };

  return (
    <>
      <Header />
      <main className="flex-grow bg-gradient-to-b from-white to-blue-50">
        {/* Hero Section */}
        <article>
          <section id="hero">
            <HeroSection />
          </section>

          <section id="features" aria-labelledby="features-heading">
            {/* <h2 id="features-heading" className="sr-only">
              Platform Features
            </h2> */}
            <FeatureSections />
          </section>

          <section>
            <div id="how-it-works" className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
                  How It Works
                </h2>
                <div className="space-y-12">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                      <div className="bg-white p-4 rounded-full inline-block mb-4">
                        <span className="text-2xl font-bold text-blue-600">
                          1
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Create a Room
                      </h3>
                      <p className="text-gray-500">
                        Generate a unique room code for your interview session
                        that candidates can use to join.
                      </p>
                    </div>
                    <div className="md:w-1/2">
                      <div className="bg-white rounded-lg shadow p-6">
                        <img
                          src="/api/placeholder/500/300"
                          alt="Create Room Step"
                          className="w-full rounded"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row-reverse items-center">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pl-8">
                      <div className="bg-white p-4 rounded-full inline-block mb-4">
                        <span className="text-2xl font-bold text-blue-600">
                          2
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Share with Candidates
                      </h3>
                      <p className="text-gray-500">
                        Send the room code or link to your candidates through
                        email or your preferred communication channel.
                      </p>
                    </div>
                    <div className="md:w-1/2">
                      <div className="bg-white rounded-lg shadow p-6">
                        <img
                          src="/api/placeholder/500/300"
                          alt="Share Room Step"
                          className="w-full rounded"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                      <div className="bg-white p-4 rounded-full inline-block mb-4">
                        <span className="text-2xl font-bold text-blue-600">
                          3
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Conduct the Interview
                      </h3>
                      <p className="text-gray-500">
                        Use our real-time code editor, video conferencing, and
                        assessment tools to evaluate candidates effectively.
                      </p>
                    </div>
                    <div className="md:w-1/2">
                      <div className="bg-white rounded-lg shadow p-6">
                        <img
                          src="/api/placeholder/500/300"
                          alt="Interview Step"
                          className="w-full rounded"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>

        {/* CTA Section */}
        <CtaSection {...ctaSectionData} />
      </main>
      <Footer />
    </>
  );
}
