"use client"

import { useTheme } from "./theme-provider"
import Link from "next/link"

const Logo = () => {
  const { theme } = useTheme()

  return (
    <Link href="/" className="flex items-center">
      <div
        className={`w-10 h-10 flex items-center justify-center rounded-md 
        ${
          theme === "dark" ? "bg-red text-white" : "bg-red text-white"
        } transition-all duration-300 hover:shadow-md font-bold text-lg font-georgia`}
      >
        RS
      </div>
    </Link>
  )
}

export default Logo
