import Head from "next/head";
import Navbar from "@/layouts/components/Navbar";
import Footer from "@/layouts/components/Footer";
import HeroSection from "@/layouts/components/HeroSection";
import FeatureSections from "@/layouts/components/FeatureSections";
import CollaborativeCodingAnimation from "@/layouts/components/animations/CollaborativeCoding";

export default function Home() {
  return (
    <>
      <Head>
        <title>EZ-Code | Learn Code Visually</title>
        <meta
          name="description"
          content="EZ-Code is your visual guide to learning programming with interactive components and real-time feedback."
        />
        <meta
          name="keywords"
          content="coding, programming, learn code, react, nextjs, visual coding"
        />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content="EZ-Code | Learn Code Visually" />
        <meta
          property="og:description"
          content="Interactive tutorials for frontend, backend, and data structures."
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        <Navbar />

        <main>
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div
              className="absolute -right-32 top-40 text-gray-300 opacity-20 transform rotate-12 select-none"
              style={{
                fontSize: "500px",
                fontFamily: "monospace",
                fontWeight: "bold",
              }}>
              &lt;/&gt;
            </div>
            <div
              className="absolute -left-32 bottom-40 text-gray-300 opacity-20 transform -rotate-12 select-none"
              style={{
                fontSize: "400px",
                fontFamily: "monospace",
                fontWeight: "bold",
              }}></div>
          </div>

          <HeroSection />
          <FeatureSections />
        </main>

        <Footer />
      </div>
    </>
  );
}
