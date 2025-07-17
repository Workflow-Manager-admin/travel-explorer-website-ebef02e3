module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class', // support dark/light for auto theme
  theme: {
    extend: {
      colors: {
        primary: "#0E1D42",
        secondary: "#0C573A",
        accent: "#F2B705",
      },
      fontFamily: {
        logo: ["'DM Serif Display'", "serif"],
      }
    },
  },
  plugins: [],
}
