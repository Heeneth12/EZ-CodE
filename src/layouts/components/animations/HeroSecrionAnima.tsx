"use client";
import {
  CheckCircle,
  Code,
  MessageCircleCode,
  Users,
  Video,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

export default function HeroSecrionAnima() {
  const codeEditorRef = useRef(null);
  const evaluatorPanelRef = useRef(null);
  const interviewerAvatarRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const [typingProgress, setTypingProgress] = useState(0);
  const [currentView, setCurrentView] = useState<
    "Coding" | "Interview" | "Collaborative"
  >("Coding");

  const terminalRef = useRef(null);
  const avatarsRef = useRef(null);

  function handleViewChange(view: "Coding" | "Interview" | "Collaborative") {
    setCurrentView(view);
  }

  // Sample code to be typed
  const sampleCode = `function findMaxSubarraySum(arr) {
      if (arr.length === 0) return 0;
      
      let maxSoFar = arr[0];
      let maxEndingHere = arr[0];
      
      for (let i = 1; i < arr.length; i++) {
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
      }
      
      return maxSoFar;
    }`;
  useEffect(() => {
    setIsMounted(true);
    // Handle typing animation
    const typingInterval = setInterval(() => {
      setTypingProgress((prev) => {
        if (prev >= sampleCode.length) {
          clearInterval(typingInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 80);
    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  // Active avatar animation for collaborative coding with smoother transitions
  const [activeAvatar, setActiveAvatar] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAvatar((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Initial styles with transitions for smooth animations
  const initialStyles = {
    opacity: 0,
    transform: "translateY(20px)",
    transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
  };

  // Get the typed portion of the code
  const typedCode = sampleCode.substring(0, typingProgress);
  const remainingCode = sampleCode.substring(typingProgress);
  return (
    <div
      id="hero-secrion-anima"
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
            <div
              onClick={() => handleViewChange("Coding")}
              className="relative border border-blue-100 bg-blue-50 rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow group">
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

            <div
              onClick={() => handleViewChange("Collaborative")}
              className="relative border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-md hover:border-blue-100 hover:bg-blue-50 transition-all">
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

            <div
              onClick={() => handleViewChange("Interview")}
              className="relative border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-md hover:border-blue-100 hover:bg-blue-50 transition-all">
              <input
                type="radio"
                name="mode"
                id="mode-interview"
                className="absolute opacity-0"
              />
              <label htmlFor="mode-interview" className="block cursor-pointer">
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
          {currentView === "Interview" && (
            <div className="w-full p-4 md:p-8 relative mt-12 lg:mt-0">
              {/* Main code editor - candidate view */}
              <div
                ref={codeEditorRef}
                className="bg-gray-900 rounded-xl p-5 shadow-2xl mb-8 w-full max-w-md mx-auto transition-all duration-700 ease-out border border-gray-700 relative"
                style={isMounted ? {} : initialStyles}>
                <div className="flex mb-3 items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-3 w-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="h-3 w-3 bg-green-500 rounded-full mr-4"></div>
                    <div className="text-xs text-gray-500 font-mono">
                      maxSubarraySum.js
                    </div>
                  </div>
                  <div className="flex items-center bg-indigo-900/40 px-2 py-1 rounded text-xs text-indigo-300">
                    <span className="h-2 w-2 rounded-full bg-green-400 mr-1 animate-pulse"></span>
                    Candidate Coding
                  </div>
                </div>
                <div className="text-gray-300 font-mono text-sm overflow-hidden">
                  <span>{typedCode}</span>
                  <span className="bg-white/50 inline-block w-2 h-5 align-middle animate-pulse"></span>
                  <span className="text-gray-500">{remainingCode}</span>
                </div>
                <div className="absolute -right-3 -top-3 bg-indigo-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                  JavaScript
                </div>
                <div className="mt-4 pt-2 border-t border-gray-700/50 flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse mr-1"></span>
                    <span className="text-xs text-green-400">
                      Tests passing: 4/5
                    </span>
                  </div>
                  <div className="text-xs text-amber-400 font-mono flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    14:22
                  </div>
                </div>
              </div>

              {/* Interviewer evaluation panel */}
              <div
                ref={evaluatorPanelRef}
                className="bg-white rounded-xl p-4 shadow-xl w-full max-w-sm mx-auto transform -translate-y-4 -translate-x-4 md:-translate-x-12 transition-all duration-700 ease-out border border-gray-200"
                style={isMounted ? {} : initialStyles}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-gray-700">
                    Evaluation Metrics
                  </h3>
                  <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-1 animate-pulse"></span>
                    Live
                  </span>
                </div>
                <div className="space-y-3.5">
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5 mr-1 text-indigo-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                        Problem solving
                      </span>
                      <span className="text-xs font-medium text-gray-700">
                        7/10
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div
                        className="bg-indigo-600 h-1.5 rounded-full"
                        style={{ width: "70%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5 mr-1 text-indigo-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                          />
                        </svg>
                        Code quality
                      </span>
                      <span className="text-xs font-medium text-gray-700">
                        8/10
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div
                        className="bg-indigo-600 h-1.5 rounded-full"
                        style={{ width: "80%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5 mr-1 text-indigo-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                        Algorithm efficiency
                      </span>
                      <span className="text-xs font-medium text-gray-700">
                        9/10
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div
                        className="bg-indigo-600 h-1.5 rounded-full"
                        style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5 mr-1 text-indigo-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                          />
                        </svg>
                        Edge case handling
                      </span>
                      <span className="text-xs font-medium text-gray-700">
                        5/10
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div
                        className="bg-indigo-600 h-1.5 rounded-full"
                        style={{ width: "50%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-gray-700">
                      Overall Score
                    </span>
                    <div className="text-sm font-bold text-indigo-600 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1 text-indigo-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                      </svg>
                      7.3/10
                    </div>
                  </div>
                </div>
              </div>

              {/* Interviewer avatar */}
              <div
                ref={interviewerAvatarRef}
                className="absolute -right-4 top-1/4 transform -translate-x-0 transition-all duration-700 ease-out z-20"
                style={isMounted ? {} : initialStyles}>
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-white">
                    JW
                  </div>
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
                </div>
                <div className="bg-white text-gray-800 mt-2 p-2 rounded-lg shadow-md text-xs font-medium text-center">
                  Interviewer
                </div>
              </div>
            </div>
          )}
          {currentView === "Collaborative" && (
            <div className="w-full  p-4 md:p-8 relative mt-12 lg:mt-0">
              {/* Main code terminal with enhanced styles */}
              <div
                ref={terminalRef}
                className="bg-gray-900 rounded-xl p-5 shadow-2xl mb-8 w-full max-w-md mx-auto transition-all duration-700 ease-out border border-gray-700 backdrop-blur-sm"
                style={isMounted ? {} : initialStyles}>
                <div className="flex mb-3 items-center">
                  <div className="h-3 w-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="h-3 w-3 bg-green-500 rounded-full mr-4"></div>
                  <div className="text-xs text-gray-500 font-mono">
                    collaborative-app.js
                  </div>
                </div>
                <div className="text-gray-300 font-mono text-sm">
                  <p>
                    <span className="text-purple-400">function</span>{" "}
                    <span className="text-blue-400">processUserData</span>(){" "}
                    {`{`}
                  </p>
                  <p>
                    &nbsp;&nbsp;<span className="text-pink-400">const</span>{" "}
                    <span className="text-blue-400">users</span>{" "}
                    <span className="text-gray-400">=</span>{" "}
                    <span className="text-blue-400">fetchUsers</span>();
                  </p>
                  <p
                    className={`${
                      activeAvatar === 0 ? "bg-green-900/30" : ""
                    } transition-colors duration-500`}>
                    &nbsp;&nbsp;<span className="text-purple-400">return</span>{" "}
                    <span className="text-blue-400">users</span>.
                    <span className="text-yellow-400">map</span>(
                    <span className="text-red-400">user</span> =&gt; {`{`}
                  </p>
                  <p
                    className={`${
                      activeAvatar === 1 ? "bg-blue-900/30" : ""
                    } transition-colors duration-500`}>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="text-purple-400">return</span> {`{`}
                  </p>
                  <p
                    className={`${
                      activeAvatar === 1 ? "bg-blue-900/30" : ""
                    } transition-colors duration-500`}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id:{" "}
                    <span className="text-red-400">user</span>.id,
                  </p>
                  <p
                    className={`${
                      activeAvatar === 1 ? "bg-blue-900/30" : ""
                    } transition-colors duration-500`}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name:{" "}
                    <span className="text-red-400">user</span>.name,
                  </p>
                  <p
                    className={`${
                      activeAvatar === 2 ? "bg-purple-900/30" : ""
                    } transition-colors duration-500`}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;avatar:{" "}
                    <span className="text-red-400">user</span>.profilePic,
                  </p>
                  <p
                    className={`${
                      activeAvatar === 2 ? "bg-purple-900/30" : ""
                    } transition-colors duration-500`}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lastActive:{" "}
                    <span className="text-blue-400">formatDate</span>(
                    <span className="text-red-400">user</span>.timestamp)
                  </p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;{`}`};</p>
                  <p>&nbsp;&nbsp;{`})`};</p>
                  <p>{`}`}</p>
                </div>
                <div
                  className="absolute -right-3 -top-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md animate-pulse"
                  style={{ animationDuration: "3s" }}>
                  JavaScript
                </div>
              </div>

              {/* Active collaborators with enhanced interactions */}
              <div
                ref={avatarsRef}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl w-full max-w-sm mx-auto transform -translate-y-4 -translate-x-12 transition-all duration-700 ease-out border border-gray-200"
                style={isMounted ? {} : initialStyles}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-gray-700">
                    Active Collaborators
                  </h3>
                  <span className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    3 online
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div
                    className={`relative ${
                      activeAvatar === 0 ? "scale-110" : ""
                    } transition-transform duration-500`}>
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold ${
                        activeAvatar === 0
                          ? "ring-2 ring-green-500 ring-offset-2 animate-pulse"
                          : ""
                      }`}>
                      AM
                    </div>
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                  </div>
                  <div
                    className={`relative ${
                      activeAvatar === 1 ? "scale-110" : ""
                    } transition-transform duration-500`}>
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold ${
                        activeAvatar === 1
                          ? "ring-2 ring-blue-500 ring-offset-2 animate-pulse"
                          : ""
                      }`}>
                      JD
                    </div>
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                  </div>
                  <div
                    className={`relative ${
                      activeAvatar === 2 ? "scale-110" : ""
                    } transition-transform duration-500`}>
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold ${
                        activeAvatar === 2
                          ? "ring-2 ring-purple-500 ring-offset-2 animate-pulse"
                          : ""
                      }`}>
                      SL
                    </div>
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors transform hover:scale-105 active:scale-95">
                    <span className="text-lg">+</span>
                  </button>
                </div>
              </div>
              {/* Enhanced floating decorative elements with animations */}
              <div
                className="absolute -top-4 right-14 w-10 h-10 flex items-center justify-center animate-bounce"
                style={{ animationDuration: "2s" }}>
                <div className="text-3xl transform rotate-45">⌨️</div>
              </div>
              <div
                className="absolute bottom-4 right-28 w-10 h-10 flex items-center justify-center animate-pulse"
                style={{ animationDuration: "3s" }}>
                <div className="text-2xl transform -rotate-12">
                  <MessageCircleCode size={44} color="orange" />
                </div>
              </div>

              {/* Enhanced floating badges with animations */}
              <div className="absolute top-1/3 right-4 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full px-3 py-1 text-xs font-medium shadow-sm transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                Real-time
              </div>
              <div className="absolute bottom-12 left-16 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full px-3 py-1 text-xs font-medium shadow-sm transform rotate-3 hover:rotate-0 transition-transform duration-300">
                Conflict-free
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
