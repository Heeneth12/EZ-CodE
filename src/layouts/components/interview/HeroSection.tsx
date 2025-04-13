import { ArrowRight, Play } from "lucide-react";
import React from "react";

export default function Header() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Conduct Better Technical Interviews
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
            Our platform makes it easy to create, schedule, and conduct seamless
            technical interviews with integrated coding, video calls, and
            collaborative tools.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
              Schedule Your First Interview
              <ArrowRight size={18} />
            </button>
            <button className="border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
              Watch Demo
              <Play size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
