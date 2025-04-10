import React from "react";
import { Code } from "lucide-react";
import HeroSecrionAnima from "./animations/HeroSecrionAnima";
import StaticCode from "./StaticCode";


export default function HeroSection() {
  return (
    <>
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white pb-24">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-800 text-blue-200 mb-4">
                All-in-One Coding Platform
              </span>
              <h2 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl mb-6">
                Elevate your coding experience with EZ-CodE
              </h2>
              <p className="text-xl text-blue-100 max-w-xl">
                Access powerful online compilers, collaborate in real-time with
                peers, and conduct seamless technical interviews all in one
                integrated platform.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="#create-room"
                  className="px-6 py-3 rounded-md bg-white text-blue-600 font-medium shadow-md hover:bg-blue-50 transition-colors">
                  Get Started
                </a>
                <a
                  href="#how-it-works"
                  className="px-6 py-3 rounded-md border border-blue-200 text-white font-medium hover:bg-blue-800 transition-colors">
                  Explore Features
                </a>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 relative">
              <div className="bg-white rounded-xl border border-blue-700/50  shadow-xl overflow-hidden transform rotate-0 hover:rotate-4 transition-transform duration-300">
                <StaticCode />
              </div>
              <div className="absolute -bottom-12 -left-12 bg-blue-900 rounded-lg shadow-lg p-4 transform -rotate-3 hidden md:block">
                <div className="flex items-center">
                  <Code size={20} className="text-blue-300 mr-2" />
                  <span className="text-blue-100 font-mono">
                    EZ-CodE.compile();
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="w-full h-auto">
            <path
              fill="white"
              fillOpacity="1"
              d="M0,64L80,74.7C160,85,320,107,480,101.3C640,96,800,64,960,58.7C1120,53,1280,75,1360,85.3L1440,96L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>
      <HeroSecrionAnima />
    </>
  );
}
