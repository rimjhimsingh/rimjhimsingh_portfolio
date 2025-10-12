"use client"

import type React from "react"

import { useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Header from "@/components/Header"
import ProjectsGrid from "@/components/ProjectsGrid"
import Footer from "@/components/Footer"
import { useTheme } from "@/components/theme-provider"
import { Suspense } from "react"

// Component to handle search params with useSearchParams
function ProjectsContent() {
  const { setTheme } = useTheme()
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    const themeParam = searchParams.get("theme")
    if (themeParam && (themeParam === "light" || themeParam === "dark")) {
      setTheme(themeParam)
    }
  }, [searchParams, setTheme])

  // Add this function to handle navigation back to the home page sections
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (href.startsWith("/#")) {
      router.push(href)
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f2e8] dark:bg-background text-foreground transition-colors duration-300">
      <Header />
      <main className="pt-16 sm:pt-20">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-center">My Projects</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base">
            Explore my portfolio of projects showcasing my skills across various domains, from web development to AI and
            machine learning.
          </p>
          <ProjectsGrid />
        </div>
      </main>
      <Footer />
    </div>
  )
}

// Main Projects page with Suspense
export default function ProjectsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#f5f2e8] dark:bg-background text-foreground transition-colors duration-300">
          <Header />
          <main className="pt-16 sm:pt-20">
            <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Loading Projects...</h1>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      }
    >
      <ProjectsContent />
    </Suspense>
  )
}
