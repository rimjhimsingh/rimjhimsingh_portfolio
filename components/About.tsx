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
              Hey there! I'm Rimjhim Singh, a software engineer, full-stack problem solver, and lifelong learner.
            </p>
            <p className="mb-4 text-base sm:text-lg">
              I build scalable, user-focused digital experiences where creativity meets functionality. I recently earned
              my Master's in Computer Science from Binghamton University, where I designed and deployed production-ready
              systems that improved efficiency and user experience across departments.
            </p>
            <p className="mb-4 text-base sm:text-lg">
              My tech stack spans React.js, Node.js, TypeScript, Java, JavaScript, and Python, with a passion for
              building seamless interfaces and rock-solid backends. I care deeply about clean architecture, performance
              optimization, and intuitive design, crafting code that's not only functional but delightful to use.
            </p>
            <p className="mb-4 text-base sm:text-lg">
              Beyond the code, I love exploring new technologies, organizing my life in Notion, and learning through
              design and storytelling. I believe technology should make life simpler, smarter, and a little more fun.
            </p>
            <p className="mb-4 text-base sm:text-lg">
              If you're looking for a driven full-stack engineer who turns ideas into polished, high-impact products,
              let's connect and build something amazing together.
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
