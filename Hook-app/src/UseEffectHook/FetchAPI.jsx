import React,{useState,useEffect} from 'react'

function FetchAPI() {
    const[user,setUser] = useState([])

    useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUser(json))

    },[])
  return (
    <div>
       <h2>User - data</h2>  
       {
        user.map((u)=>(
            <li key={u.id}>Name : {u.name} = Email : {u.email}</li>
        ))
       }
    </div>
  )
}

export default FetchAPI