import React from 'react'

function Object() {
    const user = {
        name : "jhon",
        subject : "react",
        age : 20,
        isStudent:true
    }
  return (
    <div>
       <h2>Name is : {user.name}</h2> 
       <h2>Subject is : {user.subject}</h2>
       <h2>Age is : {user.age}</h2>
       <h2>are u student : {user.isStudent.toString()}</h2>

    </div>
  )
}

export default Object