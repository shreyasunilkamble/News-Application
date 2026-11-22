// import React,{useState} from 'react'

// function UseReducerCom() {
//     const[checked,setChecked] = useState(false)
//   return (
//     <div>
//         <h1>UseReducer Hook</h1>
//         <input type="checkbox"checked={checked} onChange={()=>setChecked(!checked)}/>
//         {checked ? "checked":"Not Checked"}
//     </div>
//   )
// }

// export default UseReducerCom

import React,{useReducer,useState} from 'react'

function UseReducerCom() {
    const[checked,toggle] = useState((checked)=>!checked)
  return (
    <div>
        <h1>UseReducer Hook</h1>
        <input type="checkbox"checked={checked} onChange={()=>setChecked(!checked)}/>
        {checked ? "checked":"Not Checked"}
    </div>
  )
}

export default UseReducerCom