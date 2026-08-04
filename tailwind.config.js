/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gh: {
          bg: '#0D1117',
          card: '#161B22',
          border: '#30363D',
          text: '#E6EDF3',
          muted: '#8B949E',
          green: '#3FB950',
          blue: '#58A6FF',
          orange: '#D29922',
          red: '#F85149',
          hover: '#1F242C',
          header: '#161B22',
          subtle: '#21262D',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['"Fira Code"', '"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'liberation mono', 'courier new', 'monospace'],
      },
      boxShadow: {
        'gh-card': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
        'gh-glow': '0 0 15px rgba(88, 166, 255, 0.15)',
        'gh-green-glow': '0 0 15px rgba(63, 185, 80, 0.2)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flow-line': 'flowLine 2s linear infinite',
      },
      keyframes: {
        flowLine: {
          '0%': { strokeDashoffset: '24' },
          '100%': { strokeDashoffset: '0' },
        }
      }
    },
  },
  plugins: [],
}
