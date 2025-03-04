import { Head } from "$fresh/runtime.ts";

/**
 * ProjectsPage Component - Displays a comprehensive list of projects
 * Features filterable project cards with descriptions, links and technologies used
 */
export default function Projects() {
  // Project Data - Collection of all portfolio projects with metadata
  const projects = [
    {
      title: "AI Assistant",
      description: "A Python-based AI assistant that can help with various tasks like answering questions, setting reminders, and controlling smart home devices.",
      image: "/project1.png",
      tags: ["Python", "AI", "NLP", "APIs"],
      link: "#",
      github: "https://github.com/asaadzx/ai-assistant"
    },
    {
      title: "Game Physics Engine",
      description: "A C++ library for realistic game physics simulation, including collision detection, rigid body dynamics, and particle systems.",
      image: "/project2.png",
      tags: ["C++", "Physics", "Game Dev", "OpenGL"],
      link: "#",
      github: "https://github.com/asaadzx/physics-engine"
    },
    {
      title: "Adventure Quest",
      description: "An exciting 2D adventure game made with Godot Engine. Features procedurally generated levels, combat system, and a captivating storyline.",
      image: "/project3.png",
      tags: ["Godot", "Game Dev", "2D", "GDScript"],
      link: "https://asaadzx.itch.io/adventure-quest",
      github: "https://github.com/asaadzx/adventure-quest"
    },
    {
      title: "Linux System Monitor",
      description: "A tool for monitoring system resources like CPU, memory, and disk usage on Linux systems with real-time graphs and alerts.",
      image: "/project4.png",
      tags: ["Python", "Linux", "System", "GUI"],
      link: "#",
      github: "https://github.com/asaadzx/system-monitor"
    },
    {
      title: "Neural Network Visualizer",
      description: "A web-based tool for visualizing neural networks and their training process, helping to understand how AI models learn.",
      image: "/project5.png",
      tags: ["Python", "AI", "Web", "Visualization"],
      link: "#",
      github: "https://github.com/asaadzx/nn-visualizer"
    },
    {
      title: "Robot Programming Framework",
      description: "A framework for programming educational robots using simple Python commands, designed to help kids learn coding concepts.",
      image: "/project6.png",
      tags: ["Python", "Robotics", "Education"],
      link: "#",
      github: "https://github.com/asaadzx/robot-framework"
    }
  ];

  return (
    <>
      <Head>
        <title>Projects | Asaadzx</title>
      </Head>
      <div className="page-container min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-indigo-900 text-white"> {/* Added className for better styling and semantic meaning */}
        <header className="site-header container mx-auto px-4 py-8"> {/* Added className for better styling and semantic meaning */}
          <nav className="nav-container flex justify-between items-center"> {/* Added className for better styling and semantic meaning */}
            <a href="/" className="site-title text-2xl font-bold">Asaadzx</a>
            <div className="nav-links flex gap-6"> {/* Added className for better styling and semantic meaning */}
              <a href="/" className="nav-link hover:text-blue-300 transition-colors">Home</a>
              <a href="/about" className="nav-link hover:text-blue-300 transition-colors">About</a>
              <a href="/projects" className="nav-link text-blue-300 font-medium">Projects</a>
            </div>
          </nav>
        </header>

        <main className="projects-main container mx-auto px-4 py-8"> {/* Added className for better styling and semantic meaning */}
          <h1 className="main-title text-4xl font-bold mb-2 text-center animate__animated animate__fadeInDown">My Projects</h1>
          <p className="main-description text-xl text-center mb-12 animate__animated animate__fadeIn">Check out what I've been working on!</p>

          <div className="project-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"> {/* Added className for better styling and semantic meaning */}
            {projects.map((project, index) => (
              <div key={project.title} className={`project-card bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-xl border border-white/20 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl animate__animated animate__fadeInUp animate__delay-${index % 3}s`}> {/* Added className for better styling and semantic meaning */}
                <div className="project-image h-48 bg-gray-800 flex items-center justify-center overflow-hidden"> {/* Added className for better styling and semantic meaning */}
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover" {/* Added className for better styling and semantic meaning */}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://via.placeholder.com/400x200/2a3b8f/ffffff?text=${encodeURIComponent(project.title)}`;
                    }}
                  />
                </div>
                <div className="project-details p-6"> {/* Added className for better styling and semantic meaning */}
                  <h3 className="project-title text-xl font-bold mb-2">{project.title}</h3>
                  <p className="project-description mb-4 text-gray-300">{project.description}</p>
                  <div className="project-tags flex flex-wrap gap-2 mb-4"> {/* Added className for better styling and semantic meaning */}
                    {project.tags.map(tag => (
                      <span className="tag px-2 py-1 bg-white/20 rounded-full text-xs">{tag}</span> {/* Added className for better styling and semantic meaning */}
                    ))}
                  </div>
                  <div className="project-links flex justify-between"> {/* Added className for better styling and semantic meaning */}
                    <a href={project.link} className="project-link text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1">
                      <span>Demo</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                    <a href={project.github} className="project-link text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1">
                      <span>Code</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="call-to-action bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 mb-12 animate__animated animate__fadeInUp animate__delay-1s"> {/* Added className for better styling and semantic meaning */}
            <h2 className="cta-title text-2xl font-bold mb-4">Want to collaborate?</h2>
            <p className="cta-description mb-6">
              I'm always open to working on exciting projects with other developers. 
              If you have an idea or want to collaborate on something cool, feel free to reach out!
            </p>
            <a href="mailto:asaadzx@example.com" className="cta-button inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-colors"> {/* Added className for better styling and semantic meaning */}
              Get in touch
            </a>
          </div>
        </main>

        <footer className="site-footer container mx-auto px-4 py-8 text-center text-white/60"> {/* Added className for better styling and semantic meaning */}
          <p>© 2023 Asaadzx | Young Developer & Creator</p>
        </footer>
      </div>
    </>
  );
}