
import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0d1b2a',
          light: '#1b263b',
        },
        accent: {
          DEFAULT: '#0466c8',
          light: '#0096c7',
        },
        text: {
          DEFAULT: '#e0e1dd',
          muted: '#adb5bd',
        }
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'slide-in': 'slideIn 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'typing': 'typing 2.5s steps(15) forwards, blink 0.8s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'bounce-subtle': 'bounceSlight 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderRightColor: 'transparent' },
          '50%': { borderRightColor: '#e0e1dd' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        bounceSlight: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
} satisfies Config;
