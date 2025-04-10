"use client";
import { useState, useEffect } from 'react';

export default function StaticCode() {
  const [isTyping, setIsTyping] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [output, setOutput] = useState('');

  const codeLines = [
    { num: 1, text: 'function EZ_CodE() {' },
    { num: 2, text: '  console.log(\'Hello World..!\');' },
    { num: 3, text: '}' },
    { num: 4, text: '' },
    { num: 5, text: 'EZ_CodE();' }
  ];


  // Animation for typing effect on page load
  useEffect(() => {
    setIsTyping(true);

    const typingInterval = setInterval(() => {
      if (textIndex < codeLines.length) {
        setTextIndex(textIndex + 1);
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
        // Auto-run the code after typing animation completes
        setTimeout(runCode, 800);
      }
    }, 300);

    return () => clearInterval(typingInterval);
  }, [textIndex]);

  // Run code with animation
  const runCode = () => {
    setOutput('');

    // Simulate code execution with typing effect
    let result = '';
    const finalOutput = 'Hello World..!';
    let i = 0;

    const typingInterval = setInterval(() => {
      if (i < finalOutput.length) {
        result += finalOutput.charAt(i);
        setOutput(result);
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
  };

  return (
    <div className="relative z-10 p-0 m-0">
      {/* Glass container with backdrop filter */}
      <div className="overflow-hidden rounded-xl shadow-2xl backdrop-blur-md bg-blue-900/80 border-2 border-blue-700/50 transform  transition-all duration-300">
        {/* Editor header with circles */}
        <div className="px-4 py-3 flex items-center border-b border-blue-700/30 bg-blue-950/80">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <div className="ml-4 text-blue-200 text-sm opacity-100 animate-fadeIn flex items-center">
            <span className="mr-2">code-editor.js</span>
            <span className="text-xs px-2 py-1 rounded-md bg-blue-600/40 text-blue-100">JavaScript</span>
          </div>
        </div>

        {/* Code area */}
        <div className="p-5 font-mono text-sm border-b border-blue-700/30 bg-gradient-to-r from-blue-950/90 to-blue-900/80">
          <pre className="text-blue-100">
            {codeLines.map((line, index) => (
              <div
                key={line.num}
                className={`flex ${index < textIndex ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <span className="w-8 text-blue-400 select-none">{line.num}</span>
                {line.text.split(' ').map((word, wordIndex) => {
                  // Apply different colors to different types of code elements
                  let wordClass = "text-blue-100";

                  if (word === 'function') wordClass = "text-yellow-300";
                  else if (word === 'EZ_CodE' || word === 'EZ_CodE();') wordClass = "text-cyan-300";
                  else if (word.includes('console')) wordClass = "text-purple-300";
                  else if (word.includes('log')) wordClass = "text-pink-300";
                  else if (word.includes('\'Hello')) wordClass = "text-green-300";
                  else if (word.includes('{') || word.includes('}')) wordClass = "text-orange-300";

                  return (
                    <span key={wordIndex} className={`${wordClass} ml-1`}>
                      {word}
                    </span>
                  );
                })}
              </div>
            ))}
          </pre>
        </div>

        {/* Output area */}
        <div className="bg-blue-950/90 p-4 border-t border-blue-700/30">
          <div className="flex items-center mb-2">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2 animate-ping" style={{ animationDuration: '1.5s' }}></div>
            <span className="text-blue-300 text-xs font-medium">Console Output</span>
          </div>
          <div className="font-mono text-green-400 min-h-8 border-l-2 border-blue-500 pl-3">
            {output ? (
              <span className="animate-fadeIn">{output}</span>
            ) : (
              <span className="text-blue-400 text-opacity-50">&gt; _</span>
            )}
          </div>
        </div>
      </div>

      {/* Floating element as per your request */}
      <div className="absolute -bottom-12 -left-12 bg-blue-900 rounded-lg shadow-lg p-4 transform -rotate-3 hidden md:block">
        <div className="flex items-center">
          <div className="text-blue-300 mr-2">
            {/* Simple code icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
          <span className="text-blue-100 font-mono">
            EZ-CodE.compile();
          </span>
        </div>
      </div>

      {/* Add subtle glow behind the editor */}
      <div className="absolute -z-10 inset-0 bg-gradient-to-br from-blue-700/20 to-indigo-900/30 blur-3xl transform scale-110"></div>
    </div>
  );
}