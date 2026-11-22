import React from 'react'


function ChildA(props) {
  const handleClick = ()=> {
    props.setCount(prevCount => prevCount+1);
  }
  return (
    <div>
    <button onClick={handleClick}>{props.count} - Increment</button>
    </div>
  )
}

export default ChildA