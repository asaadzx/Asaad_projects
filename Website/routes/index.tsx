
import { useSignal } from "@preact/signals";
import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Asaadzx - Young Developer</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
      </Head>
      <div class="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-indigo-900 text-white">
        <header class="container mx-auto px-4 py-8">
          <h1 class="text-5xl font-bold text-center animate__animated animate__fadeInDown">Asaadzx</h1>
          <p class="text-xl text-center mt-2 animate__animated animate__fadeIn animate__delay-1s">14-Year-Old Developer</p>
        </header>
        
        <main class="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section class="flex flex-col md:flex-row items-center justify-between mb-20">
            <div class="w-full md:w-1/2 animate__animated animate__fadeInLeft">
              <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20">
                <h2 class="text-3xl font-bold mb-4">Hey there! 👋</h2>
                <p class="text-lg mb-6">
                  I'm a passionate young developer exploring the world of coding. 
                  I love working with Python, AI, C++, Linux, and creating awesome games with Godot!
                </p>
                <div class="flex flex-wrap gap-3">
                  <span class="px-3 py-1 bg-blue-500/70 rounded-full text-sm">Python</span>
                  <span class="px-3 py-1 bg-green-500/70 rounded-full text-sm">AI</span>
                  <span class="px-3 py-1 bg-red-500/70 rounded-full text-sm">C++</span>
                  <span class="px-3 py-1 bg-yellow-500/70 rounded-full text-sm">Linux</span>
                  <span class="px-3 py-1 bg-purple-500/70 rounded-full text-sm">Godot</span>
                  <span class="px-3 py-1 bg-indigo-500/70 rounded-full text-sm">Game Dev</span>
                </div>
              </div>
            </div>
            <div class="w-full md:w-2/5 mt-10 md:mt-0 animate__animated animate__fadeInRight">
              <div class="relative">
                <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 animate-pulse"></div>
                <img 
                  src="/profile.png" 
                  alt="Asaadzx" 
                  class="relative rounded-full w-64 h-64 mx-auto object-cover border-4 border-white/30"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://avatars.githubusercontent.com/u/64422350?v=4"; // Placeholder image
                  }}
                />
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section class="mb-20 animate__animated animate__fadeInUp animate__delay-1s">
            <h2 class="text-3xl font-bold mb-8 text-center">My Projects</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "AI Assistant",
                  description: "A Python-based AI assistant that can help with various tasks.",
                  tags: ["Python", "AI", "NLP"],
                  link: "#"
                },
                {
                  title: "Game Physics",
                  description: "A C++ library for realistic game physics simulation.",
                  tags: ["C++", "Physics", "Game Dev"],
                  link: "#"
                },
                {
                  title: "Adventure Quest",
                  description: "An exciting 2D adventure game made with Godot Engine.",
                  tags: ["Godot", "Game Dev", "2D"],
                  link: "#"
                }
              ].map(project => (
                <div key={project.title} class="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                  <h3 class="text-xl font-bold mb-2">{project.title}</h3>
                  <p class="mb-4">{project.description}</p>
                  <div class="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span class="px-2 py-1 bg-white/20 rounded-full text-xs">{tag}</span>
                    ))}
                  </div>
                  <a href={project.link} class="text-blue-400 hover:text-blue-300">View Project →</a>
                </div>
              ))}
            </div>
          </section>

          {/* Links Section */}
          <section class="animate__animated animate__fadeInUp animate__delay-2s">
            <h2 class="text-3xl font-bold mb-8 text-center">Find Me Online</h2>
            <div class="flex flex-wrap justify-center gap-6">
              <a href="https://github.com/asaadzx" target="_blank" rel="noopener noreferrer" 
                class="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl hover:bg-white/20 transition-all duration-300">
                <img src="/github.svg" alt="GitHub" class="w-8 h-8" />
                <span>GitHub</span>
              </a>
              <a href="https://asaadzx.itch.io" target="_blank" rel="noopener noreferrer" 
                class="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl hover:bg-white/20 transition-all duration-300">
                <img src="/itch.svg" alt="Itch.io" class="w-8 h-8" />
                <span>Itch.io</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" 
                class="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl hover:bg-white/20 transition-all duration-300">
                <img src="/discord.svg" alt="Discord" class="w-8 h-8" />
                <span>Discord</span>
              </a>
            </div>
          </section>
        </main>
        
        <footer class="container mx-auto px-4 py-8 text-center text-white/60">
          <p>© 2023 Asaadzx | Young Developer & Creator</p>
        </footer>
      </div>
    </>
  );
}
