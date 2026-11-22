import React,{useState} from 'react'

function WithoutUseMemo() {
    const[count,setCount] = useState(0)
    const[text,setText] = useState("")
    const expensivecalculation = ()=>{
     console.log("Running expensive calculation...")
    let total = 0;
    
    for(let i=0; i<1000000000; i++)
    {
        total+=i;
    }
    
    return total;
    }
    
    const r = expensivecalculation();

return (
    <div>
        <h1>WithOut useMemo</h1>
        <h2>Result : {r}</h2>
        <button onClick={()=>setCount(count+1)}>Increment Count</button>
        <input type="text" value={text}  onChange={(e)=>setText(e.target.value)}/>
        <p>Count : {count}</p>
    </div>
  )
}

export default WithoutUseMemo