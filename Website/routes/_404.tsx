
import { Head } from "$fresh/runtime.ts";

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Asaadzx</title>
      </Head>
      <div className="min-h-screen bg-primary text-text-DEFAULT">
        {/* Background elements */}
        <div className="fixed inset-0 z-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-48 h-48 bg-accent/20 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent-light/20 rounded-full filter blur-3xl animate-float" style={{animationDelay: "2s"}}></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Glass navbar - sticky top */}
          <nav className="sticky top-0 backdrop-blur-lg bg-primary-light/60 border-b border-accent/20 shadow-lg px-4 py-4 flex justify-between items-center z-50">
            <a href="/" className="text-2xl font-bold text-white">Asaadzx</a>
            <div className="flex gap-6">
              <a href="/" className="text-text-muted hover:text-white transition-colors">Home</a>
              <a href="/about" className="text-text-muted hover:text-white transition-colors">About</a>
              <a href="/#projects" className="text-text-muted hover:text-white transition-colors">Projects</a>
            </div>
          </nav>
          
          <main className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[70vh]">
            {/* 404 content with animations */}
            <h1 class="text-8xl font-bold mb-4 text-accent animate-pulse-glow">404</h1>
            <p class="text-2xl mb-8 opacity-0 animate-fade-in">Page not found</p>
            <div class="opacity-0 animate-scale-in" style="animation-delay: 0.5s;">
              <a href="/" class="px-8 py-3 bg-accent hover:bg-accent-light rounded-full text-white font-bold transition-all transform hover:scale-105 shadow-lg">
                Back to Home
              </a>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
