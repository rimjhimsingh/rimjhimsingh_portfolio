"use client"

import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import { useTheme } from "./theme-provider"

// Project categories
const categories = [
  { id: "all", name: "All Projects" },
  { id: "fullstack", name: "Full Stack Development" },
  { id: "web", name: "Web Development" },
  { id: "ai", name: "AI & Machine Learning" },
  { id: "security", name: "Security & Encryption" },
  { id: "algorithms", name: "Algorithms & Data Structures" },
  { id: "systems", name: "Systems Programming" },
  { id: "games", name: "Games & Interactive" },
]

const projectsData = [
  // Full Stack Development
  {
    title: "Forest Journal - Mindful Habit Tracker",
    overview:
      "A beautiful, minimalist habit tracking application with React, TypeScript, and Supabase that helps users build positive habits, stay hydrated, and maintain mindfulness through daily journaling.",
    github: "https://github.com/rimjhimsingh/sprout-growth-journal",
    demo: "https://sprout-growth-journal.vercel.app/",
    color: "green",
    logo: "🌿",
    skills: ["React.js", "TypeScript", "Supabase", "Tailwind CSS", "React Query", "Shadcn/ui", "PostgreSQL"],
    category: "fullstack",
    features: [
      "Visual habit tracking grid with daily check-ins",
      "Water intake tracker with daily goals",
      "Daily journal with mood tracking",
      "Statistics dashboard with completion rates",
      "Secure authentication via Supabase Auth",
      "Responsive design with forest theme",
    ],
  },
  {
    title: "Cozy Pomodoro Timer",
    overview:
      "A coffee shop-themed Pomodoro timer with pixel art aesthetics, featuring customizable work/break presets, ambient music, and session chimes for enhanced focus.",
    github: "https://github.com/rimjhimsingh/cozy-pomodoro",
    demo: "https://cozy-pomodoro.vercel.app/",
    color: "yellow",
    logo: "☕",
    skills: ["React.js", "Vite", "CSS3", "JavaScript", "Responsive Design"],
    category: "fullstack",
    features: [
      "Multiple work/break presets (50/10, 25/5, 90/20 minutes)",
      "Automatic phase toggling with session chimes",
      "Ambient music integration",
      "Pixel-art coffee shop aesthetic",
      "Keyboard shortcuts for quick controls",
      "Start/Pause/Reset functionality",
    ],
  },
  {
    title: "Patient Health Dashboard",
    overview:
      "A comprehensive dashboard designed to visualize patient health data such as blood pressure trends, diagnosis history, and lab results. The data is fetched from an external API and displayed interactively.",
    github: "https://github.com/rimjhimsingh/patient-dashboard",
    demo: "https://patient-health-dashboard-demo.com",
    color: "blue",
    logo: "🏥",
    skills: ["React.js", "API Integration", "JavaScript", "Tailwind CSS", "Chart.js", "Authentication"],
    category: "fullstack",
    features: [
      "Interactive data visualization with Chart.js",
      "Real-time API integration from 3+ healthcare APIs",
      "Responsive design for all devices",
      "Secure authentication with HTTPS and encrypted API calls",
      "Customizable dashboard widgets",
      "Dynamic state-based filtering",
    ],
  },
  {
    title: "HindKala: Bridging Tradition with Technology",
    overview:
      "An e-commerce platform showcasing and selling indigenous Indian art forms, connecting artisans directly with global buyers.",
    github: "https://github.com/rimjhimsingh/Hindkala",
    demo: "https://hindkala-demo.com",
    color: "pink",
    logo: "🎨",
    skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "WordPress", "MySQL", "PHP", "AWS"],
    category: "fullstack",
    features: [
      "User-friendly interface with state and art form categories",
      "Secure transaction processing",
      "Wishlist and cart functionality",
      "Blog section for cultural education",
      "Product reviews and ratings system",
      "Admin dashboard for inventory management",
    ],
  },
  {
    title: "DelishDish: Real-Time Food Finder",
    overview:
      "A responsive food application using React.js, Swiggy APIs, and GitHub API for real-time updates. Designed with modular, component-based architecture following DRY and Single Responsibility principles.",
    github: "https://github.com/rimjhimsingh/Learning-React.js",
    demo: "https://delishdish-demo.com",
    color: "orange",
    logo: "🍔",
    skills: ["React.js", "Redux", "Swiggy API", "Material-UI", "React Router", "State Management"],
    category: "fullstack",
    features: [
      "Real-time restaurant data from 10,000+ restaurants",
      "Location-based search functionality",
      "Menu browsing with filtering options",
      "User reviews and ratings",
      "Automated monitoring for uptime",
      "Optimized state management with Redux",
    ],
  },
  {
    title: "DTTC: Digital Toll Tax Calculator",
    overview:
      "A toll tax collection system using Python, Flask, SQL, jQuery and Bootstrap for automated toll processing. Integrated Image Processing and Recognition to scan vehicle license plates.",
    github: "https://github.com/rimjhimsingh/Digital-Toll-Tax-Calculator-DTTC",
    demo: "https://dttc-demo.com",
    color: "purple",
    logo: "🚗",
    skills: ["Python", "Flask", "SQL", "jQuery", "Bootstrap", "Image Processing", "RESTful APIs"],
    category: "fullstack",
    features: [
      "Automated license plate recognition with 90%+ accuracy",
      "Toll calculation based on vehicle type",
      "Admin dashboard for real-time monitoring",
      "Payment processing system",
      "Historical data analysis",
      "RESTful APIs for extensibility",
    ],
  },

  // AI & Machine Learning
  {
    title: "Multi-Agent Pacman Search",
    overview:
      "Designed intelligent agents for classic Pacman with adversarial search, implementing Minimax, Expectimax, and Alpha-Beta pruning algorithms with custom evaluation functions.",
    github: "https://github.com/rimjhimsingh/multi-agent-pacman",
    demo: "https://github.com/rimjhimsingh/multi-agent-pacman",
    color: "red",
    logo: "👾",
    skills: ["Python", "AI Algorithms", "Game Theory", "Minimax", "Alpha-Beta Pruning", "Expectimax"],
    category: "ai",
    features: [
      "Minimax algorithm for optimal adversarial decisions",
      "Alpha-Beta pruning for efficient tree search",
      "Expectimax for probabilistic ghost behavior",
      "Custom evaluation functions for state assessment",
      "Multi-agent coordination with multiple ghosts",
      "Performance optimization for real-time gameplay",
    ],
  },
  {
    title: "Pacman Pathfinding & Search Algorithms",
    overview:
      "Implemented comprehensive search algorithms (DFS, BFS, UCS, A*) to help Pacman navigate mazes efficiently and find optimal paths to collect food.",
    github: "https://github.com/rimjhimsingh/pacman-search",
    demo: "https://github.com/rimjhimsingh/pacman-search",
    color: "blue",
    logo: "🔍",
    skills: ["Python", "Search Algorithms", "Heuristics", "Graph Theory", "Data Structures", "A* Search"],
    category: "ai",
    features: [
      "Depth-First Search (DFS) implementation",
      "Breadth-First Search (BFS) for shortest paths",
      "Uniform Cost Search (UCS) for optimal solutions",
      "A* Search with Manhattan distance heuristic",
      "Custom heuristics for corners problem",
      "Food search optimization for efficient collection",
    ],
  },
  {
    title: "SmartCrop: AI-Powered Crop Recommendation",
    overview:
      "A predictive crop recommendation system that empowers Indian farmers to make data-driven agricultural decisions.",
    github: "https://github.com/rimjhimsingh/Crop_recommendation_system",
    demo: "https://croprecommendationsystem-dn7hmw8xqvnpo7uscir9dr.streamlit.app/",
    color: "green",
    logo: "🌾",
    skills: ["Streamlit", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "TensorFlow", "Keras"],
    category: "ai",
    features: [
      "Multiple ML models (Random Forest, SVM, XGBoost, Neural Networks)",
      "Interactive Streamlit dashboards for data visualization",
      "Comprehensive soil and rainfall analysis",
      "Region-specific recommendations",
      "Yield prediction capabilities",
      "Real-time model comparison",
    ],
  },
  {
    title: "Bubble Therapist",
    overview: "A conversational AI chatbot designed to provide therapeutic interactions and mental health support.",
    github: "https://github.com/rimjhimsingh/Bubble_Therapist",
    demo: "https://github.com/rimjhimsingh/Bubble_Therapist",
    color: "pink",
    logo: "💬",
    skills: ["Python", "JSON", "NLP", "Machine Learning", "Intent Recognition"],
    category: "ai",
    features: [
      "Intent recognition for therapeutic conversations",
      "Customizable training data",
      "Natural language understanding",
      "Executable as standalone application",
      "Jupyter notebook integration",
      "Context-aware responses",
    ],
  },
  {
    title: "Stock Market Prediction",
    overview:
      "Hybrid model for stock price prediction using both numerical analysis and sentiment analysis of news headlines.",
    github: "https://github.com/rimjhimsingh/The-Sparks-Foundation-task",
    demo: "https://github.com/rimjhimsingh/The-Sparks-Foundation-task",
    color: "yellow",
    logo: "📈",
    skills: ["Python", "Keras", "LSTM", "Scikit-learn", "NLTK", "TextBlob", "Pandas", "NumPy"],
    category: "ai",
    features: [
      "Historical price analysis with LSTM networks",
      "News sentiment analysis integration",
      "Multiple prediction models comparison",
      "Comprehensive visualization of results",
      "Backtesting capabilities",
      "Real-time prediction updates",
    ],
  },
  {
    title: "Classification Techniques on Adult Dataset",
    overview:
      "Implementation and analysis of various classification techniques applied to the Adult income prediction dataset.",
    github: "https://github.com/rimjhimsingh/classification-methods",
    demo: "https://github.com/rimjhimsingh/classification-methods",
    color: "orange",
    logo: "📊",
    skills: ["Python", "NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Data Analysis"],
    category: "ai",
    features: [
      "Multiple algorithms (KNN, Random Forest, Logistic Regression)",
      "Data preprocessing approaches",
      "Downsampling analysis",
      "Performance comparisons",
      "Feature importance visualization",
      "Model accuracy evaluation",
    ],
  },

  // Dimensionality Reduction
  {
    title: "Dimensionality Reduction Techniques",
    overview: "Implementation and analysis of dimensionality reduction techniques across three unique datasets.",
    github: "https://github.com/rimjhimsingh/dimensionality-reduction-techniques",
    demo: "https://github.com/rimjhimsingh/dimensionality-reduction-techniques",
    color: "pink",
    logo: "📉",
    skills: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-learn", "SciPy"],
    category: "ai",
    features: [
      "PCA, DCT, and ICA implementation",
      "Variance retention analysis",
      "Performance comparison across datasets",
      "Visualization of reduced dimensions",
      "Application to image compression",
      "Dense and sparse dataset support",
    ],
  },

  // Systems Programming
  {
    title: "Chat Daemon with FIFO IPC",
    overview:
      "A Unix daemon-based chat server using named pipes (FIFOs) for inter-process communication, implementing a concurrent server architecture with worker processes.",
    github: "https://github.com/rimjhimsingh/Client-Server-Chat-with-Persistent-Logging",
    demo: "https://github.com/rimjhimsingh/chat-daemon-fifo",
    color: "blue",
    logo: "💬",
    skills: ["C", "Unix Daemons", "FIFOs", "IPC", "Concurrent Programming", "Client-Server Architecture", "SQLite"],
    category: "systems",
    features: [
      "Concurrent server using double-fork technique",
      "Named pipes (FIFOs) for IPC",
      "Worker process creation without zombies",
      "SQLite database integration",
      "Well-known and private FIFO communication",
      "Protocol-based client-server interaction",
    ],
  },
  {
    title: "Chat System with Shared Memory",
    overview:
      "A sophisticated chat application using POSIX shared memory and semaphores for inter-process communication, demonstrating advanced synchronization techniques.",
    github: "https://github.com/rimjhimsingh/Modular-Chat-Interface-System",
    demo: "https://github.com/rimjhimsingh/Modular-Chat-Interface-System",
    color: "purple",
    logo: "🔄",
    skills: ["C", "Shared Memory", "POSIX Semaphores", "IPC", "Synchronization", "Fork/Exec", "SQLite"],
    category: "systems",
    features: [
      "Anonymous shared memory with MAP_SHARED",
      "Unnamed POSIX semaphores for synchronization",
      "Parent-child process communication",
      "Packet-based data transfer protocol",
      "Binary data transfer without endian issues",
      "SQLite persistence with in-memory option",
    ],
  },
  {
    title: "Student Course Sequencer",
    overview:
      "A Java application using State design pattern to manage student course registration, prerequisite validation, and graduation eligibility tracking.",
    github: "https://github.com/rimjhimsingh/student-course-sequencer",
    demo: "https://github.com/rimjhimsingh/student-course-sequencer",
    color: "purple",
    logo: "🎓",
    skills: ["Java", "Design Patterns", "State Pattern", "OOP", "Data Structures", "Ant"],
    category: "algorithms",
    features: [
      "State pattern implementation for course progression",
      "Prerequisite validation and enforcement",
      "Waitlist management system",
      "Graduation eligibility checking",
      "Thread-safe course allocation",
      "ArrayList-based storage with O(1) access",
    ],
  },
  {
    title: "Concurrent Chat Server System",
    overview:
      "A production-grade concurrent chat server in C supporting multiple simultaneous client connections with robust message routing, room management, and session integrity through shared memory.",
    github: "https://github.com/rimjhimsingh/Concurrent-Chat-Server-System",
    demo: "https://github.com/rimjhimsingh/Concurrent-Chat-Server-System",
    color: "green",
    logo: "🔗",
    skills: ["C", "Multi-threading", "Concurrent Programming", "Client-Server", "SQLite", "Networking", "GNU Make"],
    category: "systems",
    features: [
      "Multi-threaded server handling concurrent client connections",
      "Message routing and room management system",
      "Shared memory for inter-process communication",
      "Modular architecture with separate client/server modules",
      "Thread-safe message queuing and delivery",
      "Comprehensive Makefile build automation",
    ],
  },
  {
    title: "Course Management System",
    overview:
      "An automated Java application for allocating courses to students based on preferences and capacities, featuring conflict resolution, satisfaction scoring, and first-come-first-served scheduling.",
    github: "https://github.com/rimjhimsingh/Course-Management-Java",
    demo: "https://github.com/rimjhimsingh/Course-Management-Java",
    color: "red",
    logo: "📚",
    skills: ["Java", "OOP", "Data Structures", "File I/O", "ArrayList", "HashSet", "Exception Handling", "Ant"],
    category: "algorithms",
    features: [
      "Dynamic course allocation with capacity management",
      "First-come-first-served scheduling algorithm",
      "Conflict detection and resolution system",
      "Student satisfaction rating calculator",
      "HashSet for efficient time slot tracking",
      "Comprehensive file I/O and error logging",
    ],
  },
  {
    title: "Student Records BST Manager",
    overview:
      "A Java application implementing Binary Search Trees with Observer pattern for managing student records, featuring real-time updates and filtering capabilities.",
    github: "https://github.com/rimjhimsingh/student-records-bst",
    demo: "https://github.com/rimjhimsingh/student-records-bst",
    color: "orange",
    logo: "🌳",
    skills: ["Java", "Binary Search Trees", "Observer Pattern", "Design Patterns", "Data Structures", "Ant"],
    category: "algorithms",
    features: [
      "BST implementation with inorder traversal",
      "Observer pattern for real-time updates",
      "Filter interface for conditional updates",
      "Prime number filtering system",
      "HashMap optimization for O(1) lookups",
      "Thread-safe data structure operations",
    ],
  },
  {
    title: "Elixir-Python Parser",
    overview: "A scanner and recursive-descent parser for a small language using regular expressions.",
    github: "https://github.com/rimjhimsingh/elixer-python",
    demo: "https://github.com/rimjhimsingh/elixer-python",
    color: "green",
    logo: "📝",
    skills: ["Python", "EBNF", "Parsing", "Regular Expressions", "Compiler Design"],
    category: "algorithms",
    features: [
      "Complete parser for lists, tuples, and maps",
      "JSON representation of parsed elements",
      "Support for complex data structures",
      "Error handling and reporting",
      "Extensible grammar definition",
      "Primitive literal parsing",
    ],
  },
  {
    title: "Prime Number Service - Distributed System",
    overview:
      "A production-grade distributed client-server application providing real-time prime number verification across a network with multi-threaded architecture, XML-based communication, and threshold-based filtering.",
    github: "https://github.com/rimjhimsingh/Prime-Number-Service---Distributed-System",
    demo: "https://github.com/rimjhimsingh/Prime-Number-Service---Distributed-System",
    color: "purple",
    logo: "🔢",
    skills: [
      "Java",
      "Socket Programming",
      "Multi-threading",
      "XML",
      "ConcurrentHashMap",
      "Client-Server",
      "Apache Ant",
    ],
    category: "algorithms",
    features: [
      "Multi-threaded server handling concurrent client connections",
      "XML-based communication protocol for queries/responses",
      "Thread-safe storage with ConcurrentHashMap and CopyOnWriteArrayList",
      "Optimized prime checking algorithm with O(√n) complexity",
      "Threshold filtering (numbers ≥ 3 only)",
      "Interactive menu systems for both server and client",
      "Worker threads for each client connection",
      "Graceful shutdown and resource cleanup",
    ],
  },

  // Security & Encryption
  {
    title: "BMP Steganography Decoder",
    overview: "Python implementation for extracting hidden steganographic information from BMP image files.",
    github: "https://github.com/rimjhimsingh/steganography",
    demo: "https://github.com/rimjhimsingh/steganography",
    color: "blue",
    logo: "🔍",
    skills: ["Python", "Image Processing", "Steganography", "Binary Data Handling"],
    category: "security",
    features: [
      "BMP file processing and analysis",
      "Marker detection for hidden data",
      "Data size extraction",
      "Output file generation",
      "LSB (Least Significant Bit) method",
      "Efficient binary data manipulation",
    ],
  },
  {
    title: "Salsa20 Encryption Implementation",
    overview: "A complete implementation of the Salsa20 encryption algorithm as specified by Daniel J. Bernstein.",
    github: "https://github.com/rimjhimsingh/salsa-20-implementation",
    demo: "https://github.com/rimjhimsingh/salsa-20-implementation",
    color: "green",
    logo: "🔐",
    skills: ["Python", "Cryptography", "Algorithm Implementation", "Security"],
    category: "security",
    features: [
      "Salsa20 quarter, row, and column round functions",
      "Expansion function for 16-byte and 32-byte keys",
      "Complete encryption/decryption pipeline",
      "Performance optimization",
      "Test vectors validation",
      "Secure key handling",
    ],
  },
  {
    title: "Breaking One-Time-Pad Cipher",
    overview:
      "Demonstration and implementation of an attack on the One-Time-Pad cipher under chosen-plaintext attack conditions.",
    github: "https://github.com/rimjhimsingh/Breaking-one-time-pad-cipher",
    demo: "https://github.com/rimjhimsingh/Breaking-one-time-pad-cipher",
    color: "red",
    logo: "🔓",
    skills: ["Java", "Cryptography", "Security Analysis", "Attack Models"],
    category: "security",
    features: [
      "Complete cipher breaking algorithm",
      "Attack model explanation",
      "Detailed documentation",
      "Performance analysis",
      "Countermeasure suggestions",
      "Educational security demonstration",
    ],
  },
  {
    title: "Simplified AES Implementation",
    overview: "Educational implementation of Simplified AES (S-AES) encryption and decryption algorithm.",
    github: "https://github.com/rimjhimsingh/SEAS-implementation",
    demo: "https://github.com/rimjhimsingh/SEAS-implementation",
    color: "yellow",
    logo: "🛡️",
    skills: ["Java", "Cryptography", "Algorithm Implementation", "Security"],
    category: "security",
    features: [
      "16-bit block encryption/decryption",
      "Key expansion and mixing",
      "Substitution and permutation layers",
      "Visual step-by-step process",
      "Performance benchmarking",
      "Educational implementation",
    ],
  },

  // Games & Interactive
  {
    title: "Dicee - Dice Game",
    overview:
      "A two-player dice game built with HTML, CSS, and JavaScript. Players can refresh the page to roll dice and see the winner.",
    github: "https://github.com/rimjhimsingh/dice-roll",
    demo: "https://dice-roll-opal.vercel.app/",
    color: "blue",
    logo: "🎲",
    skills: ["HTML5", "CSS3", "JavaScript", "Event Handling", "DOM Manipulation"],
    category: "games",
    features: [
      "Random dice generation",
      "Win/lose/draw detection",
      "Score tracking system",
      "Animated dice rolls",
      "Responsive design",
      "Clean, intuitive interface",
    ],
  },
  {
    title: "Drum Kit",
    overview:
      "An interactive drum kit where users can play sounds by clicking buttons or pressing corresponding keyboard keys.",
    github: "https://github.com/rimjhimsingh/drumKit",
    demo: "https://drum-kit-one-sigma.vercel.app/",
    color: "red",
    logo: "🥁",
    skills: ["HTML5", "CSS3", "JavaScript", "Audio API", "Event Listeners"],
    category: "games",
    features: [
      "Multiple drum sounds",
      "Keyboard and mouse input support",
      "Visual feedback on interaction",
      "Responsive design",
      "Custom sound mapping",
      "Real-time audio playback",
    ],
  },
  {
    title: "Checkers Game with AI",
    overview: "Interactive Checkers implementation with both Random and Minimax AI opponents.",
    github: "https://github.com/rimjhimsingh/Checkers_Game",
    demo: "https://github.com/rimjhimsingh/Checkers_Game",
    color: "green",
    logo: "🎮",
    skills: ["Java", "GUI", "AI Algorithms", "Game Development", "Minimax"],
    category: "games",
    features: [
      "Graphical game interface",
      "Random and Minimax AI variations",
      "Configurable algorithm depth",
      "Complete game rules implementation",
      "Move history tracking",
      "Undo functionality",
    ],
  },
]

