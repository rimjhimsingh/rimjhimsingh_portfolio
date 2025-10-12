"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { useTheme } from "./theme-provider"
import RoleCyclerBrowser from "./RoleCyclerBrowser"

const CodeShowcase = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const { theme } = useTheme()

  return (
    <section id="code-showcase" className="py-20 bg-muted/50 transition-colors duration-300">
      <div className="container mx-auto px-6" ref={ref}>
        <h2
          className={`text-3xl font-bold mb-12 text-center transition-all duration-700 font-georgia ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Code Showcase
        </h2>

        <div
          className={`max-w-4xl mx-auto transition-all duration-700 delay-300 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-center mb-10">
            Check out this interactive component showcasing my React skills. The code is fully functional and
            demonstrates state management, effects, and clean component design.
          </p>

          <RoleCyclerBrowser />
        </div>
      </div>
    </section>
  )
}

export default CodeShowcase
