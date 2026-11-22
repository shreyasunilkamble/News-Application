import React, { createContext, useContext } from 'react'

const userContext = createContext();

function MainApp() {
  //  let user = "jhon"

  let user ={name:"jhon",age:22,sub:"java"}


  return (
    <div>
        <userContext.Provider value={user}>
            <Parent/>
        </userContext.Provider>
    </div>
  )
}

function Parent()
{
  return <Child/>
}
function Child()
{
  // const {name,age} = useContext(userContext)
   return(<>
   {/* <h1>welcome to : {name} my age is {age}</h1> */}
    <GreatGrandChild/>
   </>)
}
function GreatGrandChild()
{
   const {name,age,sub} = useContext(userContext)

  return <h1>My name is : {name} age is : {age} subject is : {sub}</h1>
}
export default MainApp