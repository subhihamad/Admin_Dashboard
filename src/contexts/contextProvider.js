import React, { createContext , useState , useContext, useEffect } from "react";

const StateContext=React.createContext();

const initialState={
    chat:false,
    cart:false,
    userProfile:false,
    notification:false
}

export const ContextProvider=({children})=>{
    const [activeMenu , setActiveMenu]=useState(true);
    const [isClicked,setIsClicked]=useState(initialState);
    const [currentColor,setCurrentColor]=useState('#1A97F5');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false)
    const [screenSize , setScreenSize]=useState(undefined);
    
    const handleClick=(clicked)=>{
        setIsClicked({...initialState,[clicked]:true})
    }

    const setMode=(e)=>{
        setCurrentMode(e);
        setThemeSettings(false);
        localStorage.setItem('themeMode',e);
    }

    const setColor=(e)=>{
        setCurrentColor(e);
        setThemeSettings(false);
        localStorage.setItem('themeColor',e);
    }

   useEffect(()=>{
        if(localStorage.getItem('themeColor')){
        setCurrentColor(prev=>prev=localStorage.getItem('themeColor'))
    }
   },[])

   useEffect(()=>{
    if(localStorage.getItem('themeMode')){
        setCurrentMode(prev=>prev=localStorage.getItem('themeMode'));
    }
   },[])


    return (
        <StateContext.Provider value={{activeMenu , setActiveMenu , isClicked , setIsClicked ,
        handleClick , screenSize , setScreenSize,currentColor,setCurrentColor,
        currentMode,setCurrentMode,setColor,setMode,themeSettings,setThemeSettings}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext=()=>useContext(StateContext);