import React from 'react'
import { useStateContext } from '../contexts/contextProvider'
const Header = ({category,title}) => {
  const {currentMode}=useStateContext();
  return (
    <div className='mb-10'>
      <p className={`${currentMode==='Dark'? 'text-gray-400' : 'text-gray-200'}`}>{category}</p>
      <p className={`text-3xl font-extrabold ${currentMode==='Dark'? 'text-white' : 'text-black'}`}>{title}</p>
    </div>
  )
}

export default Header