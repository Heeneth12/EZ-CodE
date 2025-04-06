import React from "react";
import { Users, Code, Video, Shield, Settings, Clock } from "lucide-react";

export default function FeatureSections() {
  return (
    <>
      {/* Features Section */}
      <div id="features" className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
              Platform Features
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              Three powerful tools in one platform
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              EZ-CodE combines an online compiler, collaborative coding, and
              technical interview tools to meet all your coding needs.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-md bg-blue-600 text-white flex items-center justify-center mb-5">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Online Compiler
              </h3>
              <ul className="space-y-2 text-gray-500">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Support for 30+ programming languages
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Instant code execution and testing
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Advanced debugging tools
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Code organization and saving
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-md bg-blue-600 text-white flex items-center justify-center mb-5">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Collaborative Coding
              </h3>
              <ul className="space-y-2 text-gray-500">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Real-time code synchronization
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Multiple users editing simultaneously
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Code chat and annotations
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Shared terminal and output
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-md bg-blue-600 text-white flex items-center justify-center mb-5">
                <Video size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Technical Interviews
              </h3>
              <ul className="space-y-2 text-gray-500">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  HD video conferencing
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Pre-loaded interview problems
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Candidate evaluation tools
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Session recording and playback
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-md bg-blue-600 text-white flex items-center justify-center mb-5">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Secure & Reliable
              </h3>
              <ul className="space-y-2 text-gray-500">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  End-to-end encryption
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Private rooms with access control
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Regular backups of your code
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  GDPR compliant infrastructure
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-md bg-blue-600 text-white flex items-center justify-center mb-5">
                <Settings size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Customizable Experience
              </h3>
              <ul className="space-y-2 text-gray-500">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Personalized IDE themes
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Custom keyboard shortcuts
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Extensible with plugins
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Team branding options
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-md bg-blue-600 text-white flex items-center justify-center mb-5">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Time-Saving Tools
              </h3>
              <ul className="space-y-2 text-gray-500">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Code snippets library
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Smart code completion
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Integration with GitHub/GitLab
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Quick project templates
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
