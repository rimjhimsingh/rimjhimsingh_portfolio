import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const projectsData = [
  {
    title: "DelishDish: Real-Time Food Finder",
    description: "A responsive food application using React.js, Swiggy APIs, and GitHub API for real-time updates.",
    github: "https://github.com/rimjhimsingh/Learning-React.js",
    demo: "https://delishdish-demo.com",
  },
  {
    title: "ImageExplorer: Web Crawler",
    description:
      "A full-stack web crawler with Java, implementing CORS and HTTP protocols for secure cross-origin access.",
    github: "https://github.com/rimjhimsingh/web-scraper",
    demo: "https://web-scraper-zzf2.onrender.com/index.html",
  },
  {
    title: "DTTC: Digital Toll Tax Calculator",
    description:
      "A toll tax collection system using Python, Flask, SQL, JQuery and Bootstrap for automated toll processing.",
    github: "https://github.com/rimjhimsingh/Digital-Toll-Tax-Calculator-DTTC",
    demo: "https://dttc-demo.com",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-pastel-primary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-pastel-text mb-8 text-center">Project Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <Card key={index} className="bg-pastel-secondary">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-pastel-text">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pastel-text">{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
