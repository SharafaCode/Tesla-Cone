import React, { useState } from 'react';
import menuLinks from '../components/carInfo.json'

const SubLinks = () => {
    const [sublinks, setSubLinks] = useState(menuLinks)
  return (
    <div>
               <div>
                {
                    sublinks.map((item, id)=> {
                        if(typeof(item.more) == 'object'){
                           
                                item.more.map((sublinks)=>{

                                    console.log(sublinks);
                                    
                                    
                                    
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
            </div>
    </div>
  )
}

export default SubLinks