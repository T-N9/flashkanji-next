const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Tektur', "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial":
          "linear-gradient(180deg, #DC1D24 0%, #D41B21 49.48%, #A60308 100%) !important",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-orange-card":
          "linear-gradient(142deg, #F9EFE3 8.29%, #FCE2C9 88.99%)",
        "gradient-orange-border":
          "linear-gradient(138deg, #FFF6EA 0%, #FFF1E6 46.99%, #E19A63 100%)",
      },
      colors: {
        light: "#E9EEEA",
        success: "#00755F",
        info: "#23427C",
        border_orange: "#E19A63",
        dark: "#2F4858"
      },
      fontFamily: {
        "primary-san": ["Noto Sans JP", "sans-serif"],
        "primary-serif": ["Noto Serif JP", "serif"],
        english: ['Tektur', "sans-serif"],
        "writing-1": ["Shippori Mincho", "serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      dark: {
        colors: {
          default: {
            DEFAULT: "#fff",
            foreground: "#000000",
          },
          focus: "#fff",
        },
      },
    },
  }),],
};
