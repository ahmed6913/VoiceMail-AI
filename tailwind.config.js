/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "indigo-gradient-start": "#6366F1", // A shade of indigo
        "blue-gradient-end": "#3B82F6", // A shade of blue
        border: "#e5e7eb", // Tailwind's default gray-200 for borders
        background: "#ffffff", // or another color you prefer
        foreground: "#18181b", // Tailwind's default zinc-900 for text
      },
    },
  },
  plugins: [],
}
