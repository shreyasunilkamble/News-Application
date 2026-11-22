import React from 'react'

function Child({user}) {
  return (
    <div>
        <h1>Name is : {user.name}</h1>
        <h2>Age is : {user.age}</h2>
        <button>child</button>
    </div>
  )
}

export default Child