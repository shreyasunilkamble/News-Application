import React from 'react'

function Test() {
    const firstName = (subject)=>
    {
      return subject;
    }
    const a = "MBA"
    const b = "C++"

   function handleClick()           // external func use
   {
    alert("hello events")
   }
   
   const handleInput = (event)=>{
      console.clear(0);
      console.log(event.target.value)
   }
  return (
    <div>
        <h1>Hello : {firstName(a)}</h1>
        <p>welcome  {firstName(b)} </p>
        <button onClick={handleClick}>Click</button> <br />       // External function

        <button onClick={()=>alert("welcome to js")}>show</button>     //inline function
        <br />
        <input type="text" onChange={handleInput} placeholder="enter name"/>
        {/* <p>hello : {(e)=>handleClick(e.target.value )}</p> */}
    </div>
  )
}

export default Test