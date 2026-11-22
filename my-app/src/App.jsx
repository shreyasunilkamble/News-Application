import Footer from "./Footer"
import Test from "./FunctionObject/Test"
import Array from "./FunctionObject/Array"
import Object from "./FunctionObject/Object"
import Header from "./Header"
import Home from "./Home"
import Condition from "./Conditional/Condition"
import index from "./StyleCom/index"




function App() {

  // const isLogin = false;     //Conditional rendering
  // if(isLogin)
  // {
  //   return <Object/>
  // }
  // else{
  //   return <Condition/>
  // }
  return (
      <div> 
       {/* <Home name="anju" age={25}/>
       <Home name="shreya" age={30}/>
       <Home name="jhon" age={23}/> */}

       <index/>
      
  
       {/* <Test/> */}
      {/* <Array/>
      <Object/> */}

     {/* <Condition/> */}
      
      
      </div>
    
  )
}

export default App
