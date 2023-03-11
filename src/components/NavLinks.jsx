import React, { useEffect, useRef, useState } from 'react';

import { Icon } from '@iconify/react';
import 'animate.css';
import { useGlobalContext } from './context';


const NavLinks = () => {

    const {links,menutoggle, setMenuToggle,  moretoggle, setMoreToggle, outSideRef} = useGlobalContext();
   

  return (
    <aside className='fixed top-0 left-0 bg-bg_color h-screen w-screen backdrop-blur-sm z-50' >
    
        <div className= {`  ${moretoggle? 'null' : 'overflow-y-hidden '} fixed top-0 right-0 bg-white w-menu_width h-screen xl:overflow-auto xl:pb-0 overflow-scroll overflow-x-hidden pb-96 `} ref={outSideRef}>

          

            <div className='fixed top-0 bg-white text-lg text-closeBtn_color w-closeBtn_width h-32 flex items-center justify-between z-50'>
                <div className= {`${menutoggle? 'opacity-0' : null} ${moretoggle? null : 'opacity-100'}  flex items-center justify-start text-semiBase cursor-pointer ml-16  z-50 `}   onClick={()=> setMoreToggle(true)}>
                    <Icon icon="material-symbols:arrow-back-ios-rounded" />
                    <p className='text-sm font-font_semiMedium'>Back</p>
                </div>

                <div className= {`${moretoggle? 'null' : 'translate-x-3'} mr-4 -mt-2`} id='closeBtnTransitions'>
                    <Icon icon="clarity:window-close-line" onClick={()=>{
                        setMenuToggle(false);
                        setMoreToggle(true);
                        
                    } }/>

                </div>
            </div>
            {
                moretoggle?

                <div className='xl:pl-10 pl-11 xl:pt-28 pt-28' >
                    {
            
                        links.map((items, index)=>{
                         
                           

                            
                            return (

                                <>
                                    <div className='text-base font-font_semiMedium text-text_color' id='linksDisplay'>
                                        <ul className='pt-5' key={items.id} >
                                            <li className='flex items-center justify-between'id='linksTransitions' key={items.toString} onClick={()=>{
                                                 if(index == links.length -1){
                                                    setMoreToggle(false);
                            
                                                 }
                                            }}>
                                                {items.title}
                                                <span>
                                                <img src={items.icon} alt="" />
                                                </span>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                
                                
                                </>
                            )
                        })

                    }
                    <div className='mt-5' id='linksTransitions'>
                        <div className='flex gap-4 items-center justify-left text-base font-font_semiMedium text-text_color'>
                            <div>
                                <Icon icon="pajamas:earth" className='text-semiBase' />
                            </div>
                            <div>
                                <h2>United States</h2>
                            </div>
                        </div>
                        <div className='pl-12 text-sm font-font_semiMedium text-text_color'>
                            <p className=' hover:border-b-2 hover:border-black w-fit'>
                                English
                            </p>
                        </div>
                    </div>

                </div>

                :
            
                <div>

                    <div className='flex flex-col pl-12 gap-8 text-text_color mt-36 overflow-y-hidden'>
                   
                        <ul className='flex flex-col gap-3 text-base font-font_semiMedium' >
                            <li id='linksTransitions'>
                                Cybertruck
                            </li>
                            <li id='linksTransitions'>
                                Roadster
                            </li>
                            <li id='linksTransitions'>
                                Semi
                            </li>
                            <li id='linksTransitions'>
                                News
                            </li>
                        </ul>
                        <div id='linksTransitions'>
                            <div className='flex gap-4 items-center justify-left text-base font-font_semiMedium text-text_color'>
                                <div>
                                    <Icon icon="pajamas:earth" className='text-semiBase' />
                                </div>
                                <div>
                                    <h2>United States</h2>
                                </div>
                            </div>
                            <div className='pl-12 text-sm font-font_semiMedium text-text_color'>
                                <p className=' hover:border-b-2 hover:border-black w-fit'>
                                    English
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>

            }

            
            {/* <div>
                {
                    links.map((item, id)=> {
                        if(typeof(item.more) == 'object'){
                           
                                item.more.map((sublinks)=>{
                                    
                                    
                                    
                                    return(
                                      
                                        <div key={id}>
                                            <ul>
                                                
                                                <li>
                                                    {sublinks.cyber}
                                                </li>
                                             
                                                <li >
                                                    {sublinks.road}
                                                </li>

                                                <li >
                                                    {sublinks.semi}
                                                </li>
                                                <li>
                                                    {sublinks.news}
                                                </li>
                                            
                                            </ul>

                                        </div>
                                    ) 
                                })

                           
                        }else{
                            null
                        }
                    })
                }
            </div> */}

        </div>
    </aside>
  )
}

export default NavLinks