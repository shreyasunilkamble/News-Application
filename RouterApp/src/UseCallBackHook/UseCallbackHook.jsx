import React from 'react'

function UseCallbackHook() {
    const[count,setCount] = useState(0)
  return (
    <div>
       <h1>Count : {Count}</h1> 
       <button onClick={()=>setCount(count)}>Increment</button>
    </div>
  )
}

export default UseCallbackHook
