/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        kumbh: ["Kumbh Sans", "Sans-serif"],
        // kumbh: ['Kumbh Sans', 'Sans-serif'](https://fonts.google.com/specimen/Kumbh+Sans),
      },
      fontWeight: {
        normal: 400,
        bold: 700,
      },
      colors: {
        "primary-orange": "hsl(26, 100%, 55%)",
        "primary-pale-orange": "hsl(25, 100%, 94%)",
        "Very-dark-blue": "hsl(220, 13%, 13%)",
        "Dark-grayish-blue": "hsl(219, 9%, 45%)",
        "Grayish-blue": "hsl(220, 14%, 75%)",
        "Light-grayish-blue": "hsl(223, 64%, 97%)",
        White: "hsl(0, 0%, 100%)",
        Black: "hsl(0, 0%, 0%)",
        // Black (with 75% opacity for lightbox background): "hsl(0, 0%, 0%)",
      },
      boxShadow: {
        "2xl": "0px 0px 0px 5px primary-orange inset",
        "3xl": "0 10px 10px -6px rgba(255, 150, 0, 0.9)",
      },

      screens: {
        sm: "325px",
        md: "1440px",
      },
    },
  },

  plugins: [],
};
