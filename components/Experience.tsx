"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Database, BarChart, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useTheme } from "./theme-provider"

const experienceData = [
  {
    title: "Software Engineer",
    company: "Binghamton University",
    location: "Binghamton, NY",
    date: "Mar 2024 – Present",
    color: "red",
    logo: "🏛️",
    overview:
      "Designed and built custom web applications with React.js, Redux, Python, and Flask, achieving 95% user satisfaction and recognition from the American Physical Therapy Association.",
    categories: [
      {
        title: "Frontend Development",
        icon: <Code className="h-5 w-5" />,
        points: [
          "Designed an interactive dashboard with React.js, Redux, JavaScript, and Bootstrap",
          "Built wireframes in Figma, applying UI/UX principles and responsive design",
          "Implemented efficient state management with Redux for complex application flows",
        ],
      },
      {
        title: "Backend Integration",
        icon: <Database className="h-5 w-5" />,
        points: [
          "Developed an end-to-end Evaluation System using Python, Flask, and MySQL",
          "Automated data pipelines with Python, Pandas, and RESTful APIs",
          "Integrated 5,000+ records from Google Sheets to SQL databases using JSON",
        ],
      },
      {
        title: "Project Management",
        icon: <BarChart className="h-5 w-5" />,
        points: [
          "Expanded the project to 5 divisions, hosted on university servers",
          "Managed Git version control and tested REST APIs with Postman",
          "Leveraged Graphene, Mustache.js, and Ractive.js for enhanced functionality",
        ],
      },
    ],
    technologies: ["React.js", "Redux", "Python", "Flask", "MySQL", "Figma", "REST APIs", "Git"],
  },
  {
    title: "SWE Intern",
    company: "Nourishing Schools Foundation",
    location: "Virginia, USA",
    date: "Mar 2022 – June 2022",
    color: "blue",
    logo: "🌱",
    overview:
      "Developed a Single Page Application dashboard for children aged 4-12 years, optimizing performance and ensuring cross-browser compatibility.",
    categories: [
      {
        title: "Application Development",
        icon: <Code className="h-5 w-5" />,
        points: [
          "Developed a Single Page Application dashboard using React.js and Node.js",
          "Implemented responsive design with Tailwind CSS for all device sizes",
          "Created interactive educational components for young users",
        ],
      },
      {
        title: "Performance Optimization",
        icon: <BarChart className="h-5 w-5" />,
        points: [
          "Optimized front-end performance with lazy loading and code splitting",
          "Reduced load times by 30% through minification and asset optimization",
          "Implemented efficient data fetching patterns to minimize API calls",
        ],
      },
      {
        title: "Quality Assurance",
        icon: <Database className="h-5 w-5" />,
        points: [
          "Conducted cross-browser testing and debugging using Postman",
          "Utilized Chrome DevTools and Lighthouse for performance auditing",
          "Implemented automated testing for critical user flows",
        ],
      },
    ],
    technologies: ["React.js", "Node.js", "Tailwind CSS", "Chrome DevTools", "Lighthouse", "Postman"],
  },
  {
    title: "Technical Research and Design Intern",
    company: "FACE prep",
    location: "Coimbatore, India",
    date: "Oct 2021 – Dec 2021",
    color: "green",
    logo: "🎓",
    overview:
      "Engineered a full-stack web application with Java and MySQL, enhancing frontend functionality and implementing SEO best practices.",
    categories: [
      {
        title: "Backend Development",
        icon: <Database className="h-5 w-5" />,
        points: [
          "Engineered a full-stack web application built with Java and MySQL",
          "Designed ERDs with optimized schema for educational data",
          "Implemented secure authentication and authorization systems",
        ],
      },
      {
        title: "Frontend Enhancement",
        icon: <Code className="h-5 w-5" />,
        points: [
          "Enhanced frontend functionality using jQuery, Bootstrap, and TypeScript",
          "Improved responsiveness and user engagement through interactive elements",
          "Developed custom UI components for educational content delivery",
        ],
      },
      {
        title: "SEO & Design",
        icon: <BarChart className="h-5 w-5" />,
        points: [
          "Implemented SEO best practices with meta optimizations and structured data",
          "Improved page speed, increasing organic traffic and visibility",
          "Streamlined UI/UX workflows in Figma, driving 50% increase in engagement",
        ],
      },
    ],
    technologies: ["Java", "MySQL", "jQuery", "Bootstrap", "TypeScript", "Figma", "SEO"],
  },
]

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const { theme } = useTheme()

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6" ref={ref}>
        <h2
          className={`text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center transition-all duration-700 font-georgia ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Professional Experience
        </h2>
        <div className="space-y-8 sm:space-y-12">
          {experienceData.map((job, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card
                className={`${
                  theme === "light"
                    ? `bg-${job.color}/20 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black`
                    : `bg-dark border-2 border-${job.color}/30 hover:border-${job.color} hover:shadow-[0_0_15px_rgba(var(--${job.color}-rgb),0.5)] hover:bg-dark-light`
                } group overflow-hidden transition-all duration-500 card-hover-effect`}
              >
                <CardHeader className="relative z-10 pb-2 sm:pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div
                        className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${
                          theme === "light" ? `bg-${job.color} text-white` : `bg-${job.color}/10`
                        } text-xl sm:text-2xl transition-all duration-300 group-hover:scale-110`}
                      >
                        {job.logo}
                      </div>
                      <div>
                        <CardTitle
                          className={`text-base sm:text-lg md:text-xl font-bold ${
                            theme === "dark" ? `text-${job.color}` : "text-black"
                          } transition-colors duration-300`}
                        >
                          {job.title} at {job.company}
                        </CardTitle>
                        <p
                          className={`text-xs sm:text-sm ${theme === "light" ? "text-black/70" : "text-cream/60"} mt-1`}
                        >
                          {job.location} | {job.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10 pt-0">
                  <p
                    className={`mb-4 sm:mb-6 ${theme === "light" ? "text-black/90" : "text-cream/80"} text-xs sm:text-sm md:text-base`}
                  >
                    {job.overview}
                  </p>

                  {/* Desktop view for categories */}
                  <div className="hidden md:grid md:grid-cols-3 gap-4 mb-6">
                    {job.categories.map((category, catIndex) => (
                      <div
                        key={catIndex}
                        className={`p-3 sm:p-4 rounded-lg ${
                          theme === "light" ? `bg-${job.color}/30 border border-black` : "bg-dark-light"
                        } transition-all duration-300 transform group-hover:translate-y-[-5px]`}
                        style={{ transitionDelay: `${catIndex * 100}ms` }}
                      >
                        <div className="flex items-center gap-2 mb-2 sm:mb-3">
                          <div className={`${theme === "light" ? `text-${job.color}` : `text-${job.color}`}`}>
                            {category.icon}
                          </div>
                          <h3
                            className={`font-semibold ${theme === "light" ? "text-black" : "text-cream"} text-xs sm:text-sm`}
                          >
                            {category.title}
                          </h3>
                        </div>
                        <ul className="space-y-1 sm:space-y-2">
                          {category.points.map((point, pointIndex) => (
                            <li
                              key={pointIndex}
                              className={`flex items-start gap-1 sm:gap-2 text-xs ${
                                theme === "light" ? "text-black/80" : "text-cream/80"
                              }`}
                            >
                              <span className={`${theme === "light" ? `text-${job.color}` : `text-${job.color}`} mt-1`}>
                                ✦
                              </span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Mobile view for categories - accordion style */}
                  <div className="md:hidden space-y-3 mb-4">
                    {job.categories.map((category, catIndex) => (
                      <details key={catIndex} className="group">
                        <summary
                          className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${
                            theme === "light" ? `bg-${job.color}/30 border border-black` : "bg-dark-light"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <div className={`${theme === "light" ? `text-${job.color}` : `text-${job.color}`}`}>
                              {category.icon}
                            </div>
                            <h3 className={`font-semibold ${theme === "light" ? "text-black" : "text-cream"} text-xs`}>
                              {category.title}
                            </h3>
                          </div>
                          <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                        </summary>
                        <ul className="space-y-1 p-2 mt-1">
                          {category.points.map((point, pointIndex) => (
                            <li
                              key={pointIndex}
                              className={`flex items-start gap-1 text-xs ${
                                theme === "light" ? "text-black/80" : "text-cream/80"
                              }`}
                            >
                              <span className={`${theme === "light" ? `text-${job.color}` : `text-${job.color}`} mt-1`}>
                                ✦
                              </span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </details>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1 sm:gap-2 mt-4">
                    {job.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        className={`${
                          theme === "light"
                            ? `bg-${job.color} text-white border border-black`
                            : `bg-${job.color}/10 text-${job.color}`
                        } transition-all duration-300 transform group-hover:scale-105 text-xs`}
                        style={{ transitionDelay: `${i * 50}ms` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div
          className={`mt-8 sm:mt-12 text-center transition-all duration-700 delay-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Button
            asChild
            className={`${
              theme === "light"
                ? "bg-red text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
                : "bg-red hover:bg-red/80 text-white"
            } font-medium px-4 py-3 sm:px-6 sm:py-6 rounded-lg transition-all duration-300`}
          >
            <Link href={`/projects?theme=${theme}`}>
              View All My Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Experience
