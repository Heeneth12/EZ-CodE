import React from "react";
import { useParams } from "next/navigation";

export default function EditorHeader() {
  // Get language from URL params instead of search params
  const params = useParams();
  const language = (params as { language?: string })?.language;
  const activeLanguage = language || "c";
  // Function to get display name by language
  const getDisplayName = (lang: string): string => {
    const names: Record<string, string> = {
      c: "C",
      cpp: "C++",
      csharp: "C#",
      java: "Java",
      js: "JavaScript",
      python: "Python",
      go: "Go",
      kotlin: "Kotlin",
      php: "PHP",
      perl: "Perl",
      html: "HTML",
    };
    return names[lang] || lang.toUpperCase();
  };

  const displayName = getDisplayName(activeLanguage);


  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-700 shadow-md">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-3">
          <div
            className={`w-3 h-3 rounded-full bg-${
              activeLanguage === "c" ? "blue" : "gray"
            }-500`}></div>
          <div className="text-sm font-medium flex items-center">
            <span className="mr-2 text-blue-400 font-bold">{displayName}</span>
            <span>Online Compiler</span>
            <span className="ml-2 px-2 py-0.5 text-xs bg-gray-700 rounded-full text-gray-300">
              Beta
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="hidden md:flex items-center mr-4 space-x-2">
            <span className="text-xs text-gray-400">Auto-save</span>
            <div className="w-8 h-4 bg-blue-600 rounded-full flex items-center p-0.5">
              <div className="w-3 h-3 bg-white rounded-full ml-auto"></div>
            </div>
          </div>

          <button className="p-1.5 hover:bg-gray-700 rounded-full transition-colors group relative">
            <svg
              className="w-5 h-5 text-gray-400 group-hover:text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
            <span className="absolute hidden group-hover:block text-xs bg-gray-800 text-white px-2 py-1 rounded -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              Reset Code
            </span>
          </button>

          <button className="p-1.5 hover:bg-gray-700 rounded-full transition-colors group relative">
            <svg
              className="w-5 h-5 text-gray-400 group-hover:text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
            </svg>
            <span className="absolute hidden group-hover:block text-xs bg-gray-800 text-white px-2 py-1 rounded -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              Toggle Theme
            </span>
          </button>

          <button className="p-1.5 hover:bg-gray-700 rounded-full transition-colors group relative">
            <svg
              className="w-5 h-5 text-gray-400 group-hover:text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
            </svg>
            <span className="absolute hidden group-hover:block text-xs bg-gray-800 text-white px-2 py-1 rounded -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              Fullscreen
            </span>
          </button>

          <div className="relative group">
            <button className="p-1.5 hover:bg-gray-700 rounded-full transition-colors flex items-center group-hover:text-blue-400">
              <svg
                className="w-5 h-5 text-gray-400 group-hover:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
              </svg>
              <span className="ml-1 text-sm hidden md:block text-gray-400 group-hover:text-blue-400">
                Share
              </span>
            </button>
            <div className="absolute hidden group-hover:block right-0 top-full mt-2 bg-gray-800 rounded shadow-lg z-10 p-2 w-48">
              <div className="text-xs text-gray-400 mb-2">
                Share with others
              </div>
              <div className="flex mb-2">
                <input
                  type="text"
                  value={`https://nextleap.io/${activeLanguage}/ab12cd`}
                  readOnly
                  className="text-xs bg-gray-700 rounded-l px-2 py-1 flex-1 outline-none"
                />
                <button className="bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded-r text-xs">
                  Copy
                </button>
              </div>
              <div className="flex justify-center space-x-2 mt-2">
                <button className="p-1 bg-blue-600 rounded-full hover:bg-blue-700">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.224.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                  </svg>
                </button>
                <button className="p-1 bg-blue-800 rounded-full hover:bg-blue-900">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.032 19H4.782c-2.776 0-4.682-2.344-4.682-4.964 0-2.621 2.016-4.964 4.682-4.964h4.736v2.384H4.9c-1.5 0-2.717 1.113-2.717 2.58 0 1.466 1.131 2.496 2.717 2.496h4.018L9.032 19zM6.79 11.333h10.42v1.333H6.79v-1.333zM19.218 19H14.6v-2.384h4.255c1.586 0 2.717-1.03 2.717-2.496 0-1.467-1.218-2.58-2.717-2.58h-4.736V9.072h4.736c2.666 0 4.682 2.343 4.682 4.964.001 2.62-1.905 4.964-4.319 4.964z" />
                  </svg>
                </button>
                <button className="p-1 bg-blue-900 rounded-full hover:bg-blue-950">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <button className="px-4 py-1.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-md shadow-lg transform transition-transform hover:scale-105 flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Run Code
          </button>
        </div>
      </div>
    </div>
  );
}
