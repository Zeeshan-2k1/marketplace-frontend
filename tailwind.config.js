module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      white: {
        100: "#ffffff",
        200: "ffffff0d",
        300: "#ffffff66",
      },
      black: {
        100: "#393E46",
        900: "#222831",
        bg: "#121316",
        dark: "#000000",
      },
      blue: "#248aff",
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
