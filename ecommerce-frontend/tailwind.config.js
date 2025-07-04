/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        skyblue: "#96E9FB",
        mintgreen: "#ABECD6",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(90deg, #96E9FB 0%, #ABECD6 100%)",
      },
    },
  },
  plugins: [],
};
