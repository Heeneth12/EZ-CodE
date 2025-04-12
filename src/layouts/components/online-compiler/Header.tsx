import React from "react";
import { Code, Play, Save, Share2, Moon, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 text-gray-800 z-10 shadow-sm">
      <div className="flex items-center justify-between px-6 h-16">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center group">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-1.5 rounded-lg shadow-sm transition-all duration-300 group-hover:shadow-md">
              <Code className="h-5 w-5 text-white" />
            </div>
            <span className="ml-2.5 text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent tracking-tight">
              EZ-CodE
            </span>
          </Link>
        </div>

        {/* Header Actions */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <button className="hidden md:flex items-center text-xs px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-sm transition-all duration-200 hover:shadow-md">
            <Play size={14} className="mr-2" />
            Run Code
          </button>

          <div className="flex items-center bg-gray-50 rounded-lg p-1 border border-gray-200">
            <button className="p-2 text-gray-600 hover:text-blue-600 rounded-md hover:bg-gray-100 transition-colors duration-200">
              <Save size={18} />
            </button>

            <button className="p-2 text-gray-600 hover:text-blue-600 rounded-md hover:bg-gray-100 transition-colors duration-200">
              <Share2 size={18} />
            </button>

            <button className="p-2 text-gray-600 hover:text-blue-600 rounded-md hover:bg-gray-100 transition-colors duration-200">
              <Moon size={18} />
            </button>
          </div>

          <div className="flex items-center space-x-2 pl-2 pr-2 py-1.5 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors duration-200 border border-gray-200">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-xs font-medium text-white shadow-sm">
              U
            </div>
            <ChevronDown size={14} className="text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  );
}