"use client"

import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { Suspense } from "react"

// Component to handle pathname and router with hooks
function ThemeToggleContent() {
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const router = useRouter()

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)

    // If we're on a page that's not the homepage, update the URL to include the theme
    if (pathname !== "/") {
      // Preserve existing query parameters
      const url = new URL(window.location.href)
      url.searchParams.set("theme", newTheme)
      router.replace(url.pathname + url.search)
    }
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className={`rounded-md w-10 h-10 ${
        theme === "dark"
          ? "bg-dark-light border-gray-700 hover:bg-dark hover:border-gray-600"
          : "bg-gray-100 border-gray-200 hover:bg-gray-200"
      } transition-all duration-300`}
    >
      {theme === "light" ? <Moon className="h-5 w-5 text-gray-800" /> : <Sun className="h-5 w-5 text-gray-200" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

// Main ThemeToggle component with Suspense
export function ThemeToggle() {
  const { theme } = useTheme()

  return (
    <Suspense
      fallback={
        <Button
          variant="outline"
          size="icon"
          className={`rounded-md w-10 h-10 ${
            theme === "dark" ? "bg-dark-light border-gray-700" : "bg-gray-100 border-gray-200"
          } transition-all duration-300`}
        >
          {theme === "light" ? <Moon className="h-5 w-5 text-gray-800" /> : <Sun className="h-5 w-5 text-gray-200" />}
        </Button>
      }
    >
      <ThemeToggleContent />
    </Suspense>
  )
}
