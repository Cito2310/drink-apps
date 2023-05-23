/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",   
  ],
  theme: {
    extend: {
        colors: {
            backgroundColor: "#dddddd",
            card_bg: "#f0f0f0",
            card_btn: "#dddddd",
        },
        
        fontFamily: {
            title: ["Montserrat", "Poppins", "Open Sans", "Roboto" , "Calibri", "Arial", "Helvetica", "sans-serif"],
            sans: ["Poppins", "Open Sans", "Roboto" , "Calibri", "Arial", "Helvetica", "sans-serif"]
        }

    },
  },
  plugins: [],
}

