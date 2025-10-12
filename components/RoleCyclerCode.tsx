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

// Sample code to display with traditional syntax highlighting colors
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

export default function RoleCyclerCode() {
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
    <div className="w-full max-w-full mx-auto shadow-lg rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700">
      {/* Browser window header */}
      <div
        className={`flex items-center p-3 ${theme === "dark" ? "bg-[#1e1e2e]" : "bg-gray-200"} border-b ${theme === "dark" ? "border-gray-700" : "border-gray-300"}`}
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

      {/* Code section with traditional syntax highlighting */}
      <div
        className={`p-4 overflow-auto ${theme === "dark" ? "bg-[#282a36]" : "bg-white"}`}
        style={{ maxHeight: "350px", fontFamily: '"Courier New", Courier, monospace' }}
      >
        {codeString.split("\n").map((line, i) => (
          <div key={i} className="whitespace-pre">
            <span
              className={`inline-block w-8 text-right mr-4 select-none ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}
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
                      <span key={k} className={theme === "dark" ? "text-[#ff79c6]" : "text-[#d6409f]"}>
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
                    return (
                      <span key={k} className={theme === "dark" ? "text-[#f8f8f2]" : "text-[#24292e]"}>
                        {word}{" "}
                      </span>
                    )
                  } else if (word.startsWith("//")) {
                    return (
                      <span key={k} className={theme === "dark" ? "text-[#6272a4]" : "text-[#6a737d]"}>
                        {word}{" "}
                      </span>
                    )
                  } else {
                    return (
                      <span key={k} className={theme === "dark" ? "text-[#8be9fd]" : "text-[#0550ae]"}>
                        {word}{" "}
                      </span>
                    )
                  }
                })
              } else {
                // String literals
                return (
                  <span key={j} className={theme === "dark" ? "text-[#f1fa8c]" : "text-[#e3b341]"}>
                    "{part}"
                  </span>
                )
              }
            })}
          </div>
        ))}
      </div>

      {/* Output/preview section */}
      <div
        className={`p-6 ${theme === "dark" ? "bg-[#1e1e2e]" : "bg-gray-100"} flex flex-col items-center justify-center`}
      >
        <h1 className={`text-3xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"} font-georgia`}>
          I am a <span className="text-red transition-all duration-300">{roles[roleIndex]}</span>
        </h1>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            onClick={cycleRole}
            className="bg-red hover:bg-red/80 text-white font-bold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <RefreshCw className="mr-2 h-4 w-4" /> Next Role
          </Button>

          <Button
            onClick={toggleAutoPlay}
            variant="outline"
            className="border-2 border-red text-red hover:bg-red/10 font-bold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
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
  )
}
