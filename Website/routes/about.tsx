
import { Head } from "$fresh/runtime.ts";

export default function About() {
  return (
    <>
      <Head>
        <title>About Me | Asaadzx</title>
      </Head>
      <div class="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-indigo-900 text-white">
        <header class="container mx-auto px-4 py-8">
          <nav class="flex justify-between items-center">
            <a href="/" class="text-2xl font-bold">Asaadzx</a>
            <div class="flex gap-6">
              <a href="/" class="hover:text-blue-300 transition-colors">Home</a>
              <a href="/about" class="text-blue-300 font-medium">About</a>
              <a href="/projects" class="hover:text-blue-300 transition-colors">Projects</a>
            </div>
          </nav>
        </header>
        
        <main class="container mx-auto px-4 py-8">
          <h1 class="text-4xl font-bold mb-8 text-center animate__animated animate__fadeInDown">About Me</h1>
          
          <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 mb-12 animate__animated animate__fadeIn">
            <h2 class="text-2xl font-bold mb-4">Who Am I?</h2>
            <p class="text-lg mb-4">
              Hi there! I'm Asaadzx, a 14-year-old developer passionate about coding and creating cool things with technology.
              I started my programming journey when I was 12, and since then, I've been exploring different programming languages 
              and platforms to build interesting projects.
            </p>
            <p class="text-lg">
              When I'm not coding, I enjoy playing video games, reading sci-fi books, and learning about new technologies.
              My dream is to become a professional software engineer and create applications that make a positive impact.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 animate__animated animate__fadeInLeft">
              <h2 class="text-2xl font-bold mb-4">My Skills</h2>
              <ul class="space-y-2">
                <li class="flex items-center">
                  <span class="w-32">Python</span>
                  <div class="w-full bg-white/20 rounded-full h-2.5">
                    <div class="bg-blue-500 h-2.5 rounded-full" style="width: 90%"></div>
                  </div>
                </li>
                <li class="flex items-center">
                  <span class="w-32">AI/ML</span>
                  <div class="w-full bg-white/20 rounded-full h-2.5">
                    <div class="bg-green-500 h-2.5 rounded-full" style="width: 75%"></div>
                  </div>
                </li>
                <li class="flex items-center">
                  <span class="w-32">C++</span>
                  <div class="w-full bg-white/20 rounded-full h-2.5">
                    <div class="bg-red-500 h-2.5 rounded-full" style="width: 65%"></div>
                  </div>
                </li>
                <li class="flex items-center">
                  <span class="w-32">Linux</span>
                  <div class="w-full bg-white/20 rounded-full h-2.5">
                    <div class="bg-yellow-500 h-2.5 rounded-full" style="width: 80%"></div>
                  </div>
                </li>
                <li class="flex items-center">
                  <span class="w-32">Godot</span>
                  <div class="w-full bg-white/20 rounded-full h-2.5">
                    <div class="bg-purple-500 h-2.5 rounded-full" style="width: 70%"></div>
                  </div>
                </li>
              </ul>
            </div>
            
            <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 animate__animated animate__fadeInRight">
              <h2 class="text-2xl font-bold mb-4">Learning Journey</h2>
              <div class="space-y-4">
                <div class="border-l-2 border-blue-500 pl-4">
                  <div class="text-blue-400 font-bold">2021</div>
                  <div>Started learning Python</div>
                </div>
                <div class="border-l-2 border-green-500 pl-4">
                  <div class="text-green-400 font-bold">2022</div>
                  <div>Explored AI and Machine Learning</div>
                </div>
                <div class="border-l-2 border-red-500 pl-4">
                  <div class="text-red-400 font-bold">2022</div>
                  <div>Began learning C++ for game development</div>
                </div>
                <div class="border-l-2 border-yellow-500 pl-4">
                  <div class="text-yellow-400 font-bold">2023</div>
                  <div>Started using Linux for development</div>
                </div>
                <div class="border-l-2 border-purple-500 pl-4">
                  <div class="text-purple-400 font-bold">2023</div>
                  <div>Began creating games with Godot Engine</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 mb-12 animate__animated animate__fadeInUp">
            <h2 class="text-2xl font-bold mb-4">My Goals</h2>
            <ul class="list-disc pl-6 space-y-2">
              <li>Develop an AI-powered application that helps other students learn programming</li>
              <li>Create and publish a complete game on Steam and Itch.io</li>
              <li>Contribute to open-source projects and share my knowledge with the community</li>
              <li>Learn web development and build interactive websites</li>
              <li>Master backend development with Linux and cloud technologies</li>
            </ul>
          </div>
        </main>
        
        <footer class="container mx-auto px-4 py-8 text-center text-white/60">
          <p>© 2023 Asaadzx | Young Developer & Creator</p>
        </footer>
      </div>
    </>
  );
}
