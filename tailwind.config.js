/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6F5885",
        secondary: "#BBAACC",
        tertiary: "#F8F9FA",
        icon: "#7A7289",
        "gray-primary": "#1D1D1F",
        "gray-secondary": "#6E6E73",
        "gray-tertiary": "#B7B7B7",
        "gray-quaternary": "#5E5E5E",
        disabled: "#EBEBEB",
        error: "#D34949",
        success: "#4CD349",
        warning: "#E6B15B",
        info: "#443454",
        "purple-1": "#FBFBFDCC",
        "primary-black": "#282828",
        "primary-active": "#BBAACCCC",
      },
      fontFamily: {
        heebo: ["Heebo", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        libreFranklin: ["Libre Franklin", "sans-serif"],
      },
      fontSize: {
        28: "1.75rem",
        32: "2rem",
        40: "2.5rem",
        42: "2.625rem",
        54: "3.3rem",
      },
      backgroundImage: {
        pagesBackground: "url('/assets/images/pages_bg.svg')",
      },
    },
    backgroundImage: {
      primaryBg: "url('/assets/images/bgPrimary.svg')",
      assessmentCardBg: "url('/assets/images/assessmentcardbg.svg')",
    },
    boxShadow: {
      cardShadow1: "0px 4px 6px 2px #BBAACC26",
      dropDownShadow: "0px 4px 20px 0px #BBAACC40",
    },

    screens: {
      small: { raw: "(max-height: 660px)" },
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1366px",
      mac: "1440px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
  },
  plugins: [],
};
