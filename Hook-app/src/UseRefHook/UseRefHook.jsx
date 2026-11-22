import React,{useEffect, useRef} from 'react'

function UseRefHook() {
    // const newRef = useRef();

    const firstRef = useRef();
    const lastRef = useRef();
    useEffect(()=>{
        // console.log("newRef value : ", newRef.current)

        // console.log(newRef)
        // console.log(newRef.current.innerHTML)

        console.log(firstRef);
        console.log(lastRef);
        firstRef.current.focus();
        firstRef.current.style.color='red'
        firstRef.current.style.backgroundColor="yellow"
       
 
    })

    // const handleClick = ()=>{
    //     newRef.current.style.color="red"
    //     newRef.current.style.backgroundColor= "yellow"
    //     newRef.current.hidden=true;
    // }
 
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('fullname = ', firstRef.current.value,lastRef.current.value)
    }
  return (
    <div>
        {/* <h1 ref={newRef}>Useref Hook</h1>
        <button onClick={handleClick}>click</button> */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Enter first name : </label>
          <input type="text" ref={firstRef} placeholder='first name'/><br /><br />
          <lable htmlFor="">Enter last name : </lable>
          <input type="text" ref={lastRef} placeholder='last name'/><br /><br />
          <input type="submit" value='submit' />
        </form>
    </div>
  )
}

export default UseRefHook