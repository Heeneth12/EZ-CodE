import React from "react";

export default function () {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <div className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl text-center text-white">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Transform Your Technical Hiring?
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Join thousands of companies using TechInterview to streamline their
          technical interview process and find the best talent.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors">
            Sign Up For Free
          </button>
          <button className="border border-white text-white hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors">
            Request Demo
          </button>
        </div>
      </div>
    </div>
  );
}
