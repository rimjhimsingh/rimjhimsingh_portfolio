"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Mail, Linkedin, Github, MapPin, ExternalLink } from "lucide-react"
import { useTheme } from "./theme-provider"

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { theme } = useTheme()

  const contactLinks = [
    {
      icon: <Mail className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Email",
      value: "rimjhimsingh5232@gmail.com",
      href: "mailto:rimjhimsingh5232@gmail.com",
      color: "blue",
    },
    {
      icon: <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "LinkedIn",
      value: "linkedin.com/in/rimjhim--singh",
      href: "https://www.linkedin.com/in/rimjhim--singh/",
      color: "pink",
    },
    {
      icon: <Github className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "GitHub",
      value: "github.com/rimjhimsingh",
      href: "https://github.com/rimjhimsingh",
      color: "yellow",
    },
    {
      icon: <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Where's Rimjhim?",
      value: "New York, USA",
      href: "https://maps.google.com/?q=New+York,USA",
      color: "orange",
    },
  ]

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-muted/50 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6" ref={ref}>
        <h2
          className={`text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center transition-all duration-700 font-georgia ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Let's Connect
        </h2>

        <p
          className={`text-center max-w-2xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base transition-all duration-700 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel
          free to reach out through any of these platforms.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-700 transform hover:scale-105 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
            >
              <Card
                className={`h-full ${
                  theme === "light"
                    ? `bg-${link.color}/20 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black`
                    : `bg-dark-light hover:border-2 hover:border-${link.color} hover:shadow-[0_0_15px_rgba(var(--${link.color}-rgb),0.5)]`
                } p-4 sm:p-6 transition-all duration-300 group relative`}
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full ${
                      theme === "light" ? `bg-${link.color} text-white border-2 border-black` : `bg-${link.color}/10`
                    } flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-${link.color} group-hover:text-white transition-all duration-300`}
                  >
                    <span className={`${theme === "light" ? "text-white" : `text-${link.color}`}`}>{link.icon}</span>
                  </div>
                  <h3
                    className={`text-base sm:text-lg font-bold mb-1 ${theme === "light" ? "text-black" : "text-cream"}`}
                  >
                    {link.title}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm ${theme === "light" ? "text-black/70" : "text-cream/70"} mb-2 sm:mb-3`}
                  >
                    {link.value}
                  </p>
                  <span
                    className={`${
                      theme === "light" ? `text-${link.color}` : `text-${link.color}`
                    } text-xs sm:text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold`}
                  >
                    Connect <ExternalLink className="h-3 w-3" />
                  </span>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
