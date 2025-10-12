"use client"

import { useState, useEffect } from "react"
import { useTheme } from "./theme-provider"

const testimonials = [
  {
    title: "Making the web a better place, one div at a time",
    name: "Weapons of Choice: React.js | Java | Python",
    text: "Crafting digital experiences so smooth you'll forget they're made of code. Solving complex problems with elegant solutions since breakfast.",
    color: "yellow",
    accent: "white",
  },
  {
    title: "Project Impact",
    name: "Measurable Results",
    text: "Developed interactive dashboards with 95% user satisfaction, automated data pipelines integrating 5,000+ records, and optimized front-end performance reducing load times by 30%.",
    color: "green",
    accent: "blue",
  },
  {
    title: "Education & Experience",
    name: "MS Computer Science",
    text: "Master's degree from Binghamton University with professional experience in software engineering at university projects and industry internships like Nourishing Schools Foundation.",
    color: "red",
    accent: "pink",
  },
]

const TestimonialCards = () => {
  const [loaded, setLoaded] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div className="relative h-[300px] w-full max-w-md mx-auto">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`absolute w-full rounded-xl p-6 shadow-xl transition-all duration-1000 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundColor: getColor(testimonial.color),
            transform: loaded ? `rotate(${index * 5 - 5}deg) translateX(${index * 20}px)` : "rotate(0) translateX(0)",
            zIndex: testimonials.length - index,
            top: index * 15,
            right: index * 10,
            transitionDelay: `${index * 200}ms`,
          }}
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 font-georgia">{testimonial.title}</h3>
            <p className="text-base sm:text-lg font-medium text-gray-800">{testimonial.name}</p>
          </div>
          <div className="mt-4 text-gray-800">
            <p className="text-sm sm:text-base leading-relaxed font-medium">{testimonial.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function getColor(color: string): string {
  switch (color) {
    case "yellow":
      return "#FFD166" // Softer yellow
    case "green":
      return "#06D6A0" // Vibrant mint
    case "red":
      return "#EF476F" // Softer red/pink
    case "blue":
      return "#118AB2" // Ocean blue
    case "purple":
      return "#9D4EDD" // Vibrant purple
    case "pink":
      return "#FF6B95" // Soft pink
    default:
      return "#FFD166"
  }
}

export default TestimonialCards
