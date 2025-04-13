"use client";
import {
  Play,
  Code,
  Video,
  FileText,
  Check,
  Laptop,
  Users,
  ChevronRight,
  X,
  Copy,
  Calendar,
  ChevronLeft,
  Clock,
  User,
} from "lucide-react";
import React, { useState } from "react";

export default function FeatureSections() {
  const [activeTab, setActiveTab] = useState("demo");
  const [activeStep, setActiveStep] = useState(1);

  // Demo states
  const [showVideo, setShowVideo] = useState(false);

  const handleNextStep = () => {
    if (activeStep < 4) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      {/* Tabs */}
      <div className="flex border-b border-slate-200 mb-8">
        <button
          className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
            activeTab === "demo"
              ? "border-blue-500 text-blue-600"
              : "border-transparent text-slate-600 hover:text-slate-800"
          }`}
          onClick={() => setActiveTab("demo")}>
          Platform Demo
        </button>
        <button
          className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
            activeTab === "create"
              ? "border-blue-500 text-blue-600"
              : "border-transparent text-slate-600 hover:text-slate-800"
          }`}
          onClick={() => setActiveTab("create")}>
          Create Interview
        </button>
        <button
          className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
            activeTab === "schedule"
              ? "border-blue-500 text-blue-600"
              : "border-transparent text-slate-600 hover:text-slate-800"
          }`}
          onClick={() => setActiveTab("schedule")}>
          Schedule Sessions
        </button>
      </div>

      {/* Demo Content */}
      {activeTab === "demo" && (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Demo Video Preview */}
          <div className="relative h-96 bg-slate-900 flex items-center justify-center">
            {showVideo ? (
              <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                <div className="text-white text-center">
                  <p className="mb-2 text-lg font-medium">
                    Video Player Would Appear Here
                  </p>
                  <p className="text-slate-400">
                    This is a placeholder for the platform demo video
                  </p>
                </div>
              </div>
            ) : (
              <>
                <img
                  src="/api/placeholder/1200/600"
                  alt="TechInterview Platform Preview"
                  className="object-cover w-full h-full opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-full transition-transform transform hover:scale-110"
                    onClick={() => setShowVideo(true)}>
                    <Play size={32} />
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Feature Highlights */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Platform Features
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mb-4">
                  <Code size={24} />
                </div>
                <h3 className="font-medium text-lg mb-2">
                  Real-time Code Editor
                </h3>
                <p className="text-slate-600 text-sm">
                  Collaborative code editor with syntax highlighting for over 20
                  programming languages.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mb-4">
                  <Video size={24} />
                </div>
                <h3 className="font-medium text-lg mb-2">HD Video Calls</h3>
                <p className="text-slate-600 text-sm">
                  Crystal clear video and audio with screen sharing capabilities
                  for effective communication.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mb-4">
                  <FileText size={24} />
                </div>
                <h3 className="font-medium text-lg mb-2">Problem Library</h3>
                <p className="text-slate-600 text-sm">
                  Access to 500+ curated interview problems across different
                  difficulty levels and domains.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Create Interview Content */}
      {activeTab === "create" && (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Stepper */}
          <div className="bg-slate-50 p-6 border-b border-slate-200">
            <div className="flex justify-between items-center max-w-3xl mx-auto">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex flex-1 items-center">
                  <button
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
                      step < activeStep
                        ? "bg-green-500 text-white"
                        : step === activeStep
                          ? "bg-blue-600 text-white"
                          : "bg-slate-200 text-slate-600"
                    }`}
                    onClick={() => setActiveStep(step)}>
                    {step < activeStep ? <Check size={16} /> : step}
                  </button>
                  <div
                    className={`flex-1 h-1 ${step < 4 ? (step < activeStep ? "bg-blue-500" : "bg-slate-200") : "hidden"}`}></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-slate-600 mt-2 max-w-3xl mx-auto px-2">
              <div
                className={activeStep >= 1 ? "text-blue-600 font-medium" : ""}>
                Interview Type
              </div>
              <div
                className={activeStep >= 2 ? "text-blue-600 font-medium" : ""}>
                Configure
              </div>
              <div
                className={activeStep >= 3 ? "text-blue-600 font-medium" : ""}>
                Add Problems
              </div>
              <div
                className={activeStep >= 4 ? "text-blue-600 font-medium" : ""}>
                Review
              </div>
            </div>
          </div>

          {/* Step Content */}
          <div className="p-8">
            {activeStep === 1 && (
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">
                  Select Interview Type
                </h2>
                <p className="text-slate-600 mb-6">
                  Choose the type of technical interview you want to create.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="border border-slate-200 rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 p-2 rounded text-blue-600">
                        <Code size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-slate-800 mb-1">
                          Coding Challenge
                        </h3>
                        <p className="text-sm text-slate-600">
                          Live coding with algorithmic problems or data
                          structure challenges.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-slate-200 rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 p-2 rounded text-blue-600">
                        <Laptop size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-slate-800 mb-1">
                          System Design
                        </h3>
                        <p className="text-sm text-slate-600">
                          Architecture discussion with collaborative diagramming
                          tools.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-slate-200 rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 p-2 rounded text-blue-600">
                        <FileText size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-slate-800 mb-1">
                          Technical Assessment
                        </h3>
                        <p className="text-sm text-slate-600">
                          Mixed format with coding tasks and technical
                          questions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-slate-200 rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 p-2 rounded text-blue-600">
                        <Users size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-slate-800 mb-1">
                          Pair Programming
                        </h3>
                        <p className="text-sm text-slate-600">
                          Collaborative coding session focused on teamwork.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium flex items-center gap-2"
                    onClick={handleNextStep}>
                    Continue
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">
                  Configure Interview
                </h2>
                <p className="text-slate-600 mb-6">
                  Set up the basic parameters for your coding interview.
                </p>

                <div className="space-y-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Interview Title
                    </label>
                    <input
                      type="text"
                      className="w-full border border-slate-300 rounded-lg px-3 py-2"
                      placeholder="Frontend Developer Interview"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Duration
                      </label>
                      <select className="w-full border border-slate-300 rounded-lg px-3 py-2">
                        <option>30 minutes</option>
                        <option>45 minutes</option>
                        <option selected>60 minutes</option>
                        <option>90 minutes</option>
                        <option>120 minutes</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Difficulty Level
                      </label>
                      <select className="w-full border border-slate-300 rounded-lg px-3 py-2">
                        <option>Entry Level</option>
                        <option selected>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Programming Languages
                    </label>
                    <div className="flex flex-wrap gap-2">
                      <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                        JavaScript{" "}
                        <button className="text-blue-600 hover:text-blue-800">
                          <X size={14} />
                        </button>
                      </div>
                      <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                        TypeScript{" "}
                        <button className="text-blue-600 hover:text-blue-800">
                          <X size={14} />
                        </button>
                      </div>
                      <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                        React{" "}
                        <button className="text-blue-600 hover:text-blue-800">
                          <X size={14} />
                        </button>
                      </div>
                      <button className="border border-dashed border-slate-300 px-3 py-1 rounded-full text-sm text-slate-500 hover:bg-slate-50">
                        + Add Language
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Interview Description
                    </label>
                    <textarea
                      className="w-full border border-slate-300 rounded-lg px-3 py-2 h-24"
                      placeholder="Describe the focus and goals of this interview..."></textarea>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    className="border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 px-4 py-2 rounded font-medium flex items-center gap-2"
                    onClick={handlePrevStep}>
                    Back
                  </button>
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium flex items-center gap-2"
                    onClick={handleNextStep}>
                    Continue
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {activeStep === 3 && (
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">
                  Add Coding Problems
                </h2>
                <p className="text-slate-600 mb-6">
                  Select problems from our library or create your own custom
                  challenges.
                </p>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium text-lg text-slate-800">
                      Selected Problems
                    </h3>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1">
                      + Add Custom Problem
                    </button>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="border border-slate-200 rounded-lg p-4 hover:border-blue-100 hover:bg-blue-50 transition-colors">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-slate-800">
                            Maximum Subarray Sum
                          </h4>
                          <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-xs">
                              Medium
                            </span>
                            <span>Algorithm</span>
                            <span>•</span>
                            <span>Dynamic Programming</span>
                          </div>
                        </div>
                        <button className="text-slate-400 hover:text-red-500">
                          <X size={18} />
                        </button>
                      </div>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-4 hover:border-blue-100 hover:bg-blue-50 transition-colors">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-slate-800">
                            Implement Debounce Function
                          </h4>
                          <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                            <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs">
                              Easy
                            </span>
                            <span>JavaScript</span>
                            <span>•</span>
                            <span>Frontend</span>
                          </div>
                        </div>
                        <button className="text-slate-400 hover:text-red-500">
                          <X size={18} />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-medium text-lg text-slate-800 mb-3">
                      Problem Library
                    </h3>
                    <div className="flex gap-3 mb-4">
                      <input
                        type="text"
                        placeholder="Search problems..."
                        className="flex-1 border border-slate-300 rounded-lg px-3 py-2"
                      />
                      <select className="border border-slate-300 rounded-lg px-3 py-2">
                        <option>All Difficulties</option>
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                      </select>
                    </div>

                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                      <table className="w-full text-left">
                        <thead className="bg-slate-50 border-b border-slate-200">
                          <tr>
                            <th className="px-4 py-3 text-sm font-medium text-slate-600">
                              Problem Name
                            </th>
                            <th className="px-4 py-3 text-sm font-medium text-slate-600">
                              Difficulty
                            </th>
                            <th className="px-4 py-3 text-sm font-medium text-slate-600">
                              Tags
                            </th>
                            <th className="px-4 py-3 text-sm font-medium text-slate-600">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                          <tr className="hover:bg-slate-50">
                            <td className="px-4 py-3">
                              Binary Tree Level Order Traversal
                            </td>
                            <td className="px-4 py-3">
                              <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-xs">
                                Medium
                              </span>
                            </td>
                            <td className="px-4 py-3 text-sm text-slate-500">
                              Trees, BFS
                            </td>
                            <td className="px-4 py-3">
                              <button className="text-blue-600 hover:text-blue-800 text-sm">
                                Add
                              </button>
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-50">
                            <td className="px-4 py-3">
                              LRU Cache Implementation
                            </td>
                            <td className="px-4 py-3">
                              <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded text-xs">
                                Hard
                              </span>
                            </td>
                            <td className="px-4 py-3 text-sm text-slate-500">
                              Hash Table, Linked List
                            </td>
                            <td className="px-4 py-3">
                              <button className="text-blue-600 hover:text-blue-800 text-sm">
                                Add
                              </button>
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-50">
                            <td className="px-4 py-3">Two Sum</td>
                            <td className="px-4 py-3">
                              <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs">
                                Easy
                              </span>
                            </td>
                            <td className="px-4 py-3 text-sm text-slate-500">
                              Arrays, Hash Table
                            </td>
                            <td className="px-4 py-3">
                              <button className="text-blue-600 hover:text-blue-800 text-sm">
                                Add
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    className="border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 px-4 py-2 rounded font-medium flex items-center gap-2"
                    onClick={handlePrevStep}>
                    Back
                  </button>
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium flex items-center gap-2"
                    onClick={handleNextStep}>
                    Continue
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {activeStep === 4 && (
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">
                  Review & Create
                </h2>
                <p className="text-slate-600 mb-6">
                  Review your interview details before creating it.
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-8">
                  <h3 className="font-medium text-lg text-slate-800 mb-4">
                    Interview Summary
                  </h3>

                  <div className="space-y-4">
                    <div className="flex">
                      <div className="w-1/3 text-sm text-slate-500">Title:</div>
                      <div className="w-2/3 font-medium">
                        Frontend Developer Interview
                      </div>
                    </div>

                    <div className="flex">
                      <div className="w-1/3 text-sm text-slate-500">Type:</div>
                      <div className="w-2/3">Coding Challenge</div>
                    </div>

                    <div className="flex">
                      <div className="w-1/3 text-sm text-slate-500">
                        Duration:
                      </div>
                      <div className="w-2/3">60 minutes</div>
                    </div>

                    <div className="flex">
                      <div className="w-1/3 text-sm text-slate-500">
                        Difficulty:
                      </div>
                      <div className="w-2/3">Intermediate</div>
                    </div>

                    <div className="flex">
                      <div className="w-1/3 text-sm text-slate-500">
                        Languages:
                      </div>
                      <div className="w-2/3">JavaScript, TypeScript, React</div>
                    </div>

                    <div className="flex">
                      <div className="w-1/3 text-sm text-slate-500">
                        Problems:
                      </div>
                      <div className="w-2/3">
                        <div>1. Maximum Subarray Sum</div>
                        <div>2. Implement Debounce Function</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-slate-500 mb-1">
                          Interview Template ID
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-sm">
                            FE-INT-2025-042
                          </span>
                          <button
                            className="text-slate-400 hover:text-blue-600"
                            title="Copy ID">
                            <Copy size={14} />
                          </button>
                        </div>
                      </div>

                      <div>
                        <div className="text-sm text-slate-500 mb-1">
                          Created By
                        </div>
                        <div>Your Name</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    className="border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 px-4 py-2 rounded font-medium flex items-center gap-2"
                    onClick={handlePrevStep}>
                    Back
                  </button>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium flex items-center gap-2">
                    Create Interview
                    <Check size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Schedule Sessions Content */}
      {activeTab === "schedule" && (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              Schedule Interview Sessions
            </h2>
            <p className="text-slate-600 mb-6">
              Create and manage your upcoming technical interviews.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Calendar View */}
              <div>
                <h3 className="font-medium text-lg text-slate-800 mb-4 flex items-center gap-2">
                  <Calendar size={18} />
                  Interview Calendar
                </h3>

                <div className="border border-slate-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <button className="text-slate-600 hover:text-blue-600">
                      <ChevronLeft size={18} />
                    </button>
                    <div className="font-medium">April 2025</div>
                    <button className="text-slate-600 hover:text-blue-600">
                      <ChevronRight size={18} />
                    </button>
                  </div>

                  <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">
                    <div className="text-slate-500">Su</div>
                    <div className="text-slate-500">Mo</div>
                    <div className="text-slate-500">Tu</div>
                    <div className="text-slate-500">We</div>
                    <div className="text-slate-500">Th</div>
                    <div className="text-slate-500">Fr</div>
                    <div className="text-slate-500">Sa</div>
                  </div>

                  <div className="grid grid-cols-7 gap-1 text-center">
                    {/* Previous month */}
                    <div className="h-10 flex items-center justify-center text-slate-400">
                      30
                    </div>
                    <div className="h-10 flex items-center justify-center text-slate-400">
                      31
                    </div>

                    {/* Current month */}
                    {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
                      <div
                        key={day}
                        className={`h-10 flex items-center justify-center rounded-full 
                              ${day === 13 ? "bg-blue-600 text-white" : "hover:bg-slate-100 cursor-pointer"}
                              ${[4, 8, 22].includes(day) ? "text-blue-600 font-medium" : ""}
                            `}>
                        {day}
                      </div>
                    ))}

                    {/* Next month */}
                    <div className="h-10 flex items-center justify-center text-slate-400">
                      1
                    </div>
                    <div className="h-10 flex items-center justify-center text-slate-400">
                      2
                    </div>
                    <div className="h-10 flex items-center justify-center text-slate-400">
                      3
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="font-medium text-slate-800 mb-2">
                    Schedule New Session
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm text-slate-700 mb-1">
                        Interview Template
                      </label>
                      <select className="w-full border border-slate-300 rounded-lg px-3 py-2">
                        <option>Frontend Developer Interview</option>
                        <option>Backend Developer Interview</option>
                        <option>Full Stack Developer Interview</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm text-slate-700 mb-1">
                          Date
                        </label>
                        <div className="flex border border-slate-300 rounded-lg overflow-hidden">
                          <input
                            type="text"
                            value="04/13/2025"
                            className="flex-1 px-3 py-2 border-none focus:outline-none"
                          />
                          <button className="bg-slate-50 px-3 border-l border-slate-300 text-slate-500">
                            <Calendar size={16} />
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm text-slate-700 mb-1">
                          Time
                        </label>
                        <div className="flex border border-slate-300 rounded-lg overflow-hidden">
                          <input
                            type="text"
                            value="2:00 PM"
                            className="flex-1 px-3 py-2 border-none focus:outline-none"
                          />
                          <button className="bg-slate-50 px-3 border-l border-slate-300 text-slate-500">
                            <Clock size={16} />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-slate-700 mb-1">
                        Candidate Email
                      </label>
                      <input
                        type="email"
                        placeholder="candidate@example.com"
                        className="w-full border border-slate-300 rounded-lg px-3 py-2"
                      />
                    </div>

                    <div className="pt-2">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 w-full rounded font-medium transition-colors">
                        Schedule Interview
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Upcoming Interviews */}
              <div>
                <h3 className="font-medium text-lg text-slate-800 mb-4 flex items-center gap-2">
                  <Clock size={18} />
                  Upcoming Interviews
                </h3>

                <div className="space-y-4">
                  <div className="border border-slate-200 rounded-lg p-4 hover:border-blue-200 hover:bg-blue-50 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-medium text-slate-800">
                          Frontend Developer Interview
                        </h4>
                        <div className="text-sm text-slate-500">
                          with John Smith
                        </div>
                      </div>
                      <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                        Today
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm mb-3">
                      <div className="flex items-center gap-1 text-slate-600">
                        <Clock size={14} />
                        <span>4:00 PM - 5:00 PM</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-600">
                        <User size={14} />
                        <span>john.smith@example.com</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm flex-1">
                        Join Interview
                      </button>
                      <button className="border border-slate-300 hover:bg-slate-50 px-3 py-1 rounded text-sm">
                        Reschedule
                      </button>
                    </div>
                  </div>

                  <div className="border border-slate-200 rounded-lg p-4 hover:border-blue-200 hover:bg-blue-50 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-medium text-slate-800">
                          Backend Developer Interview
                        </h4>
                        <div className="text-sm text-slate-500">
                          with Alex Johnson
                        </div>
                      </div>
                      <div className="bg-slate-100 text-slate-800 px-2 py-1 rounded text-xs">
                        Tomorrow
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm mb-3">
                      <div className="flex items-center gap-1 text-slate-600">
                        <Clock size={14} />
                        <span>11:00 AM - 12:30 PM</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-600">
                        <User size={14} />
                        <span>alex.j@example.com</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button className="border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 px-3 py-1 rounded text-sm flex-1">
                        Prepare Questions
                      </button>
                      <button className="border border-slate-300 hover:bg-slate-50 px-3 py-1 rounded text-sm">
                        Reschedule
                      </button>
                    </div>
                  </div>

                  <div className="border border-slate-200 rounded-lg p-4 hover:border-blue-200 hover:bg-blue-50 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-medium text-slate-800">
                          Full Stack Developer Interview
                        </h4>
                        <div className="text-sm text-slate-500">
                          with Sarah Wilson
                        </div>
                      </div>
                      <div className="bg-slate-100 text-slate-800 px-2 py-1 rounded text-xs">
                        Apr 22
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm mb-3">
                      <div className="flex items-center gap-1 text-slate-600">
                        <Clock size={14} />
                        <span>2:00 PM - 3:30 PM</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-600">
                        <User size={14} />
                        <span>sarah.w@example.com</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button className="border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 px-3 py-1 rounded text-sm flex-1">
                        View Details
                      </button>
                      <button className="border border-slate-300 hover:bg-slate-50 px-3 py-1 rounded text-sm">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
