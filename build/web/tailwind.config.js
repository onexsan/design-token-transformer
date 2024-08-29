/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        surface: {
          primary: "#000000ff",
          secondary: "#f5f2f2ff"
        },
        text: {
          primary: "#ffffffff",
          secondary: "#ebe9e9ff"
        }
      }
    },
  },
}