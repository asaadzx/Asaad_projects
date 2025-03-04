import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Asaadzx - Young Developer</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
      </head>
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