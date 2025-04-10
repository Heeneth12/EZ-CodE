import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Code, Moon, Sun, Share2, Save, Play, ChevronDown } from 'lucide-react';

export default function Header() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = () => {
      setIsDropdownOpen(false);
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header className="bg-gray-900 border-b border-gray-700 text-white z-10">
      {/* Main header */}
      <div className="flex items-center justify-between px-6 py-10 h-14">
        {/* Logo and mobile menu toggle */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-1.5 rounded">
              <Code className="h-5 w-5 text-white" />
            </div>
            <span className="ml-2 text-lg font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">CodeSpace</span>
          </Link>
        </div>
        
        {/* File info - Center */}
        {/* <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center">
          <button className="flex items-center space-x-2 p-1.5 rounded-md hover:bg-gray-800">
            <div className="flex items-center">
              <span className="font-mono text-sm text-gray-300">{fileName}</span>
              {isEdited && <span className="ml-1 text-xs text-gray-400">•</span>}
            </div>
            <ChevronDown size={16} className="text-gray-500" />
          </button>
        </div> */}
        
        {/* Action buttons */}
        <div className="flex items-center space-x-1 md:space-x-3">
          {/* Run button */}
          <button className="hidden md:flex items-center text-xs px-3 py-1.5 rounded bg-indigo-600 hover:bg-indigo-700 transition-colors">
            <Play size={14} className="mr-1" />
            Run
          </button>
          <button className="p-1.5 text-gray-400 hover:text-white rounded-md hover:bg-gray-800">
            <Save size={18} />
          </button>
          
          <button className="p-1.5 text-gray-400 hover:text-white rounded-md hover:bg-gray-800">
            <Share2 size={18} />
          </button>
          
          <button 
            className="p-1.5 text-gray-400 hover:text-white rounded-md hover:bg-gray-800"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          {/* User dropdown */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button 
              className="flex items-center space-x-2 pl-1.5 pr-0.5 py-1 rounded-md hover:bg-gray-800"
              onClick={toggleDropdown}
            >
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xs font-medium text-white">
                U
              </div>
              <ChevronDown size={14} className="text-gray-500" />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute right-0 mt-1 w-48 rounded-md shadow-lg bg-gray-800 border border-gray-700 overflow-hidden">
                <div className="py-1">
                  <div className="px-4 py-2 border-b border-gray-700">
                    <p className="text-sm font-medium text-white">User Name</p>
                    <p className="text-xs text-gray-400">user@example.com</p>
                  </div>
                  <Link href="/profile" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                    Profile
                  </Link>
                  <Link href="/settings" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                    Settings
                  </Link>
                  <div className="border-t border-gray-700">
                    <Link href="/logout" className="block px-4 py-2 text-sm text-red-400 hover:bg-gray-700">
                      Sign out
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}