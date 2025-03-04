
import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html lang="en">
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
        <div id="particles-js" class="fixed inset-0 z-0"></div>
        <div class="relative z-10">
          <Component />
        </div>
        <script>
          {`
            document.addEventListener('DOMContentLoaded', function() {
              if (window.particlesJS) {
                particlesJS('particles-js', {
                  "particles": {
                    "number": {
                      "value": 80,
                      "density": {
                        "enable": true,
                        "value_area": 800
                      }
                    },
                    "color": {
                      "value": "#ffffff"
                    },
                    "shape": {
                      "type": "circle"
                    },
                    "opacity": {
                      "value": 0.5,
                      "random": false
                    },
                    "size": {
                      "value": 3,
                      "random": true
                    },
                    "line_linked": {
                      "enable": true,
                      "distance": 150,
                      "color": "#ffffff",
                      "opacity": 0.2,
                      "width": 1
                    },
                    "move": {
                      "enable": true,
                      "speed": 2,
                      "direction": "none",
                      "random": false,
                      "straight": false,
                      "out_mode": "out",
                      "bounce": false
                    }
                  },
                  "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                      "onhover": {
                        "enable": true,
                        "mode": "grab"
                      },
                      "onclick": {
                        "enable": true,
                        "mode": "push"
                      },
                      "resize": true
                    }
                  },
                  "retina_detect": true
                });
              }
            });
          `}
        </script>
      </body>
    </html>
  );
}
