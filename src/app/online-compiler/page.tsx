'use client';
import React, { useState } from 'react';
import Head from 'next/head';
import { Code, Share, Save, PlayCircle, Download, Settings, Users, Clock, Bookmark, Layers } from 'lucide-react';
import Navbar from '@/layouts/components/Navbar';
import Footer from '@/layouts/components/Footer';

export default function OnlineCodeEditorPage() {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [sessionId, setSessionId] = useState('');
  const [isSessionCreated, setIsSessionCreated] = useState(false);
  
  const languages = [
    { id: 'javascript', name: 'JavaScript' },
    { id: 'python', name: 'Python' },
    { id: 'java', name: 'Java' },
    { id: 'cpp', name: 'C++' },
    { id: 'ruby', name: 'Ruby' },
    { id: 'go', name: 'Go' },
    { id: 'rust', name: 'Rust' },
    { id: 'php', name: 'PHP' },
    { id: 'csharp', name: 'C#' },
    { id: 'typescript', name: 'TypeScript' }
  ];

  const createSession = () => {
    const newSessionId = Math.random().toString(36).substring(2, 10).toUpperCase();
    setSessionId(newSessionId);
    setIsSessionCreated(true);
  };

  const copySessionLink = () => {
    navigator.clipboard.writeText(`https://yourcodingplatform.com/editor/${sessionId}`);
    // In a production environment, you would add a toast notification here
  };

  return (
    <>
      <Head>
        <title>Online Code Editor | CodeCollab</title>
        <meta name="description" content="Write, run, and share code in 30+ programming languages with our powerful online code editor. Perfect for learning, interviews, and collaboration." />
        <meta name="keywords" content="online code editor, collaborative coding, IDE, programming, code sharing, live coding" />
        <link rel="canonical" href="https://yourwebsite.com/editor" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <Navbar />

        {/* Hero Section */}
        <main>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                <div>
                  <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">
                    Code Anywhere. <br/> Collaborate Everywhere.
                  </h1>
                  <p className="mt-6 text-xl max-w-3xl">
                    A powerful online code editor supporting 30+ programming languages with real-time collaboration, code execution, and easy sharing.
                  </p>
                  <div className="mt-10 sm:flex">
                    <div className="rounded-md shadow">
                      <button
                        onClick={createSession}
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
                      >
                        Start Coding Now
                      </button>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a
                        href="#features"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-white text-white hover:bg-blue-500 md:py-4 md:text-lg md:px-10"
                      >
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
                      <div className="text-gray-300 text-sm ml-2">code-editor.js</div>
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

          {/* Session Creation Section */}
          {isSessionCreated && (
            <div className="bg-white border-b">
              <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
                  <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="flex items-center mb-4 sm:mb-0">
                      <span className="text-blue-700 mr-3">
                        <Share size={20} />
                      </span>
                      <div>
                        <h3 className="text-sm font-medium text-blue-800">Your Coding Session</h3>
                        <p className="text-blue-700 font-mono">{sessionId}</p>
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <button 
                        onClick={copySessionLink}
                        className="py-2 px-4 border border-blue-300 rounded-md text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-sm"
                      >
                        Copy Link
                      </button>
                      <button 
                        className="py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-sm"
                      >
                        Enter Session
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Language Selection */}
          <div className="bg-white py-8 border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Programming Language</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {languages.map((lang) => (
                  <button
                    key={lang.id}
                    onClick={() => setSelectedLanguage(lang.id)}
                    className={`p-4 rounded-lg flex flex-col items-center justify-center transition-all ${
                      selectedLanguage === lang.id
                        ? 'bg-blue-100 border-2 border-blue-500 text-blue-700'
                        : 'bg-gray-50 border border-gray-200 hover:border-blue-300 text-gray-700'
                    }`}
                  >
                    <Code size={24} className={selectedLanguage === lang.id ? 'text-blue-600' : 'text-gray-500'} />
                    <span className="mt-2 text-sm font-medium">{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div id="features" className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Packed with Powerful Features
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                  Everything you need for coding, learning, interviewing, and collaborating.
                </p>
              </div>

              <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="p-2 bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <Code className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">30+ Programming Languages</h3>
                    <p className="mt-2 text-gray-500">
                      From JavaScript to Python, C++ to Rust. We support all major programming languages with syntax highlighting.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="p-2 bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">Real-time Collaboration</h3>
                    <p className="mt-2 text-gray-500">
                      Code together with your team in real-time. See changes as they happen with multiple cursors and chat.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="p-2 bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <PlayCircle className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">Code Execution</h3>
                    <p className="mt-2 text-gray-500">
                      Run your code instantly in the browser with our secure execution environment. See results immediately.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="p-2 bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <Save className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">Auto-Save & Versioning</h3>
                    <p className="mt-2 text-gray-500">
                      Never lose your work with automatic saving and full version history to revert to previous states.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="p-2 bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <Settings className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">Customizable Environment</h3>
                    <p className="mt-2 text-gray-500">
                      Configure your editor with themes, keybindings, and settings that match your preferences.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="p-2 bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <Download className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">Share & Export</h3>
                    <p className="mt-2 text-gray-500">
                      Share your code with a simple link or export it in multiple formats for use in other environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Perfect for Every Coding Need
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                  From learning to teaching, interviews to production code, our editor adapts to your requirements.
                </p>
              </div>

              <div className="mt-16">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-8">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Users className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="ml-3 text-xl font-medium text-gray-900">Technical Interviews</h3>
                      </div>
                      <p className="text-gray-500 mb-6">
                        Conduct seamless technical interviews with our collaborative editor. Test candidates' skills in real-time with a professional environment that mimics real development.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="ml-2 text-gray-600">Shared code view for interviewer and candidate</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="ml-2 text-gray-600">Execute code to verify solutions</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="ml-2 text-gray-600">Save sessions for team review</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-8">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Layers className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="ml-3 text-xl font-medium text-gray-900">Learning & Teaching</h3>
                      </div>
                      <p className="text-gray-500 mb-6">
                        Create an interactive learning environment for students and learners. Perfect for classrooms, tutorials and coding education.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="ml-2 text-gray-600">Interactive code demonstrations</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="ml-2 text-gray-600">Real-time feedback and assistance</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="ml-2 text-gray-600">Share example code libraries</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-8">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Clock className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="ml-3 text-xl font-medium text-gray-900">Quick Prototyping</h3>
                      </div>
                      <p className="text-gray-500 mb-6">
                        Test ideas rapidly without setting up a local environment. Perfect for quick algorithm testing, API exploration, or concept validation.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="ml-2 text-gray-600">Instant setup for all languages</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="ml-2 text-gray-600">Common libraries pre-loaded</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="ml-2 text-gray-600">Save and organize your snippets</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-8">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Bookmark className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="ml-3 text-xl font-medium text-gray-900">Code Challenges</h3>
                      </div>
                      <p className="text-gray-500 mb-6">
                        Create and participate in coding challenges with automated testing and leaderboards. Perfect for competitions and skill assessment.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="ml-2 text-gray-600">Built-in test frameworks</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="ml-2 text-gray-600">Performance metrics tracking</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="ml-2 text-gray-600">Customizable challenge templates</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-center text-gray-900">
                What Our Users Say
              </h2>
              <div className="mt-12 grid gap-8 md:grid-cols-3">
                <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-gray-300"></div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Sarah J.</h4>
                      <p className="text-sm text-gray-500">Frontend Developer</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    "This is the best online editor I've used for technical interviews. The real-time collaboration makes it easy to discuss code with candidates."
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-gray-300"></div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Michael T.</h4>
                      <p className="text-sm text-gray-500">Coding Instructor</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    "I use this platform daily with my students. The ability to see their code in real-time and provide immediate feedback has transformed my teaching."
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-gray-300"></div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Alex P.</h4>
                      <p className="text-sm text-gray-500">Software Engineer</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    "The feature set is incredible. I can prototype ideas quickly without setting up a local environment and share working examples with my team instantly."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-700">
            <div className="max-w-3xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-white text-center">
                Ready to Start Coding?
              </h2>
              <p className="mt-4 text-lg leading-6 text-blue-100 text-center">
                Try our online code editor now. No installation or setup required.
              </p>
              <div className="mt-8 flex justify-center">
                <div className="inline-flex rounded-md shadow">
                  <button
                    onClick={createSession}
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
                  >
                    <Code className="mr-2 h-5 w-5" />
                    Launch Editor
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );  
} 
