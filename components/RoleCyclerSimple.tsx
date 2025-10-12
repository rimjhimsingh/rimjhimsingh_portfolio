"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, Code } from "lucide-react"
import { useTheme } from "./theme-provider"
import CodeDisplay from "./CodeDisplay"

const roles = [
  "Full Stack Engineer",
  "Front End Developer",
  "Web Developer",
  "Learner",
  "Team Player",
  "Journal Enthusiast",
]

export default function RoleCyclerSimple() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const [showCode, setShowCode] = useState(false)
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

  // Toggle code visibility
  const toggleCode = () => {
    setShowCode((prev) => !prev)
  }

  // Handle auto-play effect
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(cycleRole, 5000)
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoPlaying])

  // The code to display
  const codeString = `"use client"

import { useState, useEffect, useRef } from "react"

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
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const intervalRef = useRef(null)

  // Function to cycle to the next role
  const cycleRole = () => {
    setRoleIndex(prevIndex => 
      prevIndex === roles.length - 1 ? 0 : prevIndex + 1
    )
  }

  // Toggle auto-play
  const toggleAutoPlay = () => {
    setIsAutoPlaying(prev => !prev)
  }

  // Handle auto-play effect
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(cycleRole, 5000)
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
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">
        I am a <span className="text-blue-500">{roles[roleIndex]}</span>
      </h1>
      <button 
        onClick={toggleAutoPlay}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        {isAutoPlaying ? "Pause" : "Auto-Play"}
      </button>
      <button 
        onClick={cycleRole}
        className="ml-2 px-4 py-2 bg-gray-500 text-white rounded-md"
      >
        Next Role
      </button>
    </div>
  )
}`

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Interactive Component */}
      <div
        className={`p-8 rounded-lg ${theme === "dark" ? "bg-dark-light" : "bg-gray-100"} mb-6 transition-all duration-300`}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">
            I am a{" "}
            <span className={`text-${theme === "dark" ? "red" : "red"} transition-all duration-500`}>
              {roles[roleIndex]}
            </span>
          </h1>
          <div className="flex justify-center gap-3">
            <Button
              onClick={toggleAutoPlay}
              className={`${theme === "dark" ? "bg-red hover:bg-red/80" : "bg-red hover:bg-red/80"} text-white`}
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="mr-2 h-4 w-4" /> Pause
                </>
              ) : (
                <>
                  <Play className="mr-2 h-4 w-4" /> Auto-Play
                </>
              )}
            </Button>
            <Button
              onClick={cycleRole}
              variant="outline"
              className={`${theme === "dark" ? "border-red text-red hover:bg-red/10" : "border-red text-red hover:bg-red/10"}`}
            >
              Next Role
            </Button>
            <Button
              onClick={toggleCode}
              variant="outline"
              className={`${theme === "dark" ? "border-blue text-blue hover:bg-blue/10" : "border-blue text-blue hover:bg-blue/10"}`}
            >
              <Code className="mr-2 h-4 w-4" /> {showCode ? "Hide Code" : "Show Code"}
            </Button>
          </div>
        </div>
      </div>

      {/* Code Display */}
      {showCode && (
        <div className={`transition-all duration-500 ${showCode ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}>
          <CodeDisplay code={codeString} />
        </div>
      )}
    </div>
  )
}
