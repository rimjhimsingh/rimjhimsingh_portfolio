"use client"

import { useState, useEffect, useRef } from "react"
import { useTheme } from "./theme-provider"
import { Button } from "@/components/ui/button"
import { Play, Pause, RefreshCw } from "lucide-react"

const roles = [
  "Full Stack Engineer",
  "Front End Developer",
  "Web Developer",
  "Learner",
  "Team Player",
  "Journal Enthusiast",
]

// Sample code to display
const codeString = `"use client"

import { useState, useEffect } from "react"

const roles = [
  "Full Stack Engineer",
  "Front End Developer", 
  "Web Developer",
  "Learner",
  "Team Player",
  "Journal Enthusiast"
]

export default function RoleCycler() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  
  useEffect(() => {
    if (!isPlaying) return
    
    const interval = setInterval(() => {
      setRoleIndex((prev) => 
        prev === roles.length - 1 ? 0 : prev + 1
      )
    }, 2000)
    
    return () => clearInterval(interval)
  }, [isPlaying])
  
  const nextRole = () => {
    setRoleIndex((prev) => 
      prev === roles.length - 1 ? 0 : prev + 1
    )
  }
  
  return (
    <div>
      <h1>I am a {roles[roleIndex]}</h1>
      <button onClick={nextRole}>
        Next Role
      </button>
    </div>
  )
}`

export default function RoleCyclerBrowser() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const { theme } = useTheme()

  // Function to cycle to the next role
  const cycleRole = () => {
    setRoleIndex((prevIndex) => (prevIndex === roles.length - 1 ? 0 : prevIndex + 1))
  }

  // Toggle auto-play
  const toggleAutoPlay = () => {
    setIsAutoPlaying((prev) => !prev)
  }

  // Handle auto-play effect with faster speed (2000ms = 2s)
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(cycleRole, 2000)
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoPlaying])

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div
        className={`rounded-lg overflow-hidden border ${theme === "dark" ? "border-gray-700" : "border-gray-300"} shadow-xl`}
      >
        {/* Browser window header */}
        <div
          className={`flex items-center p-3 ${theme === "dark" ? "bg-gray-800" : "bg-gray-200"} border-b ${theme === "dark" ? "border-gray-700" : "border-gray-300"}`}
        >
          <div className="flex space-x-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div
            className={`flex-1 text-center text-sm font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
          >
            role-cycler.tsx
          </div>
        </div>

        {/* Code section - more sleek with better syntax highlighting */}
        <div
          className={`p-4 overflow-auto ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"}`}
          style={{ maxHeight: "350px", fontFamily: '"Courier New", Courier, monospace' }}
        >
          {codeString.split("\n").map((line, i) => (
            <div key={i} className="whitespace-pre">
              <span
                className={`inline-block w-8 text-right mr-4 select-none ${theme === "dark" ? "text-gray-600" : "text-gray-400"}`}
              >
                {i + 1}
              </span>
              {line.split('"').map((part, j, arr) => {
                // Alternate between regular text and string literals
                if (j % 2 === 0) {
                  // Handle keywords, variables, etc.
                  return part.split(" ").map((word, k) => {
                    if (
                      [
                        "import",
                        "from",
                        "export",
                        "default",
                        "function",
                        "return",
                        "const",
                        "let",
                        "var",
                        "if",
                        "else",
                        "useEffect",
                        "useState",
                      ].includes(word)
                    ) {
                      return (
                        <span key={k} className="text-pink-500">
                          {word}{" "}
                        </span>
                      )
                    } else if (
                      [
                        "=",
                        "===",
                        "!==",
                        ">=",
                        "<=",
                        ">",
                        "<",
                        "+",
                        "-",
                        "*",
                        "/",
                        "?",
                        ":",
                        "&&",
                        "||",
                        "!",
                        "(",
                        ")",
                        "{",
                        "}",
                        "[",
                        "]",
                        ";",
                        ",",
                        ".",
                      ].some((op) => word.includes(op))
                    ) {
                      // This is a very simplified approach - in a real syntax highlighter, you'd parse the code properly
                      return (
                        <span key={k} className="text-gray-400">
                          {word}{" "}
                        </span>
                      )
                    } else if (word.startsWith("//")) {
                      return (
                        <span key={k} className="text-green-500">
                          {word}{" "}
                        </span>
                      )
                    } else {
                      return (
                        <span key={k} className={theme === "dark" ? "text-blue-300" : "text-blue-600"}>
                          {word}{" "}
                        </span>
                      )
                    }
                  })
                } else {
                  // String literals
                  return (
                    <span key={j} className="text-yellow-500">
                      "{part}"
                    </span>
                  )
                }
              })}
            </div>
          ))}
        </div>

        {/* Output/preview section */}
        <div className={`p-8 ${theme === "dark" ? "bg-black" : "bg-white"} flex flex-col items-center justify-center`}>
          <h1 className={`text-4xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-black"} font-georgia`}>
            I am a <span className="text-yellow-500 transition-all duration-300">{roles[roleIndex]}</span>
          </h1>

          <div className="flex gap-4">
            <Button
              onClick={cycleRole}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <RefreshCw className="mr-2 h-4 w-4" /> Next Role
            </Button>

            <Button
              onClick={toggleAutoPlay}
              variant="outline"
              className={`border-2 border-yellow-500 ${theme === "dark" ? "text-yellow-500" : "text-yellow-600"} hover:bg-yellow-500/10 font-bold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105`}
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="mr-2 h-4 w-4" /> Pause
                </>
              ) : (
                <>
                  <Play className="mr-2 h-4 w-4" /> Auto
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
