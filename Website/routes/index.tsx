import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Asaadzx - Young Developer</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
      </Head>
      <div class="min-h-screen bg-primary text-text-DEFAULT">
        {/* Background elements */}
        <div class="fixed inset-0 z-0 overflow-hidden">
          <div class="absolute top-20 left-10 w-48 h-48 bg-accent/20 rounded-full filter blur-3xl animate-float"></div>
          <div class="absolute bottom-20 right-10 w-64 h-64 bg-accent-light/20 rounded-full filter blur-3xl animate-float" style="animation-delay: 2s;"></div>
        </div>

        {/* Content */}
        <div class="relative z-10">
          <header class="container mx-auto px-4 py-8">
            <nav class="flex justify-between items-center mb-12 sticky top-0 z-50 backdrop-blur-lg bg-primary/50 border-b border-accent/20 shadow-lg">
              <a href="/" class="text-2xl font-bold text-white">Asaadzx</a>
              <div class="flex gap-6">
                <a href="/" class="text-white font-medium border-b-2 border-accent">Home</a>
                <a href="/about" class="text-text-muted hover:text-white transition-colors">About</a>
                <a href="#projects" class="text-text-muted hover:text-white transition-colors">Projects</a>
              </div>
            </nav>
            <div class="overflow-hidden flex justify-center">
              <h1 class="text-5xl md:text-7xl font-bold text-center overflow-hidden whitespace-nowrap border-r-4 border-text-DEFAULT animate-typing">Asaadzx</h1>
            </div>
            <p class="text-xl text-center mt-4 text-text-muted opacity-0 animate-fade-in" style="animation-delay: 0.5s;">14-Year-Old Developer</p>
          </header>

          <main class="container mx-auto px-4 py-8">
            {/* Hero Section */}
            <section class="flex flex-col md:flex-row items-center justify-between mb-20 gap-10">
              <div class="w-full md:w-1/2 opacity-0 animate-slide-in">
                <div class="bg-primary-light rounded-2xl p-8 shadow-xl border border-accent/20 backdrop-blur-md">
                  <h2 class="text-3xl font-bold mb-4 text-white">Hey there! 👋</h2>
                  <p class="text-lg mb-6">
                    I'm a passionate young developer exploring the world of coding. 
                    I love working with Python, AI, C++, Linux, and creating awesome games with Godot!
                  </p>
                  <div class="flex flex-wrap gap-3">
                    <span class="px-3 py-1 bg-accent rounded-full text-sm">Python</span>
                    <span class="px-3 py-1 bg-accent rounded-full text-sm">AI</span>
                    <span class="px-3 py-1 bg-accent rounded-full text-sm">Godot</span>
                    <span class="px-3 py-1 bg-accent rounded-full text-sm">C++</span>
                    <span class="px-3 py-1 bg-accent rounded-full text-sm">Linux</span>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/2 opacity-0 animate-slide-in" style="animation-delay: 0.3s;">
                <div class="relative mx-auto w-64 h-64">
                  <div class="absolute inset-0 bg-gradient-to-r from-accent to-accent-light rounded-full blur-xl opacity-30 animate-pulse"></div>
                  <div class="relative bg-primary-light border-2 border-accent overflow-hidden rounded-full w-full h-full flex items-center justify-center">
                    <img src="Website/static/me.png" alt="" />
                  </div>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" class="mb-20">
              <h2 class="text-3xl font-bold mb-8 text-center opacity-0 animate-fade-in" style="animation-delay: 0.6s;">
                {/* Project section comment: Displaying my latest projects with interactive elements */}
                My Projects
              </h2>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {/* Project Card 1 - Pixel Adventure */}
                <div class="bg-primary-light rounded-xl overflow-hidden shadow-xl border border-accent/20 opacity-0 animate-scale-in hover:transform hover:scale-105 transition-all duration-300" style="animation-delay: 0.7s;">
                  <div class="aspect-video bg-accent/30 flex items-center justify-center relative group">
                    <span class="text-4xl animate-bounce-subtle">🎮</span>
                    <div class="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div class="p-6">
                    <h3 class="text-xl font-bold mb-2 text-white">Adventure Game</h3>
                    <p class="text-text-muted mb-4">A 2D adventure game made with Godot Engine featuring pixel art graphics and unique gameplay mechanics.</p>
                    <div class="flex justify-between items-end">
                      <div class="flex flex-wrap gap-2">
                        <span class="px-2 py-1 bg-primary text-xs rounded">Godot</span>
                        <span class="px-2 py-1 bg-primary text-xs rounded">GDScript</span>
                      </div>
                      <a href="#" class="px-4 py-2 bg-accent hover:bg-accent-light rounded-lg text-white font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-accent/50">
                        View Project
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Card 2 - AI Chat Assistant */}
                <div class="bg-primary-light rounded-xl overflow-hidden shadow-xl border border-accent/20 opacity-0 animate-scale-in hover:transform hover:scale-105 transition-all duration-300" style="animation-delay: 0.8s;">
                  <div class="aspect-video bg-accent/30 flex items-center justify-center relative group">
                    <span class="text-4xl animate-bounce-subtle">🤖</span>
                    <div class="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div class="p-6">
                    <h3 class="text-xl font-bold mb-2 text-white">AI Learning Assistant</h3>
                    <p class="text-text-muted mb-4">A Python-based AI application that helps students learn programming concepts through interactive exercises.</p>
                    <div class="flex justify-between items-end">
                      <div class="flex flex-wrap gap-2">
                        <span class="px-2 py-1 bg-primary text-xs rounded">Python</span>
                        <span class="px-2 py-1 bg-primary text-xs rounded">TensorFlow</span>
                      </div>
                      <a href="#" class="px-4 py-2 bg-accent hover:bg-accent-light rounded-lg text-white font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-accent/50">
                        View Project
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Card 3 - Personal Website */}
                <div class="bg-primary-light rounded-xl overflow-hidden shadow-xl border border-accent/20 opacity-0 animate-scale-in hover:transform hover:scale-105 transition-all duration-300" style="animation-delay: 0.9s;">
                  <div class="aspect-video bg-accent/30 flex items-center justify-center relative group">
                    <span class="text-4xl animate-bounce-subtle">🌐</span>
                    <div class="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div class="p-6">
                    <h3 class="text-xl font-bold mb-2 text-white">Personal Website</h3>
                    <p class="text-text-muted mb-4">My personal portfolio website built with modern web technologies, featuring responsive design.</p>
                    <div class="flex justify-between items-end">
                      <div class="flex flex-wrap gap-2">
                        <span class="px-2 py-1 bg-primary text-xs rounded">Fresh</span>
                        <span class="px-2 py-1 bg-primary text-xs rounded">Tailwind</span>
                      </div>
                      <a href="#" class="px-4 py-2 bg-accent hover:bg-accent-light rounded-lg text-white font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-accent/50">
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-12 text-center opacity-0 animate-fade-in" style="animation-delay: 1s;">
                <a href="#" class="inline-block px-8 py-3 bg-accent hover:bg-accent-light rounded-full text-white font-bold transition-all transform hover:scale-105 shadow-lg animate-pulse-glow">
                  View All Projects
                </a>
              </div>
            </section>

            {/* Links Section */}
            <section class="opacity-0 animate-fade-in" style="animation-delay: 1.8s;">
              <h2 class="text-3xl font-bold mb-8 text-center">Find Me Online</h2>
              <div class="flex flex-wrap justify-center gap-6">
                <a href="https://github.com/asaadzx" target="_blank" rel="noopener noreferrer" 
                  class="flex items-center gap-2 bg-primary-light px-6 py-4 rounded-xl hover:bg-accent/20 border border-accent/30 transition-all duration-300 transform hover:scale-105">
                  <img src="/github.svg" alt="GitHub" class="w-8 h-8" />
                  <span>GitHub</span>
                </a>
                <a href="https://asaadzx.itch.io" target="_blank" rel="noopener noreferrer" 
                  class="flex items-center gap-2 bg-primary-light px-6 py-4 rounded-xl hover:bg-accent/20 border border-accent/30 transition-all duration-300 transform hover:scale-105">
                  <img src="/itch.svg" alt="Itch.io" class="w-8 h-8" />
                  <span>Itch.io</span>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" 
                  class="flex items-center gap-2 bg-primary-light px-6 py-4 rounded-xl hover:bg-accent/20 border border-accent/30 transition-all duration-300 transform hover:scale-105">
                  <img src="/discord.svg" alt="Discord" class="w-8 h-8" />
                  <span>Discord</span>
                </a>
              </div>
            </section>
          </main>

          <footer class="container mx-auto px-4 py-8 text-center text-text-muted border-t border-accent/10 mt-12">
            <p>© 2023 Asaadzx | Young Developer & Creator</p>
          </footer>
        </div>
      </div>
    </>
  );
}