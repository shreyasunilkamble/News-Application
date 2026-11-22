import {useState,useEffect} from 'react'

function First() {
   const [count,setCount] = useState(0)
   const [name,setName] = useState("anju")

   useEffect(()=>{
    document.title = `Count ${count}`
    console.log("Component Re-Render")
   },[name,count])

  return (
    <div>
        <h1>Count : {count}</h1>
        <h1>Name is : {name}</h1>
        <button onClick={()=>setCount(count+1)}>click me</button>
        <button onClick={()=>setName("ajay")}>ChangeName</button>
    </div>
  )
}

export default First