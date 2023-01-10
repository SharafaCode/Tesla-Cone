import React from 'react';
import arrowDown from '../assets/down-arrow.svg';
import Fade from 'react-reveal/Fade';

const SolarPanel = () => {
  return (
    <section className='w-full h-screen solarPanel'>
        <article className='w-mb_width m-auto'>
            <Fade>

                <div className='grid gap-48 place-items-center justify-center min-h-screen grid-flow-row'>
                    <div className='text-center '>
                    <h1 className='text-lg font-font_semiMedium tracking-wide'>
                        Solar Panels
                    </h1>
                    <p className='text-sm text-text_color font-font_medium'>
                        Lowest Cost Solar Panels in America
                    </p>
                    </div>
                    <div className='flex flex-col items-center justify-center -translate-y-2'>
                    <div className='flex flex-col ss:flex-row gap-8 ss:gap-10 items-center justify-between text-base font-font_semiMedium tracking-widest'>
                        <button type='button' className='w-btnWidth  bg-button_color text-center pt-4 pb-4 rounded-lg text-buttonText_color ss:w-96'>
                        Order Now
                        </button>
                        <button type='button' className='w-btnWidth  bg-button2_color text-center pt-4 pb-4 rounded-lg text-buttonText2_color ss:w-96'>
                        Learn More
                        </button>

                    </div>
                    <div className='-translate-y-4 hidden'>
                        <img src={arrowDown} alt="" className='w-16 object-contain'/>
                    </div>
                    </div>

                </div>
                
            </Fade>

        </article>
    </section>
  )
}

export default SolarPanel