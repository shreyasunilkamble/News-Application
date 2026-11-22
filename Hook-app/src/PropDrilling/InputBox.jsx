import React from 'react'

function InputBox({test}) {
  return (
    <div>
       <input type="text" onChange={(e)=>test(e.target.value)} /> 
    </div>
  )
}

export default InputBox