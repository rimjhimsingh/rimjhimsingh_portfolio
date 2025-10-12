"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useTheme } from "./theme-provider"

const Hero = () => {
  const [loaded, setLoaded] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div
              className={`transition-all duration-1000 ${loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red/10 border border-red/20 mb-6">
                <div className="w-2 h-2 rounded-full bg-red animate-pulse"></div>
                <span className="text-sm font-medium text-red">Available for Full-Time Opportunities</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-georgia leading-tight">
                Hi, I'm{" "}
                <span className="text-red bg-gradient-to-r from-red to-pink bg-clip-text text-transparent">
                  Rimjhim Singh
                </span>
              </h1>

              {/* Role */}
              <div className="text-2xl sm:text-3xl font-semibold mb-4">
                <span className={theme === "dark" ? "text-gray-300" : "text-gray-700"}>Full Stack Engineer</span>
              </div>

              {/* Description */}
              <p className="text-lg sm:text-xl leading-relaxed max-w-2xl text-muted-foreground">
                Crafting scalable web applications with{" "}
                <span className="font-semibold text-red">React, Python, and Java</span>. Passionate about building
                intuitive user experiences and solving complex problems with elegant code.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-6 max-w-md">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red mb-1">37+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red mb-1">3+</div>
                  <div className="text-sm text-muted-foreground">Internships</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Tech Stack</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-red hover:bg-red/90 text-white font-semibold px-8 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Link href={`/projects?theme=${theme}`}>
                    View Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className={`font-semibold px-8 transition-all duration-300 transform hover:scale-105 ${
                    theme === "dark" ? "border-gray-700 hover:bg-gray-800" : "border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  <Link href="/#contact">Get In Touch</Link>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/rimjhimsingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                    theme === "dark" ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rimjhim--singh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                    theme === "dark" ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:rimjhimsingh5232@gmail.com"
                  className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                    theme === "dark" ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div
            className={`transition-all duration-1000 delay-300 ${loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="relative">
              {/* Main Illustration Container */}
              <div
                className={`relative rounded-2xl p-8 ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-gray-800 to-gray-900"
                    : "bg-gradient-to-br from-gray-50 to-gray-100"
                } shadow-2xl`}
              >
                {/* Code Window Mockup */}
                <div
                  className={`rounded-lg overflow-hidden ${theme === "dark" ? "bg-gray-900" : "bg-white"} shadow-xl`}
                >
                  {/* Window Header */}
                  <div
                    className={`flex items-center gap-2 px-4 py-3 ${theme === "dark" ? "bg-gray-800" : "bg-gray-200"}`}
                  >
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div
                      className={`flex-1 text-center text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
                    >
                      portfolio.tsx
                    </div>
                  </div>

                  {/* Code Content */}
                  <div className="p-6 font-mono text-sm space-y-3">
                    <div className="flex gap-4">
                      <span className="text-gray-500 select-none">1</span>
                      <span>
                        <span className="text-purple-500">const</span>{" "}
                        <span className={theme === "dark" ? "text-blue-400" : "text-blue-600"}>developer</span> ={" "}
                        <span className="text-yellow-500">{"{"}</span>
                      </span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-gray-500 select-none">2</span>
                      <span className="pl-4">
                        <span className={theme === "dark" ? "text-blue-400" : "text-blue-600"}>name</span>:{" "}
                        <span className="text-green-500">'Rimjhim Singh'</span>,
                      </span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-gray-500 select-none">3</span>
                      <span className="pl-4">
                        <span className={theme === "dark" ? "text-blue-400" : "text-blue-600"}>role</span>:{" "}
                        <span className="text-green-500">'Full Stack Engineer'</span>,
                      </span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-gray-500 select-none">4</span>
                      <span className="pl-4">
                        <span className={theme === "dark" ? "text-blue-400" : "text-blue-600"}>skills</span>: [
                      </span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-gray-500 select-none">5</span>
                      <span className="pl-8">
                        <span className="text-green-500">'React'</span>,{" "}
                        <span className="text-green-500">'Python'</span>, <span className="text-green-500">'Java'</span>
                      </span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-gray-500 select-none">6</span>
                      <span className="pl-4">],</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-gray-500 select-none">7</span>
                      <span className="pl-4">
                        <span className={theme === "dark" ? "text-blue-400" : "text-blue-600"}>passion</span>:{" "}
                        <span className="text-green-500">'Building scalable solutions'</span>
                      </span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-gray-500 select-none">8</span>
                      <span>
                        <span className="text-yellow-500">{"}"}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Tech Icons */}
                <div className="absolute -top-4 -right-4 bg-red text-white p-3 rounded-lg shadow-lg animate-float">
                  <span className="text-2xl">⚛️</span>
                </div>
                <div
                  className="absolute -bottom-4 -left-4 bg-blue text-white p-3 rounded-lg shadow-lg animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <span className="text-2xl">🐍</span>
                </div>
                <div
                  className="absolute top-1/2 -right-4 bg-orange text-white p-3 rounded-lg shadow-lg animate-float"
                  style={{ animationDelay: "0.5s" }}
                >
                  <span className="text-2xl">☕</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div
          className={`absolute top-20 left-10 w-72 h-72 rounded-full bg-red/10 blur-3xl transition-all duration-1000 ${loaded ? "opacity-70" : "opacity-0"}`}
        ></div>
        <div
          className={`absolute bottom-20 right-10 w-96 h-96 rounded-full bg-blue/10 blur-3xl transition-all duration-1000 delay-300 ${loaded ? "opacity-70" : "opacity-0"}`}
        ></div>
      </div>
    </section>
  )
}

export default Hero
