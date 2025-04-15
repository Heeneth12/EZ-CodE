'use client';
import {
  Code,
  FileText,
  Copy,
  Download,
  Play,
  ChevronDown,
} from "lucide-react";
import React, { useState } from "react";

export default function () {
  const [codeValue, setCodeValue] = useState("// Write your code here...");
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [activeTab, setActiveTab] = useState("editor");
  const [theme, setTheme] = useState("light");

  const languages = [
    { id: "javascript", name: "JavaScript" },
    { id: "python", name: "Python" },
    { id: "java", name: "Java" },
    { id: "cpp", name: "C++" },
    { id: "typescript", name: "TypeScript" },
  ];
  return (
    <div>
      <div
        className={`w-3/5 ${theme === "dark" ? "border-slate-700" : "border-slate-200"} border-r flex flex-col`}>
        {/* Code Editor Tabs */}
        <div
          className={`${theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-slate-100 border-slate-200"} border-b flex items-center`}>
          <button
            className={`px-4 py-3 text-sm font-medium flex items-center gap-2 border-b-2 ${
              activeTab === "editor"
                ? theme === "dark"
                  ? "border-blue-500 text-blue-400"
                  : "border-blue-500 text-blue-600"
                : theme === "dark"
                  ? "border-transparent text-slate-400"
                  : "border-transparent text-slate-600"
            }`}
            onClick={() => setActiveTab("editor")}>
            <Code size={16} />
            Editor
          </button>
          <button
            className={`px-4 py-3 text-sm font-medium flex items-center gap-2 border-b-2 ${
              activeTab === "problem"
                ? theme === "dark"
                  ? "border-blue-500 text-blue-400"
                  : "border-blue-500 text-blue-600"
                : theme === "dark"
                  ? "border-transparent text-slate-400"
                  : "border-transparent text-slate-600"
            }`}
            onClick={() => setActiveTab("problem")}>
            <FileText size={16} />
            Problem
          </button>
          <button
            className={`px-4 py-3 text-sm font-medium flex items-center gap-2 border-b-2 ${
              activeTab === "notes"
                ? theme === "dark"
                  ? "border-blue-500 text-blue-400"
                  : "border-blue-500 text-blue-600"
                : theme === "dark"
                  ? "border-transparent text-slate-400"
                  : "border-transparent text-slate-600"
            }`}
            onClick={() => setActiveTab("notes")}>
           
            Notes
          </button>
        </div>

        {/* Editor Toolbar */}
        <div
          className={`${theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"} border-b p-2 flex justify-between items-center`}>
          <div className="flex items-center gap-3">
            <select
              className={`text-sm rounded px-3 py-1.5 border ${
                theme === "dark"
                  ? "bg-slate-700 border-slate-600 text-slate-200"
                  : "bg-white border-slate-300 text-slate-700"
              }`}
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}>
              {languages.map((lang) => (
                <option key={lang.id} value={lang.id}>
                  {lang.name}
                </option>
              ))}
            </select>
            <select
              className={`text-sm rounded px-3 py-1.5 border ${
                theme === "dark"
                  ? "bg-slate-700 border-slate-600 text-slate-200"
                  : "bg-white border-slate-300 text-slate-700"
              }`}>
              <option>Font Size: 14px</option>
              <option>Font Size: 16px</option>
              <option>Font Size: 18px</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <button
              className={`p-2 rounded ${theme === "dark" ? "hover:bg-slate-700" : "hover:bg-slate-100"}`}
              title="Copy code">
              <Copy size={16} />
            </button>
            <button
              className={`p-2 rounded ${theme === "dark" ? "hover:bg-slate-700" : "hover:bg-slate-100"}`}
              title="Download code">
              <Download size={16} />
            </button>
            <button
              className={`${theme === "dark" ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"} text-white px-3 py-1.5 rounded text-sm font-medium flex items-center gap-2`}>
              <Play size={14} />
              Run Code
            </button>
          </div>
        </div>

        {/* Code Editor Area */}
        <div className="flex-1 overflow-hidden">
          {activeTab === "editor" && (
            <div
              className={`h-full ${theme === "dark" ? "bg-slate-900" : "bg-slate-50"}`}>
              <textarea
                className={`w-full h-full p-4 font-mono text-sm outline-none resize-none ${
                  theme === "dark"
                    ? "bg-slate-900 text-slate-200"
                    : "bg-slate-50 text-slate-800"
                }`}
                value={codeValue}
                onChange={(e) => setCodeValue(e.target.value)}
                spellCheck="false"
              />
            </div>
          )}

          {activeTab === "problem" && (
            <div
              className={`h-full p-4 overflow-y-auto ${theme === "dark" ? "bg-slate-900" : "bg-white"}`}>
              <h2 className="text-lg font-semibold mb-2">
                Array Manipulation Challenge
              </h2>
              <div
                className={`p-3 mb-4 text-sm rounded ${theme === "dark" ? "bg-slate-800" : "bg-blue-50"}`}>
                <div className="font-medium mb-1">Task:</div>
                <p>
                  Write a function that takes an array of integers and returns
                  the maximum subarray sum.
                </p>
              </div>

              <h3 className="font-medium mb-2">Example:</h3>
              <pre
                className={`p-3 rounded text-sm font-mono mb-4 ${theme === "dark" ? "bg-slate-800" : "bg-slate-100"}`}>
                Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]{"\n"}
                Output: 6{"\n"}
                Explanation: The subarray [4, -1, 2, 1] has the maximum sum 6.
              </pre>

              <h3 className="font-medium mb-2">Constraints:</h3>
              <ul className="list-disc list-inside text-sm space-y-1 mb-4">
                <li>The array contains at least one element</li>
                <li>Time complexity should be O(n)</li>
                <li>Space complexity should be O(1)</li>
              </ul>
            </div>
          )}

          {activeTab === "notes" && (
            <div
              className={`h-full p-4 ${theme === "dark" ? "bg-slate-900" : "bg-white"}`}>
              <textarea
                className={`w-full h-full p-2 text-sm outline-none resize-none border rounded ${
                  theme === "dark"
                    ? "bg-slate-800 border-slate-700 text-slate-200"
                    : "bg-white border-slate-300 text-slate-800"
                }`}
                placeholder="Take notes during your interview..."
                spellCheck="false"
              />
            </div>
          )}
        </div>

        {/* Output Console (Collapsed by default) */}
        <div
          className={`${theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-slate-100 border-slate-200"} border-t h-8 flex items-center px-3 cursor-pointer hover:bg-opacity-80`}>
          <div className="flex items-center gap-2 text-sm">
            <ChevronDown size={16} />
            <span>Console Output</span>
          </div>
        </div>
      </div>
    </div>
  );
}
