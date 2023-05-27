defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bloodMoon: {
          100: "#FBEBEB",
          200: "#F7D6D6",
          300: "#EFAEAD",
          400: "#E88584",
          500: "#E05D5B",
          600: "#D83432",
          700: "#AD2A28",
          800: "#821F1E",
          900: "#561514",
          1000: "#2B0A0A",
        },
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        heading: ["GeneralSans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
