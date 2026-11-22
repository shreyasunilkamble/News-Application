import React,{useEffect, useRef, useState} from 'react'

function UseRefHook2() {
    const[inputValue,setInputValue] = useState("");
        const count = useRef(0);


        useEffect(()=>{
            console.log(count.current)
            count.current = count.current+1;
        })
  return (
    <div>
        <label htmlFor="">Enter Name</label>
        <input type="text" placeholder='Enter name' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
        <h2>Render-count : {count.current}</h2>
        <h3>Data : {inputValue}</h3>
    </div>
  )
}

export default UseRefHook2