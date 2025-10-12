"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { useTheme } from "./theme-provider"
import RoleCyclerCode from "./RoleCyclerCode"

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { theme } = useTheme()

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6" ref={ref}>
        <h2
          className={`text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center transition-all duration-700 font-georgia ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          About Me
        </h2>
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-10 items-start">
          <div
            className={`w-full lg:w-1/2 transition-all duration-700 delay-300 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="mb-4 text-base sm:text-lg">
              Hey there! I'm Rimjhim Singh - a code architect by day, a problem solver always.
            </p>
            <p className="mb-4 text-base sm:text-lg">
              I build digital experiences where creativity meets functionality. By day, I'm pursuing my Master's in Computer Science at Binghamton University, and by night (or whenever inspiration strikes), I'm crafting real-world solutions as a Software Engineer on campus.
            </p>
            <p className="mb-4 text-base sm:text-lg">
              My tech stack? A full-stack powerhouse—React.js, Node.js, TypeScript, Java, JavaScript, and Python. But beyond the code, I live for that sweet spot where sleek design meets seamless functionality—turning ideas into intuitive, wow-worthy digital experiences.
            </p>
            <p className="mb-4 text-base sm:text-lg">
              Whether I'm engineering rock-solid backends or designing pixel-perfect UIs, my philosophy is simple: technology should make life better, simpler, and maybe even a little more fun. I'm all about clean, efficient, and maintainable code that just works.
            </p>
            <p className="mb-4 text-base sm:text-lg">
              When I'm not coding, you'll probably find me geeking out over new tech, optimizing my Notion setup, or diving into a YouTube rabbit hole of video essays. Looking for a developer who turns coffee into elegant solutions? Let’s build something amazing together.
            </p>
          </div>

          <div
            className={`w-full lg:w-1/2 transition-all duration-700 delay-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} mt-8 lg:mt-0`}
          >
            <RoleCyclerCode />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
