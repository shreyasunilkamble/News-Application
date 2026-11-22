import React from 'react'

function Array() {
    const fruits = ["Apple","orange","mango"];
  return (
    <div>
       <h1>Array elements</h1> 
       <ul>
        {
          fruits.map((fruit,index)=>
        (
            <li>{index}-{fruit}</li>
          ))
        }
       </ul>
    </div>
  )
}

export default Array