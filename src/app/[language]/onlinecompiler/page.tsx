"use client";
import Navbar from "@/layouts/components/Navbar";
import { useState } from "react";
import LanguageSidebar from "./components/LanguageSidebar";
import EditorHeader from "./components/EditorHeader";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

const CodeEditor = () => {
  const params = useParams();
  const [activeTab, setActiveTab] = useState("output");
  const [editorTheme, setEditorTheme] = useState("vs-dark");

  const language = (params as { language?: string })?.language;
  const activeLanguage = language || "c";

  // Function to get file extension by language
  const getFileExtension = (lang: string): string => {
    const extensions: Record<string, string> = {
      c: "c",
      cpp: "cpp",
      csharp: "cs",
      java: "java",
      javascript: "js",
      python: "py",
      go: "go",
      kotlin: "kt",
      php: "php",
      perl: "pl",
      html: "html",
    };
    return extensions[lang] || "txt";
  };
  const fileExtension = getFileExtension(activeLanguage);
  console.log("File Extension:", fileExtension);
  console.log("Active Language:", activeLanguage);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      {/* Editor Container */}
      <div className="flex flex-col md:flex-row h-[calc(100vh-56px)]">
        <LanguageSidebar />
        {/* Editor Section */}
        <div className="flex-1 flex flex-col">
          <EditorHeader />

          <div className="flex flex-col md:flex-row flex-1">
            {/* Code Editor - Changed from flex-1 to w-1/2 for equal width */}
            <div className="w-full md:w-1/2 bg-gray-900 overflow-hidden flex flex-col min-h-0">
              {/* File tabs */}
              <div className="flex border-b border-gray-600 px-2">
                <div className="flex items-center px-3 py-2 border-b-2 border-blue-500 text-blue-400 text-sm">
                  <span>{`main.${fileExtension}`}</span>
                  <button className="ml-2 text-gray-500 hover:text-gray-300">
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
                    </svg>
                  </button>
                </div>
                <button className="px-3 py-2 text-gray-500 hover:text-gray-300 text-sm flex items-center">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                  <span className="ml-1">New File</span>
                </button>
              </div>
              <div className="flex-1 min-h-0">
                <MonacoEditor
                  height="100%"
                  width="100%"
                  theme={editorTheme}
                  language={activeLanguage}
                />
              </div>
            </div>
            {/* Output Panel - Changed from w-full md:w-80 to w-full md:w-1/2 for equal width */}
            <div className="w-full md:w-1/2 bg-gray-900 border-l border-gray-700">
              <div className="flex border-b border-gray-700">
                <button
                  className={`px-4 py-2 text-sm transition-colors ${
                    activeTab === "input"
                      ? "border-b-2 border-blue-500 text-blue-400"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                  onClick={() => setActiveTab("input")}>
                  Input
                </button>
                <button
                  className={`px-4 py-2 text-sm transition-colors ${
                    activeTab === "output"
                      ? "border-b-2 border-blue-500 text-blue-400"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                  onClick={() => setActiveTab("output")}>
                  Output
                </button>
              </div>
              <div className="p-4 h-[calc(100%-40px)] overflow-auto">
                {activeTab === "input" ? (
                  <textarea className="w-full h-full bg-gray-800 border border-gray-700 rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                ) : (
                  <div className="font-mono h-full">Hello, World!</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
