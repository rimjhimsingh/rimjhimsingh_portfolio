"use client"

import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTheme } from "./theme-provider"
import { ChevronDown, ChevronUp, Code, Database, Palette, Users, ClipboardList } from "lucide-react"

const skillsData = [
  {
    title: "Software Development",
    icon: "💻",
    color: "purple",
    description:
      "Proficient in Java, Python, C, C++, and R with advanced expertise in building complex applications and systems.",
    details:
      "Expert in developing robust end-to-end systems, automating data pipelines, and implementing efficient multi-threaded architectures for optimal performance and scalability.",
    lucideIcon: <Code className="h-6 w-6" />,
    technologies: ["Java", "Python", "C/C++", "R", "Multi-threading", "System Design"],
  },
  {
    title: "Web Development",
    icon: "🌐",
    color: "blue",
    description:
      "Accomplished full-stack developer with mastery of React.js, Node.js, TypeScript, Bootstrap, Django, and Flask.",
    details:
      "Specializing in creating highly interactive interfaces with consistently high user satisfaction ratings. Skilled in performance optimization techniques that significantly reduce load times and enhance user experience.",
    lucideIcon: <Code className="h-6 w-6" />,
    technologies: ["React.js", "Node.js", "TypeScript", "Bootstrap", "Django", "Flask"],
  },
  {
    title: "Data Science",
    icon: "📊",
    color: "green",
    description: "Advanced understanding of data analysis, database management, and machine learning principles.",
    details:
      "Proficient in working with SQL, MongoDB, ElasticSearch, and TensorFlow frameworks. Expert in designing and implementing sophisticated data pipelines that handle large volumes of data with precision and efficiency.",
    lucideIcon: <Database className="h-6 w-6" />,
    technologies: ["SQL", "MongoDB", "ElasticSearch", "TensorFlow", "Data Analysis", "Machine Learning"],
  },
  {
    title: "UI/UX Design",
    icon: "🎨",
    color: "pink",
    description:
      "Exceptional talent for wireframing, applying UI/UX principles, and creating responsive designs that captivate users.",
    details:
      "Masterful at building intuitive interfaces, streamlining user workflows, and creating design systems that consistently drive significant increases in user engagement and satisfaction.",
    lucideIcon: <Palette className="h-6 w-6" />,
    technologies: ["Figma", "Adobe XD", "Wireframing", "Responsive Design", "User Testing", "Design Systems"],
  },
  {
    title: "Leadership & Communication",
    icon: "👥",
    color: "yellow",
    description: "Outstanding written and verbal communication skills with proven ability to lead and motivate teams.",
    details:
      "Demonstrated excellence in team management, stakeholder communication, and public engagement. Capable of effectively conveying complex technical concepts to diverse audiences.",
    lucideIcon: <Users className="h-6 w-6" />,
    technologies: [
      "Team Leadership",
      "Public Speaking",
      "Technical Writing",
      "Stakeholder Management",
      "Mentoring",
      "Conflict Resolution",
    ],
  },
  {
    title: "Organization & Project Management",
    icon: "📝",
    color: "orange",
    description:
      "Expert in Agile methodologies with exceptional organizational skills using advanced tools like Notion.",
    details:
      "Highly skilled at managing complex technical workflows from conception to deployment, consistently delivering high-quality results on schedule through meticulous planning and effective resource allocation.",
    lucideIcon: <ClipboardList className="h-6 w-6" />,
    technologies: ["Agile", "Scrum", "Kanban", "Notion", "JIRA", "Resource Planning"],
  },
]

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const { theme } = useTheme()
  const [expandedSkill, setExpandedSkill] = useState<number | null>(null)

  const toggleSkill = (index: number) => {
    if (expandedSkill === index) {
      setExpandedSkill(null)
    } else {
      setExpandedSkill(index)
    }
  }

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-muted/50 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6" ref={ref}>
        <h2
          className={`text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center transition-all duration-700 font-georgia ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className={`transition-all duration-700 transform ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card
                className={`h-full ${
                  theme === "light"
                    ? `bg-${skill.color}/20 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black`
                    : `bg-dark border-2 border-${skill.color}/30 hover:border-${skill.color} hover:shadow-[0_0_15px_rgba(var(--${skill.color}-rgb),0.5)] hover:bg-dark-light`
                } overflow-hidden transition-all duration-500 relative group cursor-pointer`}
                onClick={() => toggleSkill(index)}
              >
                <CardHeader className="relative z-10 pb-2 sm:pb-3 flex flex-row items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div
                      className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${
                        theme === "light" ? `bg-${skill.color} text-white` : `bg-${skill.color}/10`
                      } text-xl sm:text-2xl transition-all duration-300 group-hover:scale-110`}
                    >
                      {skill.icon}
                    </div>
                    <CardTitle
                      className={`text-sm sm:text-base md:text-lg font-bold ${theme === "dark" ? `text-${skill.color}` : "text-black"}`}
                    >
                      {skill.title}
                    </CardTitle>
                  </div>
                  <div
                    className={`${theme === "light" ? `text-${skill.color}` : `text-${skill.color}`} transition-transform duration-300 ${expandedSkill === index ? "rotate-180" : ""}`}
                  >
                    {expandedSkill === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </div>
                </CardHeader>

                <CardContent className="relative z-10 pt-0">
                  <p className={`${theme === "light" ? "text-black/90" : "text-cream/80"} mb-4 text-xs sm:text-sm`}>
                    {skill.description}
                  </p>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      expandedSkill === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div
                      className={`p-3 sm:p-4 rounded-lg ${theme === "light" ? `bg-${skill.color}/30 border border-black` : "bg-dark-light"} mb-4`}
                    >
                      <p className={`${theme === "light" ? "text-black/90" : "text-cream/90"} text-xs`}>
                        {skill.details}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1 sm:gap-2 mt-3 sm:mt-4">
                      {skill.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-2 py-1 rounded-full text-xs ${
                            theme === "light"
                              ? `bg-${skill.color} text-white border border-black`
                              : `bg-${skill.color}/10 text-${skill.color}`
                          } transition-all duration-300 transform hover:scale-105 skill-badge`}
                          style={{ transitionDelay: `${i * 50}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Skill level indicator that animates on hover */}
                  <div
                    className={`mt-3 sm:mt-4 h-1.5 w-full ${theme === "light" ? "bg-black/10" : "bg-dark-light"} rounded-full overflow-hidden ${
                      expandedSkill === index ? "opacity-0" : "opacity-100"
                    } transition-opacity duration-300`}
                  >
                    <div
                      className={`h-full ${theme === "light" ? `bg-${skill.color}` : `bg-${skill.color}`} transition-all duration-1000 ease-out rounded-full group-hover:w-full`}
                      style={{
                        width: isInView ? "85%" : "0%",
                        transitionDelay: `${index * 100 + 300}ms`,
                      }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Floating animation for the skills section - with added padding */}
        <div className="relative h-24 sm:h-32 mt-10 sm:mt-16 pt-8 overflow-hidden">
          <div className="flex flex-wrap justify-center gap-2">
            {["JavaScript", "React", "Python", "Java", "TypeScript", "Node.js", "SQL", "MongoDB", "HTML/CSS"].map(
              (tech, index) => (
                <div
                  key={index}
                  className={`px-2 py-1 sm:px-3 sm:py-2 rounded-full text-xs ${
                    theme === "light"
                      ? `bg-${["red", "blue", "green", "yellow", "pink", "purple", "orange"][index % 7]} text-white border border-black`
                      : `bg-${["red", "blue", "green", "yellow", "pink", "purple", "orange"][index % 7]}/10 text-${["red", "blue", "green", "yellow", "pink", "purple", "orange"][index % 7]}`
                  } animate-float`}
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    opacity: isInView ? 1 : 0,
                    transform: `translateY(${isInView ? "0" : "20px"})`,
                    transition: "opacity 0.5s ease, transform 0.5s ease",
                    transitionDelay: `${index * 0.1}s`,
                  }}
                >
                  {tech}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
