import React from 'react'
import { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import avatar from '../data/avatar.jpg'
import {Chat , Cart , Notification ,UserProfile } from '.'
import { useStateContext } from '../contexts/contextProvider'

const NavButton=({title,customFun,icon,color,dotColor})=>{
  return(
    <TooltipComponent  content={title} position='Bottom Center'>
      <button className='relative text-xl p-3 rounded-full hover:bg-light-gray' type='button' style={{color}} onClick={customFun}>
        <span className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2' style={{backgroundColor:`${dotColor}`}} ></span>
        {icon}
      </button>
    </TooltipComponent>
  )
}

const Navbar = () => {
  const {activeMenu,setActiveMenu , isClicked , setIsCliked ,handleClick ,  screenSize , setScreenSize,currentColor}=useStateContext();

  useEffect(()=>{
    const handleResize=()=>setScreenSize(window.innerWidth);

    window.addEventListener("resize",handleResize);
    handleResize();

    return ()=>window.removeEventListener("resize",handleResize);

  },[setScreenSize])

  useEffect(()=>{
    if(screenSize<900){
      setActiveMenu(false)
    }else{
      setActiveMenu(true);
    }
  },[screenSize,setActiveMenu])
   
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title='Menu' customFun={()=>setActiveMenu(prev=>!prev)} icon={<AiOutlineMenu />} color={`${currentColor}`}  />
      <div className='flex'>
        <NavButton title='Cart' customFun={()=>handleClick('cart')} icon={<FiShoppingCart />} color={`${currentColor}`} />
        <NavButton title='chat' customFun={()=>handleClick('chat')} icon={<BsChatLeft />} color={`${currentColor}`} dotColor='#03c9d7' />
        <NavButton title='notification' customFun={()=>handleClick('notification')} icon={<RiNotification3Line />} color={currentColor} dotColor='#03c9d7' />
        <TooltipComponent content='profile' position='BottomCenter'>
          <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
          onClick={()=>handleClick("userProfile")}
          >
            <img className='rounded-full w-8 h-8' src={avatar} alt='avatarimage' />
            <p>
              <span className='text-gray-400 text-14'>Hi'</span>{' '}
              <span className='text-gray-400 text-14'>Subhi</span>{' '}
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14' />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  )
}

export default Navbar