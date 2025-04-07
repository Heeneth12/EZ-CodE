import React from "react";
import {
  Code,
  Users,
  Video,
  Info,
  CheckCircle,
  Clock,
  ChevronDown,
} from "lucide-react";

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
              <div className="bg-white rounded-xl shadow-xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <img
                  src="/api/placeholder/600/400"
                  alt="EZ-CodE Platform Preview"
                  className="w-full object-cover"
                />
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
      <div
        id="create-room"
        className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-md bg-blue-600 text-white flex items-center justify-center mr-3">
                <Code size={20} />
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Create Your Coding Environment
              </h2>
            </div>

            <p className="mt-4 text-lg text-gray-500">
              Set up a personalized coding space in seconds. Choose between
              individual compiler mode, collaborative coding, or technical
              interview setup.
            </p>

            {/* Added Mode Selection Cards */}
            <div className="mt-8 space-y-4">
              <div className="relative border border-blue-100 bg-blue-50 rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow group">
                <input
                  type="radio"
                  name="mode"
                  id="mode-solo"
                  className="absolute opacity-0"
                  defaultChecked
                />
                <label htmlFor="mode-solo" className="block cursor-pointer">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-3">
                      <Code size={16} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Solo Coding</h3>
                      <p className="text-sm text-gray-600">
                        Quick access to all languages and tools
                      </p>
                    </div>
                  </div>
                </label>
              </div>

              <div className="relative border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-md hover:border-blue-100 hover:bg-blue-50 transition-all">
                <input
                  type="radio"
                  name="mode"
                  id="mode-collab"
                  className="absolute opacity-0"
                />
                <label htmlFor="mode-collab" className="block cursor-pointer">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gray-200 text-gray-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center mr-3">
                      <Users size={16} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">
                        Collaborative Session
                      </h3>
                      <p className="text-sm text-gray-600">
                        Code together with your team in real-time
                      </p>
                    </div>
                  </div>
                </label>
              </div>

              <div className="relative border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-md hover:border-blue-100 hover:bg-blue-50 transition-all">
                <input
                  type="radio"
                  name="mode"
                  id="mode-interview"
                  className="absolute opacity-0"
                />
                <label
                  htmlFor="mode-interview"
                  className="block cursor-pointer">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gray-200 text-gray-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center mr-3">
                      <Video size={16} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">
                        Technical Interview
                      </h3>
                      <p className="text-sm text-gray-600">
                        Full interview tools with video and assessment
                      </p>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-medium text-gray-900 mb-2">Room Privacy</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="public-room"
                    name="privacy"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <label
                    htmlFor="public-room"
                    className="ml-2 block text-sm text-gray-700">
                    Public
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="private-room"
                    name="privacy"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    defaultChecked
                  />
                  <label
                    htmlFor="private-room"
                    className="ml-2 block text-sm text-gray-700">
                    Private
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col space-y-4">
              <div className="flex items-center">
                <CheckCircle size={20} className="text-green-500 mr-2" />
                <span className="text-gray-600">
                  Instant setup, no installations required
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-green-500 mr-2" />
                <span className="text-gray-600">
                  All code sessions automatically saved
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-green-500 mr-2" />
                <span className="text-gray-600">
                  Share your environment with a simple link
                </span>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 lg:col-span-7">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">
                    Environment Configuration
                  </h3>
                  <span className="text-xs bg-blue-100 text-blue-800 py-1 px-2 rounded-full">
                    <Clock size={12} className="inline mr-1" />
                    Setup in seconds
                  </span>
                </div>
              </div>
              <div className="px-6 py-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Programming Language
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Code size={16} className="text-gray-400 mr-2" />
                          <span>JavaScript</span>
                        </div>
                        <ChevronDown size={16} />
                      </div>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Room Name (Optional)
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="My Coding Room"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="enable-collab"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      defaultChecked
                    />
                    <label
                      htmlFor="enable-collab"
                      className="ml-2 block text-sm text-gray-700">
                      Enable Collaborative Mode
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="enable-video"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      defaultChecked
                    />
                    <label
                      htmlFor="enable-video"
                      className="ml-2 block text-sm text-gray-700">
                      Enable Video Communication
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="enable-interview"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      defaultChecked
                    />
                    <label
                      htmlFor="enable-interview"
                      className="ml-2 block text-sm text-gray-700">
                      Enable Interview Tools
                    </label>
                  </div>
                </div>

                <button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                  Create Coding Room
                </button>

                <div className="text-center text-xs text-gray-500 flex items-center justify-center">
                  <Info size={12} className="mr-1" />
                  Your room link will be valid for 24 hours
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
