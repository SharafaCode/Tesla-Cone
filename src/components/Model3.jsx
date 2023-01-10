import React from 'react';
import arrowDown from '../assets/down-arrow.svg';
import Fade from 'react-reveal/Fade';

const Model3 = () => {
  return (
    <section className='w-full h-screen model3 m-auto'>
        <article className='w-mb_width m-auto'>
            <Fade>

            <div className='grid place-items-center justify-center min-h-screen grid-flow-row'>
                <div className='text-center '>
                <h1 className='text-lg font-font_semiMedium tracking-wide'>
                    Model 3
                </h1>
                <p className='text-sm text-text_color font-font_medium border-b'>
                    Schedule a Demo Drive
                </p>
                </div>
                <div className='flex flex-col gap-20 items-center justify-center translate-y-full'>
                <div className='flex flex-col ss:flex-row gap-8 ss:gap-10 items-center justify-between text-base font-font_semiMedium tracking-widest'>
                    <button type='button' className='w-btnWidth  bg-button_color text-center pt-4 pb-4 rounded-lg text-buttonText_color ss:w-96'>
                    Custom Order
                    </button>
                    <button type='button' className='w-btnWidth  bg-button2_color text-center pt-4 pb-4 rounded-lg text-buttonText2_color ss:w-96'>
                    View Inventory
                    </button>

                </div>
                <div className='-translate-y-10'>
                    <img src={arrowDown} alt="" className='w-16 object-contain' id='arow-down-animate'/>
                </div>
                </div>

            </div>
            
            </Fade>

        </article>
    </section>
  )
}

export default Model3