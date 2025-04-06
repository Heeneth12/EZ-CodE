'use client'
import React, { useEffect, useRef, useState } from "react";

export default function FeaturesSectionAnima() {
  const containerRef = useRef(null);
  const terminalRef = useRef(null);
  const avatarsRef = useRef(null);
  const textContentRef = useRef(null);
  const codeChangesRef = useRef(null);
  const decorativeCircleRef = useRef(null);
  const decorativeCircle2Ref = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const containerTop =
        containerRef.current.getBoundingClientRect().top + scrollPosition;

      // Improved trigger point for smoother animation start
      const elementTriggerPosition = containerTop - viewportHeight * 0.9;

      // Enhanced easing function for more natural motion
      const rawProgress = Math.max(
        0,
        Math.min(1, (scrollPosition - elementTriggerPosition) / 700)
      );
      const progress = 1 - Math.pow(1 - rawProgress, 4); // More pronounced easing

      // Apply animations with transforms and additional effects
      if (terminalRef.current) {
        terminalRef.current.style.transform = `translateY(${
          30 - progress * 30
        }px) rotate(${-2 + progress * 2}deg) scale(${0.95 + progress * 0.05})`;
        terminalRef.current.style.opacity = Math.min(1, progress * 1.5);
        terminalRef.current.style.filter = `blur(${(1 - progress) * 3}px)`;
      }

      if (avatarsRef.current) {
        avatarsRef.current.style.transform = `translateX(${
          40 - progress * 40
        }px) translateY(${progress * 5}px) rotate(${progress}deg)`;
        avatarsRef.current.style.opacity = Math.min(1, progress * 1.3);
        avatarsRef.current.style.filter = `blur(${(1 - progress) * 3}px)`;
      }

      if (textContentRef.current) {
        textContentRef.current.style.transform = `translateY(${
          40 - progress * 40
        }px) scale(${0.97 + progress * 0.03})`;
        textContentRef.current.style.opacity = Math.min(1, progress * 1.2);
      }

      if (codeChangesRef.current) {
        codeChangesRef.current.style.transform = `translateY(${
          -25 + progress * 25
        }px) translateX(${progress * 5}px) rotate(${3 - progress * 3}deg)`;
        codeChangesRef.current.style.opacity = Math.min(1, progress * 1.3);
        codeChangesRef.current.style.filter = `blur(${(1 - progress) * 3}px)`;
      }

      if (decorativeCircleRef.current) {
        decorativeCircleRef.current.style.transform = `scale(${
          0.7 + progress * 0.3
        }) translate(${progress * 8}px, ${-progress * 15}px)`;
        decorativeCircleRef.current.style.opacity = 0.1 + progress * 0.4;
      }

      if (decorativeCircle2Ref.current) {
        decorativeCircle2Ref.current.style.transform = `scale(${
          0.8 + progress * 0.2
        }) translate(${-progress * 10}px, ${progress * 10}px)`;
        decorativeCircle2Ref.current.style.opacity = 0.1 + progress * 0.3;
      }
    };

    // Mouse parallax effect
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = containerRef.current.getBoundingClientRect();
      
      // Calculate mouse position relative to container center
      const x = ((clientX - left) / width - 0.5) * 2;
      const y = ((clientY - top) / height - 0.5) * 2;
      
      setMousePosition({ x, y });
      
      // Apply subtle movement based on mouse position
      if (terminalRef.current) {
        terminalRef.current.style.transform = `translateY(${
          terminalRef.current.style.transform.split('translateY(')[1]?.split(')')[0] || '0px'
        }) rotate(${-2 + (isMounted ? 2 : 0) + x * 1}deg) translateX(${x * -10}px)`;
      }
      
      if (decorativeCircleRef.current) {
        decorativeCircleRef.current.style.transform = `${
          decorativeCircleRef.current.style.transform.split(') ')[0] || 'scale(1)'
        }) translate(${x * 15 + 8}px, ${y * 15 - 15}px)`;
      }
      
      if (decorativeCircle2Ref.current) {
        decorativeCircle2Ref.current.style.transform = `${
          decorativeCircle2Ref.current.style.transform.split(') ')[0] || 'scale(1)'
        }) translate(${x * -20 - 10}px, ${y * 20 + 10}px)`;
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("mousemove", handleMouseMove);
      
      // Initial calculation with small delay for reliability
      setTimeout(() => {
        handleScroll();
      }, 100);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [isMounted]);

  // Initial styles with enhanced transitions
  const initialStyles = {
    opacity: 0,
    transform: "translateY(30px)",
    transition: "opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1), transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
  };

  // Active avatar animation for collaborative coding with smoother transitions
  const [activeAvatar, setActiveAvatar] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAvatar((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <>
      <div
        ref={containerRef}
        className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden py-16 md:py-24">
        {/* Enhanced decorative background elements */}
        <div
          ref={decorativeCircleRef}
          className="absolute top-0 right-0 w-96 h-96 bg-green-600/5 rounded-full -mr-16 -mt-16 z-0 blur-md"
          style={
            isMounted
              ? { transition: "transform 1.2s cubic-bezier(0.23, 1, 0.32, 1), opacity 1.2s cubic-bezier(0.23, 1, 0.32, 1)" }
              : initialStyles
          }
        />
        <div
          ref={decorativeCircle2Ref}
          className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/5 rounded-full -ml-16 -mb-16 z-0 blur-md"
          style={
            isMounted
              ? { transition: "transform 1.2s cubic-bezier(0.23, 1, 0.32, 1), opacity 1.2s cubic-bezier(0.23, 1, 0.32, 1)" }
              : initialStyles
          }
        />
        
        {/* Additional floating decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-600/3 rounded-full blur-xl z-0 animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-yellow-600/3 rounded-full blur-xl z-0 animate-pulse" 
             style={{ animationDuration: '8s' }} />

        {/* Enhanced curved path decoration */}
        <svg
          className="absolute w-full h-full top-0 left-0 z-0 opacity-40"
          viewBox="0 0 100 100"
          preserveAspectRatio="none">
          <defs>
            <linearGradient
              id="pathGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#6366F1" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path
            d="M0,50 C20,20 80,80 100,50"
            stroke="url(#pathGradient)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="5,5"
            className="animate-dash"
          />
          <path
            d="M0,70 C30,40 70,60 100,30"
            stroke="url(#pathGradient)"
            strokeWidth="0.7"
            fill="none"
            strokeDasharray="4,6"
            className="animate-dash-reverse"
          />
        </svg>

        {/* Left content - Enhanced Text section */}
        <div
          ref={textContentRef}
          className="w-full lg:w-5/12 p-4 md:p-8 z-10 transition-all duration-700 ease-out"
          style={isMounted ? {} : initialStyles}>
          <div className="max-w-lg mx-auto lg:mx-0">
            <div className="mb-2 inline-block px-3 py-1 rounded-full bg-gradient-to-r from-green-50 to-blue-50 text-green-700 text-sm font-medium animate-pulse">
              Team Collaboration
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 via-emerald-500 to-blue-600 bg-clip-text text-transparent">
              Code Together in Real-Time
            </h2>
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              Looking to collaborate with your team on code without the hassle
              of merge conflicts?
            </p>
            <p className="text-lg mb-8 text-gray-700 leading-relaxed">
              Our platform enables seamless real-time collaboration with
              multiple developers coding simultaneously, complete with live chat
              and version tracking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 active:translate-y-0">
                Start Collaborating
              </button>
              <button className="border border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0">
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Right content - Enhanced Collaborative coding interface */}
        <div className="w-full lg:w-7/12 p-4 md:p-8 relative mt-12 lg:mt-0">
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
                <span className="text-blue-400">processUserData</span>() {`{`}
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
            <div className="absolute -right-3 -top-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md animate-pulse" style={{ animationDuration: '3s' }}>
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

          {/* Live code changes log with enhanced animations */}
          <div
            ref={codeChangesRef}
            className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl w-full max-w-sm mx-auto transform translate-y-4 translate-x-12 transition-all duration-700 ease-out border border-gray-200"
            style={isMounted ? {} : initialStyles}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-gray-700">
                Live Changes
              </h3>
              <span className="text-xs text-gray-500">Just now</span>
            </div>
            <div className="space-y-3">
              <div
                className={`p-2 rounded-lg ${
                  activeAvatar === 0 ? "bg-green-50 scale-105" : "bg-gray-50"
                } transition-all duration-500`}>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-xs">
                    AM
                  </div>
                  <span className="text-xs font-medium text-gray-700">
                    Alex Miller
                  </span>
                  <span className="text-xs text-gray-500">
                    added map function
                  </span>
                </div>
              </div>
              <div
                className={`p-2 rounded-lg ${
                  activeAvatar === 1 ? "bg-blue-50 scale-105" : "bg-gray-50"
                } transition-all duration-500`}>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs">
                    JD
                  </div>
                  <span className="text-xs font-medium text-gray-700">
                    John Doe
                  </span>
                  <span className="text-xs text-gray-500">
                    added user properties
                  </span>
                </div>
              </div>
              <div
                className={`p-2 rounded-lg ${
                  activeAvatar === 2 ? "bg-purple-50 scale-105" : "bg-gray-50"
                } transition-all duration-500`}>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-xs">
                    SL
                  </div>
                  <span className="text-xs font-medium text-gray-700">
                    Sarah Lee
                  </span>
                  <span className="text-xs text-gray-500">
                    added formatDate() call
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced floating decorative elements with animations */}
          <div className="absolute -top-4 right-14 w-10 h-10 flex items-center justify-center animate-bounce" style={{ animationDuration: '2s' }}>
            <div className="text-3xl transform rotate-45">⌨️</div>
          </div>
          <div className="absolute bottom-4 right-28 w-10 h-10 flex items-center justify-center animate-pulse" style={{ animationDuration: '3s' }}>
            <div className="text-2xl transform -rotate-12">💬</div>
          </div>

          {/* Enhanced floating badges with animations */}
          <div className="absolute top-1/3 right-4 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full px-3 py-1 text-xs font-medium shadow-sm transform -rotate-6 hover:rotate-0 transition-transform duration-300">
            Real-time
          </div>
          <div className="absolute bottom-12 left-16 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full px-3 py-1 text-xs font-medium shadow-sm transform rotate-3 hover:rotate-0 transition-transform duration-300">
            Conflict-free
          </div>
        </div>
      </div>
      
      {/* Add responsive CSS animations */}
      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: 100;
          }
        }
        @keyframes dash-reverse {
          to {
            stroke-dashoffset: -100;
          }
        }
        .animate-dash {
          animation: dash 30s linear infinite;
        }
        .animate-dash-reverse {
          animation: dash-reverse 20s linear infinite;
        }
      `}</style>
    </>
  );
}