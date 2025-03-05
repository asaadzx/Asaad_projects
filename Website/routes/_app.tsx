// deno-lint-ignore-file react-no-danger
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
          #cursor-glow {
            transition: left 0.1s ease, top 0.1s ease, display 0.1s ease;
          }
        `}</style>
        <script src="/js/smooth-scroll.js" defer></script>
      </Head>
      <body class="bg-gray-900 text-white min-h-screen">
        {/* Cursor glow effect */}
        <div id="cursor-glow" class="fixed w-60 h-60 rounded-full pointer-events-none mix-blend-screen filter blur-xl opacity-80 bg-accent-light z-50 hidden animate-pulse-glow"></div>

        <div id="particles-js" class="fixed inset-0 z-0"></div>
        <div class="relative z-5">
          <Component />
        </div>

        <script dangerouslySetInnerHTML={{__html: `
            // Cursor glow effect
            window.addEventListener('DOMContentLoaded', () => {
              const cursorGlow = document.getElementById('cursor-glow');
              let timeoutId;

              document.addEventListener('mousemove', function(e) {
                if (cursorGlow) {
                  clearTimeout(timeoutId);
                  timeoutId = setTimeout(() => {
                    cursorGlow.style.left = (e.clientX - 10) + 'px';
                    cursorGlow.style.top = (e.clientY - 5) + 'px';
                    cursorGlow.style.display = 'block';
                  }, 10); // Adjust the delay as needed
                }
              });
            });
        `}} />
      </body>
    </>
  );
}