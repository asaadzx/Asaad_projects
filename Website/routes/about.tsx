
import { Head } from "$fresh/runtime.ts";

export default function About() {
  return (
    <>
      <Head>
        <title>About Me | Asaadzx</title>
      </Head>
      <div class="min-h-screen bg-primary text-text-DEFAULT">
        {/* Background elements */}
        <div class="fixed inset-0 z-0 overflow-hidden">
          <div class="absolute top-20 right-10 w-64 h-64 bg-accent/20 rounded-full filter blur-3xl animate-float"></div>
          <div class="absolute bottom-10 left-20 w-48 h-48 bg-accent-light/20 rounded-full filter blur-3xl animate-float" style="animation-delay: 3s;"></div>
        </div>

        {/* Content */}
        <div class="relative z-10">
          <header class="container mx-auto px-4 py-8">
            <nav class="flex justify-between items-center mb-12">
              <a href="/" class="text-2xl font-bold text-white">Asaadzx</a>
              <div class="flex gap-6">
                <a href="/" class="text-text-muted hover:text-white transition-colors">Home</a>
                <a href="/about" class="text-white font-medium border-b-2 border-accent">About</a>
                <a href="/#projects" class="text-text-muted hover:text-white transition-colors">Projects</a>
              </div>
            </nav>
          </header>
          
          <main class="container mx-auto px-4 py-8">
            <h1 class="text-4xl font-bold mb-12 text-center opacity-0 animate-fade-in">About Me</h1>
            
            <div class="bg-primary-light rounded-2xl p-8 shadow-xl border border-accent/20 mb-12 opacity-0 animate-slide-in">
              <h2 class="text-2xl font-bold mb-4 text-white">Who Am I?</h2>
              <p class="text-lg mb-4">
                Hi there! I'm Asaadzx, a 14-year-old developer passionate about coding and creating cool things with technology.
                I started my programming journey when I was 12, and since then, I've been exploring different programming languages 
                and platforms to build interesting projects.
              </p>
              <p class="text-lg">
                My journey in programming has been exciting, challenging, and rewarding. I'm constantly learning new things
                and pushing myself to become a better developer. I believe that age is just a number when it comes to
                creating amazing things with code!
              </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div class="bg-primary-light rounded-2xl p-8 shadow-xl border border-accent/20 opacity-0 animate-slide-in" style="animation-delay: 0.3s;">
                <h2 class="text-2xl font-bold mb-4 text-white">My Skills</h2>
                <ul class="space-y-4">
                  <li class="flex items-center">
                    <span class="w-32">Python</span>
                    <div class="w-full bg-primary rounded-full h-2.5">
                      <div class="bg-accent h-2.5 rounded-full" style="width: 90%"></div>
                    </div>
                  </li>
                  <li class="flex items-center">
                    <span class="w-32">C++</span>
                    <div class="w-full bg-primary rounded-full h-2.5">
                      <div class="bg-accent h-2.5 rounded-full" style="width: 75%"></div>
                    </div>
                  </li>
                  <li class="flex items-center">
                    <span class="w-32">Linux</span>
                    <div class="w-full bg-primary rounded-full h-2.5">
                      <div class="bg-accent h-2.5 rounded-full" style="width: 80%"></div>
                    </div>
                  </li>
                  <li class="flex items-center">
                    <span class="w-32">AI/ML</span>
                    <div class="w-full bg-primary rounded-full h-2.5">
                      <div class="bg-accent h-2.5 rounded-full" style="width: 65%"></div>
                    </div>
                  </li>
                  <li class="flex items-center">
                    <span class="w-32">Godot</span>
                    <div class="w-full bg-primary rounded-full h-2.5">
                      <div class="bg-accent h-2.5 rounded-full" style="width: 70%"></div>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div class="bg-primary-light rounded-2xl p-8 shadow-xl border border-accent/20 opacity-0 animate-slide-in" style="animation-delay: 0.6s;">
                <h2 class="text-2xl font-bold mb-4 text-white">Learning Journey</h2>
                <div class="space-y-4">
                  <div class="border-l-2 border-accent pl-4">
                    <div class="text-accent font-bold">2021</div>
                    <div>Started learning Python</div>
                  </div>
                  <div class="border-l-2 border-accent-light pl-4">
                    <div class="text-accent-light font-bold">2022</div>
                    <div>Explored AI and Machine Learning</div>
                  </div>
                  <div class="border-l-2 border-accent pl-4">
                    <div class="text-accent font-bold">2022</div>
                    <div>Began learning C++ for game development</div>
                  </div>
                  <div class="border-l-2 border-accent-light pl-4">
                    <div class="text-accent-light font-bold">2023</div>
                    <div>Started using Linux for development</div>
                  </div>
                  <div class="border-l-2 border-accent pl-4">
                    <div class="text-accent font-bold">2023</div>
                    <div>Began creating games with Godot Engine</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="bg-primary-light rounded-2xl p-8 shadow-xl border border-accent/20 mb-12 opacity-0 animate-fade-in" style="animation-delay: 0.9s;">
              <h2 class="text-2xl font-bold mb-4 text-white">My Goals</h2>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <span class="text-accent mr-2">→</span>
                  <span>Develop an AI-powered application that helps other students learn programming</span>
                </li>
                <li class="flex items-start">
                  <span class="text-accent mr-2">→</span>
                  <span>Create and publish a complete game on Steam and Itch.io</span>
                </li>
                <li class="flex items-start">
                  <span class="text-accent mr-2">→</span>
                  <span>Contribute to open-source projects and share my knowledge with the community</span>
                </li>
                <li class="flex items-start">
                  <span class="text-accent mr-2">→</span>
                  <span>Learn web development and build interactive websites</span>
                </li>
                <li class="flex items-start">
                  <span class="text-accent mr-2">→</span>
                  <span>Master backend development with Linux and cloud technologies</span>
                </li>
              </ul>
            </div>
          </main>
          
          <footer class="container mx-auto px-4 py-8 text-center text-text-muted border-t border-accent/10 mt-12">
            <p>© 2023 Asaadzx | Young Developer & Creator</p>
          </footer>
        </div>
      </div>
    </>
  );
}
