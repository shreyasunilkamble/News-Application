import React, { useMemo, useState} from 'react'

function WithUseMemo() {
    const[count,setCount] = useState(0);
    const[text,setText] = useState("");

    const expensivecalculation=(num)=>{
        console.log("Running ExpensiveCalculation...")
        let total = 0;

        for(let i=0;i<1000000000;i++)
        {
           total+=i;
        }
        return total+num;
    }
    const result = useMemo(()=>expensivecalculation(count),[])
    
  return (
    <div>
        <h1>Result : {result}</h1>
        <h1>Count {count}</h1>
        <h2>text {text}</h2>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default WithUseMemo