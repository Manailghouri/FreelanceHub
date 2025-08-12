export default {
  darkMode: "class", // Enables dark mode toggling via a `.dark` class
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light theme colors
        lightBg: "#f8fafc",
        lightText: "#111827",
        // Dark theme colors
        darkBg: "#0b0f19",
        darkCard: "rgba(20, 24, 35, 0.85)",
        darkText: "#e5e7eb",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(40px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: 0, transform: "scale(0.96)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-out",
        slideUp: "slideUp 0.8s ease-out",
        scaleIn: "scaleIn 0.5s ease-out",
      },
      boxShadow: {
        glow: "0 0 25px rgba(99, 102, 241, 0.45)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
