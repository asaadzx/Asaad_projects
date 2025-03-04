
import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found | Asaadzx</title>
      </Head>
      <div class="min-h-screen bg-primary text-text-DEFAULT flex flex-col items-center justify-center px-4 py-8">
        {/* Background elements */}
        <div class="fixed inset-0 z-0 overflow-hidden">
          <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full filter blur-3xl animate-float"></div>
          <div class="absolute bottom-1/3 right-1/3 w-48 h-48 bg-accent-light/20 rounded-full filter blur-3xl animate-float" style="animation-delay: 2s;"></div>
        </div>

        <div class="relative z-10 text-center opacity-0 animate-fade-in">
          <h1 class="text-6xl font-bold mb-4 text-white">404</h1>
          <div class="relative mb-8">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-accent to-accent-light rounded-full blur opacity-75 animate-pulse"></div>
            <div class="relative mx-auto w-32 h-32 bg-primary-light border-2 border-accent overflow-hidden rounded-full flex items-center justify-center">
              <span class="text-5xl">🔍</span>
            </div>
          </div>
          <h2 class="text-3xl font-bold mb-4 text-white">Page not found</h2>
          <p class="text-xl mb-8 text-text-muted">
            Oops! The page you're looking for doesn't exist.
          </p>
          <a href="/" class="inline-block bg-accent hover:bg-accent-light px-6 py-3 rounded-xl transition-all duration-300 text-white font-bold transform hover:scale-105 shadow-lg">
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
}
