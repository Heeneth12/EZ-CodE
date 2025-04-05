import { FC } from "react";
import Link from "next/link";

interface OnlineCompilerProps {
  params: { language: string }; // Get dynamic language param
}

// app/java/onlinecompiler/metadata.ts
export const metadata = {
  title: 'Java Online Compiler - EZ-CodE',
  description: 'Run Java code online with real-time output. Powered by EZ-CodE.',
  keywords: ['Java compiler', 'Online Java editor', 'Run Java code'],
  openGraph: {
    title: 'Java Online Compiler',
    description: 'Compile and run Java code online with EZ-CodE.',
    url: 'https://ezcode.in/java/onlinecompiler',
    siteName: 'EZ-CodE',
    locale: 'en_US',
    type: 'website',
  },
};


const OnlineCompiler: FC<OnlineCompilerProps> = ({ params }) => {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
        {/* Top Navigation Bar */}
        <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  CodeHub
                </h1>

                {/* Main Navigation */}
                <nav className="ml-10">
                  <ul className="flex space-x-4">
                    <li>
                      <Link
                        href="/code-editor"
                        className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                        Code Editor
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/collaborate"
                        className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                        Collaborate
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/interview"
                        className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                        Technical Interview
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnlineCompiler;
