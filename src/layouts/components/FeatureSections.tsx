"use client";
import React, { useEffect, useRef, useState } from "react";
import TechnicalInterviewComponent from "./animations/TechnicalInterview";
import CollaborativeCodingAnimation from "./animations/CollaborativeCoding";

export default function FeatureSections() {
  const containerRef = useRef(null);
  const codeTerminalRef = useRef(null);
  const buttonCodeRef = useRef(null);
  const textContentRef = useRef(null);
  const decorativeCircleRef = useRef(null);
  const badgeRefs = useRef({});
  const buttonRefs = useRef({});
  const [isMounted, setIsMounted] = useState(false);
  const [screenSize, setScreenSize] = useState(null);

  // Fixed hydration issue by not initializing with default styles on server
  // and waiting for client-side mounting
  useEffect(() => {
    setIsMounted(true);
    setScreenSize(
      window.innerWidth < 640
        ? "small"
        : window.innerWidth < 1024
        ? "medium"
        : "large"
    );

    // Responsive screen size detection
    const handleResize = () => {
      setScreenSize(
        window.innerWidth < 640
          ? "small"
          : window.innerWidth < 1024
          ? "medium"
          : "large"
      );
    };

    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const containerTop =
        containerRef.current.getBoundingClientRect().top + scrollPosition;

      // More responsive trigger point calculation
      const elementTriggerPosition = containerTop - viewportHeight * 0.85;

      // Improved progress calculation with better easing
      const currentScreenSize = screenSize || "large";
      const rawProgress = Math.max(
        0,
        Math.min(
          1,
          (scrollPosition - elementTriggerPosition) /
            (currentScreenSize === "small" ? 300 : 500)
        )
      );

      // Enhanced easing function (cubic ease-out) for more natural motion
      const progress = 1 - Math.pow(1 - rawProgress, 3);

      // Apply animations with more dynamic transforms
      if (codeTerminalRef.current) {
        codeTerminalRef.current.style.transform = `translateY(${
          30 - progress * 30
        }px) rotate(${-2 + progress * 2}deg) scale(${0.95 + progress * 0.05})`;
        codeTerminalRef.current.style.opacity = progress;
        codeTerminalRef.current.style.filter = `blur(${(1 - progress) * 3}px)`;
      }

      if (buttonCodeRef.current) {
        buttonCodeRef.current.style.transform = `translateX(${
          70 - progress * 70
        }px) rotate(${5 - progress * 2}deg) scale(${0.9 + progress * 0.1})`;
        buttonCodeRef.current.style.opacity = progress;
        buttonCodeRef.current.style.filter = `blur(${(1 - progress) * 3}px)`;
      }

      if (textContentRef.current) {
        textContentRef.current.style.transform = `translateY(${
          40 - progress * 40
        }px) scale(${0.98 + progress * 0.02})`;
        textContentRef.current.style.opacity = progress;
      }

      if (decorativeCircleRef.current) {
        decorativeCircleRef.current.style.transform = `scale(${
          0.7 + progress * 0.3
        }) translate(${progress * 10}px, ${-progress * 15}px) rotate(${
          progress * 45
        }deg)`;
        decorativeCircleRef.current.style.opacity = 0.1 + progress * 0.4;
      }

      // Animate floating badges with staggered effect
      Object.values(badgeRefs.current).forEach((badge, index) => {
        if (badge) {
          const staggerDelay = index * 0.15;
          const adjustedProgress = Math.max(
            0,
            Math.min(1, (progress - staggerDelay) * 1.5)
          );

          badge.style.transform = `translateY(${
            30 - adjustedProgress * 30
          }px) rotate(${-5 + adjustedProgress * (index % 2 ? 10 : -10)}deg)`;
          badge.style.opacity = adjustedProgress;
        }
      });

      // Animate buttons with bounce effect
      Object.values(buttonRefs.current).forEach((button, index) => {
        if (button) {
          const staggerDelay = index * 0.2;
          const adjustedProgress = Math.max(
            0,
            Math.min(1, (progress - staggerDelay) * 1.5)
          );

          // Adding slight bounce effect
          const bounceEffect =
            adjustedProgress > 0.8
              ? Math.sin((adjustedProgress - 0.8) * 10) *
                3 *
                (1 - adjustedProgress)
              : 0;

          button.style.transform = `translateY(${
            20 - adjustedProgress * 20 + bounceEffect
          }px)`;
          button.style.opacity = adjustedProgress;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Small timeout before initial calculation for more reliable positioning
    setTimeout(() => {
      handleScroll();
    }, 150);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [screenSize]);

  // Function to set badge refs
  const setBadgeRef = (el, id) => {
    if (el) badgeRefs.current[id] = el;
  };

  // Function to set button refs
  const setButtonRef = (el, id) => {
    if (el) buttonRefs.current[id] = el;
  };

  // Create static dot positions - prevents hydration mismatch from random values
  const staticDots = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    top: `${(i * 5) % 100}%`,
    left: `${(i * 7 + 3) % 100}%`,
    opacity: 0.25 + (i % 3) * 0.25,
    animationDuration: `${2 + (i % 3)}s`,
  }));

  // Generate initial styles only on client side to prevent hydration mismatch
  const getInitialStyles = () => {
    if (!isMounted) return {};
    return {
      opacity: 0,
      transform: "translateY(30px)",
      transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
    };
  };

  return (
    <>
      <div
        ref={containerRef}
        className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden py-16 md:py-24 px-4">
        {/* Enhanced decorative background elements */}
        <div
          ref={decorativeCircleRef}
          className="absolute top-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-blue-600/5 rounded-full -mr-16 -mt-16 z-0"
          style={
            isMounted
              ? { transition: "transform 1.2s ease-out, opacity 1.2s ease-out" }
              : {}
          }
        />
        <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-purple-600/5 rounded-full -ml-16 -mb-16 z-0" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-green-600/5 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-0" />

        {/* Improved curved path decoration with animated gradient */}
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
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path
            d="M0,50 C20,20 80,80 100,50"
            stroke="url(#pathGradient)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="5,5"
          />
        </svg>

        {/* Enhanced dot grid background with deterministic positions */}
        <div className="absolute inset-0 z-0 opacity-10">
          {staticDots.map((dot) => (
            <div
              key={dot.id}
              className="absolute bg-blue-500 rounded-full"
              style={{
                width: "4px",
                height: "4px",
                top: dot.top,
                left: dot.left,
                opacity: dot.opacity,
                animation: isMounted
                  ? `pulse ${dot.animationDuration} ease-in-out infinite alternate`
                  : "none",
              }}
            />
          ))}
        </div>

        {/* Left content - Text section with improved animation */}
        <div
          ref={textContentRef}
          className="w-full md:w-5/12 p-4 sm:p-8 z-10 transition-all duration-700 ease-out"
          style={getInitialStyles()}>
          <div className="max-w-lg mx-auto md:mx-0">
            <div className="mb-2 inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs sm:text-sm font-medium transform hover:scale-105 transition-transform">
              For Developers
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Elevate your Technical Content
            </h2>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 text-gray-700 leading-relaxed">
              You're a developer, looking to create visually engaging code
              snippets for learning and sharing?
            </p>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 text-gray-700 leading-relaxed">
              Use our platform to create stunning visuals of your technical
              concepts that will engage your followers and take your coding
              journey to the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                ref={(el) => setButtonRef(el, "btn1")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-105">
                Get Started
              </button>
              <button
                ref={(el) => setButtonRef(el, "btn2")}
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all hover:scale-105">
                View Examples
              </button>
            </div>
          </div>
        </div>

        {/* Right content - Enhanced code terminals with improved responsive design */}
        <div className="w-full md:w-7/12 p-4 sm:p-8 relative mt-12 md:mt-0">
          {/* Python terminal - improved design and effects */}
          <div
            ref={codeTerminalRef}
            className="bg-gray-900 rounded-xl p-3 sm:p-5 shadow-2xl mb-8 w-full max-w-sm sm:max-w-md mx-auto transition-all duration-700 ease-out border border-gray-700"
            style={getInitialStyles()}>
            <div className="flex mb-3 items-center">
              <div className="h-2 sm:h-3 w-2 sm:w-3 bg-red-500 rounded-full mr-2"></div>
              <div className="h-2 sm:h-3 w-2 sm:w-3 bg-yellow-500 rounded-full mr-2"></div>
              <div className="h-2 sm:h-3 w-2 sm:w-3 bg-green-500 rounded-full mr-4"></div>
              <div className="text-xs text-gray-500 font-mono">smoosh.py</div>
            </div>
            <div className="text-gray-300 font-mono text-xs sm:text-sm">
              <p className="text-blue-400 my-1">&gt;&gt;&gt; 1 + 2 + 7</p>
              <p className="text-amber-400 my-1">10</p>
              <p className="text-blue-400 my-1">&gt;&gt;&gt; 3 * 8</p>
              <p className="text-amber-400 my-1">24</p>
              <p className="text-blue-400 my-1">
                &gt;&gt;&gt; True & True & False & True
              </p>
              <p className="text-amber-400 my-1">False</p>
            </div>
            <div className="absolute -right-3 -top-3 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md transform hover:rotate-6 hover:scale-110 transition-transform">
              Python
            </div>
          </div>

          {/* Button component code - improved design and effects */}
          <div
            ref={buttonCodeRef}
            className="bg-gray-900 rounded-xl p-3 sm:p-5 shadow-2xl w-full max-w-sm sm:max-w-md mx-auto transform translate-y-6 sm:translate-y-12 rotate-3 transition-all duration-700 ease-out border border-gray-700"
            style={getInitialStyles()}>
            <div className="flex mb-3 items-center">
              <div className="h-2 sm:h-3 w-2 sm:w-3 bg-red-500 rounded-full mr-2"></div>
              <div className="h-2 sm:h-3 w-2 sm:w-3 bg-yellow-500 rounded-full mr-2"></div>
              <div className="h-2 sm:h-3 w-2 sm:w-3 bg-green-500 rounded-full mr-4"></div>
              <div className="text-xs text-gray-500 font-mono">button.tsx</div>
            </div>
            <div className="text-gray-300 font-mono text-xs sm:text-sm">
              <p>
                <span className="text-pink-500">const</span>{" "}
                <span className="text-blue-400">MyButton</span>{" "}
                <span className="text-gray-400">=</span> (){" "}
                <span className="text-gray-400">=&gt;</span> {`{`}
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-gray-400">return</span> (
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-red-400">&lt;button</span>{" "}
                <span className="text-green-400">className</span>
                <span className="text-gray-400">=</span>
                <span className="text-amber-400">"my-button"</span>
                <span className="text-red-400">&gt;</span>
              </p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It's mine!</p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-red-400">&lt;/button&gt;</span>
              </p>
              <p>&nbsp;&nbsp;);</p>
              <p>{`}`};</p>
            </div>
            <div className="absolute -right-3 -top-3 bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md transform hover:rotate-6 hover:scale-110 transition-transform">
              React
            </div>
          </div>

          {/* Enhanced decorative elements with hover animations */}
          <div className="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-lg transform hover:rotate-12 hover:scale-110 transition-all cursor-pointer">
            in
          </div>
          <div className="absolute -bottom-2 right-16 sm:right-24 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-gray-700 text-2xl sm:text-3xl font-bold transform rotate-12 hover:rotate-45 transition-transform cursor-pointer">
            ✕
          </div>

          {/* Added floating badges with enhanced animations */}
          <div
            ref={(el) => setBadgeRef(el, "badge1")}
            className="absolute top-1/4 right-10 bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-xs font-medium shadow-sm transform -rotate-6 hover:rotate-0 hover:scale-110 transition-all cursor-pointer"
            style={getInitialStyles()}>
            TypeScript
          </div>
          <div
            ref={(el) => setBadgeRef(el, "badge2")}
            className="absolute bottom-8 left-10 sm:left-20 bg-green-100 text-green-800 rounded-full px-3 py-1 text-xs font-medium shadow-sm transform rotate-3 hover:rotate-0 hover:scale-110 transition-all cursor-pointer"
            style={getInitialStyles()}>
            Interactive
          </div>
          <div
            ref={(el) => setBadgeRef(el, "badge3")}
            className="absolute top-2/3 left-4 bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-xs font-medium shadow-sm transform rotate-6 hover:rotate-0 hover:scale-110 transition-all cursor-pointer hidden sm:block"
            style={getInitialStyles()}>
            Responsive
          </div>
          <div
            ref={(el) => setBadgeRef(el, "badge4")}
            className="absolute top-1/3 left-1/2 bg-amber-100 text-amber-800 rounded-full px-3 py-1 text-xs font-medium shadow-sm transform -rotate-3 hover:rotate-0 hover:scale-110 transition-all cursor-pointer hidden md:block"
            style={getInitialStyles()}>
            Animation
          </div>
        </div>
      </div>

      {/* Add subtle parallax scrolling effect with CSS */}
      {isMounted && (
        <style jsx>{`
          @keyframes pulse {
            from {
              transform: scale(1);
            }
            to {
              transform: scale(1.5);
            }
          }
        `}</style>
      )}

      <CollaborativeCodingAnimation />
      <TechnicalInterviewComponent />
    </>
  );
}
