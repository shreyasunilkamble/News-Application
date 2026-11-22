import React,{useState} from 'react'

function ControlledForm() {
    const[name,setName] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
      console.log(e.target[0].value.toLowerCase())
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Enter Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value.toUpperCase().replace('&','@'))}/>
            <br /><br />
            <input type="submit" />
        </form>
    </div>
  )
}

export default ControlledForm