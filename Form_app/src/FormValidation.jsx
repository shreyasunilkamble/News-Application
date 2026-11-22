import React, { useState } from 'react'

function FormValidation() {
    const[name,setName] = useState();
    const[email,setEmail] = useState();
    const[nameError,setNameError] = useState(false)
    const[emailError,setEmailError] = useState(false)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const handleName = (e) =>{
       let name = e.target.value
       if(name.length<3)
       {
          setNameError(true)
       }
       else{
        setNameError(false)
       }
       setName(name)
    }

    const handleEmail = (e) =>{
        let email = e.target.value
        if(!email.match(emailRegex))
        {
           setEmailError(true)
        }
        else{
            setEmailError(false)
        }
        setEmail(email)
    }

    const handleSubmit= (e)=>{
        e.preventDefault();
        // alert(e.target[0].value+" :: "+e.target[1].value);
         let name = e.target[0].value
       if(name.length<3)
       {
          setNameError(true)
       }
       else{
        setNameError(false)
       }

       let email = e.target[1].value
        if(!email.match(emailRegex))
        {
           setEmailError(true)
        }
        else{
            setEmailError(false)
        }

        if((!name.length<3)&&(email.match(emailRegex)))
        {
            alert("from has been submitted successfully")
            alert("name : " + name + " : " + "Email : " + email);
        }


    }
  return (
    <div>
        <h1>Form Validation</h1>

        <form onSubmit={handleSubmit}>
            <label htmlFor="">Enter Name : </label>
            <input type="text" name='name' value={name} onChange={handleName}/>
            <br />
            {nameError ? <span style={{color:'red'}}>Name is must be greater than 2 character</span>:""}
            <br /><br />

            <label htmlFor="">Enter email : </label>
            <input type="text" value={email} onChange={handleEmail}/>
            <br />
            {emailError ? <span style={{color:'red'}}>Invalid Email</span>:""}
            <br /><br />

            <input type="submit" />
        </form>
    </div>
  )
}

export default FormValidation