/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "bounce-once": "bounce 1.4s 0.5",
        wiggle: "wiggle 1s ease-in-out infinite",
        expand: "expand 0.3s",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        expand: {
          "0%, 100%": { transform: "scaleX(0)" },
          "50%": { transform: "scaleX(1)" },
        },
      },
      fontFamily: {
        heebo: ["Heebo", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        libreFranklin: ["Libre Franklin", "sans-serif"],
      },
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
      },
      fontSize: {
        28: "1.75rem",
        32: "2rem",
        40: "2.5rem",
        54: "3.3rem",
      },
      backgroundImage: {
        signUp: "url('/assets/images/signupBg.svg')",
        carousalBg: "url('/assets/images/carousalBg.png')",
        signInCarousalBg: "url('/assets/images/signInCarousalBg.png')",
        signInSlideBg: "url('/assets/images/signInSlideBg.png')",
        otpSuccess: "url('/assets/icons/otp-success.svg')",
        bg1: "url('/assets/icons/bg_1.svg')",
        assessmentBG: "url('/assets/images/assessmentBg.svg')",
        testimonialBg: "url('/assets/images/testimonialBg.png')",
        frame1: "url('/assets/icons/frame1.svg')",
      },
      boxShadow: {
        catShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        teamMemberCard: "0px 4px 6px 2px rgba(187, 170, 204, 0.15);",
        teamMemberCardHover: "0px 4px 4px 0px rgba(245, 242, 248, 1)",
        support: " 0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
        myShadow: "0px 4px 6px 2px rgba(187, 170, 204, 0.15)",
        dropDown:
          "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.20);",
      },
      screens: {
        small: { raw: "(max-height: 660px)" },
        xxl: "1366px",
        mac: "1440px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
