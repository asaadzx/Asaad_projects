
import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found | Asaadzx</title>
      </Head>
      <div class="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-indigo-900 text-white flex flex-col items-center justify-center px-4 py-8">
        <div class="text-center animate__animated animate__fadeIn">
          <h1 class="text-6xl font-bold mb-4">404</h1>
          <div class="relative mb-8">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 animate-pulse"></div>
            <img
              src="/logo.svg"
              width="128"
              height="128"
              alt="the Fresh logo: a sliced lemon dripping with juice"
              class="relative mx-auto"
            />
          </div>
          <h2 class="text-3xl font-bold mb-4">Page not found</h2>
          <p class="text-xl mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          <a href="/" class="inline-block bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl hover:bg-white/20 transition-all duration-300 text-lg">
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
}
