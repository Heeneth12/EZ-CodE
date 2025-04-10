"use client";
import { useState, useEffect, useCallback, JSX } from "react";
import LanguageSidebar from "./components/LanguageSidebar";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import Header from "./components/Header";
import { Play } from "lucide-react";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

interface FileInfo {
  name: string;
  language: string;
}

interface FileContentsMap {
  [key: string]: string;
}

const CodeEditor = (): JSX.Element => {
  const params = useParams();
  const [activeTab, setActiveTab] = useState<"input" | "output">("output");
  const [editorTheme, setEditorTheme] = useState<string>("vs-dark");
  const [files, setFiles] = useState<FileInfo[]>([]);
  const [activeFileIndex, setActiveFileIndex] = useState<number>(0);
  const [fileContents, setFileContents] = useState<FileContentsMap>({});
  const [output, setOutput] = useState<string>("Hello, World!");
  const [inputValue, setInputValue] = useState<string>("");
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  // Add this to your existing state declarations at the top of the component
  const [editorWidthPercentage, setEditorWidthPercentage] =
    useState<number>(50); // Default 50/50 split

  const language = (params as { language?: string })?.language;
  const activeLanguage: string = language || "c";

  // Function to get file extension by language
  const getFileExtension = (lang: string): string => {
    const extensions: Record<string, string> = {
      c: "c",
      cpp: "cpp",
      csharp: "cs",
      java: "java",
      javascript: "js",
      python: "py",
      go: "go",
      kotlin: "kt",
      php: "php",
      perl: "pl",
      html: "html",
      css: "css",
      typescript: "ts",
    };
    return extensions[lang] || "txt";
  };

  // Initialize files based on language
  useEffect(() => {
    if (activeLanguage === "html") {
      setFiles([
        { name: "index.html", language: "html" },
        { name: "styles.css", language: "css" },
        { name: "script.js", language: "javascript" },
      ]);
      setFileContents({
        "index.html":
          '<!DOCTYPE html>\n<html>\n<head>\n  <link rel="stylesheet" href="styles.css">\n  <title>HTML Preview</title>\n</head>\n<body>\n  <h1>Hello World!</h1>\n  <script src="script.js"></script>\n</body>\n</html>',
        "styles.css":
          "body {\n  font-family: Arial, sans-serif;\n  margin: 0;\n  padding: 20px;\n  background-color: #f0f0f0;\n}\n\nh1 {\n  color: #333;\n}",
        "script.js":
          "console.log('Script loaded');\n\n// Your JavaScript code here",
      });
    } else {
      const mainFile = `main.${getFileExtension(activeLanguage)}`;
      setFiles([{ name: mainFile, language: activeLanguage }]);
      setFileContents({
        [mainFile]: getDefaultContent(activeLanguage),
      });
    }
    setActiveFileIndex(0);
    setConsoleLogs([]);
    setOutput("Hello, World!");
  }, [activeLanguage]);

  const getDefaultContent = (lang: string): string => {
    const templates: Record<string, string> = {
      c: '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}',
      cpp: '#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}',
      java: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
      python:
        'def main():\n    print("Hello, World!")\n\nif __name__ == "__main__":\n    main()',
      javascript:
        'console.log("Hello, World!");\n\n// You can use standard input\nconst input = readline();\nconsole.log("You entered:", input);',
      html: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Hello World</title>\n</head>\n<body>\n  <h1>Hello, World!</h1>\n</body>\n</html>",
      css: "body {\n  font-family: Arial, sans-serif;\n  margin: 0;\n  padding: 20px;\n}",
      typescript:
        'function greet(name: string): string {\n  return `Hello, ${name}!`;\n}\n\nconsole.log(greet("World"));',
      // Add more language templates as needed
    };
    return templates[lang] || `// ${lang} code goes here`;
  };

  const handleEditorChange = (value: string | undefined): void => {
    if (value === undefined) return;

    const activeFile = files[activeFileIndex].name;
    setFileContents((prev) => ({
      ...prev,
      [activeFile]: value,
    }));

    // Update HTML preview if in HTML mode
    if (activeLanguage === "html") {
      updateHtmlPreview();
    }
  };

  const updateHtmlPreview = useCallback((): void => {
    const htmlContent = fileContents["index.html"] || "";
    const cssContent = fileContents["styles.css"] || "";
    const jsContent = fileContents["script.js"] || "";

    // Create a blob URL for the HTML content with CSS and JS injected
    const combinedHTML = htmlContent
      .replace("</head>", `<style>${cssContent}</style></head>`)
      .replace("</body>", `<script>${jsContent}</script></body>`);

    setOutput(combinedHTML);
  }, [fileContents]);

  useEffect(() => {
    if (activeLanguage === "html") {
      updateHtmlPreview();
    }
  }, [activeLanguage, updateHtmlPreview]);

  const addNewFile = (): void => {
    const newFileName = prompt("Enter file name with extension:");
    if (!newFileName) return;

    const fileExtension = newFileName.split(".").pop()?.toLowerCase() || "";
    const languageMap: Record<string, string> = {
      js: "javascript",
      py: "python",
      html: "html",
      css: "css",
      c: "c",
      cpp: "cpp",
      java: "java",
      go: "go",
      ts: "typescript",
      // Add more mappings as needed
    };

    const fileLanguage = languageMap[fileExtension] || "plaintext";

    setFiles((prev) => [
      ...prev,
      { name: newFileName, language: fileLanguage },
    ]);
    setFileContents((prev) => ({
      ...prev,
      [newFileName]: getDefaultContent(fileLanguage) || "",
    }));
    setActiveFileIndex(files.length);
  };

  const removeFile = (index: number): void => {
    if (files.length === 1) return; // Don't remove the last file

    const newFiles = [...files];
    const removedFile = newFiles.splice(index, 1)[0];

    // Create new file contents object without the removed file
    const newFileContents = { ...fileContents };
    delete newFileContents[removedFile.name];

    setFiles(newFiles);
    setFileContents(newFileContents);

    // Adjust active file index if needed
    if (index === activeFileIndex) {
      setActiveFileIndex(0);
    } else if (index < activeFileIndex) {
      setActiveFileIndex(activeFileIndex - 1);
    }
  };

  // JavaScript compiler/executor with console capture
  const runJavaScript = (): void => {
    setIsRunning(true);
    setConsoleLogs([]);

    try {
      let jsContent = "";

      // Find JavaScript file
      if (activeLanguage === "javascript" || activeLanguage === "typescript") {
        jsContent =
          files.length > 0
            ? fileContents[files[activeFileIndex].name] || ""
            : "";
      } else if (activeLanguage === "html") {
        jsContent = fileContents["script.js"] || "";
      }

      if (!jsContent) {
        setOutput("No JavaScript code to run");
        setIsRunning(false);
        return;
      }

      // Mock console and input functions
      const logs: string[] = [];
      const mockConsole = {
        log: (...args: any[]): void => {
          const logString = args
            .map((arg) =>
              typeof arg === "object" ? JSON.stringify(arg) : String(arg)
            )
            .join(" ");
          logs.push(logString);
        },
        error: (...args: any[]): void => {
          const errorString = args
            .map((arg) =>
              typeof arg === "object" ? JSON.stringify(arg) : String(arg)
            )
            .join(" ");
          logs.push(`Error: ${errorString}`);
        },
        warn: (...args: any[]): void => {
          const warnString = args
            .map((arg) =>
              typeof arg === "object" ? JSON.stringify(arg) : String(arg)
            )
            .join(" ");
          logs.push(`Warning: ${warnString}`);
        },
      };

      // Mock readline for input
      const inputLines = inputValue.split("\n");
      let currentInputLine = 0;

      const readlineFunction = (): string => {
        if (currentInputLine < inputLines.length) {
          return inputLines[currentInputLine++];
        }
        return "";
      };

      // Create safe execution environment
      const executeCode = new Function("console", "readline", jsContent);
      executeCode(mockConsole, readlineFunction);

      // Set output
      setConsoleLogs(logs);
      setOutput(logs.join("\n"));
    } catch (error) {
      if (error instanceof Error) {
        setOutput(`Runtime Error: ${error.message}`);
        setConsoleLogs([`Runtime Error: ${error.message}`]);
      } else {
        setOutput("An unknown error occurred");
        setConsoleLogs(["An unknown error occurred"]);
      }
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      {/* Editor Container */}
      <div className="flex flex-col md:flex-row h-[calc(97vh-56px)]">
        <LanguageSidebar />

        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 flex flex-col">
            <div className="flex-1 flex">
              {/* Editor Panel - now using dynamic width */}
              <div
                className="flex flex-col"
                style={{ width: `${editorWidthPercentage}%` }}>
                {/* File tabs */}
                <div className="flex justify-between overflow-x-auto border-b border-gray-700 bg-gray-800">
                  <div className="flex items-center overflow-x-auto">
                    {files.map((file, index) => (
                      <div
                        key={file.name}
                        className={`flex items-center px-3 py-2 ${
                          index === activeFileIndex
                            ? "border-b-2 border-blue-500 text-blue-400 bg-gray-900"
                            : "text-gray-400 hover:text-gray-200"
                        } text-sm cursor-pointer`}
                        onClick={() => setActiveFileIndex(index)}>
                        <span>{file.name}</span>
                        {files.length > 1 && (
                          <button
                            className="ml-2 text-gray-500 hover:text-gray-300"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFile(index);
                            }}>
                            <svg
                              className="w-3 h-3"
                              fill="currentColor"
                              viewBox="0 0 24 24">
                              <path d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
                            </svg>
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      className="px-3 py-2 text-gray-500 hover:text-gray-300 text-sm flex items-center"
                      onClick={addNewFile}>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                      </svg>
                      <span className="ml-1">New File</span>
                    </button>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={runJavaScript}
                      className="hidden font-semibold md:flex items-center text-xs px-4 py-2.5 bg-blue-600 hover:bg-blue-700 transition-colors">
                      <Play size={14} className="mr-1" />
                      Run
                    </button>
                  </div>
                </div>
                {/* Line numbers and editor */}
                <div className="flex-1 relative">
                  {files.length > 0 && activeFileIndex < files.length && (
                    <MonacoEditor
                      height="100%"
                      width="100%"
                      theme={editorTheme}
                      language={files[activeFileIndex].language}
                      value={fileContents[files[activeFileIndex].name] || ""}
                      onChange={handleEditorChange}
                      options={{
                        minimap: { enabled: false },
                        fontSize: 20,
                        lineNumbers: "on",
                        automaticLayout: true,
                        scrollBeyondLastLine: false,
                        renderLineHighlight: "all",
                        scrollbar: {
                          verticalScrollbarSize: 10,
                          horizontalScrollbarSize: 10,
                        },
                      }}
                    />
                  )}
                </div>
              </div>

              {/* Resizer Control */}
              <div 
                className="cursor-ew-resize w-1 bg-gray-700 hover:bg-blue-500 transition-colors flex items-center justify-center"
                onMouseDown={(e) => {
                  e.preventDefault();
                  const startX = e.clientX;
                  const startWidth = editorWidthPercentage;
                  
                  // Capture the container width at the start of the drag
                  const containerWidth = e.currentTarget.parentElement?.offsetWidth || 1000;
                  
                  const handleMouseMove = (moveEvent: MouseEvent) => {
                    const dx = moveEvent.clientX - startX;
                    const newPercentage = startWidth + (dx / containerWidth * 100);
                    
                    // Keep within reasonable bounds (20% - 80%)
                    const boundedPercentage = Math.max(20, Math.min(80, newPercentage));
                    setEditorWidthPercentage(boundedPercentage);
                  };
                  
                  const handleMouseUp = () => {
                    document.removeEventListener('mousemove', handleMouseMove);
                    document.removeEventListener('mouseup', handleMouseUp);
                  };
                  
                  document.addEventListener('mousemove', handleMouseMove);
                  document.addEventListener('mouseup', handleMouseUp);
                }}
              >
                <div className="flex flex-col items-center py-4 space-y-1">
                  <div className="bg-gray-400 w-1 h-6 rounded-full"></div>
                  <div className="bg-gray-400 w-1 h-6 rounded-full"></div>
                </div>
              </div>

              {/* Output/Input Panel - now using dynamic width */}
              <div
                className="border-l border-gray-700 flex flex-col"
                style={{ width: `${100 - editorWidthPercentage}%` }}>
                <div className="flex border-b border-gray-700 bg-gray-800">
                  <button
                    className={`px-4 py-2 text-sm ${
                      activeTab === "input"
                        ? "border-b-2 border-blue-500 text-blue-400"
                        : "text-gray-400 hover:text-gray-200"
                    }`}
                    onClick={() => setActiveTab("input")}>
                    Input
                  </button>
                  <button
                    className={`px-4 py-2 text-sm ${
                      activeTab === "output"
                        ? "border-b-2 border-blue-500 text-blue-400"
                        : "text-gray-400 hover:text-gray-200"
                    }`}
                    onClick={() => setActiveTab("output")}>
                    {activeLanguage === "html" ? "Preview" : "Output"}
                  </button>
                  <button className="px-4 py-2 text-sm text-gray-400 hover:text-gray-200">
                    Generated files
                  </button>
                  <div className="ml-auto flex items-center px-2 text-xs text-gray-400">
                    {Math.round(editorWidthPercentage)}% |{" "}
                    {Math.round(100 - editorWidthPercentage)}%
                  </div>
                </div>
                <div className="flex-1 overflow-auto bg-gray-900">
                  {activeTab === "input" ? (
                    <div className="h-full flex flex-col">
                      <div className="text-sm px-2 py-1 bg-gray-800 border-b border-gray-700">
                        Input arguments
                      </div>
                      <textarea
                        className="flex-1 w-full bg-gray-800 border border-gray-700 p-2 text-sm focus:outline-none"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Enter input here..."
                      />
                    </div>
                  ) : activeLanguage === "html" ? (
                    <div className="w-full h-full bg-white rounded border border-gray-700">
                      <iframe
                        title="HTML Preview"
                        srcDoc={output}
                        className="w-full h-full border-none"
                        sandbox="allow-scripts"
                      />
                    </div>
                  ) : (
                    <div className="font-mono h-full text-sm bg-gray-600 p-3  overflow-y-auto whitespace-pre-wrap">
                      <div className="text-white">{output}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
