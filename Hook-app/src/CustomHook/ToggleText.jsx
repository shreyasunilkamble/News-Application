import React from 'react'
import useToggle from './useToggle'

function ToggleText() {
    const[isToggle,toggleOpen]= useToggle();
    const[test,IsTest]=useToggle();
    const[count,numberCount]=useToggle();


  return (
    <div>
        <button onClick={toggleOpen}>Toggle Text</button>
        <h1>{isToggle && 'This is visible'}</h1>

        <button onClick={IsTest}>hello</button>
        <h2>{test && 'welcome to react'}</h2>

        <button onClick={numberCount}>count</button>
        <h1>{count && 'Count increment'}</h1>
    </div>
  )
}

export default ToggleText