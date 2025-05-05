module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          glitch: "glitchStrong 1s ease-out 1",
        },
        keyframes: {
          glitchStrong: {
            "0%": { textShadow: "2px 0 red, -2px 0 cyan", opacity: "0.8" },
            "20%": { textShadow: "-3px 0 red, 3px 0 cyan" },
            "40%": { textShadow: "3px 0 magenta, -3px 0 lime" },
            "60%": { textShadow: "-2px 0 cyan, 2px 0 red" },
            "80%": { textShadow: "1px 0 red, -1px 0 cyan" },
            "100%": { textShadow: "none", opacity: "1" },
          },
        },
      },
    },
    plugins: [],
  }
  