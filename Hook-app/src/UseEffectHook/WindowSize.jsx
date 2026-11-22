import React, { useState,useEffect } from 'react'

function WindowSize() {
    const [width,setWidth] = useState(window.innerwidth)
    useEffect(()=>{
        console.log("inner Window")
        const handleRest = ()=>{
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize",handleRest)

    },[])
  return (
    <div>
        <h1>Window-width : {width}</h1>
    </div>
  )
}


export default WindowSize