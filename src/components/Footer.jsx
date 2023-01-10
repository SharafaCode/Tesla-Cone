import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full flex flex-col lg:flex-row lg:gap-4 gap-2 justify-center items-center text-sm mt-28'>
        <p>
            Tesla &amp; 2023
        </p>
        <p>
            Privacy & Legal
        </p>
        <p>
            Vehicle Recalls
        </p>
        <p className='hidden lg:block'>
            Contact
        </p>
        <p>
            Careers
        </p>
        <p>
            News
        </p>
        <p className='hidden lg:block'>
            Engage
        </p>
        <p className='hidden lg:block'>
            Location
        </p>
    </footer>
  )
}

export default Footer