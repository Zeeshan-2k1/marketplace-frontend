module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: {
        100: "#393E46",
        900: "#222831",
        dark: "#000000",
      },
      blue: "#00ADB5",
      grey: "#EEEEEE",
    },
    screens: {
      lg: { max: "900px" },
      md: { max: "768px" },
      sm: { max: "468px" },
    },
    extend: {},
  },
  plugins: [],
};
