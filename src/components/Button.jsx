import React from 'react'

const Button = ({bgColor , color , size , text , borderRadius}) => {
  return (
    <button
    type='button'
    style={{backgroundColor:bgColor,color,borderRadius}}
    className= {`text-${size} hover:drop-shadow-xl p-3`}
    >
      {text}
    </button>
  )
}

export default Button