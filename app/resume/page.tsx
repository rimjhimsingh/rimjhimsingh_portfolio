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
                  href="https://drive.google.com/file/d/1KVl_FgQjrfS9he6ad87S59sAToZ--icI/view?usp=sharing"
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
                USA, Open to Relocation | (607) 296-9734 | rimjhimsingh5232@gmail.com
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

            {/* Professional Summary */}
            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-red">PROFESSIONAL SUMMARY</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Full-stack Software Developer skilled in React, Flask, and MySQL. Engineered scalable university systems
                automating 10K+ records and boosting efficiency by 80%. Recognized for a strong UI/UX mindset,
                data-driven problem-solving, and building innovative, reliable solutions.
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
                  Analysis of Computer Algorithms, Computer Security, Programming Languages, Design Patterns, Machine
                  Learning, Artificial Intelligence, Data Mining, Research
                </p>
              </div>
            </section>

            {/* Technical Skills */}
            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-red">TECHNICAL SKILLS</h3>
              <div className="space-y-2">
                <p>
                  <strong>Languages:</strong> JavaScript, TypeScript, Python, Java, HTML5, CSS3, C#
                </p>
                <p>
                  <strong>Frameworks/Libraries:</strong> React.js, Next.js, Redux, Node.js, LangChain, Bootstrap,
                  Tailwind CSS, Material-UI
                </p>
                <p>
                  <strong>Databases:</strong> SQL, PostgreSQL, NoSQL, Pinecone
                </p>
                <p>
                  <strong>Cloud/DevOps:</strong> Docker, Kubernetes, Google Cloud Platform, Terraform, Vertex AI, CI/CD
                </p>
                <p>
                  <strong>AI & Automation Tools:</strong> OpenAI API, Hugging Face, GitHub Copilot, Zapier, Vercel AI
                  SDK, API Integration
                </p>
                <p>
                  <strong>Tools:</strong> Git, GitHub, Postman, Webpack, Parcel, Figma
                </p>
                <p>
                  <strong>Technologies:</strong> RESTful APIs, GraphQL, JSON, AJAX, OAuth, State Management, LLM
                  Integration, UI/UX, Wireframing, Responsive Web Design, Accessibility, Cross-Browser Compatibility,
                  Performance Optimization, Agile
                </p>
                <p>
                  <strong>Certifications:</strong>{" "}
                  <a
                    href="https://www.coursera.org/account/accomplishments/specialization/certificate/36TPNTC5UW6H"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue hover:underline"
                  >
                    Graphic Design Specialization (CalArts)
                  </a>
                  ,{" "}
                  <a
                    href="https://www.coursera.org/account/accomplishments/specialization/certificate/W6BUVHC77VFC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green hover:underline"
                  >
                    Google Data Analytics (Google)
                  </a>
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
                    Owned end-to-end delivery of a Full Stack Competency-Based Evaluation System from proof of concept
                    to launch using Python (Flask), MySQL, and React.js, reducing manual processing time by 80%, hosted
                    live on university servers for use.
                  </li>
                  <li>
                    Achieved 95% user satisfaction by building scalable dashboard UI/UX with Figma, React.js, Redux,
                    AJAX, and Bootstrap.
                  </li>
                  <li>
                    Built RESTful APIs and automated ETL pipelines for 10,000+ records, with monitoring to ensure
                    reliability and data integrity.
                  </li>
                  <li>
                    Optimized application responsiveness and performance by 40% using React.memo, code splitting, and
                    performance profiling.
                  </li>
                  <li>
                    Managed codebase with Git, implemented CI/CD, and ensured quality via API testing with Postman.
                  </li>
                  <li>
                    Presented project lifecycle and impact to 100+ stakeholders, including faculty and board members.
                  </li>
                  <li>
                    Obtained project funding from the American Physical Therapy Association by leading grant writing and
                    cross-team collaboration.
                  </li>
                </ul>
              </div>

              {/* Nourishing Schools Foundation */}
              <div className="mb-6">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold">Nourishing Schools Foundation</h4>
                  <span className="text-gray-600 dark:text-gray-300">Virginia, USA</span>
                </div>
                <div className="flex justify-between items-start">
                  <p className="italic">Software Engineer Intern</p>
                  <span className="text-gray-600 dark:text-gray-300">Mar 2022 – Jun 2022</span>
                </div>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    Developed and maintained a responsive Single Page Application using React.js, Tailwind CSS, and AJAX
                    to deliver a game-style dashboard for children aged 4–12 years.
                  </li>
                  <li>
                    Designed UI in Figma and translated wireframes into accessible front end architecture using React
                    components.
                  </li>
                  <li>
                    Implemented backend services and API integrations to support real-time data updates and seamless
                    user experiences.
                  </li>
                  <li>
                    Conducted cross-browser and mobile-first testing using Postman and Chrome DevTools, ensuring
                    application responsiveness.
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
                    Led the design and implementation of an adaptive web app using JavaScript, Bootstrap, and MySQL for
                    backend data.
                  </li>
                  <li>
                    Reduced load times by 20% by integrating RESTful APIs, efficient error handling and request
                    throttling.
                  </li>
                  <li>
                    Enhanced application visibility by improving SEO through structured data, semantic HTML, and meta
                    tag optimization.
                  </li>
                  <li>
                    Collaborated with cross-functional teams, maintained thorough project documentation, and
                    demonstrated strong communication.
                  </li>
                </ul>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h3 className="text-xl font-bold mb-4 text-red">PROJECTS</h3>

              {/* DelishDish */}
              <div className="mb-4">
                <h4 className="font-bold">DelishDish – Real-Time Food Finder:</h4>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    Developed a React.js web app displaying 10,000+ restaurants in real time using live API data and
                    modular components, including automated monitoring for uptime and performance metrics.
                  </li>
                  <li>
                    Enhanced UI performance and engagement by integrating Material-UI, custom hooks, and optimized state
                    management.
                  </li>
                </ul>
              </div>

              {/* ImageExplorer */}
              <div className="mb-4">
                <h4 className="font-bold">ImageExplorer – Full-Stack Web Crawler:</h4>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    Built a multithreaded Java crawler to process 500+ web pages; visualized dynamic data with a
                    responsive JavaScript front end.
                  </li>
                  <li>
                    Integrated secure cross-origin data handling and Dockerized backend microservices with API
                    integration for robust deployment.
                  </li>
                </ul>
              </div>

              {/* Patient Health Dashboard */}
              <div className="mb-4">
                <h4 className="font-bold">Patient Health Dashboard:</h4>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    Engineered a responsive React and Tailwind dashboard aggregating real-time data from multiple
                    healthcare APIs.
                  </li>
                  <li>
                    Visualized key trends with Chart.js and ensured data security via authentication and encrypted API
                    calls.
                  </li>
                </ul>
              </div>

              {/* Digital Toll Tax Calculator */}
              <div>
                <h4 className="font-bold">Digital Toll Tax Calculator:</h4>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    Automated toll collection with 90%+ accuracy using Python-Flask and license plate image processing.
                  </li>
                  <li>
                    Built an admin dashboard (Bootstrap) for real-time traffic monitoring and SQL-backed data, with
                    RESTful APIs for extensibility.
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
