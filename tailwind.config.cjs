
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
          backgroundImage: {
            modelY: "url('/tesla-clone/src/assets/model-y.jpg')",

          },
          colors: {
            button2_color: "rgba(236, 234, 233, 0.814)",
            buttonText2_color: "rgb(58, 58, 90)",
            button_color: "rgb(63,65,69)",
            buttonText_color: "rgb(255,255,255)",
            menuBtn_color: "rgba(129, 129, 129, 0.180)",
            title_color: "rgb(23,26,32)",
            text_color: " rgb(0 0 0 / 77%)",
          
          },

  
          fontSize: {
  
            sm:["clamp(1.4rem, 10vw, 1.4rem)"],
    
            base:["clamp(1.4rem, 10vw, 1.4rem)" ],
    
            lg:["clamp(2.6rem, 10vw, 4rem)" ],
    
            xl:["clamp(3rem, 10vw, 4rem)"],
          
      },

      fontWeight:{
        font_medium:'500',
        font_semiMedium:'600',
        font_bold:'700',
        font_black: '900',
      },
      width:{

        mb_width: "90%",
        lg_width: "95%",
        btnWidth: "90vw",
        btnWidth2: "40vw",
        // xlg_width: "80%",
        // navbox_width: '28rem',
        // img_ss_width: '66rem',
        // img_width: '66rem',
        // img_xl_width: '102rem',

      },
      height:{

        height: "90vh",
        x_height: "80vh",
        img_height: "95vh",
        img_x_height: "33rem",
        img_xx_height: "40rem",
        input_height: "4.9rem"

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

