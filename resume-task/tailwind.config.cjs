const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Mulish", "sans-serif"],
      },
      gridTemplateColumns: {
        "auto-grid": "repeat(auto-fill, minmax(88px, 1fr))",
      },
    },
    colors: {
      white: "#FFF",
      black: "#000",
      transparent: "transparent",
      gray: {
        100: "#C4C4C4",
        200: "#7F7E7E",
        300: "#373737",
        400: "#282828",
      },
    },
  },
  plugins: [],
};

module.exports = config;
