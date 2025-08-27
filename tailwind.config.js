/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D1F22",
        secondary: "#00A859",
        accent: "#FFD600",
        grayDark: "#4D4D4D",
        grayLight: "#F5F5F5"
      },
      fontFamily: {
        sans: ["'Tajawal'", "'Inter'", "system-ui", "sans-serif"]
      },
      container: {
        center: true,
        padding: "1rem"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.08)"
      }
    }
  },
  plugins: []
}
