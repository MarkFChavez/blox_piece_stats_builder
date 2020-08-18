import React from 'react'

function ValueBar (props) {
  const klasses = `${props.bgColor} ${props.fgColor} px-2 flex items-center justify-between`

  return (
    <div className={klasses}> 
      <span className='text-3xl tracking-wide'> {props.name}: </span> 
      <span className='text-3xl tracking-wide'> {props.value}/{props.value}  </span>
    </div>
  )
}

export default ValueBar
