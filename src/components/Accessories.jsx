import React from 'react';
import arrowDown from '../assets/down-arrow.svg';
// import Fade from 'react-reveal/Fade';
// import Footer from './Footer';


const Accessories = () => {
  return (
    <section className='w-full h-screen accessories scroll-pb-96'>
        <article className='w-mb_width m-auto'>
            {/* <Fade bottom> */}

                <div className='grid gap-48 place-items-center justify-center min-h-screen grid-flow-row'>
                    <div className='text-center'>
                    <h1 className='text-xl font-font_semiMedium tracking-wide'>
                    Accessories
                    </h1>
                    <p className='hidden text-base text-text_color font-font_medium'>
                        Lowest Cost Solar Panels in America
                    </p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                    <div className='flex flex-col ss:flex-row gap-8 ss:gap-10 items-center justify-between text-base font-font_semiMedium tracking-widest'>
                        <button type='button' className='w-btnWidth  bg-button_color text-center pt-4 pb-4 rounded-lg text-buttonText_color ss:w-96'>
                        Order Now
                        </button>
                        <button type='button' className='hidden w-btnWidth  bg-button2_color text-center pt-4 pb-4 rounded-lg text-buttonText2_color ss:w-96'>
                        Learn More
                        </button>

                    </div>
                    <div className='-translate-y-4 hidden'>
                        <img src={arrowDown} alt="" className='w-16 object-contain'/>
                    </div>
                    </div>
                </div>
                
            {/* </Fade> */}
        </article>
        {/* <div className='sm:-mt-20'>
        <Footer/>

        </div> */}
        
    </section>
  )
}

export default Accessories