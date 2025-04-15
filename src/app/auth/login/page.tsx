"use client";
import { useState } from "react";
import {
  Eye,
  EyeOff,
  Code,
  Mail,
  Lock,
  User,
  ChevronDown,
  UserIcon,
} from "lucide-react";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const toggleView = () => setIsLogin(!isLogin);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="min-h-screen w-full flex flex-col bg-white">
      {/* Header with Logo */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700  py-4 px-6">
        <div className="flex items-center space-x-2">
          <div className="bg-white p-1.5 rounded">
            <Code size={24} className="text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-white">EZ-CodE</h2>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold text-gray-700 mb-8 text-center">
            Log in or sign up
          </h1>

          {/* Social Sign-On Buttons */}
          <div className="space-y-4 mb-8">
            <button className="w-full flex items-center text-gray-800 justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
              <svg
                className="h-5 w-5 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              {isLogin ? "Log in with Google" : "Sign up with Google"}
            </button>

            <button className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
              <svg
                className="h-5 w-5 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
                  fill="white"
                />
              </svg>
              {isLogin ? "Log in with Facebook" : "Sign up with Facebook"}
            </button>
          </div>

          {/* Or Divider */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-800">
                Or continue with email
              </span>
            </div>
          </div>

          <form className="space-y-6 text-gray-900">
            {/* Name field (registration only) */}
            {!isLogin && (
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={18} className="text-gray-700" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    className="pl-10 w-full py-3 border border-gray-300 rounded-md"
                    placeholder="Enter your name"
                  />
                </div>
              </div>
            )}

            {/* Role dropdown */}
            {!isLogin && (
              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Role
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <UserIcon size={18} className="text-gray-700" />
                  </div>
                  <select
                    id="role"
                    className="pl-10 w-full py-3 border border-gray-300 rounded-md appearance-none bg-white">
                    <option value="" disabled selected>
                      Select your role
                    </option>
                    <option value="DEVELOPER">DEVELOPER</option>
                    <option value="INTERVIEWER">INTERVIEWER</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <ChevronDown size={18} className="text-gray-700" />
                  </div>
                </div>
              </div>
            )}

            {/* Email field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={18} className="text-gray-700" />
                </div>
                <input
                  type="email"
                  id="email"
                  className="pl-10 w-full py-3 border border-gray-300 rounded-md"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Password field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={18} className="text-gray-700" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="pl-10 w-full py-3 border border-gray-300 rounded-md"
                  placeholder={
                    isLogin ? "Enter password" : "Create a strong password"
                  }
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  {showPassword ? (
                    <EyeOff
                      size={18}
                      className="text-gray-400 hover:text-gray-600"
                    />
                  ) : (
                    <Eye
                      size={18}
                      className="text-gray-400 hover:text-gray-600"
                    />
                  )}
                </button>
              </div>
            </div>

            {/* Forgot password (login only) */}
            {isLogin && (
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-sm text-blue-600 hover:text-blue-800">
                  Forgot password?
                </button>
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors">
              {isLogin ? "Log in with Email" : "Sign up with Email"}
            </button>
          </form>

          {/* Toggle between login/signup */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={toggleView}
                className="ml-1 text-blue-600 hover:text-blue-800 font-medium">
                {isLogin ? "Sign up" : "Log in"}
              </button>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 px-6 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} EZ-CodE. All rights reserved.</p>
      </footer>
    </div>
  );
}
