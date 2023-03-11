import React from 'react'
import Accessories from './Accessories'
import Footer from './Footer'
import Header from './Header'
import Model3 from './Model3'
import ModelS from './ModelS'
import ModelX from './ModelX'
import ModelY from './ModelY'
import SolarPanel from './SolarPanel'
import SolarRoof from './SolarRoof'

const Home = () => {
  return (
    <div >

        <div className='containers'>
        <Header/>
        <ModelY/>
        <Model3/>
        <ModelS/>
        <ModelX/>
        <SolarPanel/>
        <SolarRoof/>
        <Accessories/>
        
          <Footer/>
        

        </div>
  
     
    </div>
  )
}

export default Home