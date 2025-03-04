import { Head } from "$fresh/runtime.ts";

export default function Projects() {
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
      <div class="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-indigo-900 text-white">
        <header class="container mx-auto px-4 py-8">
          <nav class="flex justify-between items-center">
            <a href="/" class="text-2xl font-bold">Asaadzx</a>
            <div class="flex gap-6">
              <a href="/" class="hover:text-blue-300 transition-colors">Home</a>
              <a href="/about" class="hover:text-blue-300 transition-colors">About</a>
              <a href="/projects" class="text-blue-300 font-medium">Projects</a>
            </div>
          </nav>
        </header>

        <main class="container mx-auto px-4 py-8">
          <h1 class="text-4xl font-bold mb-2 text-center animate__animated animate__fadeInDown">My Projects</h1>
          <p class="text-xl text-center mb-12 animate__animated animate__fadeIn">Check out what I've been working on!</p>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <div key={project.title} class={`bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-xl border border-white/20 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl animate__animated animate__fadeInUp animate__delay-${index % 3}s`}>
                <div class="h-48 bg-gray-800 flex items-center justify-center overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    class="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://via.placeholder.com/400x200/2a3b8f/ffffff?text=${encodeURIComponent(project.title)}`;
                    }}
                  />
                </div>
                <div class="p-6">
                  <h3 class="text-xl font-bold mb-2">{project.title}</h3>
                  <p class="mb-4 text-gray-300">{project.description}</p>
                  <div class="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span class="px-2 py-1 bg-white/20 rounded-full text-xs">{tag}</span>
                    ))}
                  </div>
                  <div class="flex justify-between">
                    <a href={project.link} class="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1">
                      <span>Demo</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                    <a href={project.github} class="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1">
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

          <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 mb-12 animate__animated animate__fadeInUp animate__delay-1s">
            <h2 class="text-2xl font-bold mb-4">Want to collaborate?</h2>
            <p class="mb-6">
              I'm always open to working on exciting projects with other developers. 
              If you have an idea or want to collaborate on something cool, feel free to reach out!
            </p>
            <a href="mailto:asaadzx@example.com" class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-colors">
              Get in touch
            </a>
          </div>
        </main>

        <footer class="container mx-auto px-4 py-8 text-center text-white/60">
          <p>© 2023 Asaadzx | Young Developer & Creator</p>
        </footer>
      </div>
    </>
  );
}