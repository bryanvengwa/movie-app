import React from 'react'

export default function Color(props) {
  return (
    <>
    <div className="color" style={{background: `${props.color}`}} ></div>
    </>
  )
}
