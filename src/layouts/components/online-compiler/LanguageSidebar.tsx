import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

export default function LanguageSidebar() {
  // Get the active language from the URL parameters
  const { language: activeLanguage } = useParams();

  // Define the languages and their properties
  const languages = [
    {
      id: "html",
      name: "HTML",
      color: "from-orange-400 to-orange-500",
      icon: "icons8-html-5.svg",
    },
    {
      id: "javascript",
      name: "JavaScript",
      color: "from-yellow-400 to-yellow-500",
      icon: "icons8-javascript.svg",
    },
    {
      id: "python",
      name: "Python",
      color: "from-green-400 to-green-500",
      icon: "icons8-python.svg",
    },
    {
      id: "java",
      name: "Java",
      color: "from-red-400 to-red-500",
      icon: "icons8-java.svg",
    },
    {
      id: "c",
      name: "C",
      color: "from-blue-400 to-blue-500",
      icon: "icons8-c.svg",
    },
    {
      id: "cpp",
      name: "C++",
      color: "from-blue-500 to-blue-600",
      icon: "icons8-c++.svg",
    },
    {
      id: "csharp",
      name: "C#",
      color: "from-purple-400 to-purple-500",
      icon: "icons8-c-sharp.svg",
    },
    {
      id: "go",
      name: "Go",
      color: "from-cyan-400 to-cyan-500",
      icon: "icons8-go.svg",
    },
    {
      id: "kotlin",
      name: "Kotlin",
      color: "from-purple-500 to-purple-600",
      icon: "icons8-kotlin.svg",
    },
  ];

  return (
    <nav
      className="w-full md:w-20 flex md:flex-col overflow-x-auto md:overflow-y-auto bg-white border-r border-gray-200 shadow-sm scrollbar-hide"
      aria-label="Programming languages navigation"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}>
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .lang-tooltip {
          position: absolute;
          right: -70px;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
          background-color: #fff;
          color: #3b82f6;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.2s ease;
          pointer-events: none;
          z-index: 50;
        }
        .lang-item:hover .lang-tooltip {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>

      <ul className="flex md:flex-col w-full py-4">
        {languages.map((lang) => (
          <li key={lang.id} className="w-full py-2 relative lang-item">
            <Link
              href={`/online-compiler/${lang.id}`}
              target="_blank"
              title={`${lang.name} Online Compiler`}
              aria-current={activeLanguage === lang.id ? "page" : undefined}
              className={`flex flex-col items-center justify-center py-3 relative transition-all duration-200 ${
                activeLanguage === lang.id
                  ? "border-r-4 border-blue-500 bg-blue-50"
                  : "border-r-4 border-transparent hover:bg-gray-50"
              }`}>
              <div
                className={`flex items-center justify-center transition-all duration-300 ${
                  activeLanguage === lang.id ? "scale-110" : ""
                }`}>
                <img
                  src={`/assets/svgs/${lang.icon}`}
                  alt={`${lang.name} icon`}
                  className={`w-10 h-10 transition-all duration-300 ${
                    activeLanguage === lang.id ? "filter drop-shadow-md" : ""
                  }`}
                />
              </div>
              <div className="lang-tooltip border-l border-gray-200">
                {lang.name}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
