import React from "react";

export default function HeroSection() {
    const features: Feature[] = [
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          ),
          title: "Online Code Execution",
          description: "Run and test code in multiple languages with real-time execution and instant feedback.",
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          ),
          title: "Real-time Collaboration",
          description: "Code together with teammates in a live coding environment with shared workspaces.",
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          ),
          title: "AI-Powered Code Insights",
          description: "Get real-time AI suggestions, code optimizations, and debugging help instantly.",
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          ),
          title: "Technical Interview Platform",
          description: "Conduct coding interviews with real-time collaboration, automated reports, and AI-driven feedback.",
        },
      ];

  return (
    // mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block p-1">Create next-level</span>
            <span className="block p-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              coding experiences
            </span>
          </h1>

          <p className="mt-8 max-w-2xl mx-auto text-xl text-gray-600">
            Say goodbye to boring code editors. Our platform enables you to
            create stunning interactive coding environments with first-class
            support for code snippets.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button primary href="#features">
              Explore Features
            </Button>
            <Button href="#signup">Get Started</Button>
          </div>
        </div>

        <div
          className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          id="features">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-600 mb-8">
            Trusted by thousands of developers worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            {["Company 1", "Company 2", "Company 3", "Company 4"].map(
              (company, index) => (
                <div key={index} className="text-gray-400 font-semibold">
                  {company}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// FeatureCard with props
const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 opacity-100 animate-fadeIn">
    <div className="flex items-start">
      <div className="flex-shrink-0">
        <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white">
          {icon}
        </span>
      </div>
      <div className="ml-4">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <p className="mt-2 text-base text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

// Button with props
const Button: React.FC<ButtonProps> = ({ primary = false, href, children }) => (
  <a
    href={href}
    className={`inline-block px-6 py-3 text-base font-medium rounded-lg shadow-sm transition-all duration-300 hover:scale-105 active:scale-95
        ${
          primary
            ? "text-white bg-blue-600 hover:bg-blue-700"
            : "text-blue-600 bg-white border border-blue-600 hover:bg-blue-50"
        } md:py-4 md:text-lg md:px-8`}>
    {children}
  </a>
);

// Define TypeScript types for props
type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type FeatureCardProps = Feature;

type ButtonProps = {
  primary?: boolean;
  href: string;
  children: React.ReactNode;
};
