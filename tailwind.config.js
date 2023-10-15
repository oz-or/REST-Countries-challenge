/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        whitey: "hsl(0, 0%, 100%)",
        lightGray: "hsl(0, 0%, 98%)",
        darkGray: "hsl(0, 0%, 52%)",
        blue: "hsl(209, 23%, 22%)",
        darkBlue: "hsl(207, 26%, 17%)",
        darkestBlue: "hsl(200, 15%, 8%)",
      },
    },
    screens: {
      1440: "1440px",
      1340: "1340px",
      1100: "1100px",
      1050: "1050px",
      660: "660px",
      500: "500px",
      375: "375px",
    },
  },
  plugins: [],
};
