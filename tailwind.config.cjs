
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
          colors: {
            button2_color: "rgba(236, 234, 233, 0.814)",
            buttonText2_color: "rgb(58, 58, 90)",
            button_color: "rgb(38,40,45)",
            buttonText_color: "rgb(255,255,255)",
            closeBtn_color: "rgb(90, 89, 89);",
            menuBtn_color: "rgba(129, 129, 129, 0.200)",
            title_color: "rgb(23,26,32)",
            text_color: " rgb(0 0 0 / 77%)",
            bg_color: 'rgba(129, 129, 129, 0.205);',
          
          },

  
          fontSize: {
  
            sm:["clamp(1.2rem, 10vw, 1.2rem)"],
    
            base:["clamp(1.4rem, 10vw, 1.4rem)" ],

            semiBase:["clamp(1.6rem, 10vw, 1.8rem)" ],
    
            lg:["clamp(2.4rem, 10vw, 2.8rem)" ],
    
            xl:["clamp(3rem, 10vw, 4rem)"],
          
      },

      fontWeight:{
        font_medium:'500',
        font_semiMedium:'600',
        font_bold:'700',
        font_black: '900',
      },
      margin: {
        'ml-3': '3.25rem',
        'ml-2': '22rem',
      },

      width:{
        mb_width: "90%",
        lg_width: "95%",
        btnWidth: "90vw",
        btnWidth2: "40vw",
        menu_width: '31.2rem',
        closeBtn_width: '29.5rem',
        ml_width: '26rem',
      

      },
      height:{

        height: "90vh",
     

      },

      screens: {

          xs: "360px",
          ss: "600px",
          sm: "768px",
          md: "1024px",
          lg: "1200px",
          xl: "1400px",

      },

      },

  plugins: [],
  },
};

