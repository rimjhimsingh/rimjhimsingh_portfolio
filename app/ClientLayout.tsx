"use client"

import type React from "react"
import { Inter } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

// Component to handle theme initialization with useSearchParams
function ThemeInitializer({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams()
  const themeParam = searchParams?.get("theme")
  const initialTheme = themeParam === "dark" ? "dark" : "light"

  return <ThemeProvider defaultTheme={initialTheme}>{children}</ThemeProvider>
}

// Fallback component for Suspense
function ThemeFallback({ children }: { children: React.ReactNode }) {
  return <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#ffc0cb" />
        <style>{`
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          }
          h1, h2, h3, h4, h5, h6 {
            font-family: Georgia, Times, "Times New Roman", serif;
          }
          code, pre {
            font-family: "Courier New", Courier, monospace;
          }
        `}</style>
      </head>
      <body className={inter.className}>
        <Suspense fallback={<ThemeFallback>{children}</ThemeFallback>}>
          <ThemeInitializer>{children}</ThemeInitializer>
        </Suspense>
      </body>
    </html>
  )
}
