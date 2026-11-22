import React , { useState } from 'react'

function Count() {
  // console.log("heelo")
    const[index,setIndex] = useState(0);
     const decrement = ()=>{
        setIndex(index-1)
    }
    const increment = ()=>{
      setIndex(index+1)
    }

  return (
    <div>
        <h1>Count : {index}</h1>

        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
         
    </div>
  )
}

export default Count