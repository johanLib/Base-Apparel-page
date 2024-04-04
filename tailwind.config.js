/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        custom1: '.71fr 2fr .85fr 2.615fr',
        custom2: '.5fr 1fr .67fr 5.9fr',
        custom3: '30px 1fr 30px',
      },
      gridTemplateRows: {
        custom1: '65px 35px 132px 188px 38px 72px 52px 60px 158px',
        custom2: '84px 40px 132px 188px 38px 72px 52px 60px 158px',
        custom3: '30px 25px 30px 340px 65px 129px 35px 80px 45px 50px 82px'
      },
      backgroundImage: {
        theme: "url('/images/bg-pattern-desktop.svg')",
        hero_desktop: "url('/images/hero-desktop.jpg')",
        hero_mobile: "url('/images/hero-mobile.jpg')"
      },
      colors: {
        Desaturated_Red: "#ce9797",
        Soft_Red: "#f96262",
        Dark_Grayish_Red: "#413a3a",
        color1: "rgba(248, 191, 191, 0.1)",
        color2: "rgba(243, 165, 165, 0.052)",
        color3: "rgba(238, 140, 140, 0.09)"
      },
      boxShadow: {
        custom: '0 15px 25px hsla(0, 43%, 76%, 0.483)'
      }
    },
  },
  plugins: [],
}