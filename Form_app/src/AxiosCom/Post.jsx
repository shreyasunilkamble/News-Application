import Axios from 'axios'
import React,{useEffect, useState} from 'react'
import '../App.css'


function Post() {

    const baseUrl = "https://jsonplaceholder.typicode.com/posts"

    const[mydata,setData]= useState([]);

    useEffect(()=>{
        Axios.get(baseUrl).then((response)=>{
             setData(response.data)
        },[])
    })
  return (
    <div>
        
        {/* <h2>{mydata.id}</h2>
        <h3>{mydata.title}</h3>
        <h3>{mydata.body}</h3> */}


        {mydata.map((item)=>{
            const{id,title,body} = item;
            return(
                <div className='data'>
                <h1>{id}</h1>
                <h1>{title.slice(0,10)}</h1>
                <h1>{body.slice(0,50).toUpperCase()}</h1>
                </div>

            )
})}

  
      {/* {mydata.map((item)=>{
         const{id,title,body} = item;
            return(
                <div className='data'>
                <h1>{id}</h1>
                <h1>{title.slice(0,10)}</h1>
                <h1>{body.slice(0,50).toUpperCase()}</h1>
                </div>
            )
      })}
     <div className="card" style="width: 18rem;">
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div> */}

    </div>
  )
}

export default Post