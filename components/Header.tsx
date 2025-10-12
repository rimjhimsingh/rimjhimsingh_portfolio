"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu, X, FileText } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"
import { useTheme } from "./theme-provider"
import Logo from "./Logo"
import { Suspense } from "react"
import { Button } from "./ui/button"

// Component to handle pathname with usePathname
function HeaderContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const pathname = usePathname()
  const { theme } = useTheme()
  const router = useRouter()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Determine active section based on scroll position
      const sections = ["about", "skills", "experience", "contact"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isMenuOpen && !target.closest('[data-menu="mobile"]') && !target.closest('[data-menu-toggle="mobile"]')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: `/projects?theme=${theme}` },
    { name: "Contact", href: "/#contact" },
  ]

  const isActive = (item: { name: string; href: string }) => {
    if (item.href === "/") return pathname === "/" && activeSection === ""
    if (item.href.includes("/projects")) return pathname === "/projects"
    if (pathname === "/resume") return false
    return item.href.includes(activeSection) && pathname === "/"
  }

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, item: { name: string; href: string }) => {
    if (pathname === "/projects" && item.href.startsWith("/#")) {
      e.preventDefault()
      router.push(item.href)
      return
    }

    if (item.href.startsWith("/#") && pathname === "/") {
      e.preventDefault()
      const id = item.href.split("#")[1]
      const element = document.getElementById(id)
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 100,
          behavior: "smooth",
        })
      }
    } else if (item.href.includes("/projects") && !item.href.includes("theme=")) {
      e.preventDefault()
      router.push(`/projects?theme=${theme}`)
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? theme === "dark"
            ? "bg-dark/95 backdrop-blur-md border-b border-gray-800 shadow-lg"
            : "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Logo />
            <span className={`font-bold text-lg ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
              Rimjhim Singh
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(item)
                    ? theme === "dark"
                      ? "bg-red text-white"
                      : "bg-gray-900 text-white"
                    : theme === "dark"
                      ? "text-gray-300 hover:bg-gray-800 hover:text-white"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
                onClick={(e) => handleNavigation(e, item)}
              >
                {item.name}
              </Link>
            ))}

            {/* Resume Button */}
            <Button
              asChild
              size="sm"
              className={`ml-2 ${
                theme === "dark"
                  ? pathname === "/resume"
                    ? "bg-red text-white hover:bg-red/90"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                  : pathname === "/resume"
                    ? "bg-gray-900 text-white hover:bg-gray-800"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
              } transition-all duration-300`}
            >
              <Link href="/resume">
                <FileText className="mr-1.5 h-4 w-4" />
                Resume
              </Link>
            </Button>

            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              data-menu-toggle="mobile"
              className={`p-2 rounded-lg ${
                theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-100"
              } transition-colors duration-300`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            data-menu="mobile"
            className={`md:hidden mt-4 ${
              theme === "dark" ? "bg-dark/95" : "bg-white/95"
            } backdrop-blur-md rounded-lg p-4 shadow-lg border ${theme === "dark" ? "border-gray-800" : "border-gray-200"}`}
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive(item)
                      ? theme === "dark"
                        ? "bg-red text-white"
                        : "bg-gray-900 text-white"
                      : theme === "dark"
                        ? "text-gray-300 hover:bg-gray-800 hover:text-white"
                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                  onClick={(e) => {
                    handleNavigation(e, item)
                    setIsMenuOpen(false)
                  }}
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="/resume"
                className={`flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  pathname === "/resume"
                    ? theme === "dark"
                      ? "bg-red text-white"
                      : "bg-gray-900 text-white"
                    : theme === "dark"
                      ? "text-gray-300 hover:bg-gray-800 hover:text-white"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

// Main Header component with Suspense
const Header = () => {
  return (
    <Suspense
      fallback={
        <header className="fixed top-0 w-full z-50 py-4 bg-transparent">
          <nav className="container mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Logo />
              </div>
            </div>
          </nav>
        </header>
      }
    >
      <HeaderContent />
    </Suspense>
  )
}

export default Header
