/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
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
        "custom": "0px 0px 0px 5px primary-orange inset",
        "3xl": "0 10px 10px -6px rgba(255, 150, 0, 0.9)",
      },

      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
  },

  plugins: [],
};
