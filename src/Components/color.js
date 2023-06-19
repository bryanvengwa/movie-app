import React, { useState } from 'react'

export default function Color(props) {
  const [active ] = useState(props.color)
  
  return (
    <>
    <div className={`color ${active === props.currentColor ? 'active' : ''}`} onClick={()=>{props.changeColor(props.id);}} style={{background: `${props.color}`}} ></div>
    </>
  )
}
