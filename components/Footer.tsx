"use client"

import { useTheme } from "./theme-provider"

const Footer = () => {
  const { theme } = useTheme()

  return (
    <footer
      className={`${theme === "dark" ? "bg-dark-light" : "bg-gray-100"} py-6 sm:py-8 transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <p className={theme === "dark" ? "text-cream/70" : "text-dark/70"}>
          © {new Date().getFullYear()} Rimjhim Singh. All rights reserved.
        </p>
        <p className={`text-xs sm:text-sm mt-2 ${theme === "dark" ? "text-cream/50" : "text-dark/50"}`}>
          Full Stack Engineer | Web Developer | Frontend Engineer
        </p>
      </div>
    </footer>
  )
}

export default Footer
