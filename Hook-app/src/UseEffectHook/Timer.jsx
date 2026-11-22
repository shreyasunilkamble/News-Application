import React, { useState,useEffect } from 'react'

function Timer() {
    const[second,setSecond] = useState(0)
    useEffect(()=>{

       const Interval = setInterval(()=>{
        setSecond((prev)=> prev+1)
       },1000)

       return () =>{
        clearInterval(Interval)
        console.log("clear timer...")
       }
       
    },[])
  return (
    <div>
        <h1>Second : {second}</h1>
    </div>
  )
}

export default Timer