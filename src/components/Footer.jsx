import React from 'react'

const Footer = () => {
  return (
   
    <footer className='w-full h-fit pb-36 ss:pb-28 sm:pb-10' >

        <div className='flex flex-col sm:flex-row gap-3 items-center justify-center text-sm font-font_semiMedium text-text_color ss:gap-8 text-center'>

            <div className='flex gap-3 flex-col ss:flex-grow-0 ss:flex-row ss:gap-5'>
                <p>
                    Tesla &amp; 2023
                </p>
                <p>
                    Privacy & Legal
                </p>
                <p>
                    Vehicle Recalls
                </p>
                <p className='hidden ss:block'>
                    Contact
                </p>
                <p>
                    Careers
                </p>
                <p className='ss:self-center'>
                    News
                </p>

            </div>

            <div className='hidden ss:flex ss:gap-5 ss:self-center '>
                <p >
                    Engage
                </p>
                <p >
                    Location
                </p>

            </div>
            

        </div>
    </footer>

  )
}

export default Footer