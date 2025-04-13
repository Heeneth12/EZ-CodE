"use client";
import React, { useState } from "react";
import {
  Code,
  Bell,
  HelpCircle,
  Home,
  FolderOpen,
  Users,
  Video,
  BookOpen,
  Settings,
  PlusCircle,
  ChevronRight,
  ChevronDown,
  Search,
  Calendar,
  Star,
  Menu,
  X,
  Terminal,
  Zap,
  Activity,
  TrendingUp,
  Monitor,
} from "lucide-react";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState("JavaScript");

  // Placeholder data
  const recentProjects = [
    {
      id: 1,
      name: "API Integration",
      language: "JavaScript",
      lastEdited: "2 hours ago",
      favorite: true,
    },
    {
      id: 2,
      name: "Data Processing Algorithm",
      language: "Python",
      lastEdited: "Yesterday",
      favorite: false,
    },
    {
      id: 3,
      name: "UI Components",
      language: "React",
      lastEdited: "3 days ago",
      favorite: true,
    },
    {
      id: 4,
      name: "Database Schema",
      language: "SQL",
      lastEdited: "Last week",
      favorite: false,
    },
  ];

  const stats = {
    projectsCreated: 12,
    collaborationHours: 8,
    interviews: 3,
    streak: 5,
  };

  const languages = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "Go",
    "Ruby",
    "PHP",
  ];

  const collaborators = [
    { id: 1, initials: "JD", color: "bg-blue-100" },
    { id: 2, initials: "MS", color: "bg-green-100" },
    { id: 3, initials: "AK", color: "bg-purple-100" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile Sidebar Toggle */}
      <div className="md:hidden fixed top-4 left-4 z-30">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-white p-2 rounded-full shadow-md text-gray-700">
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 fixed md:static w-64 h-full bg-gradient-to-b from-blue-600 to-blue-800 text-white z-20 transition-transform duration-300 ease-in-out shadow-xl`}>
        <div className="p-5 flex items-center">
          <Code className="mr-2" />
          <h1 className="text-xl font-bold">EZ-CodE</h1>
        </div>

        <div className="px-4 mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-blue-700/50 text-white placeholder-blue-200 rounded-lg py-2 pl-9 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Search
              className="absolute left-3 top-2.5 text-blue-300"
              size={16}
            />
          </div>
        </div>

        <div className="mt-8 px-2">
          <p className="text-blue-200 text-xs uppercase font-semibold px-4 mb-2">
            Main Menu
          </p>
          <SidebarItem icon={<Home size={18} />} text="Dashboard" active />
          <SidebarItem icon={<FolderOpen size={18} />} text="My Projects" />
          <SidebarItem icon={<Users size={18} />} text="Collaborations" />
          <SidebarItem icon={<Video size={18} />} text="Interviews" />
          <SidebarItem icon={<Terminal size={18} />} text="Compiler" />

          <p className="text-blue-200 text-xs uppercase font-semibold px-4 mb-2 mt-6">
            Resources
          </p>
          <SidebarItem icon={<BookOpen size={18} />} text="Templates" />
          <SidebarItem icon={<Activity size={18} />} text="Analytics" />
          <SidebarItem icon={<Settings size={18} />} text="Settings" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="bg-blue-700/50 rounded-lg p-3 flex items-center">
            <div className="h-10 w-10 rounded-full bg-blue-200 flex items-center justify-center text-blue-800 font-semibold mr-3">
              JD
            </div>
            <div className="flex-1">
              <h4 className="font-medium">John Doe</h4>
              <p className="text-xs text-blue-200">Pro Account</p>
            </div>
            <button className="text-blue-200 hover:text-white">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden flex flex-col">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h2 className="text-xl font-bold text-gray-800">
              Welcome back, John
            </h2>
            <div className="ml-4 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
              <Zap size={12} className="mr-1" /> {stats.streak} Day Streak
            </div>
          </div>

          <div className="flex items-center space-x-1">
            <button className="p-2 rounded-full hover:bg-gray-100 relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <HelpCircle size={20} />
            </button>
            <div className="flex items-center ml-2 cursor-pointer border-l pl-3">
              <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold">
                JD
              </div>
              <ChevronDown size={16} className="ml-1 text-gray-500" />
            </div>
          </div>
        </header>

        {/* Dashboard Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <StatCard
              icon={<FolderOpen className="text-indigo-500" />}
              value={stats.projectsCreated}
              label="Projects Created"
              trend="+3 this week"
              color="indigo"
            />
            <StatCard
              icon={<Users className="text-blue-500" />}
              value={stats.collaborationHours}
              label="Collaboration Hours"
              trend="+2 this week"
              color="blue"
            />
            <StatCard
              icon={<Video className="text-emerald-500" />}
              value={stats.interviews}
              label="Interviews"
              trend="Next: Tomorrow"
              color="emerald"
            />
            <StatCard
              icon={<TrendingUp className="text-amber-500" />}
              value="85%"
              label="Performance"
              trend="Top 15%"
              color="amber"
            />
          </div>

          {/* Main Action Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* New Project Card */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden lg:col-span-2 border border-gray-100">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1">Start a New Project</h3>
                <p className="text-gray-500 mb-6">
                  Choose a language to begin your coding journey
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setSelectedLanguage(lang)}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        selectedLanguage === lang
                          ? "bg-blue-100 text-blue-700 border-2 border-blue-300"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200 border-2 border-transparent"
                      }`}>
                      {lang}
                    </button>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center transition-colors">
                    <PlusCircle size={18} className="mr-2" /> Create New Project
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium flex items-center hover:bg-gray-50 transition-colors">
                    <BookOpen size={18} className="mr-2" /> Use Template
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
              <div className="px-6 py-5 border-b border-gray-100">
                <h3 className="font-bold">Quick Actions</h3>
              </div>

              <div className="divide-y">
                <QuickActionItem
                  icon={<Users size={18} className="text-blue-500" />}
                  title="Join Collaboration"
                  description="Enter a session code"
                  action={() => {}}
                  actionText="Join"
                />
                <QuickActionItem
                  icon={<Video size={18} className="text-emerald-500" />}
                  title="Technical Interview"
                  description="Schedule or join"
                  action={() => {}}
                  actionText="Setup"
                />
                <QuickActionItem
                  icon={<Monitor size={18} className="text-purple-500" />}
                  title="Live Demo Session"
                  description="Present your code"
                  action={() => {}}
                  actionText="Start"
                />
                <QuickActionItem
                  icon={<Calendar size={18} className="text-amber-500" />}
                  title="Code Review"
                  description="Request feedback"
                  action={() => {}}
                  actionText="Request"
                />
              </div>
            </div>
          </div>

          {/* Recent Projects */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8 border border-gray-100">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-bold text-lg">Recent Projects</h3>
              <div className="flex items-center">
                <span className="text-gray-500 text-sm mr-4">
                  Sort by: Recent
                </span>
                <button className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
                  View All <ChevronRight size={16} />
                </button>
              </div>
            </div>

            <div className="divide-y">
              {recentProjects.map((project) => (
                <div
                  key={project.id}
                  className="px-6 py-4 hover:bg-gray-50 flex justify-between items-center transition-colors">
                  <div className="flex items-center">
                    <div
                      className={`h-10 w-10 rounded-lg mr-4 flex items-center justify-center ${
                        project.language === "JavaScript"
                          ? "bg-yellow-100 text-yellow-700"
                          : project.language === "Python"
                            ? "bg-blue-100 text-blue-700"
                            : project.language === "React"
                              ? "bg-cyan-100 text-cyan-700"
                              : "bg-gray-100 text-gray-700"
                      }`}>
                      <Code size={18} />
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h4 className="font-medium">{project.name}</h4>
                        {project.favorite && (
                          <Star
                            size={14}
                            className="ml-2 text-amber-400 fill-amber-400"
                          />
                        )}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="mr-2">{project.language}</span>
                        <span className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">
                          {project.lastEdited}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="flex -space-x-2 mr-4">
                      {collaborators.map((person) => (
                        <div
                          key={person.id}
                          className={`h-6 w-6 rounded-full ${person.color} flex items-center justify-center text-xs font-medium ring-2 ring-white`}>
                          {person.initials}
                        </div>
                      ))}
                    </div>
                    <button className="bg-blue-50 hover:bg-blue-100 text-blue-600 py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                      Open
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Services */}
          <h3 className="font-bold text-lg mb-4">EZ-CodE Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <ServiceCard
              title="Personal IDE"
              description="Code in your preferred language with our intelligent compiler and debugging tools"
              icon={<Terminal size={22} className="text-white" />}
              iconBg="bg-gradient-to-br from-blue-500 to-blue-700"
              action="Launch IDE"
            />
            <ServiceCard
              title="Live Collaboration"
              description="Real-time pair programming with team members with video and voice chat"
              icon={<Users size={22} className="text-white" />}
              iconBg="bg-gradient-to-br from-purple-500 to-purple-700"
              action="Start Session"
            />
            <ServiceCard
              title="Interview Platform"
              description="Conduct or participate in technical interviews with code evaluation tools"
              icon={<Video size={22} className="text-white" />}
              iconBg="bg-gradient-to-br from-emerald-500 to-emerald-700"
              action="Setup Interview"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Components
function SidebarItem({ icon, text, active = false }) {
  return (
    <div
      className={`flex items-center px-4 py-2.5 my-1 rounded-lg transition-colors ${active ? "bg-blue-700 text-white" : "text-blue-100 hover:bg-blue-700/50"}`}>
      <div className="mr-3">{icon}</div>
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}

function StatCard({ icon, value, label, trend, color }) {
  const bgColor = {
    blue: "bg-blue-50",
    indigo: "bg-indigo-50",
    emerald: "bg-emerald-50",
    amber: "bg-amber-50",
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm flex border border-gray-100">
      <div
        className={`h-12 w-12 rounded-lg ${bgColor[color]} flex items-center justify-center mr-4`}>
        {icon}
      </div>
      <div>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex flex-col">
          <span className="text-gray-500 text-sm">{label}</span>
          <span className="text-xs text-gray-400">{trend}</span>
        </div>
      </div>
    </div>
  );
}

function QuickActionItem({ icon, title, description, action, actionText }) {
  return (
    <div className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
      <div className="flex items-center">
        <div className="mr-3 bg-gray-50 p-2 rounded-lg">{icon}</div>
        <div>
          <h4 className="font-medium text-sm">{title}</h4>
          <p className="text-gray-500 text-xs">{description}</p>
        </div>
      </div>
      <button
        onClick={action}
        className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded text-sm font-medium transition-colors">
        {actionText}
      </button>
    </div>
  );
}

function ServiceCard({ title, description, icon, iconBg, action }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
      <div
        className={`h-12 w-12 rounded-xl ${iconBg} mb-4 flex items-center justify-center`}>
        {icon}
      </div>
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <p className="text-gray-600 mb-4 text-sm flex-1">{description}</p>
      <button className="bg-gray-50 border border-gray-200 hover:bg-gray-100 text-gray-800 py-2 px-4 rounded-lg text-sm font-medium flex justify-center items-center transition-colors">
        {action} <ChevronRight size={16} className="ml-1" />
      </button>
    </div>
  );
}
