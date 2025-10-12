import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ClientLayout from "./ClientLayout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rimjhim Singh - Portfolio",
  description: "Full Stack Engineer specializing in React, Node.js, and modern web technologies",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Rimjhim Singh - Portfolio",
    description: "Full Stack Engineer specializing in React, Node.js, and modern web technologies",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rimjhim Singh - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rimjhim Singh - Portfolio",
    description: "Full Stack Engineer specializing in React, Node.js, and modern web technologies",
    images: ["/og-image.png"],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}
