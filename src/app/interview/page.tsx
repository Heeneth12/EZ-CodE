import React from "react";
import Footer from "@/layouts/components/Footer";
import Header from "@/layouts/components/Header";
import HeroSection from "@/layouts/components/interview/HeroSection";
import FeatureSections from "@/layouts/components/interview/FeatureSections";
import CtaSection from "@/layouts/components/interview/CtaSection";

export default function TechInterviewPage() {
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
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
