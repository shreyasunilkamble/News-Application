import React,{useState} from 'react'
import ChildA from './ChildA';
import ChildB from './ChildB';


function CountMain() {
  const[count,setCount] = useState(0);
  return (
    <div>
      <ChildA setCount={setCount} count={count}/>
      <ChildB count={count}/>
    </div>
  )
}

export default CountMain