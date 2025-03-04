import { type Config } from "tailwindcss";

/**
 * Tailwind CSS Configuration
 * 
 * This configuration defines the styling system for the entire website:
 * - Custom color palette with primary, accent, and text colors
 * - Animation definitions for various interactive elements
 * - Content paths for where Tailwind should look for class names
 */
export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // Color System - Dark theme with blue accents
      colors: {
        primary: {
          DEFAULT: '#0B0E14', // Dark background
          light: '#161B22',   // Slightly lighter background for cards
        },
        accent: {
          DEFAULT: '#70c1ff', // Primary blue accent
          light: '#98d4ff',   // Lighter blue for hover states
        },
        text: {
          DEFAULT: '#edf2f7', // Primary text color
          muted: '#a0aec0',   // Secondary/muted text color
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'slide-in': 'slideIn 0.4s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'typing': 'typing 1.8s steps(7) forwards, blink 0.7s infinite',
        'pulse-glow': 'pulseGlow 1.5s ease-in-out infinite',
        'bounce-subtle': 'bounceSlight 1.5s infinite',
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