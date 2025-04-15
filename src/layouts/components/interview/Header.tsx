"use client";
import { Check, Clock, Settings, Volume2, Mic, MessageSquare, Coffee, User } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function () {
  const [theme, setTheme] = useState("light");
  const [time, setTime] = useState(2722); // 45:22 in seconds
  
  // Mock data for interview progress
  const interviewStages = [
    { name: "Introduction", completed: true, current: false },
    { name: "Coding Challenge", completed: false, current: true },
    { name: "System Design", completed: false, current: false },
    { name: "Technical Questions", completed: false, current: false },
    { name: "Q&A", completed: false, current: false },
  ];

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Format time as mm:ss
  const formatTime = (seconds:any) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' + secs : secs}`;
  };

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark");
  };

  return (
    <div className={theme === "dark" ? "bg-slate-900 text-white" : "bg-white text-slate-800"}>
      <header className={`${theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"} border-b py-3 px-4 flex justify-between items-center shadow-sm`}>
        <div className="flex items-center gap-3">
          <div className="font-bold text-xl text-blue-500 flex items-center">
            <span className="text-2xl mr-1">TI</span>
            <span className="hidden sm:inline">TechInterview</span>
          </div>
          <div className={`h-6 w-px ${theme === "dark" ? "bg-slate-700" : "bg-slate-200"}`}></div>
          <div className="text-sm font-medium">
            <span className="hidden sm:inline">Frontend Developer Position</span>
            <span className="sm:hidden">FE Dev</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3 md:gap-5">
          {/* Interview Progress - Enhanced for better visibility */}
          <div className="hidden md:flex items-center gap-1">
            {interviewStages.map((stage, index) => (
              <div key={index} className="flex flex-col items-center group relative">
                <div className="flex items-center">
                  <div
                    className={`flex items-center justify-center h-7 w-7 rounded-full text-xs font-medium transition-all duration-300
                      ${
                        stage.completed
                          ? "bg-green-500 text-white"
                          : stage.current
                            ? theme === "dark"
                              ? "bg-blue-600 text-white ring-2 ring-blue-400 ring-opacity-50"
                              : "bg-blue-500 text-white ring-2 ring-blue-300"
                            : theme === "dark"
                              ? "bg-slate-700 text-slate-400"
                              : "bg-slate-200 text-slate-500"
                      }`}>
                    {stage.completed ? <Check size={14} /> : index + 1}
                  </div>
                  {index < interviewStages.length - 1 && (
                    <div
                      className={`w-6 h-1 rounded ${
                        stage.completed 
                          ? "bg-green-500" 
                          : theme === "dark" 
                            ? "bg-slate-700" 
                            : "bg-slate-300"
                      }`}></div>
                  )}
                </div>
                <span className="invisible group-hover:visible absolute top-9 text-xs whitespace-nowrap bg-slate-800 text-white px-2 py-1 rounded">
                  {stage.name}
                </span>
              </div>
            ))}
          </div>
          
          {/* Simplified progress for mobile */}
          <div className="md:hidden flex items-center gap-1">
            <span className="text-xs font-medium px-2 py-1 rounded bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
              Stage 2/5
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Live indicator */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              Live
            </div>
            
            {/* Timer with improved styling */}
            <div className="flex items-center gap-2 px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-700">
              <Clock size={14} className="text-slate-500 dark:text-slate-300" />
              <span className="text-sm font-mono">{formatTime(time)}</span>
            </div>
            
            {/* Control buttons */}
            <div className="flex items-center">
              <button className={`p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-300`}>
                <Mic size={16} />
              </button>
              <button className={`p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-300`}>
                <MessageSquare size={16} />
              </button>
              <button className={`p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-300`}>
                <Coffee size={16} />
              </button>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-300`}>
                <Settings size={16} />
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Optional sub-header with connection info and current stage */}
      <div className={`px-4 py-2 flex justify-between items-center text-xs ${theme === "dark" ? "bg-slate-800 text-slate-300" : "bg-slate-50 text-slate-600"}`}>
        <div className="flex items-center gap-2">
          <User size={14} />
          <span>Interviewing: John Doe</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:flex items-center gap-1">
            <Volume2 size={12} />
            Audio quality: Excellent
          </span>
        </div>
        <div className="font-medium text-blue-500">
          Current: Coding Challenge
        </div>
      </div>
    </div>
  );
}