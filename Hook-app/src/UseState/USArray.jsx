import React, {useState}from 'react'

function USArray() {
    let number = [35,46,56,78,28]
    const[num,setNum] = useState(number);

    const changeList = ()=>{
        // setNum([10,20,30,40,50])

        setNum(prev=>{
            return[
                ...prev,
                Math.floor(Math.random()*50)
            ]
        })
    }
    
  return (
    <div>
        <ul>
            {
                num.map((n,i)=><li key={i}>{n}</li>)
                
            }
        </ul>
        <button onClick={changeList}>Change array</button>
    </div>
  )
}

export default USArray