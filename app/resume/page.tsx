"use client"

import { useTheme } from "@/components/theme-provider"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Download, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function ResumePage() {
  const { theme } = useTheme()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-[#f5f2e8] dark:bg-background text-foreground transition-colors duration-300">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 py-20 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold font-georgia">Resume</h1>
            <div className="flex gap-3">
              <Button
                asChild
                className={`${
                  theme === "light"
                    ? "bg-white text-black border-2 border-black hover:bg-gray-100"
                    : "bg-dark-light text-white hover:bg-dark-light/80"
                }`}
              >
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Link>
              </Button>
              <Button asChild className="bg-red hover:bg-red/80 text-white">
                <a
                  href="https://drive.google.com/file/d/1v4XOiFfFYz_qHKjq0zas8Cs4PwYOpMmn/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" /> Download PDF
                </a>
              </Button>
            </div>
          </div>

          <div
            className={`bg-white dark:bg-dark-light rounded-lg shadow-lg p-8 transition-all duration-500 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Header */}
            <div className="text-center mb-8 pb-6 border-b dark:border-gray-700">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-red">Rimjhim Singh</h2>
              <p className="text-gray-600 dark:text-gray-300">
                San Jose, CA | (607) 296-9734 | rimjhimsingh5232@gmail.com
              </p>
              <div className="flex justify-center gap-4 mt-2">
                <a
                  href="https://www.linkedin.com/in/rimjhim--singh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue hover:underline"
                >
                  LinkedIn
                </a>
                <span className="text-gray-400">|</span>
                <a
                  href="https://github.com/rimjhimsingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple hover:underline"
                >
                  GitHub
                </a>
                <span className="text-gray-400">|</span>
                <a href="/" className="text-green hover:underline">
                  Portfolio
                </a>
              </div>
            </div>

            {/* Summary */}
            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-red">SUMMARY</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Software Developer with 1.5+ years of experience in full-cycle application design and development. A
                creative problem-solver dedicated to building, scaling, and optimizing impactful, metric-driven software
                solutions from end-to-end.
              </p>
            </section>

            {/* Education */}
            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-red">EDUCATION</h3>
              <div className="mb-4">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold">Binghamton University</h4>
                  <span className="text-gray-600 dark:text-gray-300">New York, USA</span>
                </div>
                <div className="flex justify-between items-start">
                  <p className="italic">Master of Science - Computer Science</p>
                  <span className="text-gray-600 dark:text-gray-300">May 2025</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                  <strong>Coursework:</strong> (GPA: 3.81/4.0) - Operating Systems, Systems Programming, Design &
                  Analysis of Algorithms, Computer Security, Programming Languages, Design Patterns, ML, Artificial
                  Intelligence, Data Mining, Research
                </p>
              </div>
            </section>

            {/* Technical Skills */}
            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-red">TECHNICAL SKILLS</h3>
              <div className="space-y-2">
                <p>
                  <strong>Programming Languages:</strong> JavaScript (ES6+), TypeScript, Python, Java, C++, SQL, HTML5,
                  CSS3
                </p>
                <p>
                  <strong>Frameworks & Libraries:</strong> React.js, Redux, Node.js, Express.js, Next.js, Spring Boot,
                  TailwindCSS, Jest, Babel
                </p>
                <p>
                  <strong>Backend & APIs:</strong> RESTful APIs, GraphQL, JWT Auth, Serverless Functions (AWS Lambda),
                  WebSockets
                </p>
                <p>
                  <strong>Databases & Caching:</strong> PostgreSQL, MySQL, MongoDB, Redis, Firebase Realtime DB
                </p>
                <p>
                  <strong>Cloud & DevOps:</strong> AWS EC2, Docker, Kubernetes, GCP, Unix/Linux Environments, GitHub
                  Actions, CI/CD Pipelines
                </p>
                <p>
                  <strong>Tools:</strong> Git, GitHub, npm, Webpack, Figma, Postman, Selenium, VS Code, OpenAI API,
                  GitHub Copilot
                </p>
              </div>
            </section>

            {/* Professional Experience */}
            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-red">PROFESSIONAL EXPERIENCE</h3>

              {/* Binghamton University */}
              <div className="mb-6">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold">Binghamton University</h4>
                  <span className="text-gray-600 dark:text-gray-300">Binghamton, NY</span>
                </div>
                <div className="flex justify-between items-start">
                  <p className="italic">Software Engineer</p>
                  <span className="text-gray-600 dark:text-gray-300">Mar 2024 – Present</span>
                </div>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    Replaced a $30K/year legacy tool with a full-stack evaluation system (Flask, React, MySQL),
                    automating data migration from Google Sheets to MySQL to reduce faculty data entry time by 80% and
                    scale across 5 departments.
                  </li>
                  <li>
                    Achieved 95% user satisfaction (surveyed 120 users) with an interactive React + Chart.js dashboard,
                    enabling students to track personalized competency trends and providing faculty a first-ever tool to
                    visualize specific student coaching needs.
                  </li>
                  <li>
                    Engineered an AI semantic search by integrating the OpenAI API with the Flask backend, to query
                    student data via natural language and reducing complex trend analysis from hours to seconds.
                  </li>
                  <li>
                    Improved Lighthouse score by 40% via profiling, React.memo, code splitting, & component lazy
                    loading.
                  </li>
                  <li>
                    Cut deploy failures by 75% by building a CI/CD pipeline (GitHub Actions) that automated pytest &
                    linting for internal servers.
                  </li>
                  <li>
                    Secured grant funding from the American Physical Therapy Association and a university-wide rollout
                    by presenting project outcomes and metrics to a 100+ member board.
                  </li>
                </ul>
              </div>

              {/* Nourishing Schools Foundation */}
              <div className="mb-6">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold">Nourishing Schools Foundation</h4>
                  <span className="text-gray-600 dark:text-gray-300">Bangalore, India</span>
                </div>
                <div className="flex justify-between items-start">
                  <p className="italic">Software Engineer Intern</p>
                  <span className="text-gray-600 dark:text-gray-300">Mar 2022 – Jun 2022</span>
                </div>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    Designed (Figma) and built a game-style SPA (React, Tailwind) for a 500+ student pilot (ages 4-12)
                    across 3 schools, achieving full WCAG 2.1 AA compliance.
                  </li>
                  <li>
                    Engineered the backend game logic (Node.js, REST APIs) to validate student choices (e.g., selecting
                    healthy ingredients) and guide users through the educational recipe-building module.
                  </li>
                  <li>
                    Ensured a successful day-one launch by authoring an API integration test suite (Postman) that caught
                    critical bugs pre-production and performing rigorous low-bandwidth & cross-browser testing.
                  </li>
                </ul>
              </div>

              {/* FACE prep */}
              <div className="mb-6">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold">FACE prep</h4>
                  <span className="text-gray-600 dark:text-gray-300">Coimbatore, India</span>
                </div>
                <div className="flex justify-between items-start">
                  <p className="italic">Technical Research and Design Intern</p>
                  <span className="text-gray-600 dark:text-gray-300">Oct 2021 – Dec 2021</span>
                </div>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    Led full-stack enhancements (JavaScript, MySQL) for a data-driven web app to deliver dynamic,
                    mobile-friendly content.
                  </li>
                  <li>
                    Cut page load times by 20% by normalizing the MySQL schema, optimizing SQL queries, and implementing
                    API pagination.
                  </li>
                  <li>
                    Lifted organic traffic by 15% by refactoring legacy pages and implementing structured data and
                    semantic HTML.
                  </li>
                </ul>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h3 className="text-xl font-bold mb-4 text-red">PROJECTS</h3>

              {/* Netflix-GPT */}
              <div className="mb-4">
                <h4 className="font-bold">Netflix-GPT – AI-Powered Movie Recommender:</h4>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    Built a full-stack, AI-powered recommender (React, Redux, Tailwind) integrating OpenAI GPT-3.5 and
                    TMDB APIs.
                  </li>
                  <li>
                    Engineered a scalable UI with reusable Redux slices and secured Firebase Auth (incl. Google OAuth).
                  </li>
                  <li>
                    Boosted API and route performance by 35% using Redis caching, memoized hooks, and lazy loading.
                  </li>
                  <li>
                    Deployed on AWS EC2 with Docker and automated the CI/CD pipeline using GitHub Actions for
                    zero-downtime rollouts.
                  </li>
                </ul>
              </div>

              {/* DelishDish */}
              <div>
                <h4 className="font-bold">DelishDish – Real-Time Restaurant Discovery Platform:</h4>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    Designed a real-time restaurant discovery app with dynamic search/filtering using React, Redux
                    Toolkit, and TailwindCSS.
                  </li>
                  <li>
                    Improved load performance by 45% by architecting a reusable UI with custom hooks for API fetching
                    and caching.
                  </li>
                  <li>
                    Normalized state & memoized selectors to eliminate re-renders, ensuring snappy search/PDP/checkout
                    (verified React Profiler).
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