const ProjectsGrid = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const { theme } = useTheme()
  const [activeCategory, setActiveCategory] = useState("all")
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const toggleProject = (index: number) => {
    if (expandedProject === index) {
      setExpandedProject(null)
    } else {
      setExpandedProject(index)
    }
  }

  const filteredProjects =
    activeCategory === "all" ? projectsData : projectsData.filter((project) => project.category === activeCategory)

  return (
    <div ref={ref} className="space-y-8">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              activeCategory === category.id
                ? theme === "light"
                  ? "bg-black text-white"
                  : "bg-red text-white"
                : theme === "light"
                  ? "bg-black/10 text-black hover:bg-black/20"
                  : "bg-dark-light text-cream hover:bg-dark-light/80"
            } ${theme === "light" ? "border-2 border-black" : ""}`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <Card
              className={`h-full project-card ${
                theme === "light"
                  ? `bg-${project.color}/20 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black`
                  : `bg-dark border-2 border-${project.color}/30 hover:border-${project.color} hover:shadow-[0_0_15px_rgba(var(--${project.color}-rgb),0.5)] hover:bg-dark-light`
              } group overflow-hidden transition-all duration-500 relative flex flex-col cursor-pointer`}
              onClick={() => toggleProject(index)}
            >
              <CardHeader className="relative z-10 pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-lg ${
                        theme === "light" ? `bg-${project.color} text-white` : `bg-${project.color}/10`
                      } text-xl transition-all duration-300 group-hover:scale-110`}
                    >
                      {project.logo}
                    </div>
                    <CardTitle
                      className={`text-xl font-bold ${
                        theme === "dark" ? `text-${project.color}` : "text-black"
                      } transition-colors duration-300`}
                    >
                      {project.title}
                    </CardTitle>
                  </div>
                  <div
                    className={`${theme === "light" ? `text-${project.color}` : `text-${project.color}`} transition-transform duration-300 ${expandedProject === index ? "rotate-180" : ""}`}
                  >
                    {expandedProject === index ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="relative z-10 flex-grow pb-2">
                <CardDescription className={`${theme === "light" ? "text-black/90" : "text-cream/80"} mb-4`}>
                  {project.overview}
                </CardDescription>

                {/* Expanded content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    expandedProject === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div
                    className={`p-4 rounded-lg ${
                      theme === "light" ? `bg-${project.color}/30 border border-black` : "bg-dark-light"
                    } mb-4`}
                  >
                    <h4 className={`font-bold mb-2 ${theme === "light" ? "text-black" : "text-cream"}`}>
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-2 text-sm ${
                            theme === "light" ? "text-black/80" : "text-cream/80"
                          }`}
                        >
                          <span
                            className={`${theme === "light" ? `text-${project.color}` : `text-${project.color}`} mt-1`}
                          >
                            ✦
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      className={`${
                        theme === "light"
                          ? `bg-${project.color} text-white border border-black`
                          : `bg-${project.color}/10 text-${project.color}`
                      } transition-all duration-300 transform group-hover:scale-105`}
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="relative z-10 flex justify-between gap-4 pt-2">
                <Button
                  variant="outline"
                  asChild
                  className={`flex-1 ${
                    theme === "light"
                      ? "bg-white text-black border-2 border-black hover:bg-gray-100"
                      : `border-${project.color}/50 text-${project.color} hover:bg-${project.color}/10`
                  } transition-all duration-300 transform hover:scale-105`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
                <Button
                  asChild
                  className={`flex-1 ${
                    theme === "light"
                      ? `bg-${project.color} text-white border-2 border-black hover:bg-${project.color}/80`
                      : `bg-${project.color} hover:bg-${project.color}/80 text-dark`
                  } transition-all duration-300 transform hover:scale-105`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>

      {/* Empty state if no projects in category */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-bold mb-2">No projects in this category yet</h3>
          <p className="text-muted-foreground">Check back later or explore other categories</p>
        </div>
      )}
    </div>
  )
}

export default ProjectsGrid
