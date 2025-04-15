import {
  Video,
  Share2,
  MoreVertical,
  User,
  X,
  MicOff,
  Mic,
  Monitor,
} from "lucide-react";
import React, { useState } from "react";

export default function VideoCallSection() {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [theme, setTheme] = useState("light");
  return (
    <div
      className={`h-1/2 ${theme === "dark" ? "bg-slate-900 border-slate-700" : "bg-slate-800 border-slate-300"} border-b flex flex-col`}>
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
                onClick={() => setIsVideoOn(false)}>
                <Video size={12} />
              </button>
            ) : (
              <button
                className="bg-red-500 text-white rounded-full p-1"
                onClick={() => setIsVideoOn(true)}>
                <X size={12} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Video Controls */}
      <div
        className={`flex justify-center gap-3 p-3 ${theme === "dark" ? "bg-slate-800" : "bg-slate-700"}`}>
        <button
          className={`p-2.5 rounded-full ${isMuted ? "bg-red-500 text-white" : "bg-slate-600 text-white hover:bg-slate-500"}`}
          onClick={() => setIsMuted(!isMuted)}>
          {isMuted ? <MicOff size={18} /> : <Mic size={18} />}
        </button>
        <button
          className={`p-2.5 rounded-full ${isVideoOn ? "bg-slate-600 text-white hover:bg-slate-500" : "bg-red-500 text-white"}`}
          onClick={() => setIsVideoOn(!isVideoOn)}>
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
  );
}
