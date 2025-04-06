
'use client';
import React, { useEffect, useRef, useState } from "react";

export default function TechnicalInterview() {
  const containerRef = useRef(null);
  const codeEditorRef = useRef(null);
  const evaluatorPanelRef = useRef(null);
  const interviewerAvatarRef = useRef(null);
  const textContentRef = useRef(null);
  const commentsRef = useRef(null);
  const decorativeCircleRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const [typingProgress, setTypingProgress] = useState(0);
  const [currentComment, setCurrentComment] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

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

  // Comments from interviewer
  const comments = [
    "Good approach using Kadane's algorithm!",
    "Think about edge cases. What if array is empty?",
    "Your time complexity looks optimal - O(n)",
    "Could you explain your reasoning for line 7?",
  ];

  useEffect(() => {
    setIsMounted(true);

    // Check screen size for responsive adjustments
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    // Handle typing animation
    const typingInterval = setInterval(() => {
      setTypingProgress((prev) => {
        if (prev >= sampleCode.length) {
          clearInterval(typingInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 80); // Slightly faster typing for better UX

    // Handle comments cycling
    const commentInterval = setInterval(() => {
      setCurrentComment((prev) => (prev + 1) % comments.length);
    }, 6000); // Slightly longer to give users time to read

    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const containerTop =
        containerRef.current.getBoundingClientRect().top + scrollPosition;

      // Improved trigger point calculation for smoother animation start
      const elementTriggerPosition = containerTop - viewportHeight * 0.85;

      // Smoother progress calculation with easing
      const rawProgress = Math.max(
        0,
        Math.min(1, (scrollPosition - elementTriggerPosition) / 600)
      );
      const progress = 1 - Math.pow(1 - rawProgress, 2.5); // Smoother easing

      // Apply animations with improved transforms
      if (codeEditorRef.current) {
        codeEditorRef.current.style.transform = `translateY(${
          20 - progress * 20
        }px) rotate(${-1 + progress}deg)`;
        codeEditorRef.current.style.opacity = progress;
        codeEditorRef.current.style.filter = `blur(${(1 - progress) * 1.5}px)`;
      }

      if (evaluatorPanelRef.current) {
        evaluatorPanelRef.current.style.transform = `translateX(${
          30 - progress * 30
        }px)`;
        evaluatorPanelRef.current.style.opacity = progress;
        evaluatorPanelRef.current.style.filter = `blur(${
          (1 - progress) * 1.5
        }px)`;
      }

      if (textContentRef.current) {
        textContentRef.current.style.transform = `translateY(${
          25 - progress * 25
        }px)`;
        textContentRef.current.style.opacity = progress;
      }

      if (commentsRef.current) {
        commentsRef.current.style.transform = `translateY(${
          40 - progress * 40
        }px) rotate(${-1 + progress}deg)`;
        commentsRef.current.style.opacity = progress;
      }

      if (interviewerAvatarRef.current) {
        interviewerAvatarRef.current.style.transform = `scale(${
          0.9 + progress * 0.1
        }) translateX(${50 - progress * 50}px)`;
        interviewerAvatarRef.current.style.opacity = progress;
      }

      if (decorativeCircleRef.current) {
        decorativeCircleRef.current.style.transform = `scale(${
          0.8 + progress * 0.2
        }) translate(${progress * 5}px, ${-progress * 10}px)`;
        decorativeCircleRef.current.style.opacity = 0.2 + progress * 0.3;
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      // Small timeout before initial calculation for more reliable positioning
      setTimeout(() => {
        handleScroll();
      }, 100);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", checkScreenSize);
      }
      clearInterval(typingInterval);
      clearInterval(commentInterval);
    };
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
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden py-4 lg:py-24 px-4">
      {/* Improved decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 to-amber-50/30 z-0" />
      <div
        ref={decorativeCircleRef}
        className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/5 rounded-full -mr-16 -mt-16 z-0 hidden md:block"
        style={
          isMounted
            ? { transition: "transform 1s ease-out, opacity 1s ease-out" }
            : initialStyles
        }
      />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-600/5 rounded-full -ml-16 -mb-16 z-0 hidden md:block" />

      {/* Enhanced curved path decoration */}
      <svg
        className="absolute w-full h-full top-0 left-0 z-0 opacity-30"
        viewBox="0 0 100 100"
        preserveAspectRatio="none">
        <defs>
          <linearGradient
            id="interviewPathGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path
          d="M0,50 C20,20 80,80 100,50"
          stroke="url(#interviewPathGradient)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="5,5"
        />
        <path
          d="M0,60 C30,30 70,70 100,40"
          stroke="url(#interviewPathGradient)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="3,8"
          opacity="0.6"
        />
      </svg>

      {/* Left content - Text section */}
      <div
        ref={textContentRef}
        className="w-full lg:w-5/12 p-6 lg:p-8 z-10 transition-all duration-700 ease-out"
        style={isMounted ? {} : initialStyles}>
        <div className="max-w-lg mx-auto lg:mx-0">
          <div className="mb-3 inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium shadow-sm">
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1.5"
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
              Technical Interviews
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-amber-600 bg-clip-text text-transparent leading-tight">
            Showcase Your Skills in Real-Time
          </h2>
          <p className="text-lg mb-6 text-gray-700 leading-relaxed">
            Looking for a better way to conduct technical interviews that truly
            evaluate coding ability?
          </p>
          <p className="text-lg mb-8 text-gray-700 leading-relaxed">
            Our platform provides real-time pair programming capabilities, live
            feedback, and performance metrics to help you identify top talent
            efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3.5 rounded-lg font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Schedule Interview
            </button>
            <button className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3.5 rounded-lg font-medium transition-all flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Try Demo
            </button>
          </div>

          {/* Added feature highlights for better marketing */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start p-3 bg-white/70 backdrop-blur-sm rounded-lg shadow-sm">
              <div className="bg-indigo-100 p-2 rounded-lg mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-indigo-600"
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
              </div>
              <div>
                <h3 className="font-medium text-gray-900">
                  Real-time Collaboration
                </h3>
                <p className="text-sm text-gray-600">
                  See code as it's being written
                </p>
              </div>
            </div>
            <div className="flex items-start p-3 bg-white/70 backdrop-blur-sm rounded-lg shadow-sm">
              <div className="bg-amber-100 p-2 rounded-lg mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Automated Scoring</h3>
                <p className="text-sm text-gray-600">
                  Objective performance metrics
                </p>
              </div>
            </div>
            <div className="flex items-start p-3 bg-white/70 backdrop-blur-sm rounded-lg shadow-sm">
              <div className="bg-green-100 p-2 rounded-lg mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Live Feedback</h3>
                <p className="text-sm text-gray-600">
                  Guide candidates in real-time
                </p>
              </div>
            </div>
            <div className="flex items-start p-3 bg-white/70 backdrop-blur-sm rounded-lg shadow-sm">
              <div className="bg-purple-100 p-2 rounded-lg mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Detailed Reports</h3>
                <p className="text-sm text-gray-600">
                  Compare candidates easily
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right content - Interview interface with improved positioning */}
      <div className="w-full lg:w-7/12 p-4 md:p-8 relative mt-12 lg:mt-0">
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
              <span className="text-xs text-green-400">Tests passing: 4/5</span>
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
                <span className="text-xs font-medium text-gray-700">7/10</span>
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
                <span className="text-xs font-medium text-gray-700">8/10</span>
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
                <span className="text-xs font-medium text-gray-700">9/10</span>
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
                <span className="text-xs font-medium text-gray-700">5/10</span>
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
          className={`absolute ${
            isSmallScreen ? "top-4 right-4" : "-right-4 top-1/4"
          } transform -translate-x-0 transition-all duration-700 ease-out z-20`}
          style={isMounted ? {} : initialStyles}>
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-white">
              JW
            </div>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
          </div>
          <div className="bg-white mt-2 p-2 rounded-lg shadow-md text-xs font-medium text-center">
            Interviewer
          </div>
        </div>

        {/* Live comments from interviewer */}
        <div
          ref={commentsRef}
          className="bg-white rounded-xl p-4 shadow-xl w-full max-w-sm mx-auto transform translate-y-4 translate-x-4 md:translate-x-8 transition-all duration-700 ease-out border border-gray-200"
          style={isMounted ? {} : initialStyles}>
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white font-bold text-xs mr-2">
              JW
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-700">
                Jessica Warren
              </h3>
              <p className="text-xs text-gray-500">Senior Engineer</p>
            </div>
            <div className="ml-auto flex items-center">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse mr-1"></span>
              <span className="text-xs text-gray-500">Live</span>
            </div>
          </div>

          <div className="relative bg-gray-100 rounded-lg p-3 mb-3">
            <div className="absolute -top-2 left-4 transform rotate-45 w-4 h-4 bg-gray-100"></div>
            <p className="text-sm text-gray-700">{comments[currentComment]}</p>
          </div>

          <div className="flex mt-4">
            <input
              type="text"
              placeholder="Reply to interviewer..."
              className="flex-1 text-sm border border-gray-300 rounded-l-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button className="bg-indigo-600 text-white rounded-r-lg px-4 font-medium text-sm hover:bg-indigo-700 transition-colors">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}