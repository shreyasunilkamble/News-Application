import {useState} from 'react'

export default function useToggle(initialValues=false)
{
  const[value,setValue] = useState(initialValues)
  const toggle = ()=>{
    setValue((prev=>!prev));
  }
//   return[value,toggle];
// }
// function App(){
//   const[isOn, toggle] = useToggle(false);

//   return(
//     <div>
//       <h2>{isOn ? "on" : "of"}</h2>
//       <btn onClick={toggle}>toggle</btn>
//     </div>
//   )
// }



  return[value,toggle]
}
