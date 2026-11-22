import React,{useReducer} from 'react'

function Count() {
   function reducer(state,action){
    switch(action.type) 
    {
      case "multiplication" : return{num1,num2}
   }
  }
   function reducer(state,action)
   {
     switch(action.type)
     {
       case "increment" : return{count:state.count+1}
       case "decrement" : return{count:state.count-1}
         case "multiplication" : return{count:state.count*1}
           case "division" : return{count:state.count/1}
       case "reset" : {count:0}
       default : state
       
     }
   }

    const[state,dispatch] = useReducer(reducer,{count:0})
  return (
    <div>
        <h2>Count : {state.count}</h2>
        <button onClick={()=>dispatch({type:"increment"})}>+</button>
        <button onClick={()=>dispatch({type:"decrement"})}>-</button>
                <button onClick={()=>dispatch({type:"multiplication"})}>*</button>
                        <button onClick={()=>dispatch({type:"division"})}>/</button>
        <button onClick={()=>dispatch({type:"reset"})}>reset</button>
    </div>
  )
}

export default Count