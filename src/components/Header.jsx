import React from 'react';
import logo from '../assets/logo.svg';


const Header = () => {
  return (
    <header className='w-full fixed flex items-center justify-center'>
        <nav className='w-mb_width lg:w-lg_width m-auto flex justify-between items-center pt-5'>
            <div className='cursor-pointer'>
                <img src={logo} alt="" />
            </div>

            <div className='hidden lg:flex lg:items-center lg:justify-center lg:text-base lg:font-font_semiMedium lg:tracking-widest lg:cursor-pointer lg:pl-52' >
                <h2 id='transitions'>
                    Model S
                </h2>
                <h2 id='transitions'>
                    Model 3
                </h2>
                <h2 id='transitions'>
                    Model X
                </h2>
                <h2 id='transitions'>
                    Model Y
                </h2>
                <h2 id='transitions'>
                    Solar Roof
                </h2>
                <h2 id='transitions'>
                    Solar Panels
                </h2>

            </div>
            <div className=' flex text-base font-font_semiMedium tracking-widest'>
                <button type='button' className='hidden lg:block' id='transitions'>Shop</button>
                <button type='button' className='hidden  lg:block' id='transitions'>Account</button>
                <button type='button' className='bg-menuBtn_color p-7 pt-2 pb-2 rounded-lg lg:bg-transparent lg:pt-0 lg:pb-0 lg:p-0' id='transitions'>Menu</button>

            </div>


        </nav>
    </header>
  )
}

export default Header