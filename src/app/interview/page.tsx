'use client';
import React, { useState } from 'react';
import Head from 'next/head';
import { Calendar, Code, Users, Video, Copy, Info } from 'lucide-react';
import Navbar from '@/layouts/components/Header';

export default function TechInterviewPage() {
  const [roomCode, setRoomCode] = useState('');
  const [isRoomCreated, setIsRoomCreated] = useState(false);

  const generateRoomCode = () => {
    const newCode ="adsdsadsad"
    setRoomCode(newCode);
    setIsRoomCreated(true);
  };

  const copyRoomCode = () => {
    navigator.clipboard.writeText(roomCode);
    // In a production environment, you would add a toast notification here
  };

  return (
    <>
      <Head>
        <title>Create Technical Interview Room | CodeInterview</title>
        <meta name="description" content="Create a virtual room for technical coding interviews with real-time code editor, video conferencing, and collaborative tools." />
        <meta name="keywords" content="technical interview, coding interview, remote interview, code assessment, interview platform" />
        <link rel="canonical" href="https://yourwebsite.com/interview" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <Navbar/>

        {/* Hero Section */}
        <main>
          <div className='bg-gradient-to-r from-blue-600 to-indigo-700 text-white'>
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div>
                <h2 className="text-4xl font-extrabold  sm:text-5xl sm:tracking-tight lg:text-6xl">
                  Create Your Technical Interview Room
                </h2>
                <p className="mt-6 text-xl max-w-3xl">
                  Set up a collaborative environment for conducting technical interviews with real-time code editing, execution, and video conferencing.
                </p>
                
                <div className="mt-8 bg-white shadow rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Create Interview Room</h3>
                  {!isRoomCreated ? (
                    <button 
                      onClick={generateRoomCode}
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Generate Room
                    </button>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                        <span className="font-mono text-lg">{roomCode}</span>
                        <button 
                          onClick={copyRoomCode}
                          className="p-2 text-gray-500 hover:text-gray-700"
                          aria-label="Copy room code"
                        >
                          <Copy size={20} />
                        </button>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <button className="py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none">
                          Start Interview
                        </button>
                        <button className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
                          Schedule For Later
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-12 lg:mt-0">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src="/api/placeholder/600/400" 
                    alt="Interview Platform Preview" 
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          </div>
          

          {/* Features Section */}
          <div id="features" className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
                Platform Features
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-blue-600 mb-4">
                    <Code size={32} />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">Real-time Code Editor</h3>
                  <p className="mt-2 text-gray-500">
                    Write and execute code in over 30 programming languages with syntax highlighting and auto-completion.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-blue-600 mb-4">
                    <Video size={32} />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">Video Conferencing</h3>
                  <p className="mt-2 text-gray-500">
                    Built-in video chat enables seamless communication during the interview process.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-blue-600 mb-4">
                    <Users size={32} />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">Collaborative Environment</h3>
                  <p className="mt-2 text-gray-500">
                    Multiple interviewers can join and collaborate in real-time with drawing tools and notes.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-blue-600 mb-4">
                    <Calendar size={32} />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">Scheduling & Recording</h3>
                  <p className="mt-2 text-gray-500">
                    Schedule interviews in advance and record sessions for later review with your team.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-blue-600 mb-4">
                    <Info size={32} />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">Assessment Tools</h3>
                  <p className="mt-2 text-gray-500">
                    Built-in scoring rubrics and feedback forms to standardize your evaluation process.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works Section */}
          <div id="how-it-works" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
                How It Works
              </h2>
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                    <div className="bg-white p-4 rounded-full inline-block mb-4">
                      <span className="text-2xl font-bold text-blue-600">1</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Create a Room</h3>
                    <p className="text-gray-500">
                      Generate a unique room code for your interview session that candidates can use to join.
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    <div className="bg-white rounded-lg shadow p-6">
                      <img 
                        src="/api/placeholder/500/300" 
                        alt="Create Room Step" 
                        className="w-full rounded"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row-reverse items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pl-8">
                    <div className="bg-white p-4 rounded-full inline-block mb-4">
                      <span className="text-2xl font-bold text-blue-600">2</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Share with Candidates</h3>
                    <p className="text-gray-500">
                      Send the room code or link to your candidates through email or your preferred communication channel.
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    <div className="bg-white rounded-lg shadow p-6">
                      <img 
                        src="/api/placeholder/500/300" 
                        alt="Share Room Step" 
                        className="w-full rounded"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                    <div className="bg-white p-4 rounded-full inline-block mb-4">
                      <span className="text-2xl font-bold text-blue-600">3</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Conduct the Interview</h3>
                    <p className="text-gray-500">
                      Use our real-time code editor, video conferencing, and assessment tools to evaluate candidates effectively.
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    <div className="bg-white rounded-lg shadow p-6">
                      <img 
                        src="/api/placeholder/500/300" 
                        alt="Interview Step" 
                        className="w-full rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div id="faq" className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
                Frequently Asked Questions
              </h2>
              <div className="max-w-3xl mx-auto divide-y divide-gray-200">
                <div className="py-6">
                  <h3 className="text-lg font-medium text-gray-900">How many people can join an interview room?</h3>
                  <p className="mt-2 text-gray-500">
                    Each room can accommodate up to 5 participants - typically one candidate and up to 4 interviewers.
                  </p>
                </div>
                <div className="py-6">
                  <h3 className="text-lg font-medium text-gray-900">What programming languages are supported?</h3>
                  <p className="mt-2 text-gray-500">
                    Our platform supports over 30 programming languages including JavaScript, Python, Java, C++, Ruby, and more.
                  </p>
                </div>
                <div className="py-6">
                  <h3 className="text-lg font-medium text-gray-900">Can I save interview sessions for later review?</h3>
                  <p className="mt-2 text-gray-500">
                    Yes, all sessions can be recorded and code submissions are saved automatically for your team to review later.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
              <div className="flex space-x-6 md:order-2">
                <p className="text-gray-400 text-sm">© 2025 CodeInterview. All rights reserved.</p>
              </div>
              <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
                The ultimate platform for technical interviews.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}