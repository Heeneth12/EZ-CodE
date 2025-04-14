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
    description: "Join thousands of companies using TechInterview to streamline their technical interview process and find the best talent.",
    buttonText_1: "Sign Up For Free",
    buttonText_2: "Request Demo",
    buttonLink_1: "",
    buttonLink_2: ""
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
        </article>

        {/* CTA Section */}
        <CtaSection {...ctaSectionData} />
      </main>
      <Footer />
    </>
  );
}
