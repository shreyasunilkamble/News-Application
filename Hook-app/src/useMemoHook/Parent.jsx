import React,{useMemo, useState} from 'react'
import Child from './Child';

function Parent() {
    const[count,setCount] = useState(0);

    const user = useMemo(()=>({name:"jhon",age:22}),[])
    console.log("Parent Render...")
      return (
    <div>
        <h1>Parent Count : {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increase Count</button>
        <Child user={user}/>
    </div>
  )
}

export default Parent