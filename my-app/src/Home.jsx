import React from 'react'

function Home(props) {
  const{name,age} = props

  return (
    <div>
        <h1>THis is home page</h1>
        <h2>My name is : {name} my age is : {age}</h2>
     
    
    </div>
  )
}

export default Home