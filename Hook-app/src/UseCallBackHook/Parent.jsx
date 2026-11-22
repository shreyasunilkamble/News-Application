import React,{ useCallback, useState} from 'react'
import Child from './Child'

function Parent() {
    const[count,setCount] = useState(0)
    const handleClick = useCallback(()=>{
      console.log("Parent re-render Click")
    },[])
  return (
    <div>
       <h1>Count : {count}</h1> 
       <button onClick={()=>setCount(count+1)}>Increment</button>
       <Child click={handleClick}/>
    </div>
  )
}

export default Parent
