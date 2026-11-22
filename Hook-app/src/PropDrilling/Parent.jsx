import React,{useState} from 'react'
import Child from './Child'
import InputBox from './InputBox';
import Display from './Display';

function Parent() {      
    // const UserName = "jhon"
    const[text,setText] = useState("");
  return (
    <div>
        {/* <Child name={UserName}/> */}
        <InputBox test={setText}/>
        <Display value={text}/>
    </div>
  )
}

export default Parent