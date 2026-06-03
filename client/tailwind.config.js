/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Space_Grotesk': ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        primary: '#1E40AF',     // Deep blue
        secondary: '#3B82F6',   // Soft blue
        accent: '#10B981',      // Growth/Progress green

        background: '#F8FAFC',  // Soft white
        surface: '#FFFFFF',
        text: '#1E293B',
      }
    },
  },
  plugins: [],
}
