import React from 'react'
import './Condition.css'


function Condition() {
    // const isLogin = false;
    // let msg;
    // if(isLogin)
    // {
    //    msg = <h1>welcome user </h1>
    // }
    // else{
    //   msg = <h1>Please login...</h1>
    // }
  
    const isvisible = true;
    let msg;
    const visibility = isvisible ? 'visible':'unvisible'
    

    return(
      <>
      {/* <h1>{isLogin? <h1>welcome user </h1>:<h1>Please login...</h1>}</h1> */}

      {/* <h2>{hashMsg && <p>welcome to user</p>}</h2> */}
      
      <h1 className={visibility}>Conditional Rendering</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nam, rerum, delectus suscipit cum quae alias atque doloribus explicabo repudiandae, in voluptas praesentium sapiente qui itaque! Quasi aperiam inventore distinctio.</p>

      </>
    )



}

export default Condition

//condition ? "T" : "F"