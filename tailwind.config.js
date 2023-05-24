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
            card_bg: "#ffffff",
            card_btn: "#dddddd",
        },
        
        fontFamily: {
            title: ["Montserrat", "Poppins", "Open Sans", "Roboto" , "Calibri", "Arial", "Helvetica", "sans-serif"],
            sans: ["Poppins", "Open Sans", "Roboto" , "Calibri", "Arial", "Helvetica", "sans-serif"]
        },

        screens: {
            sm: { "max": "400px" },
            md: { "max": "768px", min: "400px" },
            lg: { "max": "1024px" },
            xl: { "max": "1280px" },
        }

    },
  },
  plugins: [],
}

