import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

/**
 * App Component - Main layout wrapper for the entire application
 * Handles global styles, scripts, and layout structure
 */
export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/styles.css" />
        {/* Add smooth scrolling behavior globally */}
        <style>{`
          html {
            scroll-behavior: smooth;
          }
        `}</style>
        <script src="/js/smooth-scroll.js" defer></script>
      </Head>
      <body class="bg-gray-900 text-white min-h-screen">
        {/* Cursor glow effect */}
        <div id="cursor-glow" class="fixed w-60 h-60 rounded-full pointer-events-none mix-blend-screen filter blur-xl opacity-80 bg-accent-light z-50 hidden animate-pulse-glow"></div>

        <div id="particles-js" class="fixed inset-0 z-0"></div>
        <div class="relative z-10">
          <Component />
        </div>

        <script dangerouslySetInnerHTML={{__html: `
            // Cursor glow effect
            window.addEventListener('DOMContentLoaded', () => {
              const cursorGlow = document.getElementById('cursor-glow');

              document.addEventListener('mousemove', function(e) {
                if (cursorGlow) {
                  cursorGlow.style.left = (e.clientX - 80) + 'px';
                  cursorGlow.style.top = (e.clientY - 80) + 'px';
                  cursorGlow.style.display = 'block';
                }
              });
            });
        `}} />
      </body>
    </>
  );
}