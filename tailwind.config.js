  /** @type {import('tailwindcss').Config} */
  export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: {
            50: "#fff7ed",
            100: "#ffedd5",
            500: "#ff6b00",
            600: "#ea580c",
            700: "#c2410c",
            800: "#9a3412",
            900: "#7c2d12",
          },
          secondary: {
            50: "#ecfdf5",
            100: "#d1fae5",
            500: "#00c9a7",
            600: "#059669",
            700: "#047857",
            800: "#065f46",
            900: "#064e3b",
          },
          dark: {
            50: "#1a1a1a",
            100: "#171717",
            200: "#141414",
            300: "#111111",
            800: "#0f0f0f",
            900: "#0a0a0a",
          },
        },
        fontFamily: {
          sans: ["Inter", "system-ui", "sans-serif"],
          mono: ["JetBrains Mono", "Consolas", "monospace"],
        },
        backdropBlur: {
          xs: "2px",
        },
        animation: {
          float: "float 6s ease-in-out infinite",
          "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          "bounce-slow": "bounce 3s infinite",
          "spin-slow": "spin 20s linear infinite",
          gradient: "gradient 8s linear infinite",
          "star-movement-bottom":
            "star-movement-bottom linear infinite alternate",
          "star-movement-top": "star-movement-top linear infinite alternate",
          "gradient-left": "gradient-flow 6s ease infinite",
          "gradient-right": "gradient-flow-reverse 6s ease infinite",
          shimmer: "shimmer 2.5s ease-in-out infinite",
        },
        keyframes: {
          float: {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-20px)" },
          },
          gradient: {
            "0%, 100%": { "background-position": "0% 50%" },
            "50%": { "background-position": "100% 50%" },
          },
          "star-movement-bottom": {
            "0%": { transform: "translate(0%, 0%)", opacity: "1" },
            "100%": { transform: "translate(-100%, 0%)", opacity: "0" },
          },
          "star-movement-top": {
            "0%": { transform: "translate(0%, 0%)", opacity: "1" },
            "100%": { transform: "translate(100%, 0%)", opacity: "0" },
          },
          "gradient-flow": {
            "0%": { backgroundPosition: "100% 50%" },
            "100%": { backgroundPosition: "0% 50%" },
          },
          "gradient-flow-reverse": {
            "0%": { backgroundPosition: "0% 50%" },
            "100%": { backgroundPosition: "100% 50%" },
            
          },shimmer: {
          "0%, 100%": {
            opacity: "0.2",
            transform: "scale(1)"
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.5)"
          }
        },
        },
      },
    },
  };
