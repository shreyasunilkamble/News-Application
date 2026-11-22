// import React,{useState} from 'react'

// function LikeButton() {
//     const[like,setLike] = useState(false);
//   return (
//     <div>
//        <button onClick={()=>setLike(!like)}>{like?'❤️Liked':'🤍Liked'}</button> 

//     </div>

//   )
// }

// export default LikeButton



// import React,{useState} from 'react'

// function LikeButton() {
//   const[color, setColor] = useState("black");
//   return (
//     <div>
//       <button onClick={()=> setColor("lightblue")}>Blue</button>
//     </div>
//   )
// }

// export default LikeButton


import { useState } from "react";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      <h2>
        {isLoggedIn ? "Welcome User!" : "Please Login"}
      </h2>
    </div>
  );
}

export default Login;