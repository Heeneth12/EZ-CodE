'use client';
import React, { useState } from 'react';
import { Mic, MicOff, Video, VideoOff, Send, Users, MessageSquare, 
  Clock, Code, Book, Settings, Download, Copy, Play, ChevronLeft, ChevronRight, 
  Maximize, HelpCircle, Flag, ThumbsUp } from 'lucide-react';

const TechInterviewPage = () => {
  const [isMicOn, setIsMicOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [currentTab, setCurrentTab] = useState('code'); // 'code', 'chat', 'participants'
  const [language, setLanguage] = useState('javascript');
  const [theme, setTheme] = useState('vs-dark');
  const [isEditorExpanded, setIsEditorExpanded] = useState(false);
  const [isTaskPanelOpen, setIsTaskPanelOpen] = useState(true);
  const [chatMessage, setChatMessage] = useState('');
  const [consoleTab, setConsoleTab] = useState('console'); // 'console', 'tests', 'preview'
  
  // Sample interview data
  const interviewData = {
    title: "Frontend Developer Interview",
    candidate: "Alex Johnson",
    interviewers: ["Sarah Tech Lead", "Mike HR"],
    duration: "45 minutes",
    question: "Implement a responsive navigation menu using React hooks",
    difficulty: "Medium",
    timeRemaining: "32:45"
  };

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      // Here you would normally add the message to your chat state
      console.log('Sending message:', chatMessage);
      setChatMessage('');
    }
  };

  const handleKeyPress = (e:any) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 font-sans text-gray-900">
      {/* Header - Simplified */}
      <header className="bg-white shadow-sm px-6 py-3 flex justify-between items-center border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-600 rounded-md text-white">
            <Code size={20} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold text-gray-900">{interviewData.title}</h1>
              <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                {interviewData.difficulty}
              </span>
            </div>
            <div className="flex items-center gap-3 mt-0.5 text-xs text-gray-500">
              <span className="inline-flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                {interviewData.candidate}
              </span>
              <span>{interviewData.interviewers.join(', ')}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-md">
            <Clock size={14} />
            <span className="text-sm font-medium">{interviewData.timeRemaining}</span>
          </div>
          <button className="text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 p-1.5 rounded-full transition-colors">
            <Settings size={16} />
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors">
            End Interview
          </button>
        </div>
      </header>

      {/* Main content area */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Video thumbnails - Floating and less obtrusive */}
        <div className="absolute top-3 right-3 z-20 flex gap-2">
          <div className="w-32 h-18 bg-gray-800 rounded-md overflow-hidden shadow-md relative group">
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="flex gap-1">
                <button className="p-1 bg-gray-900 bg-opacity-70 rounded text-white hover:bg-opacity-90">
                  <Mic size={12} />
                </button>
                <button className="p-1 bg-gray-900 bg-opacity-70 rounded text-white hover:bg-opacity-90">
                  <Video size={12} />
                </button>
              </div>
            </div>
            <div className="absolute bottom-1 left-1 bg-black bg-opacity-60 px-1.5 py-0.5 rounded text-xs text-white">You</div>
          </div>
          <div className="w-32 h-18 bg-gray-800 rounded-md overflow-hidden shadow-md relative">
            <div className="absolute bottom-1 left-1 bg-black bg-opacity-60 px-1.5 py-0.5 rounded text-xs text-white">Sarah</div>
          </div>
          <div className="w-32 h-18 bg-gray-800 rounded-md overflow-hidden shadow-md relative">
            <div className="absolute bottom-1 left-1 bg-black bg-opacity-60 px-1.5 py-0.5 rounded text-xs text-white">Mike</div>
          </div>
        </div>

        {/* Main workspace */}
        <div className="flex flex-1 overflow-hidden">
          {/* Task panel - More compact and cleaner */}
          {isTaskPanelOpen && (
            <div className="w-72 bg-white border-r border-gray-200 flex flex-col overflow-hidden">
              <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                <h2 className="font-medium text-gray-900">Task Details</h2>
                <button 
                  onClick={() => setIsTaskPanelOpen(false)}
                  className="text-gray-400 hover:text-gray-600 p-1 rounded hover:bg-gray-100"
                >
                  <ChevronLeft size={16} />
                </button>
              </div>
              
              <div className="overflow-y-auto flex-1">
                <div className="p-4 space-y-4">
                  <div>
                    <h3 className="text-xs uppercase text-gray-500 font-medium mb-2">Problem</h3>
                    <div className="bg-gray-50 p-3 rounded-md text-sm border border-gray-100">
                      {interviewData.question}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xs uppercase text-gray-500 font-medium mb-2">Requirements</h3>
                    <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1.5">
                      <li>Use React hooks for state management</li>
                      <li>Make sure the menu is responsive on mobile</li>
                      <li>Consider accessibility features</li>
                      <li>Add smooth transitions for better UX</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xs uppercase text-gray-500 font-medium mb-2">Evaluation Criteria</h3>
                    <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1.5">
                      <li>Code quality and organization</li>
                      <li>Responsive design implementation</li>
                      <li>Proper use of React hooks</li>
                      <li>Handling of edge cases</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xs uppercase text-gray-500 font-medium mb-2">Resources</h3>
                    <div className="space-y-1.5">
                      <a href="#" className="flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 hover:underline">
                        <Book size={12} />
                        <span>React Hooks Documentation</span>
                      </a>
                      <a href="#" className="flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 hover:underline">
                        <Book size={12} />
                        <span>Responsive Design Best Practices</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border-t border-gray-100 mt-auto">
                <h3 className="text-xs uppercase text-gray-500 font-medium mb-2">Interviewer Notes</h3>
                <div className="bg-yellow-50 p-3 rounded-md text-sm border border-yellow-100">
                  <p className="text-gray-700">Candidate has strong React experience but might need guidance on accessibility implementation.</p>
                </div>
              </div>
            </div>
          )}

          {/* Code editor panel - Better spacing and organization */}
          <div className={`flex-1 flex flex-col overflow-hidden ${isEditorExpanded ? 'w-full' : ''}`}>
            {/* Editor actions toolbar */}
            <div className="bg-gray-800 text-gray-200 px-3 py-1.5 flex items-center justify-between border-b border-gray-700">
              <div className="flex items-center gap-2">
                {!isTaskPanelOpen && (
                  <button 
                    onClick={() => setIsTaskPanelOpen(true)}
                    className="text-gray-400 hover:text-white p-1 rounded hover:bg-gray-700"
                  >
                    <ChevronRight size={16} />
                  </button>
                )}
                <select 
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-gray-700 text-gray-200 px-2 py-1 rounded text-sm border border-gray-600"
                >
                  <option value="javascript">JavaScript / React</option>
                  <option value="typescript">TypeScript</option>
                  <option value="python">Python</option>
                  <option value="java">Java</option>
                  <option value="cpp">C++</option>
                </select>
                <select
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  className="bg-gray-700 text-gray-200 px-2 py-1 rounded text-sm border border-gray-600"
                >
                  <option value="vs-dark">Dark Theme</option>
                  <option value="vs-light">Light Theme</option>
                  <option value="github">GitHub</option>
                </select>
                <div className="flex items-center gap-1 ml-2">
                  <button className="p-1 text-gray-400 hover:text-white rounded hover:bg-gray-700" title="Copy code">
                    <Copy size={14} />
                  </button>
                  <button className="p-1 text-gray-400 hover:text-white rounded hover:bg-gray-700" title="Download code">
                    <Download size={14} />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsEditorExpanded(!isEditorExpanded)}
                  className="p-1 text-gray-400 hover:text-white rounded hover:bg-gray-700"
                  title={isEditorExpanded ? "Exit fullscreen" : "Fullscreen editor"}
                >
                  <Maximize size={14} />
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-2.5 py-1 rounded text-sm flex items-center gap-1 transition-colors">
                  <Play size={12} />
                  <span>Run Code</span>
                </button>
              </div>
            </div>

            {/* Editor with line numbers */}
            <div className="flex-1 bg-gray-900 overflow-auto">
              <div className="flex">
                <div className="text-right pr-2 pt-4 pb-4 bg-gray-850 w-10 select-none">
                  {Array.from({ length: 20 }, (_, i) => (
                    <div key={i} className="text-xs text-gray-500 leading-5 h-5">{i + 1}</div>
                  ))}
                </div>
                <div className="pt-4 pb-4 font-mono text-sm text-gray-300 w-full">
                  <pre className="leading-5">{`// ${interviewData.question}
import React, { useState, useEffect } from 'react';

function ResponsiveNavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const isMobile = windowWidth < 768;
  
  return (
    <nav className="responsive-nav" aria-label="Main Navigation">
      <div className="nav-brand">
        <a href="/">Brand Logo</a>
      </div>
      
      {isMobile ? (
        <button 
          className="nav-toggle" 
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="navigation-menu"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      ) : null}
      
      <ul 
        id="navigation-menu"
        className={\`nav-items \${isMobile && !isOpen ? 'hidden' : 'visible'}\`}
      >
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default ResponsiveNavMenu;
`}</pre>
                </div>
              </div>
            </div>

            {/* Editor bottom panel with tabs - Better organized */}
            <div className="h-1/4 min-h-32 bg-gray-800 border-t border-gray-700 flex flex-col">
              <div className="flex bg-gray-850">
                <button 
                  onClick={() => setConsoleTab('console')}
                  className={`px-4 py-1.5 text-sm font-medium transition-colors ${consoleTab === 'console' ? 'text-white border-t-2 border-blue-500 bg-gray-750' : 'text-gray-400 hover:text-white'}`}
                >
                  Console
                </button>
                <button 
                  onClick={() => setConsoleTab('tests')}
                  className={`px-4 py-1.5 text-sm font-medium transition-colors ${consoleTab === 'tests' ? 'text-white border-t-2 border-blue-500 bg-gray-750' : 'text-gray-400 hover:text-white'}`}
                >
                  Tests
                </button>
                <button 
                  onClick={() => setConsoleTab('preview')}
                  className={`px-4 py-1.5 text-sm font-medium transition-colors ${consoleTab === 'preview' ? 'text-white border-t-2 border-blue-500 bg-gray-750' : 'text-gray-400 hover:text-white'}`}
                >
                  Preview
                </button>
              </div>
              <div className="flex-1 p-3 text-gray-300 font-mono text-sm overflow-auto">
                {consoleTab === 'console' && (
                  <>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-green-400 font-medium">Compilation successful</span>
                    </div>
                    <div className="text-gray-400 ml-4 text-xs">{'>'} Running React component...</div>
                    <div className="text-gray-400 ml-4 text-xs">{'>'} No errors found in the code.</div>
                    <div className="text-white ml-4 text-xs">{'>'} Component rendered successfully.</div>
                    <div className="text-yellow-400 ml-4 text-xs">{'>'} Warning: Consider adding keyboard navigation for better accessibility.</div>
                    <div className="text-gray-400 ml-4 mt-2 text-xs">{'>'} Ready for input...</div>
                  </>
                )}
                {consoleTab === 'tests' && (
                  <div className="text-xs">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-green-400">2 tests passed</span>
                    </div>
                    <div className="bg-gray-750 p-2 rounded mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Should render menu items correctly</span>
                      </div>
                      <div className="ml-4 text-gray-400">Time: 15ms</div>
                    </div>
                    <div className="bg-gray-750 p-2 rounded">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Should toggle menu visibility on mobile</span>
                      </div>
                      <div className="ml-4 text-gray-400">Time: 23ms</div>
                    </div>
                  </div>
                )}
                {consoleTab === 'preview' && (
                  <div className="flex items-center justify-center h-full text-gray-500">
                    <p>Component preview will appear here after running code</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right panel - Communication - Cleaner and more modern */}
          <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
            {/* Tabs */}
            <div className="flex border-b border-gray-200">
              <button 
                className={`flex-1 py-2.5 text-sm font-medium transition-colors ${currentTab === 'chat' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setCurrentTab('chat')}
              >
                <div className="flex items-center justify-center gap-1.5">
                  <MessageSquare size={14} />
                  <span>Chat</span>
                </div>
              </button>
              <button 
                className={`flex-1 py-2.5 text-sm font-medium transition-colors ${currentTab === 'participants' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setCurrentTab('participants')}
              >
                <div className="flex items-center justify-center gap-1.5">
                  <Users size={14} />
                  <span>Participants</span>
                </div>
              </button>
            </div>

            {/* Tab content */}
            <div className="flex-1 overflow-hidden flex flex-col">
              {currentTab === 'chat' && (
                <>
                  <div className="flex-1 p-3 space-y-3 overflow-y-auto">
                    <div className="flex items-center justify-center">
                      <div className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                        Interview started at 2:15 PM
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <div className="flex-shrink-0 w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center text-white font-medium text-xs">
                        ST
                      </div>
                      <div className="bg-gray-100 p-2 rounded-lg rounded-tl-none max-w-xs">
                        <p className="text-xs text-gray-500 mb-0.5">Sarah Tech Lead</p>
                        <p className="text-sm">Hi Alex, welcome to the interview. Could you explain your approach to this responsive menu problem?</p>
                        <p className="text-xs text-gray-400 mt-1 text-right">2:17 PM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2 justify-end">
                      <div className="bg-blue-50 p-2 rounded-lg rounded-tr-none max-w-xs">
                        <p className="text-xs text-blue-700 mb-0.5">You</p>
                        <p className="text-sm">Thanks Sarah! I'm using useState hook to toggle the menu visibility and adding a useEffect hook to handle responsive behavior based on window resizing.</p>
                        <p className="text-xs text-gray-400 mt-1 text-right">2:18 PM</p>
                      </div>
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium text-xs">
                        AJ
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <div className="flex-shrink-0 w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center text-white font-medium text-xs">
                        MH
                      </div>
                      <div className="bg-gray-100 p-2 rounded-lg rounded-tl-none max-w-xs">
                        <p className="text-xs text-gray-500 mb-0.5">Mike HR</p>
                        <p className="text-sm">Great! I like that you're considering accessibility too. How would you handle keyboard navigation?</p>
                        <p className="text-xs text-gray-400 mt-1 text-right">2:20 PM</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 p-3">
                    <div className="relative">
                      <textarea
                        value={chatMessage}
                        onChange={(e) => setChatMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type a message..."
                        rows={2}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none pr-10"
                      />
                      <button 
                        onClick={handleSendMessage}
                        className="absolute right-2 bottom-2 text-blue-600 hover:text-blue-700 p-1 rounded-full hover:bg-blue-50"
                      >
                        <Send size={16} />
                      </button>
                    </div>
                  </div>
                </>
              )}
              
              {currentTab === 'participants' && (
                <div className="p-3 overflow-y-auto">
                  <h3 className="font-medium text-gray-900 mb-3 flex items-center justify-between">
                    <span>Participants</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">3</span>
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium text-xs">
                          AJ
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{interviewData.candidate}</p>
                          <p className="text-xs text-gray-500 flex items-center gap-1">
                            <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                            Candidate
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <button className="p-1 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded">
                          <Mic size={14} />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded">
                          <Video size={14} />
                        </button>
                      </div>
                    </li>
                    
                    {interviewData.interviewers.map((interviewer, index) => (
                      <li key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white font-medium text-xs">
                            {interviewer.split(' ')[0][0]}{interviewer.split(' ')[1][0]}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{interviewer}</p>
                            <p className="text-xs text-gray-500 flex items-center gap-1">
                              <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                              Interviewer
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          <button className="p-1 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded">
                            <Mic size={14} />
                          </button>
                          <button className="p-1 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded">
                            <Video size={14} />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h3 className="font-medium text-gray-900 mb-2 text-sm">Interview Actions</h3>
                    <div className="space-y-2">
                      <button className="w-full flex items-center justify-center gap-2 p-1.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md text-sm font-medium transition-colors">
                        <Flag size={14} />
                        <span>Flag for review</span>
                      </button>
                      <button className="w-full flex items-center justify-center gap-2 p-1.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md text-sm font-medium transition-colors">
                        <ThumbsUp size={14} />
                        <span>Provide feedback</span>
                      </button>
                      <button className="w-full flex items-center justify-center gap-2 p-1.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md text-sm font-medium transition-colors">
                        <HelpCircle size={14} />
                        <span>Request assistance</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Controls - More compact and visually clean */}
      <footer className="bg-gray-900 text-white px-4 py-2 border-t border-gray-800">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <button 
              className={`p-1.5 rounded-full transition-colors ${isMicOn ? 'bg-gray-700 hover:bg-gray-600' : 'bg-red-600 hover:bg-red-700'}`}
              onClick={() => setIsMicOn(!isMicOn)}
              title={isMicOn ? "Mute microphone" : "Unmute microphone"}
            >
              {isMicOn ? <Mic size={16} /> : <MicOff size={16} />}
            </button>
            <button 
              className={`p-1.5 rounded-full transition-colors ${isVideoOn ? 'bg-gray-700 hover:bg-gray-600' : 'bg-red-600 hover:bg-red-700'}`}
              onClick={() => setIsVideoOn(!isVideoOn)}
              title={isVideoOn ? "Turn off camera" : "Turn on camera"}
            >
              {isVideoOn ? <Video size={16} /> : <VideoOff size={16} />}
            </button>
            <div className="w-px h-6 bg-gray-700 mx-1"></div>
            <button className="p-1.5 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors" title="Share screen"></button>
            <button className="p-1.5 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors" title="Share code"></button>
            <button className="p-1.5 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors" title="Record interview"></button>
            <button className="p-1.5 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors" title="Download recording"></button>
            <button className="p-1.5 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors" title="Help"></button>
            </div>
            <div className="flex gap-2">
                <button className="p-1.5 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors" title="Settings"></button>
                <button className="p-1.5 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors" title="Help"></button>
                <button className="p-1.5 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors" title="Feedback"></button>
            </div>
        </div>
       </footer>   
      </div>
    );
  };
  
  export default TechInterviewPage;