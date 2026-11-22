import React,{useCallback, useState} from 'react'

function UseCallbackHook() {
    const[count,setCount] = useState(0)
    const increment = useCallback(()=>{
      setCount((prev)=>prev+1)
      console.log("Increment Counter")
    },[])
  return (
    <div>
       <h1>Count : {count}</h1> 
       <button onClick={increment}>Increment</button>
    </div>
  )
}

export default UseCallbackHook
