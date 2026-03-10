/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
        ],
      },

      colors: {
        smart: {
          blue: "#2563EB",
          teal: "#14B8A6",
          green: "#10B981",
          dark: "#020617",
          navy: "#08142a",
        },
      },

      boxShadow: {
        glass: "0 25px 60px rgba(0,0,0,0.35)",
        glow: "0 0 40px rgba(37, 99, 235, 0.35)",
      },

      backdropBlur: {
        xs: "2px",
      },

      backgroundImage: {
        "smart-gradient":
          "linear-gradient(135deg, #2563EB 0%, #14B8A6 50%, #10B981 100%)",
      },
    },
  },

  plugins: [],
};
