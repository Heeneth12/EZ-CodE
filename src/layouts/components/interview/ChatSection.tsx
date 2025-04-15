"use client";
import { MessageSquare, MoreVertical, User, Send, X, Code, Paperclip, ChevronDown, Smile, Clock, HelpCircle, ScreenShare, Mic, Video, FileText, Save, Monitor, ArrowRight, Check, LogOut } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

export default function AdvancedPopupChatSection() {
  const [chatMessage, setChatMessage] = useState("");
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const messagesEndRef = useRef(null);
  
  // Sample chat messages
  const [messages, setMessages] = useState([
    {
      sender: "interviewer",
      text: "Hello! Welcome to your technical interview. We'll start with a coding challenge about array manipulation.",
      time: "10:31 AM"
    },
    {
      sender: "user",
      text: "Thanks! I'm ready to tackle the challenge.",
      time: "10:32 AM"
    },
    {
      sender: "interviewer",
      text: "Great! I've shared the problem statement in the editor. Please feel free to ask any clarifying questions before you start coding.",
      time: "10:33 AM"
    },
    {
      sender: "user",
      text: "I'll start by implementing Kadane's algorithm which should give us O(n) time complexity and O(1) space as required.",
      time: "10:34 AM"
    }
  ]);

  // Technical interview help topics
  const helpTopics = [
    {
      title: "Algorithm Tips",
      icon: <Code size={14} />,
      options: ["Time Complexity Tips", "Common Algorithms", "Data Structures"]
    },
    {
      title: "Interview Protocol",
      icon: <FileText size={14} />,
      options: ["Ask Clarifying Questions", "Think Aloud Protocol", "How to Handle Hints"]
    },
    {
      title: "Technical Assistance",
      icon: <HelpCircle size={14} />,
      options: ["Request Problem Clarification", "Ask for Test Cases", "Signal Audio/Video Issues"]
    },
    {
      title: "Quick Actions",
      icon: <Monitor size={14} />,
      options: ["Share My Approach", "Request Feedback", "Request Time Extension"]
    }
  ];

  // Detect mobile devices
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Scroll to bottom when messages change or chat opens
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setShowHelp(false);
      setShowOptions(false);
    }
  };

  const sendMessage = () => {
    if (!chatMessage.trim()) return;
    
    const newMessage = {
      sender: "user",
      text: chatMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMessage]);
    setChatMessage("");
    
    // Simulate interviewer response
    setTimeout(() => {
      const responses = [
        "That's a great approach! Can you explain your time complexity analysis?",
        "Nice work so far. What edge cases should we consider?",
        "I see your implementation. Could you walk me through how it handles negative numbers?",
        "That's correct. Let's move on to the next question."
      ];
      
      const responseMessage = {
        sender: "interviewer",
        text: responses[Math.floor(Math.random() * responses.length)],
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prevMessages => [...prevMessages, responseMessage]);
    }, 1000);
  };

  const handleKeyDown = (e:any) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const minimizeChat = () => {
    setIsOpen(false);
  };
  
  const selectHelpOption = (option:any) => {
    // Generate predefined messages based on help option selected
    let helpText = "";
    
    switch(option) {
      case "Time Complexity Tips":
        helpText = "Remember to analyze best, average, and worst-case time complexity. For arrays, consider O(n) approaches like two-pointers or sliding window.";
        break;
      case "Common Algorithms":
        helpText = "Consider if this problem can be solved with: Dynamic Programming, BFS/DFS, Binary Search, Divide & Conquer, or Greedy approaches.";
        break;
      case "Ask Clarifying Questions":
        helpText = "I'd like to ask some clarifying questions about the problem statement. Can you provide more details about the input constraints?";
        break;
      case "Request Problem Clarification":
        helpText = "I'm not sure I fully understand the problem requirements. Could you please clarify what the expected output should be?";
        break;
      case "Share My Approach":
        helpText = "Before I code, let me explain my approach: I plan to use [describe your approach] with an expected time complexity of [O(?)] and space complexity of [O(?)].";
        break;
      default:
        helpText = `I'd like some guidance regarding ${option}, please.`;
    }
    
    setChatMessage(helpText);
    setShowHelp(false);
  };

  return (
    <>
      {/* Chat Icon Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className={`fixed bottom-6 right-6 ${
            theme === "dark" ? "bg-blue-600" : "bg-blue-500"
          } text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center z-50`}
          aria-label="Open chat">
          <MessageSquare size={24} />
          <span className="absolute top-0 right-0 h-3 w-3 bg-green-500 rounded-full"></span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`fixed ${
            isMobile ? "inset-0" : "bottom-6 right-6 w-96"
          } rounded-lg shadow-2xl flex flex-col z-50 transition-all duration-300 overflow-hidden ${
            theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
          } border`}
          style={{ maxHeight: isMobile ? '100%' : '80vh', height: isMobile ? '100%' : 'auto' }}
        >
          {/* Chat Header */}
          <div
            className={`${
              theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
            } border-b p-3 flex justify-between items-center`}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <User size={16} className="text-blue-600" />
              </div>
              <div>
                <span className="font-medium text-sm block">Technical Interviewer</span>
                <div className="flex items-center">
                  <span className="text-xs text-green-500 flex items-center">
                    <span className="h-2 w-2 bg-green-500 rounded-full mr-1"></span>
                    Online
                  </span>
                  <span className="mx-1 text-xs text-slate-400">•</span>
                  <span className="text-xs text-slate-400 flex items-center">
                    <Clock size={10} className="mr-1" />
                    45:22 remaining
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                className={`p-1.5 rounded ${
                  theme === "dark" ? "hover:bg-slate-700" : "hover:bg-slate-100"
                } text-slate-500`}
                onClick={() => setShowOptions(!showOptions)}
                aria-label="Chat options"
              >
                <MoreVertical size={16} />
              </button>
              <button
                className={`p-1.5 rounded ${
                  theme === "dark" ? "hover:bg-slate-700" : "hover:bg-slate-100"
                } text-slate-500`}
                aria-label="Minimize"
                onClick={minimizeChat}
              >
                <ChevronDown size={16} />
              </button>
              <button
                className={`p-1.5 rounded ${
                  theme === "dark" ? "hover:bg-slate-700" : "hover:bg-slate-100"
                } text-slate-500`}
                aria-label="Close chat"
                onClick={toggleChat}
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Options Menu - Conditionally Rendered */}
          {showOptions && (
            <div className={`absolute top-12 right-2 w-48 rounded-md shadow-lg overflow-hidden z-10 ${
              theme === "dark" ? "bg-slate-700 border-slate-600" : "bg-white border-slate-200"
            } border`}>
              <div className="py-1">
                <button className={`flex items-center gap-2 px-4 py-2 text-sm w-full text-left ${
                  theme === "dark" ? "hover:bg-slate-600 text-slate-200" : "hover:bg-slate-100 text-slate-700"
                }`}>
                  <Video size={14} />
                  <span>Toggle Video</span>
                </button>
                <button className={`flex items-center gap-2 px-4 py-2 text-sm w-full text-left ${
                  theme === "dark" ? "hover:bg-slate-600 text-slate-200" : "hover:bg-slate-100 text-slate-700"
                }`}>
                  <Mic size={14} />
                  <span>Toggle Audio</span>
                </button>
                <button className={`flex items-center gap-2 px-4 py-2 text-sm w-full text-left ${
                  theme === "dark" ? "hover:bg-slate-600 text-slate-200" : "hover:bg-slate-100 text-slate-700"
                }`}>
                  <ScreenShare size={14} />
                  <span>Share Screen</span>
                </button>
                <button className={`flex items-center gap-2 px-4 py-2 text-sm w-full text-left ${
                  theme === "dark" ? "hover:bg-slate-600 text-slate-200" : "hover:bg-slate-100 text-slate-700"
                }`}>
                  <Save size={14} />
                  <span>Save Chat Log</span>
                </button>
                <div className={`mx-3 my-1 h-px ${theme === "dark" ? "bg-slate-600" : "bg-slate-200"}`}></div>
                <button className={`flex items-center gap-2 px-4 py-2 text-sm w-full text-left ${
                  theme === "dark" ? "hover:bg-slate-600 text-red-400" : "hover:bg-slate-100 text-red-500"
                }`}>
                  <LogOut size={14} />
                  <span>End Interview</span>
                </button>
              </div>
            </div>
          )}

          {/* Chat Messages */}
          <div
            className={`flex-1 overflow-y-auto p-4 flex flex-col gap-3 ${
              theme === "dark" ? "bg-slate-900" : "bg-gray-50"
            }`}
          >
            {/* Interview Status Card */}
            <div className={`mx-auto px-4 py-3 rounded-lg mb-2 text-xs ${
              theme === "dark" ? "bg-slate-800" : "bg-white border border-slate-200"
            }`}>
              <div className="font-medium text-center mb-1">Current Stage: Coding Challenge</div>
              <div className="flex justify-center items-center gap-2">
                <div className={`h-1 w-12 rounded ${theme === "dark" ? "bg-green-500" : "bg-green-500"}`}></div>
                <div className={`h-1 w-12 rounded ${theme === "dark" ? "bg-blue-500" : "bg-blue-500"}`}></div>
                <div className={`h-1 w-12 rounded ${theme === "dark" ? "bg-slate-700" : "bg-slate-200"}`}></div>
                <div className={`h-1 w-12 rounded ${theme === "dark" ? "bg-slate-700" : "bg-slate-200"}`}></div>
              </div>
            </div>

            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  message.sender === "user" ? "items-end self-end" : "items-start"
                }`}
              >
                <div
                  className={`flex items-center gap-2 mb-1 ${
                    message.sender === "user" ? "justify-end" : ""
                  }`}
                >
                  {message.sender !== "user" && (
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <User size={14} className="text-blue-600" />
                    </div>
                  )}
                  <span className="text-xs font-medium">
                    {message.sender === "user" ? "You" : "Interviewer"}
                  </span>
                  <span className="text-xs text-slate-500">{message.time}</span>
                  {message.sender === "user" && (
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <User size={14} className="text-green-600" />
                    </div>
                  )}
                </div>
                <div
                  className={`p-3 rounded-lg max-w-xs break-words ${
                    message.sender === "user"
                      ? theme === "dark"
                        ? "bg-blue-600 text-white"
                        : "bg-blue-500 text-white"
                      : theme === "dark"
                      ? "bg-slate-700 text-slate-200"
                      : "bg-white border border-slate-200 text-slate-800"
                  }`}
                >
                  {message.text}
                </div>
                {/* Show message delivery status for user messages */}
                {message.sender === "user" && index === messages.length - 1 && (
                  <div className="flex items-center mt-1 text-xs text-slate-400">
                    <Check size={12} className="mr-1" />
                    Delivered
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Interview Help Panel - Conditionally Rendered */}
          {showHelp && (
            <div className={`p-3 border-b ${
              theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-slate-50 border-slate-200"
            }`}>
              <div className="mb-2 flex justify-between items-center">
                <span className="text-sm font-medium">Interview Help Resources</span>
                <button 
                  onClick={() => setShowHelp(false)}
                  className={`p-1 rounded ${
                  theme === "dark" ? "hover:bg-slate-700 text-slate-400" : "hover:bg-slate-200 text-slate-500"
                }`}>
                  <X size={14} />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {helpTopics.map((topic, index) => (
                  <div key={index} className="relative group">
                    <button 
                      className={`w-full p-2 rounded text-xs flex flex-col items-center justify-center text-center h-16 ${
                        theme === "dark" 
                          ? "bg-slate-700 hover:bg-slate-600 text-slate-200" 
                          : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200"
                      }`}>
                      <div className={`p-1 rounded-full mb-1 ${
                        theme === "dark" ? "bg-slate-600" : "bg-slate-100"
                      }`}>
                        {topic.icon}
                      </div>
                      <span>{topic.title}</span>
                    </button>
                    <div className={`absolute z-10 left-0 top-full mt-1 w-40 rounded-md shadow-lg overflow-hidden hidden group-hover:block ${
                      theme === "dark" ? "bg-slate-700 border-slate-600" : "bg-white border-slate-200"
                    } border`}>
                      {topic.options.map((option, idx) => (
                        <button 
                          key={idx}
                          onClick={() => selectHelpOption(option)}
                          className={`flex items-center gap-1 px-3 py-2 text-xs w-full text-left ${
                            theme === "dark" ? "hover:bg-slate-600 text-slate-200" : "hover:bg-slate-100 text-slate-700"
                          }`}>
                          <ArrowRight size={10} />
                          <span>{option}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Chat Input */}
          <div
            className={`p-3 ${
              theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
            } border-t`}
          >
            <div className="flex items-center gap-2 justify-between">
              <div className="flex">
                <button
                  className={`p-2 rounded-full ${
                    theme === "dark" ? "hover:bg-slate-700 text-slate-400" : "hover:bg-slate-100 text-slate-500"
                  }`}
                >
                  <Smile size={18} />
                </button>
                <button
                  className={`p-2 rounded-full ${
                    theme === "dark" ? "hover:bg-slate-700 text-slate-400" : "hover:bg-slate-100 text-slate-500"
                  }`}
                >
                  <Code size={18} />
                </button>
                <button
                  className={`p-2 rounded-full ${
                    theme === "dark" ? "hover:bg-slate-700 text-slate-400" : "hover:bg-slate-100 text-slate-500"
                  }`}
                >
                  <Paperclip size={18} />
                </button>
              </div>
              <button
                onClick={() => setShowHelp(!showHelp)}
                className={`p-2 rounded-full ${
                  showHelp 
                    ? theme === "dark" ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600" 
                    : theme === "dark" ? "hover:bg-slate-700 text-slate-400" : "hover:bg-slate-100 text-slate-500"
                }`}
              >
                <HelpCircle size={18} />
              </button>
            </div>
            <div className="flex gap-2 mt-2">
              <input
                type="text"
                placeholder="Type your message..."
                className={`flex-1 rounded-full px-4 py-2 text-sm border ${
                  theme === "dark"
                    ? "bg-slate-700 border-slate-600 text-slate-200 placeholder-slate-400"
                    : "bg-white border-slate-300 text-slate-800 placeholder-slate-400"
                }`}
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                onClick={sendMessage}
                disabled={!chatMessage.trim()}
                className={`${
                  chatMessage.trim()
                    ? theme === "dark"
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-blue-500 hover:bg-blue-600"
                    : theme === "dark"
                    ? "bg-slate-700 text-slate-500"
                    : "bg-slate-200 text-slate-400"
                } transition-colors p-2 rounded-full flex items-center justify-center`}
              >
                <Send size={18} className={chatMessage.trim() ? "text-white" : ""} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}