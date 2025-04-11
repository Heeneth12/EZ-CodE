// AboutUsPage.jsx
"use client";
import Header from "@/layouts/components/Header";
import { useState } from "react";

export default function AboutUsPage() {
  const [activeTab, setActiveTab] = useState("mission");

  const tabs = [
    { id: "mission", label: "Our Mission" },
    { id: "story", label: "Our Story" },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <Header />
      {/* mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8 */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto p-4 py-12 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Empowering Tech Careers Through Expert Guidance
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                We help aspiring and experienced developers master technical
                interviews, improve coding skills, and advance their careers.
              </p>
            </div>
            <div className="md:w-2/5">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-42 h-42 bg-blue-500 rounded-full opacity-20"></div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-indigo-500 rounded-full opacity-20"></div>
              </div>
            </div>
            <button className="px-6 py-3  bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-colors  focus:ring-offset-blue-600">
              About Us
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Tabs Section */}
        <div className="mb-16">
          <div className="flex overflow-x-auto pb-2 mb-6 border-b">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-medium whitespace-nowrap ${
                  activeTab === tab.id
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}>
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-xl p-6">
            {activeTab === "mission" && (
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Our Mission
                </h2>
                <div className="md:flex md:gap-10 items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0">
                    <p className="text-lg text-gray-700 mb-4">
                      Our mission is to democratize access to technical
                      interview preparation and coding education. We believe
                      that everyone deserves the opportunity to succeed in tech,
                      regardless of their background or prior experience.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                      By providing personalized mock interviews, interactive
                      tutorials, and powerful coding tools, we help bridge the
                      gap between academic knowledge and real-world skills that
                      employers demand.
                    </p>
                    <p className="text-lg text-gray-700">
                      We are committed to continuous innovation in our teaching
                      methods and technology to ensure our students stay ahead
                      in an ever-evolving industry.
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    <div className="bg-blue-50 rounded-xl p-8">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Our Core Values
                      </h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-blue-600"
                              viewBox="0 0 20 20"
                              fill="currentColor">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div>
                            <span className="font-medium block">
                              Excellence
                            </span>
                            <span className="text-gray-600">
                              We strive for the highest quality in all aspects
                              of our service.
                            </span>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-blue-600"
                              viewBox="0 0 20 20"
                              fill="currentColor">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div>
                            <span className="font-medium block">
                              Accessibility
                            </span>
                            <span className="text-gray-600">
                              Making tech education available to everyone,
                              everywhere.
                            </span>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-blue-600"
                              viewBox="0 0 20 20"
                              fill="currentColor">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div>
                            <span className="font-medium block">
                              Innovation
                            </span>
                            <span className="text-gray-600">
                              Continually improving our methods and technology.
                            </span>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-blue-600"
                              viewBox="0 0 20 20"
                              fill="currentColor">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div>
                            <span className="font-medium block">Community</span>
                            <span className="text-gray-600">
                              Building a supportive network of learners and
                              teachers.
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "story" && (
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Our Story
                </h2>
                <div className="space-y-6">
                  <div className="md:flex md:gap-10 items-center">
                    <div className="md:w-1/3 mb-6 md:mb-0">
                      <div className="rounded-xl overflow-hidden">
                        <img
                          src="/api/placeholder/400/300"
                          alt="Our founding story"
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        Where It All Began
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Our journey started in 2018 when our founder, after
                        years of conducting technical interviews at top tech
                        companies, noticed a significant gap between what
                        candidates learned in traditional settings and what
                        employers actually expected.
                      </p>
                      <p className="text-gray-700">
                        What began as informal mentoring sessions with a few
                        aspiring developers quickly grew into a structured
                        platform as word spread about our approach that combined
                        interview preparation with practical, hands-on coding
                        experience.
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6 py-2 bg-blue-50 rounded-r-lg">
                    <p className="text-lg italic text-gray-700">
                      "I founded this platform because I believe that technical
                      interviews shouldn't be mysterious ordeals. With the right
                      preparation and tools, anyone can showcase their true
                      potential to employers."
                    </p>
                    <p className="text-blue-700 font-medium mt-2">
                      — Alex Johnson, Founder
                    </p>
                  </div>

                  <div className="md:flex md:gap-10 items-center flex-row-reverse">
                    <div className="md:w-1/3 mb-6 md:mb-0">
                      <div className="rounded-xl overflow-hidden">
                        <img
                          src="/api/placeholder/400/300"
                          alt="Our growth story"
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        Growing Into a Community
                      </h3>
                      <p className="text-gray-700 mb-4">
                        By 2020, we had expanded our team to include experienced
                        developers and interview coaches from diverse
                        backgrounds. This allowed us to offer a wider range of
                        services, including our interactive coding tutorials and
                        online compiler.
                      </p>
                      <p className="text-gray-700">
                        Today, we're proud to have helped thousands of students
                        and professionals successfully navigate technical
                        interviews and advance their careers in tech. Our
                        community continues to grow, driven by a shared passion
                        for learning and helping others succeed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              What Our Students Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from some of the people who have used our platform to improve
              their coding skills and land their dream jobs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "After just 3 mock interviews, I felt so much more confident
                going into my real interviews. The feedback was specific and
                actionable, and I landed a role at a FAANG company!"
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Jessica L.</p>
                  <p className="text-sm text-gray-500">
                    Software Engineer at Meta
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1
                      1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The interactive coding tutorials were exactly what I needed to
                brush up on my algorithm skills. The step-by-step approach made
                complex concepts much more digestible."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                </div>
                <div>
                  <p className="font-medium text-gray-800">David W.</p>
                  <p className="text-sm text-gray-500">
                    Backend Developer at Stripe
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "As a self-taught developer, I was struggling with system design
                interviews. The mock interviews and personalized feedback helped
                me identify my weak areas and improve rapidly."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Michael T.</p>
                  <p className="text-sm text-gray-500">
                    Full Stack Engineer at Shopify
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 text-white">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to ace your next technical interview?
              </h2>
              <p className="text-blue-100 mb-0">
                Join thousands of developers who have transformed their careers
                with our platform.
              </p>
            </div>
            <div>
              <button className="px-6 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
