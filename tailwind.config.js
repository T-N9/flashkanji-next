const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "linear-gradient(180deg, #DC1D24 0%, #D41B21 49.48%, #A60308 100%) !important",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        light: "#E9EEEA",
        success: "#8AB17D",
        info: "#23427C",
      },
      fontFamily: {
        "primary-san": ["Noto Sans JP", "sans-serif"],
        "primary-serif": ["Noto Serif JP", "serif"],
        "english" : ["Kanit", "sans-serif"],
        "writing-1" : ["Shippori Mincho", "serif"]
      },
    },
  },
  plugins: [],
});
