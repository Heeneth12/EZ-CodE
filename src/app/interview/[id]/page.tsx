"use client";
import { useState } from "react";
import {
  Code,
  FileText,
  Clipboard,
  Play,
  Download,
  Copy,
  ChevronDown,
  PanelRight,
  PanelLeft,
} from "lucide-react";
import VideoCallComponent from "@/layouts/components/interview/VideoCallComponent";
import Header from "@/layouts/components/interview/Header";

export default function AdvancedTechInterviewPlatform() {
  const [codeValue, setCodeValue] = useState("// Write your code here...");
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [activeTab, setActiveTab] = useState("editor");
  const [theme, setTheme] = useState("dark");
  const [problemPanelExpanded, setProblemPanelExpanded] = useState(true);
  const [showVideoCall, setShowVideoCall] = useState(true);

  // Mock data for languages
  const languages = [
    { id: "javascript", name: "JavaScript" },
    { id: "python", name: "Python" },
    { id: "java", name: "Java" },
    { id: "cpp", name: "C++" },
    { id: "typescript", name: "TypeScript" },
  ];

  const problemStatement = `
    # Balanced Binary Tree
    
    Given a binary tree, determine if it is height-balanced.
    
    A height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differs by more than 1.
    
    ### Example 1:
    Input: root = [3,9,20,null,null,15,7]
    Output: true
    
    ### Example 2:
    Input: root = [1,2,2,3,3,null,null,4,4]
    Output: false
    
    ### Constraints:
    - The number of nodes in the tree is in the range [0, 5000].
    - -10^4 <= Node.val <= 10^4
  `;

  return (
    <div
      className={`flex flex-col h-screen ${theme === "dark" ? "bg-slate-900 text-slate-200" : "bg-slate-50 text-slate-800"}`}>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel - Main Coding Section */}
        <div
          className={`flex-1 flex flex-col ${!problemPanelExpanded ? "w-full" : ""}`}>
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
              <div className="flex">
                <button
                  className={`px-4 py-1.5 text-sm font-medium border-t border-l border-b rounded-l ${
                    activeTab === "editor"
                      ? theme === "dark"
                        ? "bg-slate-700 border-slate-600 text-slate-200"
                        : "bg-blue-50 border-blue-200 text-blue-700"
                      : theme === "dark"
                        ? "bg-slate-800 border-slate-700 text-slate-400"
                        : "bg-white border-slate-300 text-slate-600"
                  }`}
                  onClick={() => setActiveTab("editor")}>
                  <Code size={16} className="inline mr-1.5" />
                  Editor
                </button>
                <button
                  className={`px-4 py-1.5 text-sm font-medium border-t border-r border-b rounded-r ${
                    activeTab === "notes"
                      ? theme === "dark"
                        ? "bg-slate-700 border-slate-600 text-slate-200"
                        : "bg-blue-50 border-blue-200 text-blue-700"
                      : theme === "dark"
                        ? "bg-slate-800 border-slate-700 text-slate-400"
                        : "bg-white border-slate-300 text-slate-600"
                  }`}
                  onClick={() => setActiveTab("notes")}>
                  <Clipboard size={16} className="inline mr-1.5" />
                  Notes
                </button>
              </div>
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
              <button
                onClick={() => setProblemPanelExpanded(!problemPanelExpanded)}
                className={`p-2 rounded text-slate-400 hover:text-slate-200 ${theme === "dark" ? "hover:bg-slate-700" : "hover:bg-slate-100"}`}
                title={
                  problemPanelExpanded
                    ? "Hide problem panel"
                    : "Show problem panel"
                }>
                {problemPanelExpanded ? (
                  <PanelRight size={16} />
                ) : (
                  <PanelLeft size={16} />
                )}
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

        {/* Right Panel - Problem Statement */}
        {problemPanelExpanded && (
          <div
            className={`w-2/5 flex flex-col border-l ${theme === "dark" ? "border-slate-700" : "border-slate-200"}`}>
            {/* Problem Statement Section */}
            <div
              className={`flex-1 ${theme === "dark" ? "bg-slate-800" : "bg-white"} overflow-y-auto`}>
              <div className="p-3 flex justify-between items-center border-b border-slate-700">
                <div
                  className={`text-sm font-medium flex items-center gap-2 ${theme === "dark" ? "text-slate-200" : "text-slate-800"}`}>
                  <FileText size={16} />
                  Problem Statement
                </div>
              </div>
              <div
                className={`p-4 ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                <div className="prose prose-sm max-w-none">
                  <pre className="whitespace-pre-wrap font-sans">
                    {problemStatement}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <VideoCallComponent
        theme={theme}
        initialPosition={{ x: 20, y: 80 }}
        initialSize={{ width: 360, height: 320 }}
      />
    </div>
  );
}
