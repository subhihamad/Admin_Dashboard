import React, { useEffect } from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { themeColors } from '../data/dummy'
import { useStateContext } from '../contexts/contextProvider'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { BsCheck } from 'react-icons/bs'
import { setColor } from '@syncfusion/ej2/treemap'
const ThemeSettings = () => {
  const {currentColor,setCurrentColor,currentMode, setCurrentMode,
        setColor,setMode,themeSettings,setThemeSettings}=useStateContext();
      useEffect(()=>{
        console.log(currentColor);
        console.log(currentMode);
      })
  return (
    <>
    {themeSettings &&
      <div className='bg-half-transparent w-screen flex justify-end items-center h-screen fixed nav-item top-0 right-0'>
      <div className='bg-white w-[400px] h-[100%]   dark:text-gray-600 dark:[#484B52] '>
        <div className='flex justify-between items-center p-4 ml-3'>
          <p className='font-semibold text-xl  '>Settings</p>
          <button
          type='button'
          onClick={()=>setThemeSettings(false)}
          style={{color:'rgb(153 , 171 , 180)',borderRadius:'50%'}}
          className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className='flex flex-col border-t-1 border-color p-4 ml-4 '>
          <p className='text-lg font-semibold'>Theme Settings</p>
          <div className='mt-4'>
            <input
            type='radio'
            id='light'
            name='theme'
            value='Light'
            className='cursor-pointer'
            onChange={(e)=>setMode(e.target.value)}
            checked={currentMode==='Light'}
            />
            <label className='ml-2 text-md cursor-pointer' htmlFor='light'>Light</label>
          </div>
          <div className='mt-4'>
            <input
            type='radio'
            id='dark'
            name='theme'
            value='Dark'
            className='cursor-pointer'
            onChange={(e)=>setMode(e.target.value)}
            checked={currentMode==='Dark'}
            />
            <label className='ml-2 text-md cursor-pointer' htmlFor='dark'>Dark</label>
          </div>
        </div>
        <div className='flex flex-col border-t-1 border-color p-4 ml-4 '>
          <p className='text-lg font-semibold'>Theme Colors</p>
          <div className='flex gap-3'>
            {themeColors.map((item,ind)=>(
              <TooltipComponent content={item.name} position='BottomCenter'>
                <div className='relative mt-2 cursor-pointer flex gap-5 items-center'>
                  <button onClick={()=>setColor(item.color)} className='w-10 h-10 rounded-full cursor-pointer'
                  style={{backgroundColor:item.color}}>
                    <BsCheck className={`ml-2 text-2xl text-white ${currentColor.toLowerCase()===item.color.toLowerCase() ? 'block': 'hidden'}`} />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>  
    </div>
    }
    </>
  )
}

export default ThemeSettings