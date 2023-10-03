module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      fontSize: {
        14: "14px",
      },
      backgroundColor: {
        "main-bg": "#FAFBFB",
        "main-dark-bg": "#20232A",
        "secondary-dark-bg": "#33373E",
        "light-gray": "#F7F7F7",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
      },
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },
      height: {
        80: "80px",
      },
      minHeight: {
        590: "590px",
      },
      backgroundImage: {
        "hero-pattern":
          "url('data:image/jpeg;base64,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')",
      },
    },
  },
  plugins: [],
};
