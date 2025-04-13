"use client";
import { useState } from 'react';
import { 
  MessageSquare, Video, Code, Send, Mic, MicOff, Monitor, User, 
  Play, Download, Copy, Settings, ChevronDown, Clock, Check, X, 
  MoreVertical, FileText, Clipboard, Share2
} from 'lucide-react';

export default function AdvancedTechInterviewPlatform() {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [chatMessage, setChatMessage] = useState('');
  const [codeValue, setCodeValue] = useState('// Write your code here...');
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState('editor');
  const [theme, setTheme] = useState('light');
  
  // Mock data for interview progress
  const interviewStages = [
    { name: 'Introduction', completed: true, current: false },
    { name: 'Coding Challenge', completed: false, current: true },
    { name: 'System Design', completed: false, current: false },
    { name: 'Technical Questions', completed: false, current: false },
    { name: 'Q&A', completed: false, current: false }
  ];

  const languages = [
    { id: 'javascript', name: 'JavaScript' },
    { id: 'python', name: 'Python' },
    { id: 'java', name: 'Java' },
    { id: 'cpp', name: 'C++' },
    { id: 'typescript', name: 'TypeScript' }
  ];

  return (
    <div className={`flex flex-col h-screen ${theme === 'dark' ? 'bg-slate-900 text-slate-200' : 'bg-slate-50 text-slate-800'}`}>
      {/* Header */}
      <header className={`${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} border-b py-3 px-4 flex justify-between items-center`}>
        <div className="flex items-center gap-3">
          <div className="font-bold text-xl text-blue-500">TechInterview</div>
          <div className={`h-6 w-px ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'}`}></div>
          <div className="text-sm font-medium">Frontend Developer Position</div>
        </div>
        
        <div className="flex items-center gap-5">
          {/* Interview Progress */}
          <div className="hidden md:flex items-center gap-1">
            {interviewStages.map((stage, index) => (
              <div key={index} className="flex items-center">
                <div className={`flex items-center justify-center h-6 w-6 rounded-full text-xs 
                  ${stage.completed ? 'bg-green-500 text-white' : 
                    stage.current ? (theme === 'dark' ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white') : 
                    (theme === 'dark' ? 'bg-slate-700 text-slate-400' : 'bg-slate-200 text-slate-500')}`}>
                  {stage.completed ? <Check size={12} /> : index + 1}
                </div>
                {index < interviewStages.length - 1 && (
                  <div className={`w-4 h-px ${stage.completed ? 'bg-green-500' : (theme === 'dark' ? 'bg-slate-700' : 'bg-slate-300')}`}></div>
                )}
              </div>
            ))}
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              Live
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span className="text-sm">45:22</span>
            </div>
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2 rounded-full ${theme === 'dark' ? 'hover:bg-slate-700' : 'hover:bg-slate-200'}`}
            >
              <Settings size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Code Editor Section */}
        <div className={`w-3/5 ${theme === 'dark' ? 'border-slate-700' : 'border-slate-200'} border-r flex flex-col`}>
          {/* Code Editor Tabs */}
          <div className={`${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-200'} border-b flex items-center`}>
            <button 
              className={`px-4 py-3 text-sm font-medium flex items-center gap-2 border-b-2 ${
                activeTab === 'editor' 
                  ? (theme === 'dark' ? 'border-blue-500 text-blue-400' : 'border-blue-500 text-blue-600') 
                  : (theme === 'dark' ? 'border-transparent text-slate-400' : 'border-transparent text-slate-600')
              }`}
              onClick={() => setActiveTab('editor')}
            >
              <Code size={16} />
              Editor
            </button>
            <button 
              className={`px-4 py-3 text-sm font-medium flex items-center gap-2 border-b-2 ${
                activeTab === 'problem' 
                  ? (theme === 'dark' ? 'border-blue-500 text-blue-400' : 'border-blue-500 text-blue-600') 
                  : (theme === 'dark' ? 'border-transparent text-slate-400' : 'border-transparent text-slate-600')
              }`}
              onClick={() => setActiveTab('problem')}
            >
              <FileText size={16} />
              Problem
            </button>
            <button 
              className={`px-4 py-3 text-sm font-medium flex items-center gap-2 border-b-2 ${
                activeTab === 'notes' 
                  ? (theme === 'dark' ? 'border-blue-500 text-blue-400' : 'border-blue-500 text-blue-600') 
                  : (theme === 'dark' ? 'border-transparent text-slate-400' : 'border-transparent text-slate-600')
              }`}
              onClick={() => setActiveTab('notes')}
            >
              <Clipboard size={16} />
              Notes
            </button>
          </div>
          
          {/* Editor Toolbar */}
          <div className={`${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} border-b p-2 flex justify-between items-center`}>
            <div className="flex items-center gap-3">
              <select 
                className={`text-sm rounded px-3 py-1.5 border ${
                  theme === 'dark' 
                    ? 'bg-slate-700 border-slate-600 text-slate-200' 
                    : 'bg-white border-slate-300 text-slate-700'
                }`}
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
              >
                {languages.map(lang => (
                  <option key={lang.id} value={lang.id}>{lang.name}</option>
                ))}
              </select>
              <select 
                className={`text-sm rounded px-3 py-1.5 border ${
                  theme === 'dark' 
                    ? 'bg-slate-700 border-slate-600 text-slate-200' 
                    : 'bg-white border-slate-300 text-slate-700'
                }`}
              >
                <option>Font Size: 14px</option>
                <option>Font Size: 16px</option>
                <option>Font Size: 18px</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <button 
                className={`p-2 rounded ${theme === 'dark' ? 'hover:bg-slate-700' : 'hover:bg-slate-100'}`}
                title="Copy code"
              >
                <Copy size={16} />
              </button>
              <button 
                className={`p-2 rounded ${theme === 'dark' ? 'hover:bg-slate-700' : 'hover:bg-slate-100'}`}
                title="Download code"
              >
                <Download size={16} />
              </button>
              <button 
                className={`${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white px-3 py-1.5 rounded text-sm font-medium flex items-center gap-2`}
              >
                <Play size={14} />
                Run Code
              </button>
            </div>
          </div>
          
          {/* Code Editor Area */}
          <div className="flex-1 overflow-hidden">
            {activeTab === 'editor' && (
              <div className={`h-full ${theme === 'dark' ? 'bg-slate-900' : 'bg-slate-50'}`}>
                <textarea 
                  className={`w-full h-full p-4 font-mono text-sm outline-none resize-none ${
                    theme === 'dark' ? 'bg-slate-900 text-slate-200' : 'bg-slate-50 text-slate-800'
                  }`}
                  value={codeValue}
                  onChange={(e) => setCodeValue(e.target.value)}
                  spellCheck="false"
                />
              </div>
            )}
            
            {activeTab === 'problem' && (
              <div className={`h-full p-4 overflow-y-auto ${theme === 'dark' ? 'bg-slate-900' : 'bg-white'}`}>
                <h2 className="text-lg font-semibold mb-2">Array Manipulation Challenge</h2>
                <div className={`p-3 mb-4 text-sm rounded ${theme === 'dark' ? 'bg-slate-800' : 'bg-blue-50'}`}>
                  <div className="font-medium mb-1">Task:</div>
                  <p>Write a function that takes an array of integers and returns the maximum subarray sum.</p>
                </div>
                
                <h3 className="font-medium mb-2">Example:</h3>
                <pre className={`p-3 rounded text-sm font-mono mb-4 ${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-100'}`}>
                  Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]{'\n'}
                  Output: 6{'\n'}
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
            
            {activeTab === 'notes' && (
              <div className={`h-full p-4 ${theme === 'dark' ? 'bg-slate-900' : 'bg-white'}`}>
                <textarea 
                  className={`w-full h-full p-2 text-sm outline-none resize-none border rounded ${
                    theme === 'dark' 
                      ? 'bg-slate-800 border-slate-700 text-slate-200' 
                      : 'bg-white border-slate-300 text-slate-800'
                  }`}
                  placeholder="Take notes during your interview..."
                  spellCheck="false"
                />
              </div>
            )}
          </div>
          
          {/* Output Console (Collapsed by default) */}
          <div className={`${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-200'} border-t h-8 flex items-center px-3 cursor-pointer hover:bg-opacity-80`}>
            <div className="flex items-center gap-2 text-sm">
              <ChevronDown size={16} />
              <span>Console Output</span>
            </div>
          </div>
        </div>

        {/* Right Panel - Video Call and Chat */}
        <div className="w-2/5 flex flex-col">
          {/* Video Call Section */}
          <div className={`h-1/2 ${theme === 'dark' ? 'bg-slate-900 border-slate-700' : 'bg-slate-800 border-slate-300'} border-b flex flex-col`}>
            <div className="p-3 flex justify-between items-center">
              <div className="text-white text-sm flex items-center gap-2">
                <Video size={16} />
                <span>Video Call</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-white bg-slate-700 hover:bg-slate-600 rounded p-1.5">
                  <Share2 size={14} />
                </button>
                <button className="text-white bg-slate-700 hover:bg-slate-600 rounded p-1.5">
                  <MoreVertical size={14} />
                </button>
              </div>
            </div>
            
            <div className="flex-1 flex gap-2 p-2 relative">
              {/* Main Video (Interviewer) */}
              <div className="bg-slate-700 flex-1 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <User size={64} className="text-slate-500" />
                </div>
                <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 px-2 py-1 rounded text-white text-xs flex items-center gap-1">
                  <User size={12} />
                  <span>Interviewer</span>
                </div>
              </div>
              
              {/* Self Video (Small) */}
              <div className="absolute bottom-4 right-4 w-32 h-24 bg-slate-600 rounded-lg shadow-lg flex items-center justify-center overflow-hidden border-2 border-slate-500">
                <User size={36} className="text-slate-400" />
                <div className="absolute bottom-1 right-1">
                  {isVideoOn ? (
                    <button 
                      className="bg-black bg-opacity-60 text-white rounded-full p-1"
                      onClick={() => setIsVideoOn(false)}
                    >
                      <Video size={12} />
                    </button>
                  ) : (
                    <button 
                      className="bg-red-500 text-white rounded-full p-1"
                      onClick={() => setIsVideoOn(true)}
                    >
                      <X size={12} />
                    </button>
                  )}
                </div>
              </div>
            </div>
            
            {/* Video Controls */}
            <div className={`flex justify-center gap-3 p-3 ${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-700'}`}>
              <button 
                className={`p-2.5 rounded-full ${isMuted ? 'bg-red-500 text-white' : 'bg-slate-600 text-white hover:bg-slate-500'}`}
                onClick={() => setIsMuted(!isMuted)}
              >
                {isMuted ? <MicOff size={18} /> : <Mic size={18} />}
              </button>
              <button 
                className={`p-2.5 rounded-full ${isVideoOn ? 'bg-slate-600 text-white hover:bg-slate-500' : 'bg-red-500 text-white'}`}
                onClick={() => setIsVideoOn(!isVideoOn)}
              >
                <Video size={18} />
              </button>
              <button className="bg-slate-600 text-white hover:bg-slate-500 p-2.5 rounded-full">
                <Monitor size={18} />
              </button>
              <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full text-white text-sm font-medium">
                End Call
              </button>
            </div>
          </div>
          
          {/* Chat Section */}
          <div className="h-1/2 flex flex-col">
            <div className={`${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} border-b p-3 flex justify-between items-center`}>
              <div className="flex items-center gap-2">
                <MessageSquare size={18} />
                <span className="font-medium">Chat</span>
              </div>
              <button className={`p-1.5 rounded ${theme === 'dark' ? 'hover:bg-slate-700' : 'hover:bg-slate-100'}`}>
                <MoreVertical size={16} />
              </button>
            </div>
            
            {/* Chat Messages */}
            <div className={`flex-1 overflow-y-auto p-4 flex flex-col gap-3 ${theme === 'dark' ? 'bg-slate-900' : 'bg-white'}`}>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <User size={14} className="text-blue-600" />
                  </div>
                  <span className="text-xs font-medium">Interviewer</span>
                  <span className="text-xs text-slate-500">10:31 AM</span>
                </div>
                <div className={`${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-100'} p-2.5 rounded-lg max-w-xs`}>
                  Hello! Welcome to your technical interview. We'll start with a coding challenge about array manipulation.
                </div>
              </div>
              
              <div className="flex flex-col items-end self-end">
                <div className="flex items-center gap-2 mb-1 justify-end">
                  <span className="text-xs text-slate-500">10:32 AM</span>
                  <span className="text-xs font-medium">You</span>
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <User size={14} className="text-green-600" />
                  </div>
                </div>
                <div className={`${theme === 'dark' ? 'bg-blue-900' : 'bg-blue-100'} p-2.5 rounded-lg max-w-xs`}>
                  Thanks! I'm ready to tackle the challenge.
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <User size={14} className="text-blue-600" />
                  </div>
                  <span className="text-xs font-medium">Interviewer</span>
                  <span className="text-xs text-slate-500">10:33 AM</span>
                </div>
                <div className={`${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-100'} p-2.5 rounded-lg max-w-xs`}>
                  Great! I've shared the problem statement in the editor. Please feel free to ask any clarifying questions before you start coding.
                </div>
              </div>
              
              <div className="flex flex-col items-end self-end">
                <div className="flex items-center gap-2 mb-1 justify-end">
                  <span className="text-xs text-slate-500">10:34 AM</span>
                  <span className="text-xs font-medium">You</span>
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <User size={14} className="text-green-600" />
                  </div>
                </div>
                <div className={`${theme === 'dark' ? 'bg-blue-900' : 'bg-blue-100'} p-2.5 rounded-lg max-w-xs`}>
                  I'll start by implementing Kadane's algorithm which should give us O(n) time complexity and O(1) space as required.
                </div>
              </div>
            </div>
            
            {/* Chat Input */}
            <div className={`p-3 ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} border-t flex gap-2`}>
              <input
                type="text"
                placeholder="Type your message..."
                className={`flex-1 rounded-full px-4 py-2 text-sm border ${
                  theme === 'dark' 
                    ? 'bg-slate-700 border-slate-600 text-slate-200 placeholder-slate-400' 
                    : 'bg-white border-slate-300 text-slate-800 placeholder-slate-400'
                }`}
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
              />
              <button className={`${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white p-2 rounded-full`}>
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}