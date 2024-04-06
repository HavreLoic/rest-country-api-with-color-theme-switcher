/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "hsl(209, 23%, 22%)",
        "very-dark-blue": "hsl(207, 26%, 17%)",
        "dark-gray": "hsl(0, 0%, 52%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
    fontFamily: {
      sans: ["Nunito", "Sans"],
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1440px",
      xl: "1280px",
    },
    fontWeight: {
      normal: 300,
      bold: 600,
      bolder: 800,
    },
  },
  plugins: [], // Add any Tailwind plugins here
};
