import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

export default function LanguageSidebar() {
  const { language: activeLanguage } = useParams();

  const languages = [
    { id: "html", name: "HTML", color: "bg-orange-500", icon: "icons8-html-5.svg" },
    { id: "javascript", name: "JavaScript", color: "bg-yellow-500", icon: "icons8-javascript.svg" },
    { id: "python", name: "Python", color: "bg-green-500", icon: "icons8-python.svg" },
    { id: "java", name: "Java", color: "bg-red-500", icon: "icons8-java.svg" },
    { id: "c", name: "C", color: "bg-blue-500", icon: "icons8-c.svg" },
    { id: "cpp", name: "C++", color: "bg-blue-600", icon: "icons8-c++.svg" },
    { id: "csharp", name: "C#", color: "bg-purple-500", icon: "icons8-c-sharp.svg" },
    { id: "go", name: "Go", color: "bg-cyan-500", icon: "icons8-go.svg" },
    { id: "kotlin", name: "Kotlin", color: "bg-purple-600", icon: "icons8-kotlin.svg" },
  ];
  

  return (
    <nav
      className="w-full md:w-20 flex md:flex-col overflow-x-auto md:overflow-y-auto bg-gray-950 border-r border-gray-800"
      aria-label="Programming languages navigation"
    >
      <ul className="flex md:flex-col w-full my-8">
        {languages.map((lang) => (
          <li key={lang.id} className="w-full">
            <Link
              target="_blank"
              href={`/${lang.id}/onlinecompiler`}
              title={`${lang.name} Online Compiler`}
              aria-current={activeLanguage === lang.id ? "page" : undefined}
              className={`flex flex-col items-center justify-center p-2 transition-all duration-200 ${
                activeLanguage === lang.id
                  ? "bg-gray-800 border-l-4 border-blue-500"
                  : "hover:bg-gray-800 border-l-4 border-transparent"
              }`}
            >
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-lg shadow-lg transform transition-transform ${
                  activeLanguage === lang.id ? "scale-110" : "hover:scale-110"
                }`}
              >
                {/* Note that we're using an absolute path from the root of the project */}
                <img
                  src={`/assets/svgs/${lang.icon}`} 
                  alt={`${lang.name} icon`}
                  className="w-12 h-12"
                />
              </div>
              <span
                className={`text-xs mt-2 font-medium ${
                  activeLanguage === lang.id ? "text-blue-400" : "text-gray-400"
                }`}
              >
                {lang.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}