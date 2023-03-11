import React, { useContext, useState, useEffect, useRef } from "react";
import carsInfo from '../components/carsinfo';

const url = "../components/carInfo.json";


const AppContext = React.createContext();


export const AppProvider = ({children})=> {
    const [menutoggle, setMenuToggle] = useState(false);
    const [moretoggle, setMoreToggle] = useState(true);
    const [links, setLinks] = useState(carsInfo);
    const outSideRef = useRef();

    const ouSideCloseMenu = (e) => {

        if(!outSideRef.current.contains(e.target)){
            setMenuToggle(false)
        }
    }
    useEffect(()=> {
       

        document.addEventListener('click', ouSideCloseMenu, true);

    },[])

return (

        <AppContext.Provider value={{
            menutoggle, setMenuToggle, moretoggle, setMoreToggle, outSideRef, links
        }}>
            {children}
        </AppContext.Provider>

    )
    
}


export const useGlobalContext = ()=> {
    return useContext(AppContext)
}