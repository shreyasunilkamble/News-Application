import React, {useState} from 'react'

function ToggleText() {
    const[isVisible,setIsvisible] = useState(false)
  return (
    <div>
        <button onClick={()=>setIsvisible(!isVisible)}>{isVisible?'Hide':'show'}</button>
        {isVisible && <p>This is show msg</p>}
      
    </div>
  )
}

export default ToggleText


// import React, {useState} from 'react'

// function ToggleText() {
//   const[text,setText] = useState(true)
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default ToggleText