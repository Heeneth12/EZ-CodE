import React from "react";

export default function HeroSectionOnlineCompiler() {
  const languages = [
    { id: "python", name: "Python", icon: () => <div className="text-blue-600 text-xl font-bold">Py</div> },
    { id: "sql", name: "SQL", icon: () => <div className="text-blue-500 text-xl font-bold">SQL</div> },
    { id: "r", name: "R", icon: () => <div className="text-blue-700 text-xl font-bold">R</div> },
    { id: "html", name: "HTML", icon: () => <div className="text-orange-500 text-xl font-bold">HTML</div> },
    { id: "css", name: "CSS", icon: () => <div className="text-blue-400 text-xl font-bold">CSS</div> },
    { id: "javascript", name: "JavaScript", icon: () => <div className="text-yellow-500 text-xl font-bold">JS</div> },
    { id: "java", name: "Java", icon: () => <div className="text-red-500 text-xl font-bold">Java</div> },
    { id: "c", name: "C", icon: () => <div className="text-blue-600 text-xl font-bold">C</div> },
    { id: "cpp", name: "C++", icon: () => <div className="text-blue-700 text-xl font-bold">C++</div> },
    { id: "csharp", name: "C#", icon: () => <div className="text-purple-600 text-xl font-bold">C#</div> },
    { id: "go", name: "Go", icon: () => <div className="text-blue-400 text-xl font-bold">Go</div> },
    { id: "kotlin", name: "Kotlin", icon: () => <div className="text-orange-600 text-xl font-bold">K</div> },
    { id: "swift", name: "Swift", icon: () => <div className="text-orange-500 text-xl font-bold">Swift</div> },
    { id: "dsa", name: "DSA", icon: () => <div className="text-gray-700 text-xl font-bold">DSA</div> },
    { id: "numpy", name: "NumPy", icon: () => <div className="text-blue-500 text-xl font-bold">Np</div> },
    { id: "pandas", name: "Pandas", icon: () => <div className="text-blue-600 text-xl font-bold">Pd</div> },
    { id: "rust", name: "Rust", icon: () => <div className="text-orange-700 text-xl font-bold">Rust</div> }
  ];

  return (
    <>
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">
                Code Anywhere. <br /> Collaborate Everywhere.
              </h1>
              <p className="mt-6 text-xl max-w-3xl">
                A powerful online code editor supporting 30+ programming
                languages with real-time collaboration, code execution, and easy
                sharing.
              </p>
              <div className="mt-10 sm:flex">
                <div className="rounded-md shadow">
                  <a
                    href="#editor"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10">
                    Start Coding Now
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#features"
                    className="w-full flex items-center justify-center px-8 py-3 border text-base font-medium rounded-md border-white text-white hover:bg-blue-500 md:py-4 md:text-lg md:px-10">
                    Explore Features
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:ml-8">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2">
                  <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                  <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                  <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                  <div className="text-gray-300 text-sm ml-2">
                    code-editor.js
                  </div>
                </div>
                <img
                  src="/api/placeholder/600/350"
                  alt="Code Editor Preview"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Language Selection */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-700 mb-4">
            Learn programming for <span className="text-blue-600">Free</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
            Quick-read tutorials with code examples that you can run and
            copy—perfect for self-paced learning.
          </p>

          {/* First Row of Languages */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-6">
            {languages.slice(0, 6).map((lang) => (
              <a
                key={lang.id}
                href={`http://localhost:3000/online-compiler/${lang.id}`}
                className="flex items-center justify-center p-4 rounded-md border border-gray-200 hover:border-blue-400 bg-white transition-all no-underline"
                title={`${lang.name} Online Compiler`}
                aria-label={`Try ${lang.name} Online Compiler`}>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-md">
                    {lang.icon()}
                  </div>
                  {/* <span className="text-sm font-medium text-gray-800">{lang.name}</span> */}
                </div>
              </a>
            ))}
          </div>

          {/* Second Row of Languages */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-6">
            {languages.slice(6, 12).map((lang) => (
              <a
                key={lang.id}
                href={`http://localhost:3000/online-compiler/${lang.id}`}
                className="flex items-center justify-center p-4 rounded-md border border-gray-200 hover:border-blue-400 bg-white transition-all no-underline"
                title={`${lang.name} Online Compiler`}
                aria-label={`Try ${lang.name} Online Compiler`}>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-md">
                    {lang.icon()}
                  </div>
                  {/* <span className="text-sm font-medium text-gray-800">{lang.name}</span> */}
                </div>
              </a>
            ))}
          </div>

          {/* Third Row of Languages */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {languages.slice(12, 17).map((lang) => (
              <a
                key={lang.id}
                href={`http://localhost:3000/online-compiler/${lang.id}`}
                className="flex items-center justify-center p-4 rounded-md border border-gray-200 hover:border-blue-400 bg-white transition-all no-underline"
                title={`${lang.name} Online Compiler`}
                aria-label={`Try ${lang.name} Online Compiler`}>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-md">
                    {lang.icon()}
                  </div>
                  {/* <span className="text-sm font-medium text-gray-800">{lang.name}</span> */}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}